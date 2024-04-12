const express = require("express");
const router = express.Router();
const User = require("../modelscheme/User"); // Import the User model
const fetchUser = require("../middlewere/fetchUser"); // Import the User model
const { body, validationResult } = require("express-validator"); // Import validation functions
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const JWT_SECRET = 'Utsavisagoodman'; // Secret key for JWT token

// Define a route to create a user
router.post(
  "/createuser", // Endpoint URL
  [
    // Validation middleware for request body
    body("name", 'Enter a valid name').isLength({ min: 3 }), // Validate name
    body("email", 'Enter a valid email').isEmail(), // Validate email
    body("password", 'Enter a valid password').isLength({ min: 3 }), // Validate password
  ],
  async (req, res) => { // Async route handler function
    const errors = validationResult(req); // Validate request body
    if (!errors.isEmpty()) { // Check if there are validation errors
      return res.status(400).json({ errors: errors.array() }); // Return validation errors
    }

    try {
      let user = await User.findOne({ email: req.body.email }); // Find if user with provided email already exists

      if (user) { // If user exists
        return res.status(400).json({ msg: "Email already exists" }); // Return error message
      }

      const salt = await bcrypt.genSalt(10);
      let secPassword = await bcrypt.hash(req.body.password, salt);

      user = new User({ // Create a new user instance
        name: req.body.name,
        email: req.body.email,
        password: secPassword
      });

      // Generating JWT token for authentication
      const data = {
        user: {
          id: user.id
        }
      }

      const authToken = jwt.sign(data, JWT_SECRET); // Signing the token with user data and secret key

      // Return the JWT token in response
      res.json({ authToken });

      await user.save(); // Save the new user to the database

      // res.json(user); // Remove this line as response is already sent with authToken
    } catch (err) { // Catch any errors
      console.error(err.message); // Log error message
      res.status(500).send("Server Error"); // Return server error response
    }
  }
);


//Autentication a user using: POST(method) = "/api/auth/login"

router.post(
  "/login", // Endpoint URL for user login
  [
    // Validation middleware for request body
    body("email", 'Enter a valid email').isEmail(), // Validate email
    body("password", 'password can not be blank').exists(), // Validate password
  ], 
  async (req, res) => { // Async route handler function for user login
    const errors = validationResult(req); // Validate request body
    if (!errors.isEmpty()) { // Check if there are validation errors
      return res.status(400).json({ errors: errors.array() }); // Return validation errors
    }

    try {
      const { email, password } = req.body; // Destructuring email and password from request body

      // Check if a user with the provided email exists in the database
      let user = await User.findOne({ email });

      // If user does not exist, return error message
      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      // Compare the provided password with the hashed password stored in the database
      const isMatch = await bcrypt.compare(password, user.password);

      // If passwords do not match, return error message
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      // Generating JWT token for authentication
      const payload = {
        user: {
          id: user.id
        }
      };

      const authToken = jwt.sign(payload, JWT_SECRET); // Signing the token with user data and secret key

      // Return the JWT token in response
      res.json({ authToken });

    } catch (err) { // Catch any errors
      console.error(err.message); // Log error message
      res.status(500).send("Server Error"); // Return server error response
    }
  }
);


//Route 3 = Get logged in user details using : POST "api/auth/getuser".  { loggin required here}
router.post(
  "/getuser", fetchUser, async (req, res) => { // This defines a POST route named "/getuser". 
                                               // The fetchUser middleware is invoked before 
                                               // the route handler. The route handler is 
                                               // an asynchronous function that handles the request and response.
    try {
      // Get the user ID from the request object after authentication
      const userId = req.user.id;

      // Find the user by ID and select all fields except the password
      const user = await User.findById(userId).select('-password');

      // Check if user exists
      if (!user) {
        return res.status(404).json({ msg: 'User not found' }); // If user is not found, 
                                                                // return a 404 status with 
                                                                // a JSON response indicating 
                                                                // "User not found".
      }

      // Return the user details in the response
      res.json(user); // If user is found, return a JSON response with the user details.
    } catch (err) { // Catch any errors
      console.error(err.message); // Log error message to the console
      res.status(500).send("Server Error"); // Return server error response with status 
                                             // 500 and message "Server Error".
    }
  }
);

module.exports = router; // Export the router
