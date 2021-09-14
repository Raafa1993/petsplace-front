import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import AddressModal from '../../components/AddressModal';

import PetsLogo from '../../assets/images/petsLogoRed.svg';
import Settings from '../../assets/images/settings.svg';
import editImg from '../../assets/images/editar.svg';
import PlusImg from '../../assets/images/plus.svg';

import { HiArrowRight } from "react-icons/hi";

import {
  Header,
  Container,
  Main,
  Content,
  Address,
  Requestlist,
  Request,
  InfoResume,
  InfoProduct,
  Separator,
  RequestItems,
  Icons,
  Buttons
} from './styles';

interface Address {
  id: number,
  address: string,
  number: string,
  complement: string,
  neighborhood: string,
  zipcode: string,
  uf: string,
}

interface OrderItem {
  id: number;
  price: number;
  quantity: number;
  product: Product;
}

interface OrderList {
  id: number;
  totalValue: number;
  createdDate: string;
  orderItems: OrderItem[]
}

interface Brand {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  deion: string;
  productImageURL: string;
}



function User() {
  const history = useHistory();
  const { user } = useAuth()
  const [address, setAddres] = useState<Address[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [orders, setOrders] = useState<OrderList[]>([])
  let profiles = user.profiles.map((profile: any) => profile.authority)


  useEffect(() => {
    api.get(`/api/consumers/${user.id}`).then(response => {
      setAddres(response.data.destinies)
    });
  }, [user.id])

  useEffect(() => {
    api.get('/api/orders/page').then(response => {
      setOrders(response.data.content)
    })
  }, [])

  function editAddress(id: number) {
    history.push(`/user/${id}`)
  }


  return (
    <>
      { modalOpen ? (<AddressModal onClose={() => setModalOpen(false)} />) : null}

      <Header>
        <Container>
          <Main>
            <Link to="/">
              <img src={PetsLogo} alt="Logotipo" />
            </Link>

            {!!user === profiles.includes("ROLE_ADMIN")
              ?
              <Link to="/products/create" className="settings">
                <img src={Settings} alt="Settings" />
              </Link>
              : ''}

          </Main>
        </Container>
      </Header>

      <Container>
        <Content>
          {!address.length
            ? <div className="notFoundAddress">Você ainda não possui endereço cadastrado! :( Clique em "Novo Endereço" e cadastre um agora mesmo.</div>
            : address.map(item => (
              <Address key={item.id}>
                <h2>Endereço</h2>
                <div>{item.address}, {item.number}</div>
                <div>{item.neighborhood} - {item.uf}</div>
                <div>CEP: {item.zipcode}</div>
                <Separator />
                <Icons>
                  <button onClick={() => editAddress(item.id)}>
                    <img src={editImg} alt="Editar" />
                  </button>

                </Icons>
              </Address>
            ))}
        </Content>

        <Buttons>
          <button type="button" onClick={() => setModalOpen(true)}>
            <span>
              <img src={PlusImg} alt="Adicionar novo produto" />
            </span>
            Novo endereço
          </button>
        </Buttons>

        <Requestlist>
          <h1>Pedidos</h1>
          {!orders.length
            ? <div className="notFoundRequest">Você ainda não fez nenhuma compra! :( Compre agora mesmo! <Link to="/products"> <HiArrowRight />  </Link></div>
            : orders.map((order) => (
              <Request key={order.id}>
                <InfoResume>
                  <div className="infoRequest">
                    <h2>Pedido: {order.id}</h2>
                  </div>
                  <div className="infoValue">
                    <p>Data: {new Date(order.createdDate).toLocaleDateString('pt-BR')}</p>
                    <span>
                      Total:
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(order.totalValue)}
                    </span>
                  </div>
                </InfoResume>

                <Separator />

                <RequestItems >
                  {order.orderItems.map(item => (
                    <InfoProduct key={item.product.id}>
                      <div className="userImage">
                        <img src={item.product.productImageURL} alt="Imagem item" />
                      </div>

                      <div className="info">
                        <h2>{item.product.name}</h2>
                        <span>Quantidade: {item.quantity}</span>
                        <span>
                          {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          }).format(item.product.price)}
                        </span>
                      </div>
                    </InfoProduct>
                  ))}
                </RequestItems>

              </Request>
            ))}

        </Requestlist>
      </Container>
    </>
  )
}

export default User
