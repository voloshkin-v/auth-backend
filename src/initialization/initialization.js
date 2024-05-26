const express = require('express');

const router = require('~/routes');
const errorMiddleware = require('~/middlewares/error');

const initialization = (app) => {
  app.use(express.json());

  app.use('/', router);

  app.use(errorMiddleware);
};

module.exports = initialization;
