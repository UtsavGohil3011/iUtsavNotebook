// Importing necessary modules from React library
import React, { useContext, useEffect } from "react";

// Importing NoteContext from "../context/notes/noteContext"
import NoteContext from "../context/notes/noteContext";

// Importing Hoc component from "./Hoc"
import Hoc from "./Hoc";
import Notes from "./Notes";



// Creating a functional component called Home
const Home = () => {
  // Using useContext hook to access state and update function from NoteContext
  const { state, update } = useContext(NoteContext);



  // Using useEffect hook to execute code after every render
  useEffect(() => {
    // Setting up an interval to call update function every 2000 milliseconds (2 seconds)
    const interval = setInterval(update, 2000);
    // Cleaning up the interval to avoid memory leaks
    return () => clearInterval(interval);
  }, [update]); // Dependency array ensures useEffect runs only when update function changes

  // Rendering JSX
  return (
    <div className="text-white">
      {/* Displaying the name and class from state */}
      <h1>
        Welcome to Home <br /> Name: {state.name} <br /> Class: {state.class}
      </h1>

      <br />
      <hr />
      <br />

      <div className="bg-black p-4 ">

      <h1 className="text-center">Add a Note</h1>
      <form className="w-50 m-auto ">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>

      <Notes/>

    </div>
    </div>
  );
};

// Exporting Home component wrapped with Hoc
export default Hoc(Home);
