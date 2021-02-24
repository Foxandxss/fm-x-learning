import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';
import { GlobalStyles } from './main.styles';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
