import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'

import logoImg from '../../assets/images/petsLogo.svg';
import searchIcon from '../../assets/images/searchIcon.svg';
import carrinhoImg from '../../assets/images/carrinho.svg';

import { Container, Content, SearchBox, CartIcon, UserIcon, Buttons, Logout } from './styles';
import { useCart } from '../../hooks/useCart';

export interface Props {
  itemsCard?: number;
}

function PageHeader() {
  const { signOut } = useAuth();
  const { cart } = useCart();
  const cartSize = cart.length;
  const [searchProduct, setSearchProduct] = useState('');


  function handleFilter() {
    window.location.pathname = `/search/${searchProduct}`
  }

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logoImg} alt="Logo" />
        </Link>

        <SearchBox>
            <input type="text" className="searchText" placeholder="Busca" onChange={(e) => setSearchProduct(e.target.value)}/>
          <button type="button" onClick={handleFilter}>
            <img src={searchIcon} alt="Busca" />
          </button>
        </SearchBox>

        <Buttons>
          <Link to="/cart">
            <CartIcon
              itemsCard={cartSize}
            >
              <img src={carrinhoImg} alt="Carrinho" />
            </CartIcon>
          </Link>
          <Link to="/user">
            <UserIcon />
          </Link>

          {localStorage.getItem('@Petsplace:user') ?
            <button
              onClick={signOut}
            >
              <Logout />
            </button> : ''}
        </Buttons>
      </Content>
    </Container>
  )
}


export default PageHeader;
