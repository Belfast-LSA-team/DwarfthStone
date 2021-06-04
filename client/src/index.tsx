import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
// import "babel-polyfill";
import { RoutesWithoutAuth, RoutesWithAuth } from "./router";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes, RouteConfig } from "react-router-config";
import { Provider } from "react-redux";
import { createApp } from "./redux/store";
import widthAuth from "./components/withAuth";

const initialState =
    typeof window != "undefined" ? (window as any).INITIAL_STATE : {};

const { store } = createApp(initialState);

const AppWithAuth = widthAuth(({ isAuth }) => {
    if (isAuth) {
        return renderRoutes(RoutesWithAuth);
    }

    return renderRoutes(RoutesWithoutAuth);
});

ReactDOM.hydrate(
    <BrowserRouter>
        <Provider store={store}>
            <div>
                <AppWithAuth />
            </div>
        </Provider>
    </BrowserRouter>,
    document.querySelector("#root")
);
