const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('./models/Admin');
const User = require('./models/User');
const Course = require('./models/Course');

const secretKey = "12345678";
const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://w-kiran:blablabla%40123@cluster0.irxbhj5.mongodb.net/course-selling-jwt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token == null) return res.status(401).json({ message: 'Token required' });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
};

// Admin routes
app.post('/admin/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const admin = new Admin({ username, password: hashedPassword });
  try {
    await admin.save();
    res.json({ message: 'Admin created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating admin', error: err });
  }
});

app.post('/admin/signin', async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ username: admin.username }, secretKey, { expiresIn: '1h' });
  res.json({ token, message: 'Admin has signed in and token has been generated successfully' });
});

app.post('/admin/courses', authenticateToken, async (req, res) => {
  const admin = await Admin.findOne({ username: req.user.username });
  if (!admin) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { title, description, price, imageLink } = req.body;
  const course = new Course({ title, description, price, imageLink });
  try {
    await course.save();
    res.json({ message: 'Course created successfully', courseId: course._id });
  } catch (err) {
    res.status(500).json({ message: 'Error creating course', error: err });
  }
});

app.get('/admin/courses', authenticateToken, async (req, res) => {
  try {
    const courses = await Course.find();
    res.json({ courses });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching courses', error: err });
  }
});

// User routes
app.post('/users/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  try {
    await user.save();
    res.json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err });
  }
});

app.post('/users/signin', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
  res.json({ token });
});

app.get('/users/courses', authenticateToken, async (req, res) => {
  try {
    const courses = await Course.find();
    res.json({ courses });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching courses', error: err });
  }
});

app.post('/users/courses', authenticateToken, async (req, res) => {
  try {
    const { courseId } = req.body; // Assuming courseId is sent in the request body

    // Validate courseId format
    if (!isValidObjectId(courseId)) {
      return res.status(400).json({ message: 'Invalid course ID format' });
    }

    const course = await Course.findById(courseId); // Use findById with courseId
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const user = await User.findOne({ username: req.headers.username }); // Find user by username
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.purchasedCourses.includes(course._id)) {
      return res.status(400).json({ message: 'Course already purchased' });
    }

    user.purchasedCourses.push(course._id);
    await user.save();

    res.json({ message: 'Course purchased successfully' });
  } catch (err) {
    console.error('Error purchasing course:', err); // Log the error
    res.status(500).json({ message: 'Error purchasing course', error: err.message });
  }
});


app.get('/users/purchasedCourses', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.headers.username }).populate('purchasedCourses');
    res.json({ purchasedCourses: user.purchasedCourses });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching purchased courses', error: err });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
