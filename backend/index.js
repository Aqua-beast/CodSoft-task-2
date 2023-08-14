const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const port = process.env.PORT;
const mongo_db_uri = process.env.MONGO_DB_URI;

app.use(bodyParser.json());
const allowedOrigins = ['http://localhost:3000']; // Update with your frontend URL

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser()); 

// Define your routers
const airlinesRoutes = require('./routes/airlinesRouter');
const hotelRouter = require('./routes/hotelRouter');
const carbookingRouter = require('./routes/carbookingsRouter');
const loginRouter = require('./routes/loginRouter');
const signupRouter = require('./routes/signupRouter');

// Defining routes
app.use('/', airlinesRoutes);
app.use('/', hotelRouter);
app.use('/', carbookingRouter);
app.use('/', loginRouter);
app.use('/', signupRouter);

// mongodb connection
mongoose.connect(mongo_db_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connection successful');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
  });

