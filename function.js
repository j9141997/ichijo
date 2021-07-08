const {https, config} = require('firebase-functions');
const {default: next} = require('next');
const express = require('express');

const isDev = process.env.NODE_ENV !== 'production';

const routes = require('next-routes');
const basicAuth = require('basic-auth-connect');

const {username, password} = config().someservice;

const nextApp = next({
  dev: isDev,
  conf: {distDir: '.next'},
});
const server = express();

const nextjsHandle = routes().getRequestHandler(nextApp);
server.use(basicAuth(username, password));
server.get('*', (req, res) => nextjsHandle(req, res));

exports.nextServer = https.onRequest(server);
