import { Global } from '@emotion/react';
import { queryClient } from '@fm-x-learning/front-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import App from './app/app';
import { GlobalStyles } from './main.styles';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Global styles={GlobalStyles} />
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
