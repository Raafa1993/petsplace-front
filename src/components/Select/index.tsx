import React, { SelectHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';

import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  containerStyle?: React.CSSProperties;
  icon?: React.ComponentType<IconBaseProps>;
}

const Select: React.FC<SelectProps> = ({ name, icon: Icon, containerStyle = {}, ...rest }) => {
  const inputRef = useRef<HTMLSelectElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);
  const { fieldName, defaultValue, error, registerField, } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsField(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isField={isField}
      isFocused={isFocused}
    >
      {Icon && <Icon size={20} />}

      <select
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="c53030" size={20} />
        </Error>
      )}
    </Container>
  )
}

export default Select;