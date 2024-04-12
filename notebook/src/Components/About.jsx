import React from 'react';
import Hoc from './Hoc'; // Importing the "Higher-Order Component"

// Define the About component
const About = () => {
  return (
    <div className='text-white'>
      <h1>This is about page</h1>
    </div>
  );
}

// Exporting the About component wrapped with the "Higher-Order Component"
export default Hoc(About);
