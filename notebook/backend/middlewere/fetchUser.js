// Import the jsonwebtoken module to work with JSON Web Tokens
const jwt = require('jsonwebtoken');

// Define a middleware function named fetchUser
const fetchUser = (req, res, next) => {
    // Define the secret key used for signing and verifying JWT tokens
    const JWT_SECRET = 'Utsavisagoodman'; // Replace with your actual secret key

    // Extract the JWT token from the request headers
    const token = req.header('auth-token');

    // Check if the token exists
    if (!token) {
        // If token is missing, send a 401 Unauthorized error response
        return res.status(401).send({ error: 'Please provide a valid token' });
    }

    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, JWT_SECRET);

        // If verification is successful, extract the user information from the token
        req.user = decoded.user;

        // Call the next middleware in the chain
        next();
    } catch (error) {
        // If an error occurs during token verification, send a 401 Unauthorized error response
        return res.status(401).send({ error: 'Invalid token' });
    }
};

// Export the fetchUser middleware function
module.exports = fetchUser;
