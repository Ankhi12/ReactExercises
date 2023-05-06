import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configurationStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore()
store.subscribe(()=>{
  console.log('state updated', store.getState())
})
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);
reportWebVitals();
