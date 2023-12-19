"use strict";

const express = require("express");

// constants
const PORT = 8080;
const HOST = "0.0.0.0";

// app
const app = express();
app.get("/", (req, res) => {
  res.send('<h2 style="color: purple">Home Page</h2>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
