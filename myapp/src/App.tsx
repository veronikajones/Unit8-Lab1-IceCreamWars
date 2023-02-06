import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Votes from "./components/Votes";
import App2 from "./components/App2";
import AdDesigner from "./components/AdDesigner";
import "./App.css";
import "./components/Header.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Votes />
      <App2 />
      <AdDesigner />
    </div>
  );
}

export default App;
