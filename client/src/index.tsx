import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
// import "babel-polyfill";
import { Routes } from "./router";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes, RouteConfig } from "react-router-config";
import { Provider } from "react-redux";
import { createApp } from "./redux/store";

const initialState =
    typeof window != "undefined" ? (window as any).INITIAL_STATE : {};

const { store } = createApp(initialState);

ReactDOM.hydrate(
    <BrowserRouter>
        <Provider store={store}>
            <div>{renderRoutes(Routes)}</div>
        </Provider>
    </BrowserRouter>,
    document.querySelector("#root")
);
