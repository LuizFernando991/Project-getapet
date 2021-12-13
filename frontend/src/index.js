import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './global-styles';
import { App } from './App.jsx';
import { UserContextProvider } from './contexts/UserContext'
import { BrowserRouter } from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App />
        <GlobalStyle/>
      </UserContextProvider>
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

