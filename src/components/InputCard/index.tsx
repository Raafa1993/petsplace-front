import React, { InputHTMLAttributes, useCallback, useEffect, useRef } from "react";

import { Container, Error } from './styles';

import { currency, card, cardData, ccv } from './masks';
import { useField } from "@unform/core";
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  mask?: "currency" | 'card' | 'cardData' | 'ccv';
}

const Input: React.FC<InputProps> = ({ name, mask, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField, } = useField(name)

  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === 'currency') {
        currency(e)
      }
      else if (mask === 'card')
        card(e)

      else if (mask === 'cardData')
        cardData(e)

      else if (mask === 'ccv')
        ccv(e)

      return;
    }, [mask])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        onKeyUp={handleKeyUp}
        {...props}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
