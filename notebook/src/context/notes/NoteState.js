// NoteState.jsx

import React, { useState } from "react";
import NoteContext from "./noteContext";

// Functional component `NoteState` to manage notes state and actions
const NoteState = (props) => {
  // Initial state for user and class
  const initialState = {
    name: "Utsav",
    class: "11c",
  };

  // State hook to manage user and class state
  const [state, setState] = useState(initialState);

  // Update function to simulate state update after 2 seconds
  const update = () => {
    setTimeout(() => {
      setState({
        ...state,
        name: "Gohil Utsav Ashokbhai",
        class: "Computer engineering",
      });
    }, 2000);
  };

  // Initial state for notes
  const prevNotes = [
    {
      _id: "661e127reg1dd894d7b788b84ba",
      user: "661e11gdfc6dd894d7b788b84b3",
      title: "Not in this life 2",
      description: "2",
      tag: "General",
      date: "2024-04-16T05:53:53.846Z",
      __v: 0,
    },
    {
      _id: "661e1df271dd894d7b788b84ba",
      user: "661e11dfgc6dd894d7b788b84b3",
      title: "Not in this life 2",
      description: "2",
      tag: "General",
      date: "2024-04-16T05:53:53.846Z",
      __v: 0,
    },
    {
      _id: "661e1271ddgdg894d7b788b84ba",
      user: "661e11c6dfdgd894d7b788b84b3",
      title: "Not in this life 2",
      description: "2",
      tag: "General",
      date: "2024-04-16T05:53:53.846Z",
      __v: 0,
    },
    {
      _id: "661e1271ddsdd894d7b788b84ba",
      user: "661e11c6ddfdd894d7b788b84b3",
      title: "Not in this life 2",
      description: "2",
      tag: "General",
      date: "2024-04-16T05:53:53.846Z",
      __v: 0,
    },
  ];

  // State hook to manage notes array
  const [notes, setNotes] = useState(prevNotes);

  // Function to add a new note
  const addNote = (title, description, tag) => {
    const newNote = {
      _id: Math.random().toString(36).substr(2, 9), // Generate a unique ID (not recommended for production)
      title,
      description,
      tag,
      date: new Date().toISOString(),
    };

    setNotes([...notes, newNote]);
  };

  // Function to delete a note by id
  const delNote = (_id) => {
    const updatedNotes = notes.filter((note) => note._id !== _id);
    setNotes(updatedNotes);
  };

  // Function to edit a note (not implemented in this example)
  const editNote = () => {
    // Todo
  };

  // Rendering the NoteContext.Provider component
  // This component provides the state and actions to its children components via context
  return (
    <NoteContext.Provider
      value={{ state, update, notes, addNote, delNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState; // Exporting the `NoteState` component as the default export
