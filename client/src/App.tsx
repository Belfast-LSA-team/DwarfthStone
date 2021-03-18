import React from "react";

import { Provider } from "react-redux";
import { GameRouter } from "./router/GameRouter";
const App = () => {
    return (
        <div>
            <GameRouter />
        </div>
    );
};

export default App;
