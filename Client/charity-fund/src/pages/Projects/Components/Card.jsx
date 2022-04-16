import React from 'react';


function Card(props) {
  return (
    <div class="card" style={{margin: '16px',textAlign: "center"}}>
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top" alt="Fissure in Sandstone"/>
  <div class="card-body">
    <h5 class="card-title" style={{textAlign: "center"}}>{props.card.title}</h5>
    <p class="card-text" style={{textAlign: "center"}}>{props.card.text}</p>
    <a href={props.card.link} class="btn btn-primary">Дізнатись більше </a>
  </div>
</div>
  );
}

export default Card;