const express = require("express");
const app = express();

//API 1
app.get("/", (request, response) => {
  response.send("Home Page");
});

//API2
app.get("/about", (request, response) => {
  response.send("About page");
});


module.exports = app;
