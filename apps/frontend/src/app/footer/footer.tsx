import styled from '@emotion/styled';
import React from 'react';

const FooterStyles = styled.footer`
  color: var(--primary-color);
  background: linear-gradient(
    to right,
    var(--footer-background-1),
    var(--footer-background-2)
  );
  grid-area: footer;

  font-size: 1.6rem;
  font-weight: 500;

  border-top: 2px solid black;

  span {
    display: inline-block;
    padding: 1rem 1.5rem;
    position: relative;

    /* border-right: 1px solid rgba(var(--primary-color), 1); */
    /* border-right: 1px solid rgba(55, 221, 237, 0.3); */
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

  .big {
    color: white;
    background-color: var(--primary-color);
    border-right: 1px solid black;
    margin-top: -10px;
  }
`;

export function Footer() {
  return (
    <FooterStyles>
      <span className="big">Part 1</span>
      <span className="big">Common</span>
      <span className="op-button">OP1</span>
      <span className="op-button">OP2</span>
      <span className="op-button">OP3</span>
      <span className="op-button">OP4</span>
      <span className="op-button">OP5</span>
      <span className="op-button">OP6</span>
      <span className="op-button">OP7</span>
      <span className="op-button">OP8</span>
    </FooterStyles>
  );
}
