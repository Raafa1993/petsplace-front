import React from 'react';

import setaDireita from '../../assets/images/setaDireita.svg'
import cat from '../../assets/images/catImage.svg'
import bird from '../../assets/images/birdImage.svg'
import Dog from '../../assets/images/dogImage.svg'

import { Container, Cards, DogCard, InfoCard, CatCard, BirdCard } from './styles';
import { Link } from 'react-router-dom';

function AnimalCards() {
  return (

    <Container>
      <Cards>
        <Link to="/products?category=1">
        <DogCard>
          <img src={Dog} alt="Cachorro" />
          <InfoCard>
            <span>Cachorro</span>
            <img src={setaDireita} alt="Seta direita" />
          </InfoCard>
        </DogCard>
        </Link>

        <Link to="/products?category=3">
          <CatCard>
            <img src={cat} alt="Gato" />
            <InfoCard>
              <span>Gato</span>
              <img src={setaDireita} alt="Seta direita" />
            </InfoCard>
          </CatCard>
          </Link>

        <Link to="/products?category=2">
          <BirdCard>
            <img src={bird} alt="Aves" />
            <InfoCard>
              <span>Silvestres</span>
              <img src={setaDireita} alt="Seta direita" />
            </InfoCard>
          </BirdCard>
        </Link>

      </Cards>
    </Container>
  )
}

export default AnimalCards;
