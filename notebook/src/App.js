// Importing necessary components and styles
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

// Define the main App component
function App() {
  return (
    // Wrapping the entire application with BrowserRouter to enable routing
    <>
      <BrowserRouter>
        {/* Defining routes using the Routes component */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />
          {/* Route for the about page */}
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Exporting the App component to make it available for use in other files
export default App;
