import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

//temporary solution

import App from "./App";

ReactDOM.hydrate(<App />, document.querySelector("#root"));
