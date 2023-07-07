import Calculator from "./components/Calculator";
import { useState } from "react";
import "./App.css";

function App() {
  const [modalStyle, setModalStyle] = useState({
    backgroundColor: "#ffffff",
    color: "#000000",
  });

  const handleStyleChange = (event) => {
    const { name, value } = event.target;
    setModalStyle((prevStyle) => ({
      ...prevStyle,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <h1 className="mb-3">CalculatorTest</h1>
      <div className="mb-5">
        <div>
          <label htmlFor="backgroundColor">Background Color:</label>
          <input
            type="color"
            id="backgroundColor"
            name="backgroundColor"
            value={modalStyle.backgroundColor}
            onChange={handleStyleChange}
            className="color"
          />
        </div>
        <div>
          <label htmlFor="color">Text Color:</label>
          <input
            type="color"
            id="color"
            name="color"
            value={modalStyle.color}
            onChange={handleStyleChange}
            className="color"
          />
        </div>
      </div>
      <Calculator modalStyle={modalStyle} />
    </div>
  );
}

export default App;
