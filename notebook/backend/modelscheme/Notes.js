const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the structure of the Notes document in MongoDB
const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User document
        ref: 'user' // Reference the 'user' collection
    },
    title: {
        type: String,
        required: true // Title is required
    },
    description: {
        type: String,
        required: true, // Description is required
    },
    tag: {
        type: String,
        default: 'General' // Default tag value if not provided
    },
    date: {
        type: Date,
        default: Date.now // Default date value if not provided
    }
});

module.exports = mongoose.model('Notes', NotesSchema); // Export the Notes model