const errorMiddleware = (err, req, res, next) => {
  const status = 500;
  const code = 'CODE';
  const message = err.message;

  res.status(status).json({
    err,
    status,
    code,
    message,
  });
};

module.exports = errorMiddleware;
