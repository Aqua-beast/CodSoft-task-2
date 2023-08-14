const express = require('express');
const Hotels = require('../models/Hotels');
const hotelsRouter = express.Router();
const protectRoute = require('./Helper');

// hotels
hotelsRouter.get('/hotels', protectRoute, async (req, res) => {
  try {
    const hotels = await Hotels.find().sort({ createdAt: 'desc' });
    res.json(hotels);
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

hotelsRouter.post('/hotels', protectRoute, async (req, res) => {
  try {
    const data = req.body;
    const hotels = await Hotels.insertMany(data);
    res.json(hotels);
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

hotelsRouter.delete('/hotels', protectRoute, async (req, res) => {
  try {
    const hoteldata = req.body;
    const hotels = await Hotels.findOneAndDelete(hoteldata);
    res.json({ message: 'Hotels deleted successfully', hotels });
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = hotelsRouter;
