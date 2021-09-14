import styled from 'styled-components';

export const ContentItems = styled.div`
  display: flex;
  justify-content: space-between;

  background: var(--text);
  border-radius: 12px;
  border: 1px solid var(--corner);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin-bottom: 20px;
  max-width: 580px;
  min-width: 480px;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #96a0a5;

  border-radius: 12px;

  width: 110px;
  height: 110px;

  img {
    width: 100px;
    padding: 2px;
  }
`;

export const CardItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px;

  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--title);

    margin-bottom: 1.0rem;
  }

  p {
    font-size: 1.4rem;
    color: var(--subtitle);

    margin-bottom: 3.0rem;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 2rem;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  border: 2px solid #96a0a5;
  border-radius: 14px;

  width: 110px;
  height: 35px;

  button {
    width: 28px;
    height: 28px;

    background: #96a0a5;
    color: var(--white);

    border: none;
    border-radius: 50%;
  }

  input {
    width: 30px;
    border: none;
    border-radius: 2px;

    font-weight: bold;
    text-align: center;
    font-size: 1.4rem;
    font-weight: bold;

    color: var(--subtitle);
  }
`;

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;

  span {
    font-size: 2rem;
    font-weight: bold;
    color: #C7576D;
  }
`;
