
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second
const express = require('express');
const app = express();

// Object to keep track of the number of requests per user
let numberOfRequestsForUser = {};

// Reset the request counts every second
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);

// Middleware to rate limit requests
function rateLimiter(req, res, next) {
    const userId = req.headers['user-id'];
    if (!userId) {
        return res.status(400).json({ error: 'User ID is required in headers' });
    }
    
    // Initialize the request count for the user if not already done
    if (!numberOfRequestsForUser[userId]) {
        numberOfRequestsForUser[userId] = 0;
    }

    // Increment the request count for the user
    numberOfRequestsForUser[userId]++;
    
    // Check if the request count exceeds the limit
    if (numberOfRequestsForUser[userId] > 5) {
        return res.status(404).json({ error: 'Rate limit exceeded' });
    } else {
        next();
    }
}

app.use(rateLimiter);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
