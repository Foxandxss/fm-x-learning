import React from 'react';
import styled from '@emotion/styled';
import { usePatch } from '../context/patch.context';

const Wrapper = styled.section`
  height: 100vh;
  background-color: white;
`;

export function OptionsAside() {
  const { patch } = usePatch();

  // React.useEffect(() => {
  //   console.log(patch);
  // }, [patch]);

  return (
    <Wrapper aria-label="options">
      <button>Save</button>
    </Wrapper>
  );
}
