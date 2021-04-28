import React from "react";

import { renderRoutes } from "react-router-config";

import "./common.css";
import "./assets/css/fonts.css";

const App = ({ route }) => {
    return <div>{renderRoutes(route.routes)}</div>;
};

export default {
    component: App,
};
