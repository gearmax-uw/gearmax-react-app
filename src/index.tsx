import React, { Component }  from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom'
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import store from "./store";
import "antd/dist/antd.css";
import Router from "./router";
import i18n from "./translation";
import { fetchCars } from './action'

declare global {
  interface Window { 
    store: any;
    baseUrl: string;
    localBaseUrl: string;
    carsPerPage: Number;
  }
}

window.localBaseUrl = "http://localhost:8080/car/list";
// window.baseUrl = "http://34.125.152.171:8080/car/list";
window.baseUrl = "http://localhost:8080/car/list";
window.carsPerPage = 20;

// fetch data first
store.dispatch(fetchCars(window.baseUrl+"?pageSize="+window.carsPerPage+"&pageIndex=0"));

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
