import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import PageHeader from '../../components/PageHeader';
import AnimalCards from '../../components/AnimalCards';
import ItemModal from '../../components/ItemsModal';
import Footer from '../../components/Footer/inde';

import logoPets from '../../assets/images/pets.jpg';
import bag from '../../assets/images/bag.svg'

import { Container, Banner, Separator, SeparatorButton, ProductList, Card, InfoCard, Info, Bag } from './styles';
import api from '../../services/api';
import { useCart } from '../../hooks/useCart';
import LoadingItemHome from '../../components/LoadingItemHome';

Modal.setAppElement('#root');

interface Product {
  id: number;
  name: string;
  price: number;
  imageURL: string;
}

export interface Props {
  itemsCart?: number;
}

interface CartItemsAmount {
  [key: number]: number;
}

function Home() {
  const { addProduct, cart } = useCart()
  const [ItemModalOpen, setItemmodalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([])
  const [productId, setProductId] = useState(0)

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount
    return sumAmount
  }, {} as CartItemsAmount)

  function handleOpenItemModal(id: number) {
    setItemmodalOpen(true);
    setProductId(id)
  }

  function handleCloseItemModal() {
    setItemmodalOpen(false);
  }

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/api/products/pageable/?page=0&linesPerPage=8');
      setProducts(response.data.content)
    }

    loadProducts()
  }, [])

  function handleAddCart(id: number) {
    addProduct(id)
  }

  return (
    <>
      <Container>
        <PageHeader />

        <Banner>
          <img src={logoPets} alt="Logo" />
        </Banner>

        <AnimalCards />

        <Separator>
          <h1>Produtos</h1>
        </Separator>

        <ProductList>
          {products.map((product) => (
            <Card key={product.id}>
              <button
                type="button"
                onClick={() => handleOpenItemModal(product.id)}
              >
                <img src={product.imageURL} width={"147px"} alt="Foto illustrativa" />
              </button>
              <InfoCard>
                <button
                  type="button"
                  onClick={() => handleOpenItemModal(product.id)}
                >
                  <Info>
                    <p>{product.name}</p>
                    <span>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(product.price)}
                    </span>
                  </Info>
                </button>
                <Bag
                  type="button"
                  onClick={() => handleAddCart(product.id)}
                  itemsCart={cartItemsAmount[product.id] || 0}
                >
                  <img src={bag} alt="sacola de compras" />
                </Bag>
              </InfoCard>
            </Card>
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => !products.length ? <LoadingItemHome key={item} /> : ''
          )}
        </ProductList>

        <Link to="/products">
          <SeparatorButton>
            <button type="button">MAIS PRODUTOS</button>
          </SeparatorButton>
        </Link>

        <ItemModal
          isOpen={ItemModalOpen}
          onRequestClose={handleCloseItemModal}
          productId={productId}
        />

        <Footer />
      </Container>
    </>
  )
}

export default Home;
