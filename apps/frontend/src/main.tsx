import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';
import {GlobalStyles} from './main.styles';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
