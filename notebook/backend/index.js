// Importing required modules
const connectMongo = require('./db'); // Import database connection function
const express = require('express'); // Import Express framework

// Connecting to MongoDB
connectMongo(); // Call the function to connect to MongoDB

// Creating an instance of Express application
const app = express();

// Setting up the port
const port = 5000;


// Middleware to parse JSON requests
app.use(express.json());

// Setting up routes
app.use('/api/auth', require('./routesapi/auth')); // Authentication routes
app.use('/api/notes', require('./routesapi/notes')); // Routes for managing notes

// Start listening on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}...`);
});



