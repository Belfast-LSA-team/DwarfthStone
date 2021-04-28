import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
// import "babel-polyfill";
import { Routes } from "./router";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes, RouteConfig } from "react-router-config";

//temporary solution

ReactDOM.hydrate(
    <BrowserRouter>
        {/* <Routes /> */}
        <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>,
    document.querySelector("#root")
);
