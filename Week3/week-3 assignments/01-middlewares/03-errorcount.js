
// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint
const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();

let errorCount = 0;

// Define routes
app.get('/user', function(req, res) {
  throw new Error("User not found");
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  if (err) {
    errorCount++;
    res.status(404).json({ error: 'An error occurred' });
  } else {
    next();
  }
});

// Middleware to handle 404 errors for unmatched routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

module.exports = app;

