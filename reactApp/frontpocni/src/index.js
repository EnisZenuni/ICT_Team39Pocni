import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);


reportWebVitals();
