import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "../../pages/homepage";
import Auth from "../../pages/auth";
import Login from "../../pages/login";
import Register from "../../pages/register";
import Forum from "../../pages/forum";
import Thread from "../../pages/thread";
import ScoreDashboardPage from "../../pages/score-dashboard";
import Profile from "../../pages/profile";
import Page404 from "../../pages/404";

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
            <Route path="/score-dashboard">
                <ScoreDashboardPage />
            </Route>
            <Route path="/forum">
                <Forum />
            </Route>
            <Route path="/thread/:id">
                <Thread />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route path="*">
                <Page404 message="Страница не найдена" />
            </Route>
        </Switch>
    </Router>
);
