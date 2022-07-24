import React from 'react';
import { Accordion } from 'react-bootstrap';

export default function Paymentsinfoblock() {
  return (
    <Accordion defaultActiveKey="0" style={{ width: '80%', margin: '2% auto' }}>
      <Accordion.Item eventKey="0" style={{ width: '27rem' }}>
        <Accordion.Header>Реквізити у криптовалюті</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
