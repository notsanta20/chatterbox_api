const express = require("express");
const app = express.Router();
const groupMessageGet = require("../controllers/groupMessageGet");
const groupMessagePost = require("../controllers/groupMessagePost");

app.get("/grp-msg", groupMessageGet);
app.post("/grp-msg", groupMessagePost);

module.exports = app;
