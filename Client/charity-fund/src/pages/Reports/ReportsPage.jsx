import React from 'react';
import {Row, Card, Container} from 'react-bootstrap'
import  './ReportsPage.css';

function ReportsPage() {


  return (

      <div style={{textAlign: 'center', margin: "10% auto"}}>
      <h1 style={{textAlign: 'center', margin: "10% auto"}}> Звіти </h1>
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

  );
}

export default ReportsPage;