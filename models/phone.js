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
    validate: {
      validator: Number.isInteger,
    },
    min: 1984,
    max: new Date().getFullYear(),
  },
  ramSize: {
    type: Number,
    min: 0.5,
    max: 128,
  },
  processor: {
    type: String,
  },
  screenSize: {
    type: Number,
    min: 1,
    max: 10,
  },
  isHavingNfc: {
    type: Boolean,
  },
});

phoneSchema.index({ brand: 1, model: 1 }, { unique: true });

const Phone = mongoose.model('phones', phoneSchema);

module.exports = Phone;
