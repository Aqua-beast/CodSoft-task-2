const mongoose = require('mongoose');

const airlinesSchema = new mongoose.Schema({
  username: {type: String, required: true},
  from: { type: String, required: true },
  to: { type: String, required: true },
  departure: { type: Date, required: true },
  return: { type: Date, required: true },
  adults: { type: Number, required: true },
  children: { type: Number, required: true },
  cabinClass: { type: String, required: true },
});

const Airlines = mongoose.model('Airlines', airlinesSchema);

module.exports = Airlines;
