import styled from 'styled-components';

export const Header = styled.header`
  background: #41414c;
  padding-top: 2rem;
  padding-bottom: 3rem;
`;

export const Container = styled.div`
  width: min(1051px, 95vw);
  margin: 0 auto;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .settings {
    background: var(--white);
    border: none;
    border-radius: 6px;

    width: 45px;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
  }

  .settings:hover {
    background: #e1e3e5;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 40px auto;
  width: 80%;

  .notFoundAddress {
    text-align: left;
    font-size: 1.8rem;

    font-weight: 700;
    color: var(--blue);
  }

  @media (max-width: 720px) {
    width: 100%;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;

    .image {
      margin-right: 0;
      margin-bottom: 4.4rem;
      min-width: 200px;
      min-height: 200px;
    }
  }
`;

export const Address = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  background: var(--text);
  border-radius: 0.8rem;
  padding: 1.2rem;

  border: 1px solid var(--corner);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h2 {
    color: var(--title);
    font-size: 1.8rem;
    font-weight: bold;

    margin-bottom: 0.6rem;
  }

  div {
    font-size: 1.6rem;
    color: var(--subtitle);
  }

  @media (max-width: 540px) {
    width: 100%;

    div {
      font-size: 1.4rem;
    }
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: var(--corner);
  margin: 1rem 0;
`;

export const Icons = styled.div`
  display: flex;
  align-self: flex-end;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 4px;
  }
`;

export const Buttons = styled.div`
  margin: 2.5rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 90%;

  > button {
    padding: 1.1rem;
    border-radius: 0.4rem;
    border: 0;
    font-weight: bold;
    font-size: 1.6rem;
    text-transform: uppercase;
    transition: all 0.2s;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    background: #f1972c;
    color: #fcfdff;
  }

  > button:hover {
    background: #fa9c2d;
  }

  span::before {
    width: 2.8rem;
    height: 2.8rem;
    content: ' ';
    background-color: #f0f2f5;
    opacity: 0.16;
    border-radius: 0.313rem; /* 5px of 16px root*/

    position: absolute;
    display: flex;
  }

  span {
    width: 2.8rem;
    height: 2.8rem;

    margin-right: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  > button img {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const Requestlist = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  margin: 0 auto;

  h1 {
    font-size: 3.2rem;
    font-weight: 600;
    color: var(--title);

    margin-bottom: 2rem;
  }

  .notFoundRequest {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 150px;
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--blue);
      a {
        margin-left: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: var(--red);
        border: 2px solid var(--white);

        transition: background-color 0.3;

        &:hover {
          background: #FC567A;
        }

      svg {
        width: 25px;
        height: 25px;
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const Request = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: var(--white);

  border-radius: 0.8rem;
  padding: 1.4rem;

  margin-bottom: 1.4rem;

`;

export const InfoResume = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .infoRequest {
    display: flex;
  }

  .infoRequest h2 {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--title);
  }

  .infoValue {
    display: flex;
    flex-direction: column;
  }

  .infoValue p {
    text-align: end;
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--title);
  }

  .infoValue span {
    text-align: end;
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--title);
  }
`;

export const RequestItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoProduct = styled.div`
  display: flex;
  align-items: center;

  .userImage {
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 80px;

    padding: 8px;
    border-radius: 0.8rem;
    margin-right: 1.2rem;
  }

  .userImage img {
    max-width: 100%;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .info h2 {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--title);
  }

  .info span {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--title);
  }
`;


