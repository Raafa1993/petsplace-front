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

export const Main = styled.div`
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

export const UserIcon = styled(FiUser)`
  width: 5rem;
  height: 5rem;
  border-radius: 6px;
  padding: 5px;
  background: var(--background);
  color: var(--color-icons);
`;

export const Content = styled.div`
  flex: 1;
  margin-top: 40px;

  form button {
    height: 60px;
    background: var(--color-button);
    border-radius: 8px;
    color: var(--white);
    font-weight: bold;
    font-size: 16px;
    border: 0;
    margin-top: 3.5rem;
    transition: background-color 0.2s;
    cursor: pointer;
  }

  form button:hover {
    background: var(--color-button-hover);
  }

  form {
    width: 100%;
    margin: 0 auto;
    max-width: 600px;
    padding: 2.2rem;

    background: var(--background);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
}

  fieldset {
    min-inline-size: auto;
    border: 0;
  }

  legend {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  legend h2 {
    font-size: 2.4rem;
    font-weight: bold;
    color: var(--title);
  }

`;

export const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;

  label {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--subtitle);
    margin-bottom: 8px;
  }

  /* input[type='file'] {
    background: #f0f0f5;
    border-radius: 1.2rem;
    border: 0;
    padding: 1.2rem 1rem;
    font-size: 1.6rem;
    color: var(--subtitle);
    font-weight: 500;
    resize: none;
    width: 100%;
  } */
`;

export const FieldGroup = styled.div`
  flex: 1;
  display: flex;

  div + div {
    margin-left: 2.2rem;
  }
`;
