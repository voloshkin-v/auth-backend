const express = require('express');

const router = require('~/routes');
const errorMiddleware = require('~/middlewares/error');

const initialization = (app) => {
  app.use(express.json());

  app.use('/', router);

  app.use((req, res, next) => {
    next(new Error('not found route'));
  });

  app.use(errorMiddleware);
};

module.exports = initialization;
