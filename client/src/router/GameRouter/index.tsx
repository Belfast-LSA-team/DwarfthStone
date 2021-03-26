import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "../../pages/homepage";
import Auth from "../../pages/auth";
import Login from "../../pages/login";
import Register from "../../pages/register";
<<<<<<< HEAD
import Page404 from "../../pages/404";
=======
>>>>>>> 2c60a4c7ee9c345da8e9a60a186efc2469ef5a49

export const GameRouter = (): JSX.Element => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
<<<<<<< HEAD
            <Route path="*">
                <Page404 message="Страница не найдена" />
            </Route>
=======
>>>>>>> 2c60a4c7ee9c345da8e9a60a186efc2469ef5a49
        </Switch>
    </Router>
);
