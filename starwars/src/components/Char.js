import React from "react";
import { Card, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export const Char = props => {
  console.log("Char Props", props);
  return (
    <Segment.Group raised style={{ width: "100px" }}>
      <Card.Content>
        <Card.Header>{props.props.name}</Card.Header>
        <Card.Meta>{props.props.birth_year}</Card.Meta>
      </Card.Content>
    </Segment.Group>
  );
};
