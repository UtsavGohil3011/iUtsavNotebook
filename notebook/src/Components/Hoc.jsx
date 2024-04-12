import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Hoc(Component) {
  function NewComponent() {
    return (
      <>
        <Header />
        <Component />
        <Footer />
      </>
    );
  }

  return NewComponent;
}

export default Hoc;
