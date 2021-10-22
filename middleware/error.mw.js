const { Error } = require('mongoose');

module.exports.mongooseErrorHandler = (err, req, res, next) => {
  // console.log(`Error`, Error);
  // if (err instanceof Error.DocumentNotFoundError) {
  //   return res
  //     .status(404)
  //     .send({ errors: [{ title: 'Not Found', details: err.errors }] });
  // }
  next(err);
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
