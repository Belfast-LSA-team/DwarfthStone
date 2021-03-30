import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "../../pages/homepage";
import Auth from "../../pages/auth";
import Login from "../../pages/login";
import ContactUs from "../../pages/contactUs";
import Register from "../../pages/register";
import Page404 from "../../pages/404";

export const GameRouter = (): JSX.Element => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route exact path="/contact">
                <ContactUs />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="*">
                <Page404 message="Страница не найдена" />
            </Route>
        </Switch>
    </Router>
);
