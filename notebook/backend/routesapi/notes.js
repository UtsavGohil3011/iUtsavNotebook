// Import required modules
const express = require('express');
const router = express.Router();
const fetchUser = require("../middlewere/fetchUser"); // Import middleware to fetch user
const Notes = require("../modelscheme/Notes"); // Import the Notes model
const { body, validationResult } = require("express-validator"); // Import validation functions

// Route 1: Get all the notes: GET: "/api/auth/fetchallnotes": Login required
router.get("/fetchallnotes", fetchUser, async (req, res) => {
    try {
        // Fetch all notes belonging to the authenticated user
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes); // Send the notes as a JSON response
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error"); // If there's an error, send a 500 server error response
    }
});

// Route 2: Add a new note: POST: "/api/auth/addnote": Login required
router.post("/addnote", fetchUser, [
    // Validate the title field: must be present and have a minimum length of 3 characters
    body("title", 'Enter a valid title').isLength({ min: 3 }), 
    // Validate the description field: must be present and have a minimum length of 5 characters
    body("description", 'Description length should be 5').isLength({ min: 5 }), 
], async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); // Return validation errors if any
        }

        // Create a new note object based on the request body
        const newNote = new Notes({
            user: req.user.id, // Associate the note with the authenticated user
            title: req.body.title, // Set the title of the note
            description: req.body.description, // Set the description of the note
            // Additional fields like 'tag' and 'date' can be set based on requirements
        });

        // Save the new note to the database
        const note = await newNote.save();

        // Send a JSON response indicating success and the newly created note
        res.json(note);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error"); // If there's an error, send a 500 server error response
    }
});


// Route 3: Update a existing note : PUT: "/api/auth/updatenotes": Login required

// Route to update a note
router.put("/updatenotes/:id", fetchUser, async (req, res) => {
    try {
        // Extracting data from the request body
        const { title, description, tag } = req.body;

        // Creating an object to store updated note data
        const updatedNoteData = {};

        // Checking if title, description, or tag is present in the request body
        if (title) { 
            updatedNoteData.title = title; 
        }
        if (description) { 
            updatedNoteData.description = description; 
        }
        if (tag) { 
            updatedNoteData.tag = tag; 
        }

        // Finding the note by ID and updating it with the new data
        const noteToUpdate = await Notes.findById(req.params.id);

        // If note is not found
        if (!noteToUpdate) {
            return res.status(404).json({ msg: 'Note not found' });
        }

        // Checking if the user is authorized to update the note
        if (noteToUpdate.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        // Updating the note
        const updatedNote = await Notes.findByIdAndUpdate(req.params.id, { $set: updatedNoteData }, { new: true });

        // Sending the updated note as response
        res.json(updatedNote);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error"); // If there's an error, send a 500 server error response
    }
});


router.delete("/deletenotes/:id", fetchUser, async (req, res) => {
    try {
        // Finding the note by ID
        const noteToDelete = await Notes.findById(req.params.id);

        // If note is not found
        if (!noteToDelete) {
            return res.status(404).json({ msg: 'Note not found' });
        }

        // Checking if the user is authorized to delete the note
        if (noteToDelete.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        // Deleting the note
        await Notes.findByIdAndDelete(req.params.id);

        // Sending a success message as response
        res.json({ msg: 'Note deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error"); // If there's an error, send a 500 server error response
    }
});






module.exports = router; // Export the router to make it available for use in other files
