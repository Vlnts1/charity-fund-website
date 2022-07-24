import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './ContactsPage.css';
import SocialFollow from '../../Components/Header/SocialFollow';
import ContactForm from './Components/ContactForm';
import CircularProgress from '@mui/material/CircularProgress';

function ContactsPage() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="Contacts">
      {isLoading ? (
        <CircularProgress
          isLoading={isLoading}
          style={{ position: 'fixed', top: '50%', left: '50%' }}
        />
      ) : (
        <Container className="animate" style={{ margin: '12% auto', width: '60%' }}>
          <Row>
            <Col>
              <h1 md={4} className="infoheader">
                Контакти
              </h1>
            </Col>
          </Row>
          <Row style={{ position: 'flex' }}>
            <Col style={{ margin: '2% auto' }}>
              <a className="infotext" href="tel:+38 (044) 390 33 33">
                <PhoneIcon style={{ color: '#fcb900' }} />
                &nbsp;+38 (044) 390 33 33
              </a>
              <br></br>
              <a className="infotext" href="mailto:OCFCUkraine@gmail.com">
                <EmailIcon style={{ color: '#fcb900' }} />
                &nbsp;OCFCUkraine@gmail.com
              </a>
              <br></br>
              <br></br>
              <SocialFollow />
            </Col>
            <Col>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default ContactsPage;
