import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Modal from 'react-modal';


import close from '../../assets/images/close.svg';

import {
  Container,
  ContentLeft,
  Product,
  Info,
  ContentRight,
  Resume,
  Total,
  LoaderContainer
} from './styles';
import api from '../../services/api';

interface ItemModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  productId: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  description: string,
  imageURL: string;
  categoryName: string;
}

function ItemModal({ isOpen, onRequestClose, productId }: ItemModalProps) {

  const [product, setProduct] = useState<Product>()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    api.get(`api/products/${productId}`).then(res => {
      setProduct(res.data)
      setIsLoading(false);
    })
  }, [productId])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img width="48px" src={close} alt="Fechar modal" />
      </button>

      <Container>
        {!isLoading ?
        <>
          <ContentLeft>
          <Product>
            <img src={product?.imageURL} alt="Foto illustrativa" />
          </Product>
        </ContentLeft>

        <ContentRight>
          <Resume>
            <h1>{product?.name}</h1>

          <Info>
            <h1>Descrição</h1>
            <p>{product?.description}</p>
          </Info>
            <Total>
              <h2>{new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(Number(product?.price))}</h2>
            </Total>
          </Resume>
        </ContentRight>
        </> : <LoaderContainer><Loader
              type="ThreeDots"
              color="#ea1d2c"
              height={100}
              width={100}
              timeout={3000}
            /></LoaderContainer>}


      </Container>

    </Modal>
  )
}

export default ItemModal
