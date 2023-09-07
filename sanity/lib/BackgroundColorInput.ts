// components/BackgroundColorInput.js

import React from 'react';

const BackgroundColorInput = ({ type, value, onChange }) => {
  return (
    <div>
      <label>Background Color</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{ backgroundColor: value }} // Apply the background color
      />
    </div>
  );
};

export default BackgroundColorInput;
