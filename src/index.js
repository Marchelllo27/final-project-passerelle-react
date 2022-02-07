import React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
