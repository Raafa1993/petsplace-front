import React from 'react';

import uniao from '../../assets/images/uniao.svg'
import bag from '../../assets/images/bag.svg'

import { Container, Cards, Card, InfoCard, Info, Bag } from './styles'

interface ProductsProps {
  onOpenItemModal: () => void;
}

function ProductsCards({ onOpenItemModal }: ProductsProps) {
  return (

    <Container>
      <Cards>

        <Card>
          <button
            type="button"
            onClick={onOpenItemModal}
          >
            <img src={uniao} width={"147px"} alt="Foto illustrativa" />
          </button>
          <InfoCard>
            <button
              type="button"
              onClick={onOpenItemModal}
            >
              <Info>
                <p>Ração golden</p>
                <span>R$: 49,50</span>
              </Info>
            </button>
            <Bag>
              <img src={bag} alt="sacola de compras" />
            </Bag>
          </InfoCard>
        </Card>

        <Card>
          <button
            type="button"
            onClick={onOpenItemModal}
          >
            <img src={uniao} width={"147px"} alt="Foto illustrativa" />
          </button>
          <InfoCard>
            <button
              type="button"
              onClick={onOpenItemModal}
            >
              <Info>
                <p>Ração golden</p>
                <span>R$: 49,50</span>
              </Info>
            </button>
            <Bag>
              <img src={bag} alt="sacola de compras" />
            </Bag>
          </InfoCard>
        </Card>

        <Card>
          <button
            type="button"
            onClick={onOpenItemModal}
          >
            <img src={uniao} width={"147px"} alt="Foto illustrativa" />
          </button>
          <InfoCard>
            <button
              type="button"
              onClick={onOpenItemModal}
            >
              <Info>
                <p>Ração golden</p>
                <span>R$: 49,50</span>
              </Info>
            </button>
            <Bag>
              <img src={bag} alt="sacola de compras" />
            </Bag>
          </InfoCard>
        </Card>

        <Card>
          <button
            type="button"
            onClick={onOpenItemModal}
          >
            <img src={uniao} width={"147px"} alt="Foto illustrativa" />
          </button>
          <InfoCard>
            <button
              type="button"
              onClick={onOpenItemModal}
            >
              <Info>
                <p>Ração golden</p>
                <span>R$: 49,50</span>
              </Info>
            </button>
            <Bag>
              <img src={bag} alt="sacola de compras" />
            </Bag>
          </InfoCard>
        </Card>

        <Card>
          <button
            type="button"
            onClick={onOpenItemModal}
          >
            <img src={uniao} width={"147px"} alt="Foto illustrativa" />
          </button>
          <InfoCard>
            <button
              type="button"
              onClick={onOpenItemModal}
            >
              <Info>
                <p>Ração golden</p>
                <span>R$: 49,50</span>
              </Info>
            </button>
            <Bag>
              <img src={bag} alt="sacola de compras" />
            </Bag>
          </InfoCard>
        </Card>

        <Card>
          <button
            type="button"
            onClick={onOpenItemModal}
          >
            <img src={uniao} width={"147px"} alt="Foto illustrativa" />
          </button>
          <InfoCard>
            <button
              type="button"
              onClick={onOpenItemModal}
            >
              <Info>
                <p>Ração golden</p>
                <span>R$: 49,50</span>
              </Info>
            </button>
            <Bag>
              <img src={bag} alt="sacola de compras" />
            </Bag>
          </InfoCard>
        </Card>

        <Card>
          <button
            type="button"
            onClick={onOpenItemModal}
          >
            <img src={uniao} width={"147px"} alt="Foto illustrativa" />
          </button>
          <InfoCard>
            <button
              type="button"
              onClick={onOpenItemModal}
            >
              <Info>
                <p>Ração golden</p>
                <span>R$: 49,50</span>
              </Info>
            </button>
            <Bag>
              <img src={bag} alt="sacola de compras" />
            </Bag>
          </InfoCard>
        </Card>

        <Card>
          <button
            type="button"
            onClick={onOpenItemModal}
          >
            <img src={uniao} width={"147px"} alt="Foto illustrativa" />
          </button>
          <InfoCard>
            <button
              type="button"
              onClick={onOpenItemModal}
            >
              <Info>
                <p>Ração golden</p>
                <span>R$: 49,50</span>
              </Info>
            </button>
            <Bag>
              <img src={bag} alt="sacola de compras" />
            </Bag>
          </InfoCard>
        </Card>

      </Cards>
    </Container>

  )
}

export default ProductsCards;
