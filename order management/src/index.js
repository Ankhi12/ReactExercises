import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import configureStore from './store/configurationStore';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore()
console.log('Store in the index', store)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
