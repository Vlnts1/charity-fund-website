import React,  {useState,useEffect}  from 'react';
import { Container, Row, Col,Card, Button } from 'react-bootstrap';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


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
        <Container style={{margin: "12% auto", width: '60%'}}>
          <Col style={{textAlign: "center",margin: "2% auto"}}>
            <h1 style={{textAlign: "left", width: "90%", margin: "5% auto"}}>Всеукраїнський благодійний фонд "Духовність та здоров'я Нації" працює в сфері охорони здоров'я і соціального захисту</h1>
              <p style={{textAlign: "left",width: "90%", margin: "5% auto"}}>Фонд "Духовність та здоров'я Нації" заснований у 2022 році. Ми невелика команда професіоналів і велике коло благодійників й волонтерів, об’єднаних спільними цінностями, бажанням втілювати ефективні соціальні проекти
              </p>
            </Col>
            <Col><Card.Img src='https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/></Col>
            <Row style={{width: "85%", margin: "12% auto",textAlign: "center"}}>
              <Col sm={10}><h3 style={{textAlign: "center"}}>Наші звіти та установчі документи</h3></Col>
              <Col sm={2}><Button onClick={handleClick}><ArrowRightAltIcon/></Button></Col>
            </Row>
        </Container>  
          )}
    </div>
  );
}

export default AboutPage;