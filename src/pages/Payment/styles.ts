import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  width: min(1051px, 95vw);
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 880px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-right: 20px;

  > h1 {
    margin: 20px 0 10px 0;
    font-size: 2em;
    font-weight: bold;
    color: var(--title);

    display: inline-block;
  }

  @media (max-width: 880px) {
    align-items: center;
    margin-right: 0;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-right: 20px;

  @media (max-width: 880px) {
    align-items: center;
    margin-right: 0;
  }
`;

export const ContentItems = styled.div`
  display: flex;

  background: var(--text);
  border-radius: 12px;
  border: 1px solid var(--corner);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin-bottom: 20px;
  max-width: 580px;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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

  padding: 15px;

  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--title);
    max-width: 18ch;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 520px) {
    font-size: 1.4rem;
  }
  }

  span {
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--subtitle);
  }
`;

export const CardInfo = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid #787880;
    border-radius: 12px;

    width: 100px;

    input {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      font-size: 1.2rem;
      font-weight: bold;
      color: #666;
      padding: 6px;
      width: 25px;
    }
  }

  button {
    display: flex;
    background: none;
    border: 0;
    margin: 6px;

    svg {
      color: #5A5A66;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#41414C')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#5A5A66')};
        cursor: not-allowed;
      }
    }
  }
`;

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #BFBFCC;
      transition: color 0.3s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#C7576D')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#C7576D')};
        cursor: not-allowed;
      }
    }
  }
  span {
    font-size: 2rem;
    font-weight: bold;
    color: #C7576D;
  }
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  margin-bottom: 60px;

  > h1 {
    margin: 20px 0 10px 0;
    font-size: 2em;
    font-weight: bold;
    color: var(--title);

    display: inline-block;
  }

  @media (max-width: 880px) {
    min-width: 90%;
  }

  > h1 {
    text-align: center;
  }
`;

export const Address = styled.div`
  background: var(--white);
  border-radius: 12px;
  background: var(--text);
  border: 1px solid var(--corner);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 20px;
  min-width: 200px;
  width: 100%;

  margin-bottom: 20px;

  h2 {
    font-size: 2em;
    font-weight: bold;
    color: var(--title);
  }

  div {
    color: var(--subtitle);
    font-size: 1.8rem;
  }
`;

export const Pag = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;

  background: var(--text);
  border: 1px solid var(--corner);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  color: var(--subtitle);

  button {
    width: 100%;
    height: 56px;
    border-radius: 8px;
    background: var(--color-button);
    font-size: 1.6rem;

    transition: background-color 0.3s;

    &:hover {
      background: var(--color-button-hover);
    }
  }

  > h2 {
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    color: var(--title);
    margin-bottom: 2rem;
  }

  fieldset {
    border: 0;
    margin-top: 2rem;
  }

  legend h2 {
    font-size: 2rem;
    font-weight: bold;
    color: var(--title);

    margin-bottom: 10px;
}
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    padding: 5px 14px;
    border: none;
    border-radius: 12px;

    font-size: 1.6rem;
    font-weight: bold;
    color: var(--white);
    background: var(--subtitle);

    margin: 16px 0;
}
`;

export const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  margin-bottom: 8px;

  input {
    background: #f0f0f5;
    border-radius: 1.2rem;
    border: 2px solid #f0f0f5;

    padding: 1.2rem;
    width: 100%;

    font-size: 1.6rem;
    font-weight: 500;
    color: var(--label);

    display: flex;
    align-items: center;

  }

  label {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 4px;
  }
`;

export const FieldGroup = styled.div`
  display: flex;

  div + div {
    margin-left: 20px;
  }
`;

export const Separator = styled.div`
  height: 2px;
  background: var(--corner);

  margin: 20px 0;
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 10px 0;

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--subtitle);
  }

  span {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--subtitle);
  }
`;
