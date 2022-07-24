import React from 'react';
import { Container } from 'react-bootstrap';

const Textcontainer = (props) => (
  <Container>
    <h1 style={{ textAlign: 'center', margin: '5% auto' }}>{props.card.header}</h1>
    <p>{props.card.text}</p>
  </Container>
);

export default Textcontainer;
