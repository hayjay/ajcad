//this middleware would be responsible to get a token from the request
// and proceeds only when token is validated
let jwt = require('jsonwebtoken');
const CONFIG = require('../config/app_config');
let checkToken = (req, res, next) => {
    //Capture headers with names ‘x-access-token’ or ‘Authorization.’
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    // If the header is in ‘Authorization: Bearer xxxx…’ format, strip unwanted prefix before token.
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }
  
    if (token) {
        // if token exist then use jwt package and secret string, validate the token.
      jwt.verify(token, CONFIG.jwt_encryption, (err, decoded) => {
        if (err) {
            // If anything goes wrong, return an error immediately before passing control to next handler.
          return res.json({
            success: false,
            message: 'Invalid Token'
          });
        } else {
          // if everything good, save to request for use in other routes
          req.auth_user_id = decoded.id;
          next();//continue to process the request
        }
      });
    } else {
      return res.json({
        success: false,
        message: 'Auth token is not supplied'
      });
    }
  };
  
//   Export the middleware function for other modules to use.
  module.exports = {
    checkToken: checkToken
  }
  