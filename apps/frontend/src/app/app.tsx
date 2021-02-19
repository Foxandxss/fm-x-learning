import React from 'react';
import { Footer } from './footer/footer';
import { LeftNav } from './navigation/left-nav';
import AppStyles from './app.styles';
import styled from '@emotion/styled';
import { Header } from './header/header';

const Main = styled.main`
  grid-area: main;
  box-shadow: -14px 2px 28px -8px rgba(0, 0, 0, 0.75);
`;

const MiddleSection = styled.div`
  grid-area: middle;

  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-areas: 'side main';

  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export function App() {
  return (
    <AppStyles>
      <Header />
      <MiddleSection>
        <LeftNav />
        <Main>TBD</Main>
      </MiddleSection>
      <Footer />
    </AppStyles>
  );
}

export default App;
