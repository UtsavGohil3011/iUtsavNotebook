// Importing the Mongoose library
const mongoose = require('mongoose');

// Defining the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/iNotebookapp';

// Defining a function to connect to the MongoDB database
const connectMongo = () => {
    // Connecting to the MongoDB database using Mongoose
    mongoose.connect(mongoURL)
    // If the connection is successful, log a success message
    .then(() => {
        console.log('Database connected successfully...');
    })
    // If there is an error connecting to the database, log the error
    .catch((err) => {
        console.log(err);
    });
}

// Exporting the connectMongo function to be used in other modules
module.exports = connectMongo;
