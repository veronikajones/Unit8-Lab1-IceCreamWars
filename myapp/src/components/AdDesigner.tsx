import { useState } from "react";
import { Ad } from "./Ad";
import "./AdDesigner.css";

function AdDesigner() {
  //state hook has two parts
  //variable to traxk the state, meaning the value
  //there is a function that is used to change the state

  const [flavor, setFlavor] = useState("Chocolate");
  const [isLight, setIsLight] = useState(true);
  const [fontSize, setFontSize] = useState(24);
  return (
    <div>
      <head>{'{<link rel="stylesheet" href="AdDesigner.css">}'}</head>
      <body>
        <h3 className="AdDesigner">Ad Designer</h3>

        <Ad flavor={flavor} isLight={isLight} fontSize={fontSize} />

        <h3>What to Support</h3>

        <div className="button-bar">
          <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
          <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
          <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
        </div>

        <h3>Color Theme</h3>
        <div className="button-bar">
          <button onClick={() => setIsLight(true)}>Light</button>
          <button onClick={() => setIsLight(false)}>Dark</button>
        </div>

        <h3>Font Size</h3>
        <div className="button-bar">
          <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
          <input type="number" value={fontSize}></input>
          <button onClick={() => setFontSize(fontSize - 1)}>Down</button>
        </div>
      </body>
    </div>
  );
}

export default AdDesigner;
