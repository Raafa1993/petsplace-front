import styled from "styled-components";

import Tooltip from '../Tooltip';

export const Container = styled.div`
  background: var(--text);
  border-radius: 1.2rem;
  padding: .2rem;
  font-weight: 500;
  width: 100%;

  border: 2px solid var(--corner);
  color: var(--subtitle);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    width: 100%;
    font-size: 1.6rem;
    background: transparent;
    border: 0;
    color: var(--subtitle);

    &::placeholder {
      color: var(--label);
  }
}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin: 0 8px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #f4ede8;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
