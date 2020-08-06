import React from "react";
import "./App.css";
import Fire from "./Components/Fire/Fire";
import KidComp from "./Components/Kid/Kid";
import Bird from "./Components/Birds/Bird";

function App() {
  return (
    <div className="App">
      <Fire />
      <KidComp />
      <Bird />
    </div>
  );
}

export default App;
