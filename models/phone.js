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
      //   validator: year => year > 1984 && year <= new Date().getFullYear(),
    },
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

phoneSchema.index({ brand: 1, model: 1 }, { unique: true });

const Phone = mongoose.model('phones', phoneSchema);

module.exports = Phone;
