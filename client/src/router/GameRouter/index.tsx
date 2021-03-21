import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "../../pages/homepage";
import Page404 from "../../pages/404";

export const GameRouter = (): JSX.Element => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route path="*">
                <Page404 message="Страница не найдена" />
            </Route>
        </Switch>
    </Router>
);
