import React,  {useState,useEffect}  from 'react';
import { Container, Row, Col,Card, Button } from 'react-bootstrap';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import List from './Components/List';
import team from '../../assets/team.png'
import './AboutPage.css'

function AboutPage() {
  const [isLoading, setLoading] = useState(false);
  let navigate = useNavigate();
  
  function handleClick() {
    navigate('/reports')
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])
  return (
    <div className="AboutPage">
      {isLoading? (
        <CircularProgress isLoading={isLoading}
          style={{position: 'fixed',top: '50%',left: '50%'}}/>
          ) : (
        <Container className="containerabout">
          <Row>
            <Col className="animate"> 
            <h2>Всеукраїнський благодійний фонд "Духовність та здоров'я Нації" 
            <br/>
            працює в сфері охорони здоров'я і соціального захисту</h2>
            </Col>
          </Row>
          <Row>
            <Col className="animate">
              <p className="aboutfond">
              Фонд "Духовність та здоров'я Нації" заснований у 2022 році. Ми невелика команда професіоналів і велике коло 
              благодійників й волонтерів, об’єднаних спільними цінностями, бажанням втілювати ефективні соціальні проекти</p>
            </Col>
            <Col>
              <img className="animate" src={team} alt="main section photo" width="500" height="500"/>
            </Col>
          </Row>
          <Row className="mission">
          <Col>
            <h4 className="missiontext">Місія фонду – розвиток благодійності та волонтерства, становлення відповідального і 
            толерантного суспільства в Україні та допомога тим, хто найбільш цього потребує.</h4>
          </Col>
          </Row>
          <Row className="scopes">
            <Col>
              <h2 className="scopestext">Актуальні сфери діяльності фонду</h2>
              <List/>
            </Col>
          </Row>
          <Row className="aboutinfo">
            <Col><h5>Фонд знаходиться в Києві та надає допомогу по всій Україні. Всі благодійні проекти фонду 
              підтримуються завдяки постійним та разовим благодійним внескам і завдяки волонтерській спільноті, 
              що влаштовує благодійні акції.</h5>
            </Col>
          </Row>
          <Row className="aboutarticles">
              <Col sm={10}><h3 style={{textAlign: "center"}}>Наші звіти та установчі документи</h3></Col>
              <Col sm={2}><Button onClick={handleClick}><ArrowRightAltIcon/></Button></Col>
          </Row>
        </Container>  
          )}
    </div>
  );
}

export default AboutPage;