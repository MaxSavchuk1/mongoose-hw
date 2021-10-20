const createError = require('http-errors');
const { Phone } = require('./../models');

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const newPhoneInstance = new Phone(body);
    const createdPhone = await newPhoneInstance.save();
    if (createdPhone) {
      return res.status(200).send({ data: createdPhone });
    }
    next(createError(400, 'Bad request'));
  } catch (err) {
    next(err);
  }
};

module.exports.getPhones = async (req, res, next) => {
  try {
    const foundPhones = await Phone.find().limit(10);
    res.status(200).send({ data: foundPhones });
  } catch (err) {
    next(err);
  }
};
