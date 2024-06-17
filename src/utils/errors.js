const createError = (status, errorInfo) => {
  const error = new Error(errorInfo.message);

  error.code = errorInfo.code;
  error.status = status;

  return error;
};

module.exports = {
  createError,
};
