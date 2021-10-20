const { Router } = require('express');
const { phoneController } = require('./../controller');
const phonesRouter = Router();

phonesRouter
  .route('/')
  .get(phoneController.getPhones)
  .post(phoneController.createPhone);

phonesRouter.route('/:phoneId');

module.exports = phonesRouter;
