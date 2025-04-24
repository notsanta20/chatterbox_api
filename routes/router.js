const express = require("express");
const router = express.Router();
const authRoute = require("./authRoute");
const messageRoute = require("./messageRoute");
const groupMessageRoute = require("./groupMessageRoute");
const contactsRoute = require("./contactsRoute");
const jwtAuth = require("../configs/jwtAuth");

router.use("/", jwtAuth.getToken, jwtAuth.verifyToken, authRoute);
router.use("/", jwtAuth.getToken, jwtAuth.verifyToken, messageRoute);
router.use("/", jwtAuth.getToken, jwtAuth.verifyToken, groupMessageRoute);
router.use("/", jwtAuth.getToken, jwtAuth.verifyToken, contactsRoute);

module.exports = router;
