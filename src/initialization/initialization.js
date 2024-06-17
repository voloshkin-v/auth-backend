const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('~/routes');
const errorMiddleware = require('~/middlewares/error');
const { createError } = require('~/utils/errors');
const {
  errors: { NOT_FOUND },
} = require('~/constants/errors');

const initialization = (app) => {
  app.use(express.json());
  app.use(cookieParser());

  app.use('/', router);

  app.use((req, res, next) => {
    throw createError(404, NOT_FOUND);
  });

  app.use(errorMiddleware);
};

module.exports = initialization;
