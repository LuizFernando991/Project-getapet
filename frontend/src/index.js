import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './global-styles';
import { App } from './App.jsx';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

