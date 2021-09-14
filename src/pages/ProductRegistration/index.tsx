import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import ProductModal from '../../components/ProductModal';

import Plus from '../../assets/images/plus.svg';
import Orders from '../../assets/images/orders.png';
import Edit from '../../assets/images/edit.svg';
import PetsLogo from '../../assets/images/petsLogoRed.svg';

import { Header, Container, Content, UserIcon, Separator, Buttons, Cards, Card } from './styled';

interface Brand {
  id: number;
  name: string;
}

interface SubCategory {
  id: number;
  name: string;
}

interface Product {
  id: number;
  imageURL: string;
  name: string;
  description: string;
  categoryName: string;
  price: string;
  brand: Brand;
  subCategory: SubCategory;
}

function ProductRegistration() {

  const history = useHistory()
  const [modalOpen, setModalOpen] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const { user } = useAuth()

  useEffect(() => {
    api.get('/api/products').then(response => {
      setProducts(response.data);
    });
  }, [])

  function editTask(id: number) {
    history.push(`/products/${id}`)
  }

  return (
    <>

      {modalOpen ? (<ProductModal onClose={() => setModalOpen(false)} />) : null}

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

          <Buttons>
            <button type="button" onClick={() => setModalOpen(true)}>
              <span>
                <img src={Plus} alt="Adicionar novo produto" />
              </span>
              Novo produto
            </button>
          </Buttons>
          <Buttons>
            <button type='button' onClick={() => history.push('/orders')}>
              <span>
                <img src={Orders} alt="Adicionar novo produto" />
              </span>
              Pedidos
            </button>
          </Buttons>
        </Container>
      </Header>

      <Container>
        {products.map((product) => (
          <Cards key={product.id}>
            <Card>
              <div className="id">{product.id}</div>
              <div className="imgProduct">
                <img src={product.imageURL} style={{ width: 42 }} alt="foto illustrativa" />
              </div>
              <div className="infoProduct">
                <span>{product.name}</span>
                <p>{product.description}</p>
              </div>
              <div className="category">
                {product.categoryName}
              </div>
              <div className="amount">
                <span>Valor</span>
                <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(product.price))}</p>
              </div>
              <div className="edit">
                <button type="button" onClick={() => editTask(product.id)}>
                  <img src={Edit} alt="Editar" />
                </button>
              </div>
            </Card>
          </Cards>
        ))}
      </Container>
    </>
  )
}

export default ProductRegistration
