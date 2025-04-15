const express = require("express");
const app = express();
const path = require("path");
const assetPath = path.join(__dirname, "public");
const cors = require("cors");
const router = require("./routes/router");
require("dotenv").config();
const port = process.env.LOCAL_PORT;

app.use(express.static(assetPath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
