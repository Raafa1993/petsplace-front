import styled from 'styled-components';

export const Container = styled.div`
  width: min(1051px, 95vw);
  margin: 0 auto;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 12px;
`;

export const DogCard = styled.div`
  width: 100%;
  height: 122px;

  background: linear-gradient(260.24deg, #06C6D8 0%, #008992 99.08%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border: none;
  border-radius: 12px;

  display: flex;
  justify-content: space-around;

  cursor: pointer;

  opacity: 0.9;
  transition: 0.5s;
  transform: translate(0, 0);

  &:hover {
    opacity: 1;
    transform: translate(5px, -5px);
  }
`;

export const CatCard = styled.div`
  width: 100%;
  height: 122px;

  background: linear-gradient(260.24deg, #FFDA60 0%, #EEBD2F 99.08%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border: none;
  border-radius: 12px;

  display: flex;
  justify-content: space-around;

  cursor: pointer;

  opacity: 0.9;
  transition: 0.5s;
  transform: translate(0, 0);

  &:hover {
    opacity: 1;
    transform: translate(5px, -5px);
  }
`;

export const BirdCard = styled.div`
  width: 100%;
  height: 122px;

  background: linear-gradient(260.24deg, #FF7B76 0%, #CD6460 99.08%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border: none;
  border-radius: 12px;

  display: flex;
  justify-content: space-around;

  cursor: pointer;

  opacity: 0.9;
  transition: 0.5s;
  transform: translate(0, 0);

  &:hover {
    opacity: 1;
    transform: translate(5px, -5px);
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: stretch;

  span {
    font-size: 2.4rem;
    font-weight: bold;
    color: var(--white);
}

  img {
    width: 38px;
    align-self: flex-end;
    color: rgba(255, 255, 255, 0.65);
}
`;
