const { Error } = require('mongoose');

module.exports.mongooseErrorHandler = (err, req, res, next) => {
  if (err instanceof Error) {
    return res
      .status(422)
      .send({ errors: [{ title: 'Mongo Error', details: err.errors }] });
  }
  next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }
  res
    .status(err?.status ?? 500)
    .send({ errors: [{ title: err?.message ?? 'Internal server error' }] });
};
