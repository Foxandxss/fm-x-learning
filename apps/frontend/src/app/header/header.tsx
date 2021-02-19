import React from 'react';
import styled from '@emotion/styled';

const HeaderStyle = styled.header`
  background: linear-gradient(
    to right top,
    var(--header-background-1),
    var(--header-background-2)
  );
  grid-area: header;
  display: grid;

  h1 {
    margin: 0.5rem 1rem;
  }

  .border {
    background-color: var(--primary-color);
    height: 7px;
    border-top: 0.3px solid black;
    border-bottom: 0.3px solid black;
  }
`;

export function Header() {
  return (
    <HeaderStyle>
      <h1>FM-X Learning</h1>
      <div className="border"></div>
    </HeaderStyle>
  );
}
