import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './global-styles';
import { App } from './App.jsx';
import { UserContextProvider } from './contexts/UserContext'


ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
      <GlobalStyle/>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

