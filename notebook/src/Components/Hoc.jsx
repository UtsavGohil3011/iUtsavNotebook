import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Define the Higher-Order Component (HOC)
function Hoc(Component) {
  // Define a new component within the HOC
  function NewComponent() {
    return (
      <>
        {/* Render Header component */}
        <Header />
        {/* Render the component passed to the HOC */}
        <Component />
        {/* Render Footer component */}
        <Footer />
      </>
    );
  }

  // Return the new component
  return NewComponent;
}

// Export the Higher-Order Component (HOC)
export default Hoc;
