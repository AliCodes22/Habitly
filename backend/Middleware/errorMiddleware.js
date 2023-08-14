const errorHandler = (error, req, res, next) => {
  let statusCode = res.statusCode ? res.statusCode : 500;

  return res.status(statusCode).json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
    status: statusCode,
  });
};

module.exports = { errorHandler };
