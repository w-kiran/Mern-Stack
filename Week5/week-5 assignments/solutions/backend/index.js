// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Connect to MongoDB
mongoose.connect("mongodb+srv://w-kiran:blablabla%40123@cluster0.irxbhj5.mongodb.net/business-cards")


// Define the User model
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  interests: {
    type: [String],
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: true,
  },
  otherSocialMedia: {
    label: String,
    url: String,
  },
});

const User = mongoose.model('User', UserSchema);

// Create the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/users', async (req, res) => {
  const { name, description, interests, linkedin, twitter, otherSocialMedia } = req.body;

  const user = new User({
    name,
    description,
    interests,
    linkedin,
    twitter,
    otherSocialMedia,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
