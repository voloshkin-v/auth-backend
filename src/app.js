const express = require('express');
require('dotenv').config();

require('../module-alias');
const setupServer = require('~/initialization/server');

const app = express();

const start = async () => {
  try {
    await setupServer(app);
  } catch (error) {
    console.log(error);
  }
};

start();
