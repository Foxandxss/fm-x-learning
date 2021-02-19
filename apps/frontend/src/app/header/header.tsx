import React from 'react';
import styled from '@emotion/styled';

const HeaderStyle = styled.header`
  background: linear-gradient(
    to right top,
    var(--header-background-1),
    var(--header-background-2)
  );
  grid-area: header;

  border-bottom: 1px solid var(--background-color);
`;

export function Header() {
  return (
    <HeaderStyle>
      <h1>FM-X Learning</h1>
    </HeaderStyle>
  );
}
