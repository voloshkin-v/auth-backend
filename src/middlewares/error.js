const errorMiddleware = (err, req, res, next) => {
  console.log('Error middleware!', err);

  res.json({
    status: 'error!',
  });
};

module.exports = errorMiddleware;
