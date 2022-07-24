import React, { useEffect, useState } from 'react';
import ButtonPayload from './Components/Button';
import { Container, Col, Row } from 'react-bootstrap';
import Cards from './Components/Cards';
import CircularProgress from '@mui/material/CircularProgress';
import helphand from '../../assets/helphand.jpeg';
import './Homepage.css';

function Homepage() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="Homepage">
      {isLoading ? (
        <CircularProgress
          isLoading={isLoading}
          style={{ position: 'fixed', top: '50%', left: '50%' }}
        />
      ) : (
        <Container className="animate">
          <Row className="mainsection">
            <Col>
              <h1 className="mainheader">Благодійний Фонд</h1>
              <h2>"Духовність та здоров'я Нації" </h2>
              <h6 className="maintext">Наша мета робити життя людей здоровим і якісним</h6>
              <h6 className="maintext">Приєднуйтесь до нас!</h6>
              <ButtonPayload />
            </Col>
            <Col>
              <img src={helphand} alt="" width="600" height="500" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Cards />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Homepage;
