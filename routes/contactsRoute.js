const express = require("express");
const app = express.Router();
const getAllUsers = require("../controllers/getAllUsers");
const getContacts = require("../controllers/getContacts");
const addContact = require("../controllers/addContact");

app.get("/users", getAllUsers);
app.get("/contacts", getContacts);
app.post("/contacts", addContact);

module.exports = app;
