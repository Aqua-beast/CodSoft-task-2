const mongoose = require('mongoose');

const hotelsSchema = new mongoose.Schema({
  username: { type: String, required: true },
  location: { type: String, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  guests: { type: Number, required: true },
  roomType: { type: String, required: true },
});

const Hotels = mongoose.model('Hotels', hotelsSchema);

module.exports = Hotels;
