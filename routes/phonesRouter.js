const { Router } = require('express');

const phonesRouter = Router();

phonesRouter.route('/');

phonesRouter.route('/:phoneId');

module.exports = phonesRouter;
