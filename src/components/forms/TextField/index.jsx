/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.secondary.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: 15px;
  box-shadow: 0 10px 15px 0 rgba(111,30,81,0.05);
`;

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  as,
  ...props
}) {
  return (
    <InputWrapper>
      <Input
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        required
        as={as}
        {...props}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  as: PropTypes.string,
};

TextField.defaultProps = {
  as: 'input',
};
