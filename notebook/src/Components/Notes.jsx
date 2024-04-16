import React from "react";
import { useContext } from "react"; // Importing the `useContext` hook from React
import NoteContext from "../context/notes/noteContext"; // Importing the `NoteContext` from the specified location
import Noteitem from "./Noteitem"; // Importing the `Noteitem` component from the specified location
import "../App.css"; // Importing CSS styles for the component

// Functional component `Notes`
const Notes = () => {
  // Destructuring `notes` and `setNotes` from the context using `useContext` hook
  const { notes, setNotes } = useContext(NoteContext);

  return (
    <div>
      
      <h1 className="text-center">Your Note</h1><br/>

      
      <div className="cru">{/* Container for displaying individual note items */}
        {/* Mapping through each note in the `notes` array */}
        {notes.map((note) => {
          // Returning a `Noteitem` component with each note passed as a prop
          return <Noteitem note={note} />;
        })}
      </div>
    </div>
  );
};

export default Notes; // Exporting the `Notes` component as the default export
