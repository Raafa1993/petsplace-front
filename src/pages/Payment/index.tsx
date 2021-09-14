import React, { useEffect, useRef, useState } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';
import { formatPrice } from '../../utils/format';
import * as Yup from 'yup';
import 'react-credit-cards/es/styles-compiled.css';

import PageHeader from '../../components/PageHeader';
import { useCart } from '../../hooks/useCart';

import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import {
  Container,
  Content,
  ContentLeft,
  ContentRight,
  Address,
  Pag,
  Separator,
  Total,
  Items,
  ContentItems,
  CardItem,
  Image,
  CardInfo,
  Value
} from './styles';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import getValidationErrors from '../../utils/getValidationErrors';
import Footer from '../../components/Footer/inde';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

interface Address {
  id: number,
  address: string,
  number: string,
  complement: string,
  neighborhood: string,
  zipcode: string,
  uf: string,
}

interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  imageURL: string;
}

interface OrderItem {
  quantity: number,
  product: {
    id: number
  }
}

interface OrderData {
  date: Date,
  consumerId: number,
  destinyId: number,
  orderItems: OrderItem[]
}

interface CardFormData {
  number: number;
  name: string;
  expiry: number;
  cvc: number;
}


function Payment() {
  const history = useHistory();
  const mercadopago = useMercadopago.v2('TEST-f69aece1-923f-49ed-b674-d3a63f564993', {
    locale: 'pt-BR',
  });

  const { cart, removeProduct, updateProductAmount } = useCart();
  const { user } = useAuth()
  const formRef = useRef<FormHandles>(null);
  const [address, setAddres] = useState<Address[]>([])

  const [hasAddres, setHasAddres] = useState(true);

  const cartFormatted = cart.map(product => ({
    ...product, priceFormatted: formatPrice(product.price), subtotal: formatPrice(product.price * product.amount)
  }))
  const total =
    formatPrice(
      cartFormatted.reduce((sumTotal, product) => {
        sumTotal += product.price * product.amount

        return sumTotal
      }, 0)
    )

  function handleProductIncrement(product: Product) {
    const IncrementArguments = {
      productId: product.id,
      amount: product.amount + 1
    }
    updateProductAmount(IncrementArguments)
  }

  useEffect(() => {

    if (mercadopago) {
      mercadopago.checkout({
        preference: {
          id: '250595700-ad99bc52-2da0-4a20-8ea3-9672c11b93bb'
        },
        render: {
          container: '.cho-container',
          label: 'Pagar',
        },
      })
    }

  }, [mercadopago])

  function handleProductDecrement(product: Product) {
    const IncrementArguments = {
      productId: product.id,
      amount: product.amount - 1
    }
    updateProductAmount(IncrementArguments)
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
  }

  useEffect(() => {
    api.get(`/api/consumers/${user.id}`).then(response => {
      setAddres(response.data.destinies)
      if (!response.data.destinies.length) setHasAddres(false)
    });
  }, [user.id])


  async function handleSubmit(cardData: CardFormData) {
    try {
      console.log(hasAddres)
      const products = cart.map(item => {
        return {
          quantity: item.amount,
          product: {
            id: item.id
          }
        }
      })

      if (!hasAddres) {
        document.getElementsByClassName('mp-mercadopago-checkout-wrapper')[0].remove()
        toast.error('Você precisa adicionar um endereço para continuar!')
        return;
      }

      const data: OrderData = {
        consumerId: parseInt(user.id),
        date: new Date(),
        destinyId: address[0]?.id,
        orderItems: products
      }

      setInterval(async () => {
        if (!document.getElementById('mercadopago-checkout')) {
          await api.post('api/orders', data);
          localStorage.removeItem('@Petsplace:cart');

          history.push('/user')
          window.location.reload();

          toast.success('Compra concluida com suceso')
        }
      }, 1000)
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        toast.error('Houve um problema ao validar sua compra')
        formRef.current?.setErrors(errors);
      }
    }
  }
  return (
    <>
      <PageHeader />
      <Container>
        <Content>
          <ContentLeft>
            <h1>Carrinho</h1>
            <Items>
              {cartFormatted.map(product => (
                <ContentItems key={product.id}>
                  <CardItem>
                    <Image>
                      <img src={product.imageURL} width={"85px"} alt="Foto illustrativa" />
                    </Image>
                    <CardInfo>
                      <h1>{product.name}</h1>
                      <span>{product.priceFormatted}</span>

                      <div>
                        <button
                          type="button"
                          disabled={product.amount <= 1}
                          onClick={() => handleProductDecrement(product)}
                        >
                          <MdRemoveCircleOutline size={25} />
                        </button>
                        <input
                          type="text"
                          readOnly
                          value={product.amount}
                        />
                        <button
                          type="button"
                          onClick={() => handleProductIncrement(product)}
                        >
                          <MdAddCircleOutline size={25} />
                        </button>
                      </div>

                    </CardInfo>

                    <Value>
                      <button
                        type="button"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        <MdDelete size={20} />
                      </button>
                      <span>{product.subtotal}</span>
                    </Value>

                  </CardItem>
                </ContentItems>
              ))}
            </Items>

          </ContentLeft>

          <ContentRight>
            <h1>Resumo</h1>
            <Address>
              <h2>Endereço</h2>
              {!hasAddres ? <div>Vocế precisa adicionar um endereço para continuar... <Link to="/user">Adicionar endereço</Link></div> : <>
                <div>{address[0]?.address}, {address[0]?.number}</div>
                <div>{address[0]?.neighborhood} - {address[0]?.uf}</div>
                <div>CEP: {address[0]?.zipcode}</div>
              </>}

            </Address>


            <Pag>
              <h2>Concluir pagamento com mercado pago</h2>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Separator />
                <Total>
                  <h2>Total</h2>
                  <span>{total}</span>
                </Total>
                <>
                  <div className="cho-container" />
                </>
              </Form>
            </Pag>
          </ContentRight>

        </Content>

        <Footer />
      </Container>

    </>
  )
}

export default Payment;
