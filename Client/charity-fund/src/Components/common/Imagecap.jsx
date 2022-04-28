import React from 'react';
import { Card } from 'react-bootstrap';

function Imagecap (props) {
    return(
        
        <Card.Img src={props.card.image}/>
    )
}

export default Imagecap;