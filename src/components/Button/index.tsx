import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (

  <Container
    disabled={loading}
    isLoading={Number(loading)}
    type="button"
    {...rest}
  >
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
