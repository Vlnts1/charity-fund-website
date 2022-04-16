import React from 'react';
import "./Components/Card.css"


function Card(props) {
  return (
    <div className='card-container'>
      <div className="image-container">
        <img src={props.img} alt=""/>
        <div class="card-body">
          <h5 class="card-title" style={{textAlign: "center"}}>{props.card.title}</h5>
          <p class="card-text" style={{textAlign: "center"}}>{props.card.text}</p>
          <a href={props.card.link} class="btn btn-primary">Дізнатись більше </a>
        </div>
      </div>
    </div>
  );
}

export default Card;