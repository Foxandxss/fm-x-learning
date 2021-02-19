import styled from '@emotion/styled';
import React from 'react';

const Navigation = styled.nav`
  grid-area: side;

  display: grid;
  grid-template-columns: 1fr 1fr;

  font-size: 1.6rem;
  font-weight: 500;

  div {
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    /* justify-content: center; */
    box-shadow: inset -20px 2px 35px -8px rgba(0, 0, 0, 0.75);
  }

  /* .rightMenu {
    display: grid;
    grid-template-rows: repeat(6, 1fr);
  } */

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--background-color);
    padding: 0.5rem 1rem;
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
