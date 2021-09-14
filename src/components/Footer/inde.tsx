import React from 'react'

import petsLogo from '../../assets/images/petsLogo.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import facebook from '../../assets/images/facebook.svg'

import { Container, Content, Items, Icons } from './styles';

function Footer() {
  return (

    <Container>
      <Content>
        <Items>
          <img src={petsLogo} alt="Logo petsplace" />
          <span>
            Copyright © 2019-2021 - Todos os direitos reservados. <br />
            Feito com ❤ pelo time Maders.
          </span>

          <Icons>
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
          </Icons>
        </Items>
      </Content>
    </Container>

  )
}

export default Footer;
