import styled from "styled-components";

export const Container = styled.div`
  width: min(1051px, 95vw);
  margin: 0 auto;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  gap: 24px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 270px;
  background: var(--text);;
  border: none;
  border-radius: 1.2rem;

  padding: 10px;
  border: 1px solid #e1e3e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* &:hover {
    cursor: pointer;
  } */

  > button {
    flex: 1;
    background: var(--text);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--text);
  align-items: flex-start;

  p {
    color: var(--title);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 1.4rem;
}

  span {
    color: var(--title);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    font-weight: bold;
}
`;

export const Bag = styled.div`
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50px;
  background: var(--red);

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 12px;
  cursor: pointer;

  img {
    width: 26px;
    height: 26px;
  }
`;
