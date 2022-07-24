import React from 'react';
import { Card } from 'react-bootstrap';
function Textcard(props) {
  return (
    <Card>
      <Card.Header as="h5" style={{ textAlign: 'center' }}>
        {props.card.header}
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.card.title1}</Card.Title>
        <Card.Text>{props.card.text1}</Card.Text>
        <Card.Title>{props.card.title2}</Card.Title>
        <Card.Text>{props.card.text2}</Card.Text>
        <Card.Title>{props.card.title3}</Card.Title>
        <Card.Text>{props.card.text3}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Textcard;
