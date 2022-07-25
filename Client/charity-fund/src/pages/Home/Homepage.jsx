import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Homepage.css';
import {ButtonPayload} from './Components/Button';
import {Cards} from './Components/Cards';
import {Loader} from '../../Components/common/loader';
import helphand from '../../assets/helphand.jpeg';

function Homepage({cards}) {
      /* eslint-disable import/prefer-default-export */
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
        <Loader isLoading={isLoading} />
      ) : (
        <Container className="animate">
          <Row className="mainsection">
            <Col>
              <h1 className="mainheader">Благодійний Фонд</h1>
              <h2>{`"Духовність та здоров'я Нації"`}</h2>
              <h6 className="maintext">Наша мета робити життя людей здоровим і якісним</h6>
              <h6 className="maintext">Приєднуйтесь до нас!</h6>
              <ButtonPayload />
            </Col>
            <Col>
              <img src={helphand} alt="" width="600" height="500"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Cards cards={cards}/>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export {Homepage};