// index.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path'); // Import the path module
// const userRoutes = require('./routes/adminRoutes'); // Import userRoutes file

const app = express();
const PORT = process.env.PORT || 3000;

// Set up middleware
app.use(bodyParser.json());

// // Connect to MongoDB using Mongoose
// mongoose.connect('mongodb://localhost:27017/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, './../public')));

// Define a route to serve the welcome page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});