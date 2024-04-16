// Importing necessary modules from React library
import React, { useState } from "react";

// Importing NoteContext, presumably a context for managing notes
import NoteContext from "./noteContext";

// Creating a functional component called NoteState
const NoteState = (props) => {


  const prevnotes = [
    {
      "_id": "661e1251dd894d7b788b84b7",
      "user": "661e11c6dd894d7b788b84b3",
      "title": "Not in this life",
      "description": "1",
      "tag": "General",
      "date": "2024-04-16T05:53:21.296Z",
      "__v": 0
    },
    {
      "_id": "661e1271dd894d7b788b84ba",
      "user": "661e11c6dd894d7b788b84b3",
      "title": "Not in this life 2",
      "description": "2",
      "tag": "General",
      "date": "2024-04-16T05:53:53.846Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(prevnotes)


  // Initializing the initial state object
  const initialState = {
    name: "Utsav", // Initializing name property with value "Utsav"
    class: "11c", // Initializing class property with value "11c"
  };

  // Using the useState hook to create state variables
  // state variable holds the current state, setState is a function to update the state
  const [state, setState] = useState(initialState);

  // Function to update the state after a delay of 2000 milliseconds (2 seconds)
  const update = () => {
    setTimeout(() => {
      // Updating the state using setState function with the spread operator to retain previous state
      setState({
        ...state,
        // Updating the name property to "Gohil Utsav Ashokbhai"
        name: "Gohil Utsav Ashokbhai",
        // Updating the class property to "Computer engineering"
        class: "Computer engineering",
      });
    }, 2000);
  };

  // Rendering the NoteContext.Provider component
  // This component provides the state and update function to its children components via context
  return (
    <NoteContext.Provider value={{ state, update, notes, setNotes }}>
      {/* Rendering children components */}
      {props.children}
    </NoteContext.Provider>
  );
};

// Exporting the NoteState component as default
export default NoteState;
