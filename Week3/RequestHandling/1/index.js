const express = require("express");
const app = express();

let numberOfRequests = 0;

function calculateRequests(req, res, next) {
  numberOfRequests++;
  console.log(`Request count: ${numberOfRequests}`);
  next();
}

app.use(express.json());
app.use(calculateRequests); // use the middleware function

app.post("/health-checkup", function (req, res) {
  console.log(req.body);
  res.json({
    msg: "hi there"
  });
});

app.get("/health-checkup2", function (req, res) {
  res.json({
    msg: "hello"
  });
});

app.listen(3000)