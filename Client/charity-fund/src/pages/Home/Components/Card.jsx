import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

function Card({card}) {
      /* eslint-disable import/prefer-default-export */
  return (
    <div className="card">
      <img src={card.img} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">
          {card.title}
        </h5>
        <p className="card-text">
          {card.text}
        </p>
        <a href={card.link} className="btn btn-primary">
          Дізнатись більше
        </a>
      </div>
    </div>
  );
}
Card.defaultProps = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}
export  {Card};
