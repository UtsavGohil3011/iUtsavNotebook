// Notes.jsx

import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext"; // Importing the `NoteContext` from the specified location
import Noteitem from "./Noteitem"; // Importing the `Noteitem` component from the specified location
import "../App.css"; // Importing CSS styles for the component

// Functional component `Notes` to display all notes
const Notes = () => {
  // Destructuring `notes` and `delNote` from the context using `useContext` hook
  const { notes, addNote } = useContext(NoteContext);

  return (
    <div>
      <h1 className="text-center">Your Notes</h1><br/>

      <div className="cru">{/* Container for displaying individual note items */}
        {/* Mapping through each note in the `notes` array */}
        {notes.map((note) => {
          // Returning a `Noteitem` component with each note and onDelete function passed as props
          return <Noteitem key={note._id} note={note}  />;
        })}
      </div>
    </div>
  );
};

export default Notes; // Exporting the `Notes` component as the default export
