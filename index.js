const express = require("express");
const app = express();
const { default: axios } = require("axios");


require('./admin-sdk');

app.listen(3000, function () {
  console.log("Server is running");
});
