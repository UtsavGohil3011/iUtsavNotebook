// Noteitem.jsx

import React from "react";

// Functional component `Noteitem` to display an individual note
const Noteitem = ({ note, onDelete }) => {
  // Destructuring `note` from props
  const { _id, title, description } = note;

  const handleDelete = () => {
    console.log("Deleting note with id:", _id); // Debugging line
    onDelete(_id);
  };

  return (
    <>
      <div className="">
        <div className="card " style={{ width: "15rem" }}>
          {/* Displaying note title and description */}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            {/* Button to delete the note, onClick calls the onDelete function with note id */}
            <button onClick={handleDelete}>
              <span>❌-Delete</span>
            </button>
            <button>
              <span>Modify</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
