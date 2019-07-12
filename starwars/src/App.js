import React, { useState, useEffect } from "react";
import { CharList } from "./components/CharList";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [char, setChar] = useState([]);
  console.log("Char", char);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  const fetchStarChar = () => {
    fetch(`https://swapi.co/api/people`)
      .then(res => res.json())
      .then(res => setChar(res.results))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchStarChar();
  }, []);

  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars Test </h1>
      <CharList char={char} />
    </div>
  );
};

export default App;
