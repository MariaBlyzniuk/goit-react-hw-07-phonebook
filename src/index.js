import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import store from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* eslint-disable-next-line */}
    <Provider store={store.store}>
        <App />
    </Provider>
  </React.StrictMode>
);
