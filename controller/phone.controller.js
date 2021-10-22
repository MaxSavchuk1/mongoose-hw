const createError = require('http-errors');
const { Phone } = require('./../models');

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const newPhoneInstance = new Phone(body);
    const createdPhone = await newPhoneInstance.save();
    if (createdPhone) {
      return res.status(201).send({ data: createdPhone });
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

module.exports.getPhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;
  try {
    const foundPhone = await Phone.findById(phoneId);
    if (foundPhone) {
      return res.status(200).send({ data: foundPhone });
    }
    next(createError(404, 'Phone not found'));
  } catch (e) {
    next(e);
  }
};

module.exports.updatePhoneById = async (req, res, next) => {
  const {
    body,
    params: { phoneId },
  } = req;
  try {
    const updatedPhone = await Phone.findByIdAndUpdate(phoneId, body, {
      new: true,
    });
    if (updatedPhone) {
      return res.status(200).send({ data: updatedPhone });
    }
    next(createError(404, 'Phone not found'));
  } catch (e) {
    next(e);
  }
};

module.exports.deletePhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;
  try {
    const deletedPhone = await Phone.findByIdAndDelete(phoneId);
    if (deletedPhone) {
      return res.status(200).send({ data: deletedPhone });
    }
    next(createError(404, 'User not found'));
  } catch (e) {
    next(e);
  }
};
