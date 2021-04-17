import React from "react";
import { Provider } from "react-redux";
import { GameRouter } from "./router/GameRouter";
import { createApp } from "./redux/store";

import "./common.css";
import "./assets/css/fonts.css";

const initialState = (window as any).__INITIAL_STATE__ || {};

const { store } = createApp(initialState);

const App = () => {
    return (
        <Provider store={store}>
            <GameRouter />
        </Provider>
    );
};

export default App;
