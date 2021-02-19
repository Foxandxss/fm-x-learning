import React from 'react';
import { Footer } from './footer/footer';
import { LeftNav } from './navigation/left-nav';
import AppStyles from './app.styles';
import styled from '@emotion/styled';
import { Header } from './header/header';

const Main = styled.main`
  grid-area: main;
  /* box-shadow: -14px 2px 28px -8px rgba(0, 0, 0, 0.75); */
`;

export function App() {
  return (
    <AppStyles>
      <Header />
      <LeftNav />
      <Main>TBD</Main>
      <Footer />
    </AppStyles>
  );
}

export default App;
