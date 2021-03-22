import React from "react";

import { Provider } from "react-redux";
import { GameRouter } from "./router/GameRouter";

import "./common.css";

const App = () => {
    return (
        <div>
            <GameRouter />
        </div>
    );
};

export default App;