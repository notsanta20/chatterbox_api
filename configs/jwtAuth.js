const jwt = require("jsonwebtoken");
require("dotenv").config();

function getToken(req, res, next) {
  const bearerToken = req.headers["authorization"];

  if (typeof bearerToken !== "undefined") {
    const token = bearerToken.split(" ")[1];
    req.token = token;
  } else {
    req.authorization = false;
  }
  next();
}

function verifyToken(req, res, next) {
  const token = req.token;
  const secret = process.env.ACCESS_TOKEN_SECRET;
  if (token) {
    jwt.verify(token, secret, (err, authData) => {
      if (err) {
        req.authorization = false;
      } else {
        req.authorization = true;
        req.user = authData.user;
      }
    });
  } else {
    req.authorization = false;
  }

  next();
}

module.exports = {
  getToken,
  verifyToken,
};
