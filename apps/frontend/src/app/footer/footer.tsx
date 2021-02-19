import styled from '@emotion/styled';
import React from 'react';

const FooterStyles = styled.footer`
  color: var(--primary-color);

  grid-area: footer;

  font-size: 1.6rem;
  font-weight: 500;

  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 6rem;
  align-items: end;

  span {
    display: inline-block;
    padding: 1rem 1.5rem;
    position: relative;
  }

  .op-buttons {
    background: linear-gradient(
      to right,
      var(--footer-background-1),
      var(--footer-background-2)
    );

    border-top: 2px solid black;
  }

  .op-button {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 85%;
      background-color: rgba(55, 221, 237, 0.3);
    }
  }

  .big-buttons {
    color: white;
    background-color: var(--primary-color);

    border-top: 1px solid black;
    border-right: 1px solid black;
    align-self: stretch;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .big {
    display: grid;
    justify-content: center;
    align-content: center;

    :not(:last-child) {
      border-right: 1px solid black;
    }
  }
`;

export function Footer() {
  return (
    <FooterStyles>
      <div className="big-buttons">
        <span className="big">Part 1</span>
        <span className="big">Common</span>
      </div>

      <div className="op-buttons">
        <span className="op-button">OP1</span>
        <span className="op-button">OP2</span>
        <span className="op-button">OP3</span>
        <span className="op-button">OP4</span>
        <span className="op-button">OP5</span>
        <span className="op-button">OP6</span>
        <span className="op-button">OP7</span>
        <span className="op-button">OP8</span>
      </div>
    </FooterStyles>
  );
}
