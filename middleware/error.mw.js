const { Error } = require('mongoose');

module.exports.mongooseErrorHandler = (err, req, res, next) => {
  if (err instanceof Error.CastError) {
    // когда вместо id ввести что-то вообще не похожее на ObjectId, то выдает такую ошибку. Некая ошибка приведения. Непонятно
    return res
      .status(404)
      .send({ errors: [{ title: 'Not Found', details: err.errors }] });
  }
  if (err instanceof Error) {
    return res
      .status(422)
      .send({ errors: [{ title: err.name, details: err.errors }] });
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
