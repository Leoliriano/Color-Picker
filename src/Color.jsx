import React from 'react';

function Color({ color, setSelectedColor, selectedColor }) {
  const isSelected = color === selectedColor;
  return (
    <div className={`${color} ${isSelected ? "selected" : ""}`}
         onClick={() => setSelectedColor(color)}
         style={{ width: '50px', height: '50px', borderRadius: '50%', display: 'inline-block', margin: '5px', cursor: 'pointer' }}>
    </div>
  );
}

export default Color;
