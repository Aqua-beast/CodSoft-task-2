const express = require('express');
const Airlines = require('../models/Airlines');
const airlinesRouter = express.Router();
const protectRoute = require('./Helper');

// airlines
airlinesRouter.get('/airlines', protectRoute, async (req, res) => {
  try {
    const airlines = await Airlines.find().sort({ createdAt: 'desc' });
    res.json(airlines);
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

airlinesRouter.post('/airlines', protectRoute, async (req, res) => {
  try {
    const data = req.body;
    const airlines = await Airlines.insertMany(data);
    res.json(airlines);
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

airlinesRouter.delete('/airlines', protectRoute, async (req, res) => {
  try {
    const airdata = req.body;
    const airlines = await Airlines.findOneAndDelete(airdata);
    res.json({ message: 'Airlines deleted successfully', airlines });
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = airlinesRouter;
