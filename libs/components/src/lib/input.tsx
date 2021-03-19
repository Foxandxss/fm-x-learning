import React from 'react';
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

  input {
    width: 100%;
    text-align: center;
    font-size: 1.8rem;
    border: none;
    background-color: transparent;
    color: white;
    padding: 1rem;
  }
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: () => void;
}

export const Input: React.FC<Props> = ({ label, name, register, ...props }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} ref={register} {...props} />
    </Wrapper>
  );
};
