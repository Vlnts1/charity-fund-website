import React, {useState} from 'react';
import {Row, Card, Container} from 'react-bootstrap'
import { Spring, animated } from 'react-spring'
import  './ReportsPage.css';

function ReportsPage() {

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
      <div style={{textAlign: 'center', margin: "1% auto"}}>
      <h1> Звіти </h1>
        <Container style={{margin: "2% auto", width: "59%"}}>
            <Row>
                <Card body style={{margin: "2% auto"}}>
                    <div style={{display: "flex"}}>
                    <h5><a href="url" download>Звіт 1</a></h5>
                    </div>
                </Card>
                <Card body style={{margin: "2% auto"}}>
                    <div style={{display: "flex"}}>
                        <h5><a href="url" download>Звіт 2</a></h5>
                    </div>
                </Card>
                <Card body style={{margin: "2% auto"}}>
                    <div style={{display: "flex"}}>
                    <h5><a href="url" download>Звіт 3</a></h5>
                    </div>
                </Card>
                <Card body style={{margin: "2% auto"}}>
                    <div style={{display: "flex"}}>
                    <h5><a href="url" download>Звіт 4</a></h5>
                    </div>
                </Card>
                <Card body style={{margin: "2% auto"}}>
                    <div style={{display: "flex"}}>
                    <h5><a href="url" download>Звіт 5</a></h5>
                    </div>
                </Card>
            </Row>
        </Container>
      </div>
      </animated.div>
    )}
    </Spring>
  );
}

export default ReportsPage;