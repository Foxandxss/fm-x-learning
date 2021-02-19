import styled from '@emotion/styled';
import React from 'react';

const Navigation = styled.nav`
  grid-area: side;

  display: grid;
  grid-template-columns: 1fr 1fr;

  font-size: 1.4rem;
  font-weight: 500;

  div {
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    box-shadow: inset -4px -2px 20px -5px rgba(0, 0, 0, 0.75);
  }

  span {
    display: grid;
    justify-content: center;
    align-content: center;
    border-bottom: 1px solid var(--background-color);
    padding: 0.7rem 1.2rem;
    text-align: center;
  }
`;

export function LeftNav() {
  return (
    <Navigation>
      <div className="left-menu">
        <span>Part Settings</span>
        <span>Pitch / Filter</span>
        <span>Effect</span>
        <span>Arpeggio</span>
        <span>Motion Seq</span>
        <span>Mod / Control</span>
      </div>
      <div className="right-menu">
        <span>General</span>
        <span>Algorithm</span>
        <span>Zone Settings</span>
        <span>Zone Transmit</span>
      </div>
    </Navigation>
  );
}
