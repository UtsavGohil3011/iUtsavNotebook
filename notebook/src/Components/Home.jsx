import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import Hoc from "./Hoc";
import Notes from "./Notes";

const Home = () => {
  const { state, update } = useContext(NoteContext);

  // Using useEffect hook to execute code after every render
  useEffect(() => {
    const interval = setInterval(update, 2000);
    return () => clearInterval(interval);
  }, [update]);

  // Rendering JSX
  return (
    <div className="text-white">
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
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>

        <Notes />
      </div>
    </div>
  );
};

export default Hoc(Home);
