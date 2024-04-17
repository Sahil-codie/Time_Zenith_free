// components/Divider.js
import React from 'react';

const Divider = ({ type }) => {
  // Define default styles
  let dividerStyle = "my-8"; // default margin top and bottom
  let lineStyle = "w-full h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"; // default line style

  // Customize styles based on the type of divider
  switch (type) {
    case "line":
      // Simple horizontal line
      lineStyle = "w-full h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300";
      break;
    case "fancy":
      // Stylish divider with animation
      lineStyle = "w-full h-px bg-gradient-to-r from-green-400 via-green-500 to-green-400";
      dividerStyle = "my-12 relative";
      break;
    // Add more cases for different divider styles as needed
    default:
      break;
  }

  return (
    <div className={dividerStyle}>
      <div className={lineStyle}></div>
    </div>
  );
};

export default Divider;

