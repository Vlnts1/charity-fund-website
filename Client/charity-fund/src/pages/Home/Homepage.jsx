import React, {useEffect, useState} from 'react';
import ButtonPayload  from './Components/Button';
import { Container, Col,Button,Row} from 'react-bootstrap';
import Cards from './Components/Cards'
import CircularProgress from '@mui/material/CircularProgress';
import fond from "../../assets/fond.jpeg"
import helphand from "../../assets/helphand.jpeg"
import "./Homepage.css"

function Homepage() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])

  return (


      <div className="Homepage">
        {isLoading? (
          <CircularProgress isLoading={isLoading}
          style={{position: 'fixed',top: '50%',left: '50%'}}/>
          ) : (
            <Container className="animate">
              <Row className="mainsection">
                <Col>
                  <h1 className="mainheader">Благодійний Фонд</h1>
                  <h2>"Духовність та здоров'я Нації" </h2>
                  <h6 className="maintext">Наша мета робити життя людей здоровим і якісним</h6>
                  <h6 className="maintext">Приєднуйтесь до нас!</h6>
                  <ButtonPayload/>
                </Col>
                <Col>
                  <img src={helphand} alt="main section photo" width="600" height="500"/>
                </Col>
              </Row>
              <Row className="aboutsection">
                <Col>
                  <h1>ПРО БЛАГОДІЙНИЙ ФОНД</h1>
                  <p>Благодійний Фонд "Духовність та здоров'я Нації" заснований у 2022 році за ініціативи ... В мирний час діяльність фонду спрямована на підтримку малозабезпечених, запобігання домашньому насильству та утвердження ґендерної рівності.</p>
                  <p>Під час війни фонд діє задля захисту та надання допомоги цивільним і військовим українцям.</p>
                  <Button href="/about">Детальніше</Button>
                </Col>
                <Col>
                  <img src={fond} alt="about section photo" width="600" height="400"/>
                </Col>
              </Row>
              <Row>
                <Col><Cards/></Col>
              </Row>            
            </Container>
          )}
    </div>

  );
}

export default Homepage;