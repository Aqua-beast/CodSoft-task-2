const jwt = require('jsonwebtoken');
const secretKey = require('./secretKey'); // Assuming you have a secret key stored here


function protectRoute(req, res, next) {
   const token = req.cookies.LoggedIn; 
  // Corrected to 'LoggedIn'
  // console.log(token);
  if (token) {
    try {
      const decodedToken = jwt.verify(token, secretKey);

      if (decodedToken) {
        next();
      } else {
        return res.status(401).json({
          message: 'User not verified'
        });
      }
    } catch (error) {
      return res.status(401).json({
        message: 'Invalid token'
      });
    }
  } else {
    return res.status(401).json({
      message: 'Operation not allowed'
    });
  }
}

module.exports = protectRoute;
