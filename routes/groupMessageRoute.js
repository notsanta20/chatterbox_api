const express = require("express");
const app = express.Router();
const groupMessageGet = require("../controllers/groupMessageGet");
const groupMessagePost = require("../controllers/groupMessagePost");
const createGroup = require("../controllers/createGroup");
const joinGroup = require("../controllers/createGroup");

app.get("/grp-msg", groupMessageGet);
app.post("/grp-msg", groupMessagePost);
app.post("/create-grp", createGroup);
app.post("/join-grp", joinGroup);

module.exports = app;
