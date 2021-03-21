import React from 'react';

import { Screen } from './screen/screen';
import Wrapper from './app.styles';
import { OptionsAside } from './options-aside/options-aside';
import { PatchProvider } from './context/patch.context';

export function App() {
  return (
    <Wrapper>
      <PatchProvider>
        <OptionsAside />
        <Screen />
      </PatchProvider>
    </Wrapper>
  );
}

export default App;
