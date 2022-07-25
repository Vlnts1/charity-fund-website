import React from 'react';
import { CardGroup } from 'react-bootstrap';
import "./Cards.css"
import {Card} from './Card';

function Cards({cards}) {
    /* eslint-disable import/prefer-default-export */
  return (
    <div className="flex">
      <h1 className='cards-title'>Що ми робимо</h1>
      <CardGroup className='cardsgroup'>
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </CardGroup>
    </div>
  );
}

export {Cards};
