import reducer from "./reducers";
import {legacy_createStore as createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const Store0223=createStore(
  reducer, composeWithDevTools(applyMiddleware(thunk,logger))
);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={Store0223}>
  <BrowserRouter>
    <>
    <ToastContainer/>
      <App />
    </>
  </BrowserRouter>
  </Provider>
);
