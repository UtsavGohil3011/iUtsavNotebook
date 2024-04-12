// Importing the Mongoose library and extracting the Schema class from it
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Defining the schema for the User model
const UserSchema = new Schema({
    // Field for the user's name
    name: {
        type: String,
        required: true // Ensures that this field is required
    },
    // Field for the user's email
    email: {
        type: String,
        required: true, // Ensures that this field is required
        unique: true // Ensures that each email is unique in the database
    },
    // Field for the user's password
    password: {
        type: String,
        required: true // Ensures that this field is required
    },
    // Field for the registration date of the user
    date: {
        type: Date,
        default: Date.now // Sets the default value to the current date/time
    }
});

// Creating a Mongoose model named 'User' based on the UserSchema
module.exports = mongoose.model('User', UserSchema);
