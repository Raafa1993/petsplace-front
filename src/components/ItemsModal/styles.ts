import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);
  width: 100%;
  max-width: 980px;
  border-radius: 10px;
  position: relative;
  display: flex;
`;

export const LoaderContainer = styled.div`
  text-align: center;
  margin: 0 auto;
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  width: 60%;
  padding: 20px;
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--text);
  border: 1px solid var(--corner);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 12px;
  height: 260px;
  margin-bottom: 3rem;

`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.4rem;
    font-weight: bold;
    color: var(--title);
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--subtitle);

    max-width: 580px;
    min-width: 280px;
  }
`;

export const ContentRight = styled.div`
  background: var(--white);
  border-radius: 12px;
  border: 1px solid #E1E3E5;
  filter: drop-shadow(-3px 3px 6px rgba(0, 0, 0, 0.161));

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px;
  width: 40%;
`;

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  h1 {
    font-size: 2.4rem;
    font-weight: bold;
    color: var(--title);
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;


  h2 {
    font-size: 2.2rem;
    font-weight: bold;
    color: var(--title);
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  border: 2px solid #96a0a5;
  border-radius: 15px;

  width: 120px;
  height: 40px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

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
  }
`;
