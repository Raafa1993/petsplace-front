import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import NotFoundItemImg from '../../assets/icon/NotFoundItemImg'

import { Props } from '.';

export const Container = styled.div`
  width: min(1051px, 95vw);
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 60px 0;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1.8rem 0;
`;

export const PaginationButton = styled.div`
  display: flex;

  margin: 0 10px;

  font-size: 1.4rem;
  font-weight: bold;
  color: var(--title);
  padding: .8rem;

  border-radius: .4rem;
`;

export const PaginationItem = styled.button<Props>`
  margin: 0 5px;
  cursor: pointer;

  font-size: 1.4rem;
  font-weight: bold;
  color: var(--title);
  background: var(--text);

  padding: .8rem 1.4rem;
  border-radius: .4rem;
  border: 1px solid var(--corner);

  &:hover {
    color: #488cfc;
  }

  ${(props) =>
    props.isSelect && {
      background: "#488CFC",
      color: "#fff",
      border: 0,
    }};

  ${(props) =>
    props.isActive && {
      background: "#bfbfcc",
      color: "#E1E3E5",
    }};

`;

export const PreviosButton = styled.button<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background);
  color: var(--title);

  padding: .8rem 1.4rem;

  ${(props) =>
    props.isActive && {
      button: ":disabled",
      color: "#787880",
    }};
`;

export const NextButton = styled.button<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background);
  color: var(--title);

  padding: .8rem 1.4rem;

  ${(props) =>
    props.isActive && {
      button: ":disabled",
      color: "#787880",
    }};
`;

export const PreviosIcon = styled(FiChevronLeft)`
  width: 24px;
  height: 24px;
`

export const NextIcon = styled(FiChevronRight)`
  width: 24px;
  height: 24px;
`

export const ContentFilter = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 30%;
  margin-right: 25px;

  @media (max-width: 580px) {
    width: 100%;
  }
`;

export const Filter = styled.div`
  width: 100%;
  padding: 12px;

  border: 1px solid var(--corner);
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: var(--text);
  margin-bottom: 20px;


  h1 {
    font-size: 2.2rem;
    font-weight: bold;
    color: var(--title);

    margin-bottom: .8rem;
  }
`;

export const Category = styled.div`
  display: inline-block;

  ul li {
    margin-bottom: 5px;
  }

  ul li span {
    color: var(--subtitle);
    font-size: 1.8rem;
    font-weight: 500;
    margin-left: 5px;
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  gap: 24px;
  width: 100%;
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

export const ImageDraw = styled(NotFoundItemImg)`
  svg {
    path {
      width: 80%;
      height: 480px;
    }
  }
`

export const NoContent = styled.div`
  text-align: center;
`;
