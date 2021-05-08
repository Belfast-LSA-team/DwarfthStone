import React from "react";
import { renderRoutes } from "react-router-config";

import "./common.css";
import "./assets/css/fonts.css";
//@ts-ignore

const App = ({ route }) => {
    return (
        <div>
            <div>{renderRoutes(route.routes)}</div>
        </div>
    );
};

export default {
    component: App,
};
