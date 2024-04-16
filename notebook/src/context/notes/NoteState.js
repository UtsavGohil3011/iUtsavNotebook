import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initialState = {
    name: "Utsav",
    class: "11c",
  };

  const [state, setState] = useState(initialState);

  const update = () => {
    setTimeout(() => {
      setState({
        ...state,
        name: "Gohil Utsav Ashokbhai",
        class: "Computer engineering",
      });
    }, 2000);
  };

  const prevnotes = [
    {
      _id: "661e1271dd894d7b788b84ba",
      user: "661e11c6dd894d7b788b84b3",
      title: "Not in this life 2",
      description: "2",
      tag: "General",
      date: "2024-04-16T05:53:53.846Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(prevnotes);

  //Add a note :

  const addNote = (title, description, tag) => {
    // Todo api call
  }

  //delete a note :

  const delNote = () => {};

  // Edit a note :

  const editNote = () => {};

  // Rendering the NoteContext.Provider component
  // This component provides the state and update function to its children components via context
  return (
    <NoteContext.Provider
      value={{ state, update, notes, setNotes, addNote, delNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

// Exporting
export default NoteState;
