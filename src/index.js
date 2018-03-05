import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import promise from 'redux-promise';
import thunk from 'redux-thunk';


ReactDOM.render(
  <App />, document.getElementById('root'));
registerServiceWorker();
