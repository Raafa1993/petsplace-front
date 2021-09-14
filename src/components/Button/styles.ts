import styled from "styled-components";

interface ContainerProps {
  isLoading: number;
}

export const Container = styled.button<ContainerProps>`
  background: var(--color-button);
  border-radius: 1.2rem;
  border: none;
  padding: 0 16px;

  height: 56px;
  width: 100%;

  font-size: 1.6rem;
  font-weight: bold;
  color: var(--white);
  margin-top: 16px;

  transition: background-color 0.3s;

  &:hover {
  background: var(--color-button-hover);
}

  cursor: ${({ isLoading }) => (isLoading ? 'not-allowewd' : 'pointer')}
`;
