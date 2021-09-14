import styled from "styled-components";

export const Container = styled.div`
  width: min(1051px, 95vw);
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;

  border: none;
  border-radius: 12px;
  background: var(--color-footer);

  margin-bottom: 20px;
`;
export const Items = styled.div`
  padding: 40px 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--title);
}

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 15px;

    span {
    margin: 20px 0;
  }
}

`;
export const Icons = styled.div`
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;



