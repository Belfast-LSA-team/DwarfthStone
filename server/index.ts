// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;
// import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import { Routes } from '../client/src/router';
import { renderer } from './helpers/renderer';
// import { createStoreServer } from './helpers/createStore';
import { RequestOptions } from 'http';

const app = express();
app.use(express.static('public'));

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts: RequestOptions) {
      opts.headers['x-forwarded-host'] = 'localhost:7000';
      return opts;
    },
  })
);

app.get('*', (req, res) => {
  //  const store = createStoreServer(req);
  const store = {};

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  // Promise.all(promises).then(() => {
  //   res.send(renderer(req, store));
  // });
  Promise.all(promises).then(() => {
    res.send(renderer(req));
  });

});

app.listen(7000, () => {
  console.log('Listening');
});
