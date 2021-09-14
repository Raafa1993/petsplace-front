import styled from "styled-components";

import { Props } from '.';

export const Container = styled.header`
  width: min(1051px, 95vw);
  margin: 0 auto;
`;

export const Banner = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 40px 0;

  h1 {
    font-size: 2.4rem;
    font-weight: bold;
    color: var(--title);
  }
`;

export const SeparatorButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 40px 0;

  button {
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--white);

    border: none;
    border-radius: 8px;
    background: #f75475;

    padding: 1.2rem;

    transition: background-color 0.2s;
  }

  button:hover {
    background: var(--red);
}
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  gap: 24px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 270px;
  background: var(--text);;
  border: none;
  border-radius: 1.2rem;

  padding: 10px;
  border: 1px solid #e1e3e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > button {
    flex: 1;
    background: var(--text);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--text);
  text-align: left;
  height: 65px;

  p {
    color: var(--title);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

  span {
    color: var(--title);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    font-weight: bold;
}
`;

export const Bag = styled.button<Props>`
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50px;
  background: var(--red);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  margin-left: 12px;
  cursor: pointer;

  position: relative;

  &::after {
    background-color: var(--red);
    width: 18px;
    height: 18px;

    padding: 4px;

    position: absolute;

    bottom: -15px;
    right: 20px;

    border-radius: 18px;
    border: 4px solid var(--white);

    text-align: center;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: '${(props) => props.itemsCart && props.itemsCart}';
    display: ${(props) => props.itemsCart && props.itemsCart > 0 ? 'inline' : 'none'}
  }

  img {
    width: 26px;
    height: 26px;
  }
`;
