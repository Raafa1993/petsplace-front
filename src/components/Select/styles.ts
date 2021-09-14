import styled, { css } from "styled-components";

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 1.2rem;
  background: var(--text);
  border: 2px solid var(--corner);

  font-size: 1.6rem;
  font-weight: 500;
  color: var(--subtitle);

  width: 100%;
  height: 60px;
  padding: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: var(--blue);
      border-color: var(--blue);
    `}
  ${props =>
    props.isField &&
    css`
      color: var(--blue);
    `}

  select {
    width: 100%;
    font-size: 1.6rem;
    background: transparent;
    border: 0;
    color: var(--subtitle);

    &::placeholder {
      color: var(--label);
    }
  }

  svg {
    margin-right: 10px;
  }
`;

export const Error = styled(Tooltip)`
  display: flex;
  align-items: flex-end;
  margin-left: 10px;

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
