import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';

export const Header = styled.header`
  background: #41414c;
  padding-top: 2rem;
  padding-bottom: 3rem;
`;

export const Container = styled.div`
  width: min(1051px, 95vw);
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .avatarProfile {
    display: flex;
    align-items: center;
    color: var(--white);
    text-decoration: none;
    text-align: right;
  }

  .avatarProfile p {
    font-size: 2.2rem;
    line-height: 1.875rem;
    margin-right: 1.25rem;
    font-weight: 600;
  }

  .avatarProfile span {
    display: block;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.5rem;
    font-weight: 400;
    transition: color .3s;
  }

  .avatarProfile span:hover {
    color: #f1972c;
  }
`;

export const Separator = styled.div`
  height: 1px;
  background-color: #4f4f5b;
  margin: 2rem 0;
`;

export const UserIcon = styled(FiUser)`
  width: 5rem;
  height: 5rem;
  border-radius: 6px;
  padding: 5px;
  background: var(--background);
  color: var(--color-icons);
`;

export const Cards = styled.div`
  background: var(--text);;
  border-radius: 0.4rem;
  border: 1px solid #e1e3e6;
  color: #5a5a66;
  position: relative;

  margin-bottom: 3.5rem;

  padding: 1.5rem;
  text-align: left;

  margin-top: -2.825rem;

  &::before {
    content: ' ';

    width: 0.45rem;
    height: 0%;
    background-color: #f1972c;

    border-radius: 0.313rem 0 0 0.313rem;

    position: absolute;
    top: 0;
    left: -1px;

    transition: all 0.2s;
  }

  &:hover::before {
    height: 100%;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 7% 25% 25% 30% 13%;
  align-items: center;

  transition: all 0.2s;

  .id {
    font-size: 1.8rem;
    font-weight: 600;
    color: #bfbfcc;
  }

  .infoProduct span {
    display: block;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--title);
    max-width: 16ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .infoProduct p {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--subtitle);
    max-width: 20ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .data {
    display: flex;
    align-items: center;
    justify-content: center;

    width: fit-content;
    padding: 0.5rem 1.5rem;

    background: #c4c4c4;
    border-radius: 0.4rem;

    font-size: 1.8rem;
    font-weight: 500;
    color: #ffffff;
  }

  .category {
    display: flex;
    align-items: center;
    justify-content: center;

    width: fit-content;
    padding: 0.5rem 1.5rem;

    background: #c4c4c4;
    border-radius: 0.4rem;

    font-size: 1.8rem;
    font-weight: 500;
    color: #ffffff;
  }

  .amount span {
    display: block;
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #bebfcc;
  }

  .amount p {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--title);
  }

  @media (max-width: 770px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'lt rt'
      'lb rb';
    gap: 0.5rem;

  .id {
    display: none;
  }
  .infoProduct {
    grid-area: lt;
  }
  .amount {
    grid-area: lb;
  }
  .data {
    justify-self: flex-end;
    grid-area: rt;
  }
  .category {
    justify-self: end;
    grid-area: rb;
  }
  /* .edit {
    grid-area: rb;
  } */
}
`;
