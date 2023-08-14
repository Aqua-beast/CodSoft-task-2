const mongoose = require('mongoose');

const carBookingSchema = new mongoose.Schema({
  username: {type: String, required: true},
  pickupLocation: { type: String, required: true },
  returnLocation: { type: String, required: true },
  pickupDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  passengers: { type: Number, required: true },
  carType: { type: String, required: true },
});

const CarBooking = mongoose.model('CarBooking', carBookingSchema);

module.exports = CarBooking;
