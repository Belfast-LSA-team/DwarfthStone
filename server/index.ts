// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;
// import 'babel-polyfill';
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import { Routes } from "../client/src/router";
import { renderer } from "./helpers/renderer";
import { createStoreServer } from "./helpers/createStore";
import { RequestOptions } from "http";
const { createProxyMiddleware } = require("http-proxy-middleware");
import bodyParser from "body-parser";

import apiRouter from "./db/api";
import db from "./db/connect";

const app = express();
app.use(express.static("public"));

app.use(bodyParser.json());

app.use(
    "/api/yandex",
    proxy("http://ya-praktikum.tech/", {
        https: false,
        proxyReqOptDecorator(opts: RequestOptions) {
            opts.headers["Content-Type"] = "application/json";
            opts.method = "GET";
            return opts;
        },
    })
);

app.use("/api/db", apiRouter);

app.get("*", (req, res) => {
    const store = createStoreServer(req);
    //Some logic to init and load data into store

    const promises = matchRoutes(Routes, req.path)
        .map(({ route }) => {
            return route.loadData ? route.loadData(store) : null;
        })
        .map((promise) => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve);
                });
            }
        });

    const render = () => {
        const context = {};
        const content = renderer(req, store, context);
        if (context.url) {
            return res.redirect(301, context.url);
        }
        if (context.notFound) {
            res.status(404);
        } else {
            res.send(content);
        }
    };

    Promise.all(promises).then(render).catch(render);
});

db.authenticate();
db.sync(); // Передай {force: true} чтобы дропнуть все имеющиеся таблицы

app.listen(3000, () => {
    console.log("Listening");
});
