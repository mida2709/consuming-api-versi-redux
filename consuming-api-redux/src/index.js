import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import config from './config/index';
import store from './store'; // Import Redux store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={config.google.clientId}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
