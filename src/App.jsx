// Write your Color component here
import React, { useState } from 'react';
import Color from './Color';
import './index.css';

function App() {
  return (
    <div className="App">
      <Picker />
    </div>
  );
}

function Picker() {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="yellow" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color="red" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
      </div>
    </div>
  );
}

export default App;
