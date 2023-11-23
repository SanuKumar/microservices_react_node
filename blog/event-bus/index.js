const express = require("express");
const bodyParser = require("body-parse");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/event", (req, res) => {
  const event = req.body();

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);

  res.send({ status: "OK" });
});
