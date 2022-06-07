import React, {useEffect, useState} from 'react';
import ButtonPayload  from './Components/Button';
import { Container, Col,Row} from 'react-bootstrap';
import Carouselmain from './Components/Carousel';
import Cards from './Components/Cards'
import CircularProgress from '@mui/material/CircularProgress';
import Paymentsinfoblock from './Components/Paymentsinfo';

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
            <Container>
              <Col><Carouselmain/></Col>
              <Col>
                <h1 style={{textAlign: "center", margin: "2% auto"}}>Nazva</h1>
                <p style={{width: "80%", margin: "5% auto"}}>
                  Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                  Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный 
                  печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.
                </p>  
                <Paymentsinfoblock/>
              </Col>
              <Col style={{margin: '40px',textAlign: "center"}}><ButtonPayload/></Col>
              <Col><Cards/></Col>
            </Container>
          )}
    </div>

  );
}

export default Homepage;