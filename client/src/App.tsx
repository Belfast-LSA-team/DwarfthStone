import React from "react";

import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { GameRouter } from "./router/GameRouter";
import { createApp } from "./redux/store";

import "./common.css";
import "./assets/css/fonts.css";
const initialState = (window as any).__INITIAL_STATE__ || {};

const { store } = createApp(initialState);

const App = ({ route }) => {
    return (
        <Provider store={store}>
            <div>{renderRoutes(route.routes)}</div>
        </Provider>
    );
};

export default {
    component: App,
};
