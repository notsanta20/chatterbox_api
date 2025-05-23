const express = require("express");
const app = express.Router();
const messageGet = require("../controllers/messageGet");
const messagePost = require("../controllers/messagePost");

app.get("/message/:receiverId", messageGet);
app.post("/message", messagePost);

module.exports = app;
