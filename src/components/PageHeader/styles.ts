import styled from "styled-components";
import { FiUser } from 'react-icons/fi';
import { IoLogOutOutline } from "react-icons/io5";

import { Props } from '.'

export const Container = styled.header`
  width: min(1051px, 95vw);
  margin: 0 auto;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  align-items: center;
  height: 60px;
  margin: 20px 0px;

  img {
    height: auto;
    max-width: 100%;

    display: flex;
    align-items: center;
  }

@media (max-width: 660px) {
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'lg bt'
    'sr sr';
  gap: 1.5rem;
  margin-bottom: 70px;

  img {
    grid-area: lg;
  }
}
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 45px;
  background: var(--white);
  padding: 12px 8px;
  border: none;
  border-radius: 12px;

  margin: 0 2rem;

  input {
    width: 100%;
    height: 45px;
    background: var(--white);
    color: black;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 12px 8px;
    border: none;
    outline: none;
}

  img {
    width: 20px;
    background: var(--white);
}

@media (max-width: 660px) {
  grid-area: sr;
  margin: 0;
}
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 5px 0;

  a {
    background: var(--white);
    border: none;
    border-radius: 6px;

    width: 45px;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child {
      margin-right: 12px;
    }
  }

  > button {
    background: var(--white);
    border: none;
    border-radius: 6px;
    margin-left: 7px;

    width: 45px;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.3s;

    &:hover {
    background: var(--red);
    color: var(--white);

      svg {
        color: #fff;
      }
    }
  }
`;

export const CartIcon = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  background: var(--white);

  width: 28px;
  height: 28px;

  position: relative;

  &::after {
    background-color: var(--red);
    width: 18px;
    height: 18px;

    padding: 4px;

    position: absolute;

    bottom: -25px;
    right: 25px;

    border-radius: 18px;
    border: 4px solid var(--white);

    text-align: center;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: '${(props) => props.itemsCard && props.itemsCard}';
    display: ${(props) => props.itemsCard && props.itemsCard > 0 ? 'inline' : 'none'}
  }
`;


export const UserIcon = styled(FiUser)`
  width: 28px;
  height: 28px;
  color: var(--color-icons);
`;


export const Logout = styled(IoLogOutOutline)`
  width: 28px;
  height: 28px;

  color: var(--color-icons);
`
