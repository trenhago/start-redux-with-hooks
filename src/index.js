import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import tasksReducer from "./reducers";

import loggerMiddleware from './middleware/logger';

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk, loggerMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

// const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = (state = {}, action) => {
  return {
    tasks: tasksReducer(state.tasks, action),
  };
};

const store = createStore(
  rootReducer, 
  composeWithDevTools(middlewareEnhancer)
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
