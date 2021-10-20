const mongoose = require('mongoose');
const { Schema } = mongoose;

const phoneSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  manufactureYear: {
    type: Number,
    required: true,
  },
  ramSize: {
    type: Number,
  },
  processor: {
    type: String,
  },
  screenSize: {
    type: Number,
  },
  isHavingNfc: {
    type: Boolean,
  },
});

const Phone = mongoose.model('phones', phoneSchema);

module.exports = Phone;
