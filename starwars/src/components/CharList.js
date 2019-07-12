import React from "react";
import { Char } from "./Char";

export const CharList = props => {
  console.log("CharList", props);
  //   console.log("results", props.char.results);
  return (
    <div>
      {props.char.map(char => {
        return <Char props={char} />;
      })}
    </div>
  );
};
