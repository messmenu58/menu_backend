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

setInterval(() => {
  axios({
      method: 'get',
      url: 'https://travel-companion-dev-jaea.2.sg-1.fl0.io'
  }).then((result) => {
      console.log(result);
  }).catch((err) => {
      console.log(err);
  });;
}, 21600000);