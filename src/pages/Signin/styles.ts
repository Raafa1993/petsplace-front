import styled from "styled-components";
import background from '../../assets/images/backgroundDog.jpg'

export const Container = styled.div`
  width: min(1051px, 95vw);
  margin: 0 auto;
`;

export const Content = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;

  div + div {
    margin-top: 8px;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 60vh;
  gap: 2rem;
  background: var(--white);
  border-radius: 12px;

  &::after {
    display: block;
    content: '';
    background: url(${background}) no-repeat center center;
    background-size: cover;
    border-radius: 0px 12px 12px 0;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    &::after {
      display: none;
  }
}
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 40px 0;
    max-width: 340px;
    text-align: center;
    width: 100%;
  }

  h1 {
    font-size: 2.8rem;
    font-weight: bold;
    color: var(--title);
    margin-bottom: 24px;
  }

  a {
    color: #8fa7b2;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: #bbcad1;
  }

  > a {
    color: #c7576d;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    font-size: 1.6rem;
    transition: color 0.2s;

    display: flex;
    align-items: center;
  }

  > a:hover {
    color: #d9788b;
  }

  a > img {
    margin-right: 16px;
  }

`;
