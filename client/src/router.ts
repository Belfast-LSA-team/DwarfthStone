import React from "react";
import App from "./App";

import Homepage from "./pages/homepage";
// import Auth from "./pages/auth";
import Login from "./pages/login";
import ContactUs from "./pages/contactUs";
import Register from "./pages/register";
import Forum from "./pages/forum";
import ThreadPage from "./pages/threadPage";
import ScoreDashboardPage from "./pages/score-dashboard";
import Start from "./pages/start";
import Profile from "./pages/profile";
import Page404 from "./pages/404";
import Game from "./pages/game";


export const Routes = [
  {
    ...App,
    routes: [
      {
        ...Homepage,
        path: '/',
        exact: true,
      },
      {
        ...Game,
        path: '/game/',
        exact: true,
      },
      {
        ...ThreadPage,
        path: '/forum/thread/:id',
      },
      {
        ...ScoreDashboardPage,
        path: '/score-dashboard',
      },
      {
        ...Profile,
        path: '/profile',
      },
      {
        ...Start,
        path: '/start',
      },
      {
        ...Login,
        path: '/login',
      },
      {
        ...Register,
        path: '/register',
      },
      {
        ...Forum,
        path: '/forum',
      },
      {
        ...ContactUs,
        path: '/contact-us',
      },
      {
        ...Page404,
      },

    ],
  },
];


