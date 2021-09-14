import styled from 'styled-components';

export const Container = styled.div`
  max-width: 250px;
  height: 275px;
  border-radius: 12px;
   >div {
    .bg-skeleton {
      max-width: 250px;
      height: 275px;

      filter: brightness(96%);
    }
    span {
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 175px;
    }
    .image-skeleton {
      z-index: 1;
      width: 150px;
      height: 150px;
      margin: -250px 0 10px;
    }
    .row-skeleton {
      height: 12px;

      &:nth-child(2) {
        width: 60%;
        z-index: 2;
      }
      &:nth-child(3) {
        width: 50%;
        z-index: 2;
        margin-top: 10px;
      }
    }
  }
`;
