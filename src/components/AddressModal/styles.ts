import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Container = styled.div`
  background: var(--white);
  width: 100%;
  max-width: 600px;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
  position: relative;

  > button {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    background: transparent;
    border: 0;
    font-size: 0;
  }

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
    margin: 0 auto;
    padding: 2.2rem;
    max-width: 730px;
    background: var(--white);
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
