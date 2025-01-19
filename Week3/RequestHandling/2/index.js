const express = require("express");
const app = express();
// rate limiting
let numberOfRequests = 0;
let totalRequestTime = 0;

function calculateRequests(req, res, next) {
  numberOfRequests++;
  const startTime = Date.now();
  res.on("finish", () => {
    const endTime = Date.now();
    const requestTime = endTime - startTime;
    totalRequestTime += requestTime;
    console.log(`Request ${numberOfRequests} took ${requestTime}ms`);
  });
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

// print average request time every 10 requests
setInterval(() => {
  if (numberOfRequests > 0) {
    const averageRequestTime = totalRequestTime / numberOfRequests;
    console.log(`Average request time: ${averageRequestTime}ms`);
  }
}, 10000); // print every 10 seconds

app.listen(3000)