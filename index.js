const express = require("express");
const app = express();
const { default: axios } = require("axios");
require('dotenv').config();


app.listen(process.env.PORT, function () {
  console.log("Server is running");
  console.log(process.env.PORT);
  require('./admin-sdk');
});

app.use('/', (req, res) => {
  console.log("get request");
  res.send('I am running!');
});

