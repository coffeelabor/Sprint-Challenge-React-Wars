import React from "react";

const CharName = props => {
  return (
    <div className="Char-Card">
      <p className="Char-Name">
        Name: <span>{props.name.name}</span>
      </p>
    </div>
  );
};

export default CharName;
