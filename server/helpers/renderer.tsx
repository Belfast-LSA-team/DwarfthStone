import { Request } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Routes } from "../../client/src/router";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";

export const renderer = (req: Request) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <div>{renderRoutes(Routes)} </div>
        </StaticRouter>
    );

    return `
	<html>
		<head>
    <link rel="stylesheet" href="https://unpkg.com/react-toastify@latest/dist/ReactToastify.css"/>
    
    </head>
		<body>
		<div id="root">${content}</div>
		<script src="bundle.js"></script>
		</body>

	</html>
	`;
};
