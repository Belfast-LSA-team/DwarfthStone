import React from "react";
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

import axios from "axios";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { GameRouter } from "./router/GameRouter";
import { createApp } from "./redux/store";

import "./common.css";
import "./assets/css/fonts.css";
//@ts-ignore

const initialState =
    typeof window != "undefined" ? (window as any).INITIAL_STATE : {};

const axiosInstance = axios.create({
    baseURL: "/api",
});
// const store = createStore(
//     reducers,
//     (window as any).__INITIAL_STATE__ || {},
//   applyMiddleware(thunk.withExtraArgument(axiosInstance))
// );

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
