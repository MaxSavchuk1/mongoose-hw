const { Router } = require('express');
const { phoneController } = require('./../controller');
const phonesRouter = Router();

phonesRouter
  .route('/')
  .get(phoneController.getPhones)
  .post(phoneController.createPhone);

phonesRouter
  .route('/:phoneId')
  .get(phoneController.getPhoneById)
  .patch(phoneController.updatePhoneById)
  .delete(phoneController.deletePhoneById);

module.exports = phonesRouter;
