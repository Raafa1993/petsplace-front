import styled from 'styled-components';
import background from '../../assets/images/backgroundCat.jpg'

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

  &::before {
    display: block;
    content: '';
    background: url(${background}) no-repeat center
    center;
    background-size: cover;
    border-radius: 12px 0px 0px 12px;
}

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
  }
`;

export const ContentInfo = styled.div`
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
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--title);
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    transition: color 0.3s;
  }

  a:hover {
    color: var(--subtitle);
  }

  img {
    margin-right: 16px;
  }
`;
