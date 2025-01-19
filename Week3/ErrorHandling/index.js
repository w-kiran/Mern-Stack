const express = require("express");

const app = express();

app.post("/health-checkup", function (req, res) {
  // do something with kidney here
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("Your kidney length is " + kidneyLength);
});

app.use((error, req, res, next) => {
  console.error(error); // Log the error for debugging
  res.status(500).send("An internal server error occurred");
});

app.listen(3000);