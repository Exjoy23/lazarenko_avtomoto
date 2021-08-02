import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/app/app';
import dataSlice from './store/slices/data-slice';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: { dataSlice },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
