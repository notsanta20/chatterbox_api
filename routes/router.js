const express = require("express");
const router = express.Router();
const authRoute = require("./authRoute");
const messageRoute = require("./messageRoute");
const jwtAuth = require("../configs/jwtAuth");

router.use("/", jwtAuth.getToken, jwtAuth.verifyToken, authRoute);
router.use("/", jwtAuth.getToken, jwtAuth.verifyToken, messageRoute);

module.exports = router;
