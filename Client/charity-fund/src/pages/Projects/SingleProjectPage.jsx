import React, {useEffect, useState} from "react";
import { Spring, animated } from 'react-spring'
import { Card } from 'react-bootstrap';
import { Container, Col } from 'react-bootstrap';

function SingleProjectPage () {
    
      const [isVisible, setIsVisible] = useState(false);
   
      return (
        <Spring
        from={{ opacity: 0, transform: 'translateY(-4rem)'}}
        to={[
          { opacity: 1, transform: 'translateY(0rem)' },
        ]}
        reverse={isVisible}>
        {styles => (
          <animated.div style={styles}>
        <Container style={{margin: "2% auto", width: '60%'}}>
            <Col> <Card.Img src='' /></Col>
            <Col><h1 style={{textAlign: "center", margin: "5% auto"}}>title</h1>
    <p>
textx
    </p>  </Col>
        </Container>
        </animated.div>
        )}
        </Spring>
    )
}

export default SingleProjectPage;