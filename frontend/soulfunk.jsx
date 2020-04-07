import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentAdmin) {
    const { currentAdmin } = window;
    const preloadedState = {
      session: {
        currentAdmin: currentAdmin
      }
    };
    store = configureStore(preloadedState);
    delete window.currentAdmin;

  } else {
    store = configureStore();
  }
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});