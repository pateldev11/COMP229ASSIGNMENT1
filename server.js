// server.js
const app = require('./app'); // Import your Express app from app.js
const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
