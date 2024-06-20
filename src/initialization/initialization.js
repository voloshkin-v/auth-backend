const express = require('express');
const cookieParser = require('cookie-parser');
var cors = require('cors');

const router = require('~/routes');
const errorMiddleware = require('~/middlewares/error');
const { createError } = require('~/utils/errors');
const {
  errors: { NOT_FOUND },
} = require('~/constants/errors');
const { CLIENT_URL } = require('~/configs/config');

const initialization = (app) => {
  app.use(
    cors({
      origin: CLIENT_URL,
    }),
  );
  app.use(express.json());
  app.use(cookieParser());

  app.use('/', router);

  app.use((req, res, next) => {
    next(createError(404, NOT_FOUND));
  });

  app.use(errorMiddleware);
};

module.exports = initialization;
