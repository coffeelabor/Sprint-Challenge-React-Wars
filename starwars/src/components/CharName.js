import React from "react";

const CharName = props => {
  return (
    <div className="Char-Card">
      {/* <img className="char-img" src={props.name.url} /> */}
      <p className="Char-Name">
        Name: <span>{props.name.name}</span>
      </p>
      <p className="Char-Born">
        Born: <span>{props.name.birth_year}</span>
      </p>
      {/* <p className="">
        Vehicles: <span>{props.name.vehicles.name}</span>
      </p> */}
      <p className="">
        Species: <span>{props.name.species}</span>
      </p>
    </div>
  );
};

export default CharName;
