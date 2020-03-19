import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {
  let preloadedState = undefined;
  
  const root = document.getElementById('root');
  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store}/>, root);
})