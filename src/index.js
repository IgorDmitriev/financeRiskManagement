import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Root from './components/Root';
import configureStore from './store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;

  ReactDOM.render(<Root store={ store }/>, root);
});
