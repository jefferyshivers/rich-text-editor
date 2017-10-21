import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import application from './reducers';
import App from './containers/App';

let store = createStore(
  application
)
$(function() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
});

// store.subscribe(() => { console.log(store.getState()) })
