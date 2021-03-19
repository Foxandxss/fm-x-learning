import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.section`
  height: 100vh;
  background-color: white;
`;

export function OptionsAside() {
  return (
    <Wrapper aria-label="options">
      <button>Save</button>
    </Wrapper>
  );
}
