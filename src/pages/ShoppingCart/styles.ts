import styled from 'styled-components';
import { darken, lighten } from 'polished';


export const Container = styled.div`
  width: min(1051px, 95vw);
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 40px;

  .notfoundShopping {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 120px;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: var(--blue);
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 14px;

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

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-right: 20px;

  @media (max-width: 820px) {
    align-items: center;
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
  min-width: 480px;
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

      /* border: 1px solid #ddd;
      border-radius: 4px; */
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

  width: 100%;
  max-width: 350px;
`;

export const Resume = styled.div`
  background: var(--text);
  border: 1px solid #E1E3E5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 20px;

  min-width: 200px;
  width: 100%;

  margin-bottom: 20px;

  h1 {
    text-align: center;
    font-size: 2.2rem;
    font-weight: bold;
    color: var(--title);

    margin-bottom: 12px;
  }

  button {
    width: 100%;
    background: var(--color-button);
    padding: 10px;

    border: none;
    border-radius: 6px;

    font-weight: bold;
    font-size: 1.8rem;
    color: var(--white);

    transition: background-color 0.2s;
}

  button:hover {
    background-color: #3ee08f;
}
`;

export const Totasl = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--subtitle)
  }

  span {
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--subtitle)
  }
`;

export const Separator = styled.div`
  height: 2px;
  background: var(--corner);

  margin: 20px;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h2 {
    text-align: center;
    font-size: 2.2rem;
    font-weight: bold;
    color: var(--title);
  }

  span {
    text-align: center;
    font-size: 2.2rem;
    font-weight: bold;
    color: var(--title);

    margin-bottom: 20px;
  }

`;
