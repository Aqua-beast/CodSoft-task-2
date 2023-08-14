const express = require('express');
const CarBookings = require('../models/CarBooking');
const carBookingRouter = express.Router();
const protectRoute = require('./Helper');

// car bookings
carBookingRouter.get('/carbookings', protectRoute, async (req, res) => {
  try {
    const carBookings = await CarBookings.find().sort({ createdAt: 'desc' });
    res.json(carBookings);
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

carBookingRouter.post('/carbookings', protectRoute, async (req, res) => {
  try {
    const data = req.body;
    const carBookings = await CarBookings.insertMany(data);
    res.json(carBookings);
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

carBookingRouter.delete('/carbookings/', protectRoute, async (req, res) => {
  try {
    const carData = req.body;
    const carBookings = await CarBookings.findOneAndDelete(carData);
    res.json({ message: 'Car booking deleted successfully', carBookings });
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = carBookingRouter;
