const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Admin = require('./models/Admin');
const User = require('./models/User');
const Course = require('./models/Course');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://w-kiran:blablabla%40123@cluster0.irxbhj5.mongodb.net/course-selling', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware for authentication
const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;
  if (!username || !password) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  req.auth = { username, password };
  next();
};

// Admin routes
app.post('/admin/signup', async (req, res) => {
  const { username, password } = req.body;
  const admin = new Admin({ username, password });
  await admin.save();
  res.json({ message: 'Admin created successfully' });
});

app.post('/admin/courses', authMiddleware, async (req, res) => {
  const { username, password } = req.auth;
  const admin = await Admin.findOne({ username, password });
  if (!admin) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { title, description, price, imageLink } = req.body;
  const course = new Course({ title, description, price, imageLink });
  await course.save();
  res.json({ message: 'Course created successfully', courseId: course._id });
});

app.get('/admin/courses', authMiddleware, async (req, res) => {
  const { username, password } = req.auth;
  const admin = await Admin.findOne({ username, password });
  if (!admin) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const courses = await Course.find({});
  res.json({ courses });
});

// User routes
app.post('/users/signup', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.json({ message: 'User created successfully' });
});

app.get('/users/courses', authMiddleware, async (req, res) => {
  const { username, password } = req.auth;
  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const courses = await Course.find({ published: true });
  res.json({ courses });
});

app.post('/users/courses/:courseId', authMiddleware, async (req, res) => {
  const { username, password } = req.auth;
  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const course = await Course.findById(req.params.courseId);
  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }

  user.purchasedCourses.push(course._id);
  await user.save();
  res.json({ message: 'Course purchased successfully' });
});

app.get('/users/purchasedCourses', authMiddleware, async (req, res) => {
  const { username, password } = req.auth;
  const user = await User.findOne({ username, password }).populate('purchasedCourses');
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  res.json({ purchasedCourses: user.purchasedCourses });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
