const mongoose = require('mongoose');
const validator = require('email-validator');

const signupSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: {
    type: String, required: true, unique: true, unique: true,
    lowercase: true,
    validate: {
      validator: (value) => validator.validate(value), // Use the email-validator library here
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: { type: String, required: true },
});

const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;
