import React from 'react';
import AutosizeInput from 'react-input-autosize';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: grid;
  border: 1px solid black;
  width: 10rem;

  label {
    width: 100%;
    background-color: var(--label-color);
    padding: 1rem 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .autosize {
    justify-self: center;
  }

  input {
    border: none;
    background-color: transparent;
    color: white;
    padding: 1rem;
  }
`;

interface Props {
  label: string;
  initialValue: string;
}

export const Input: React.FC<Props> = ({ label, initialValue = '0' }) => {
  return (
    <Wrapper>
      <label>{label}</label>
      <AutosizeInput
        className="autosize"
        value={initialValue}
        inputStyle={{ fontSize: 18 }}
      />
    </Wrapper>
  );
};
