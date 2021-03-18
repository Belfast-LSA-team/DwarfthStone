import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "../../pages/homepage/Homepage";

export const GameRouter = (): JSX.Element => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
        </Switch>
    </Router>
);
