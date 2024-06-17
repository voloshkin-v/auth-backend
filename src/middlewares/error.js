const errorMiddleware = (err, req, res, next) => {
  const { status, message, code } = err;

  res.status(status).json({
    code,
    message,
  });
};

module.exports = errorMiddleware;
