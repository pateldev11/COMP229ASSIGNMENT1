// app.js
const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public\stylesheets\style.css'));

// Require the routes
const indexRoute = require('./routes/index');

// Use the routes
app.use('/', indexRoute);

module.exports = app; // Export the Express app
