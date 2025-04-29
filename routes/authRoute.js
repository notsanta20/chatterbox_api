const express = require("express");
const app = express.Router();
const signup = require("../controllers/signup");
const login = require("../controllers/login");
const editBio = require("../controllers/editBio");

app.post("/signup", signup);
app.post("/login", login);
app.post("/bio", editBio);

module.exports = app;
