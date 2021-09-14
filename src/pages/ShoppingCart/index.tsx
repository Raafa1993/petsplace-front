import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { formatPrice } from '../../utils/format';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../context/AuthContext'

import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { HiArrowRight } from 'react-icons/hi';

import {
  Container,
  Content,
  ContentRight,
  Resume,
  Totasl,
  Separator,
  Total,
  Items,
  ContentItems,
  CardItem,
  Image,
  CardInfo,
  Value
} from './styles';
import { toast } from 'react-toastify';

interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  imageURL: string;
}

function ShoppingCart() {
  const { user } = useAuth()
  const history = useHistory();
  const { cart, removeProduct, updateProductAmount } = useCart();

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

  function handleToPayment() {
    if(!cart.length) {
      toast.error('Você precisa adicionar produtos ao carrinho para continuar!');
      return;
    }

    if (!user) {
      history.push('/login')
    } else {
      history.push('/payment');
    }
  }

  return (
    <>
      <PageHeader />
      <Container>
        <Content>
          <Items>
            {!cartFormatted.length ? <Total>
              <div className="notfoundShopping">
                <h2>Adicione produtos no carrinho agora mesmo!</h2>
                <Link to="/products">
                  <HiArrowRight />
                </Link>
              </div>
            </Total> : cartFormatted.map(product => (
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

          <ContentRight>
            <Resume>
              <h1>Resumo</h1>
              <Totasl>
                <div>
                  <h2>Subtotal</h2>
                  <span>{total}</span>
                </div>
              </Totasl>
              <Separator />
              <Total>
                <h2>Total dos produtos</h2>
                <span>{total}</span>
              </Total>
              <button
                type="button"
                onClick={handleToPayment}
              >Continuar</button>
            </Resume>
          </ContentRight>
        </Content>
      </Container>
    </>
  )
}

export default ShoppingCart;
