const express = require("express");
const app = express.Router();
const signup = require("../controllers/signup");
const login = require("../controllers/login");

app.post("/signup", signup);
app.post("/login", login);

module.exports = app;
