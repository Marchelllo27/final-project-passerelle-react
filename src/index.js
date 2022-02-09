import React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider, createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#8bc34a",
    },
  },

  components: {
    MuiInputBase: {
      styleOverrides: {
        // Name of the slot
        input: {
          // Some CSS
          "&:-webkit-autofill": {
            "-webkit-box-shadow": "0 0 0 100px white inset",
            "-webkit-text-fill-color": "black",
          },
          background: "white",
        },
      },
    },
  },
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
