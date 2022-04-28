import React from 'react';
import "./Card.css"


function Card(props) {
  return (
    <div class="card" style={{margin: '16px',textAlign: "center"}}>
  <img src={props.card.img} class="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title" style={{textAlign: "center"}}>{props.card.title}</h5>
    <p class="card-text" style={{textAlign: "center"}}>{props.card.text}</p>
    <a href={props.card.link} class="btn btn-primary">Дізнатись більше </a>
  </div>
</div>
  );
}

export default Card;