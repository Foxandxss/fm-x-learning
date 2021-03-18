import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './app/app';
import { GlobalStyles } from './main.styles';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Global styles={GlobalStyles} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
