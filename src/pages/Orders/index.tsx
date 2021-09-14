import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Content, UserIcon, Separator, Cards, Card } from './styled';
import { useAuth } from '../../context/AuthContext';
import PetsLogo from '../../assets/images/petsLogoRed.svg';
import api from '../../services/api';

export const Orders: React.FC = () => {

  interface Consumer {
    id: number,
    name: string,
    email: string;
  }

  interface Order {
    id: number,
    createdDate: Date,
    consumer: Consumer,
    totalValue: number
  }

  const [orders, setOrders] = useState<Order[]>([]);
  const [status, setStatus] = useState('Pendente')
  const { user } = useAuth()

  useEffect(() => {
    api.get('api/orders/page').then(response => {
      setOrders(response.data.content)
    });

    setTimeout(() => {
      setStatus('Aprovado')
    }, 5000);
  }, [])

  return (
    <>
      <Header>
        <Container>

          <Content>
            <Link to="/">
              <img src={PetsLogo} alt="Logo" />
            </Link>
            <Link to="/user" className="avatarProfile">
              <p>{user.email} <span>Ver perfil</span></p>
              <UserIcon />
            </Link>
          </Content>

          <Separator />
        </Container>
      </Header>

      <Container>
        {orders?.map((order) => (
          <Cards key={order.id}>
            <Card>
              <div className="id">{order.id}</div>
              <div className="infoorder">
                <span>{order.consumer.name}</span>
                <p>{order.consumer.email}</p>
              </div>
              <div className="data">
                {new Date(order.createdDate).toLocaleDateString('pt-BR')}
              </div>
              <div className="category">
                Status: {status}
              </div>
              <div className="amount">
                <span>Valor</span>
                <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.totalValue)}</p>
              </div>
            </Card>
          </Cards>
        ))}
      </Container>
    </>
  )
}
