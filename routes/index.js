// routes/index.js
const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('home');
});

// About page
router.get('/about', (req, res) => {
  res.render('about');
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/services',(req, res) => {
  res.render('services');
});

module.exports = router;
