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

  font-size: 2.0rem;
  font-weight: bold;
  color: var(--label);

  a img {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--label);
  }

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

  .avatarProfile img {
    width: 10rem;
    height: 10rem;
    border-radius: 4%;
    border: 0.2rem solid #fff;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;

  width: 100%;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: var(--text);
  border: 1px solid var(--corner);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 20px;

  width: 40%;
  height: 400px;
  margin-right: 2rem;

  .image {
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--text);
    border: 1px solid var(--corner);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 20px;

    width: 150px;
    height: 150px;
  }

  .image img {
    width: 100%;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--subtitle);

    margin-top: 1.6rem;
  }

  .option {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 20px;
  }

  .option button {
    margin-top: 0;
  }

  .trash {
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--corner);
    width: 80px;
    height: 56px;

    border-radius: 5px;
    margin-left: 12px;
  }
`;

export const FormEdit = styled.div`
  background: var(--background);
  border: 1px solid var(--corner);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  form button {
    height: 60px;
    background: var(--color-button);
    border-radius: 8px;
    color: var(--white);
    font-weight: bold;
    font-size: 16px;
    border: 0;
    transition: background-color 0.2s;
    cursor: pointer;
  }

  form button:hover {
    background: var(--color-button-hover);
  }

  form {
    margin: 0 auto;
    padding: 2.2rem;
    max-width: 580px;
    background: var(--background);
    border-radius: 8px;
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

  .image {
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--text);
    border: 2px solid var(--corner);
    border-radius: 5px;
    padding: 8px;

    width: 110px;
  }

  .image img {
    width: 100%;
  }
`;

export const FieldGroup = styled.div`
  flex: 1;
  display: flex;

  div + div {
    margin-left: 2.2rem;
  }
`;

