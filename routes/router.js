const express = require("express");
const router = express.Router();
const authRoute = require("./authRoute");
const jwtAuth = require("../configs/jwtAuth");

router.use("/", jwtAuth.getToken, jwtAuth.verifyToken, authRoute);

module.exports = router;
