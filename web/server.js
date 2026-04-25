const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');

const app = express();

// Rate limiting to prevent abuse of file system access
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.'
});
app.use(limiter);
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'pages')));

// Serve the HTML page at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Development server running on http://localhost:${PORT}`);
});