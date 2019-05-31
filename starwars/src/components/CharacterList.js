import React from "react";
import CharName from "./CharName";
import "./StarWars.css";

const CharacterList = props => {
  console.log(props.starwarsChars);
  return (
    <div className="char-list">
      {props.starwarsChars.map(name => {
        return <CharName name={name} />;
      })}
    </div>
  );
};

export default CharacterList;
