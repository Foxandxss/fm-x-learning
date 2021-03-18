import React from 'react';

import { Screen } from './screen/screen';
import Wrapper from './app.styles';
import { OptionsAside } from './options-aside/options-aside';

export function App() {
  return (
    <Wrapper>
      <OptionsAside />
      <Screen />
    </Wrapper>
  );
}

export default App;
