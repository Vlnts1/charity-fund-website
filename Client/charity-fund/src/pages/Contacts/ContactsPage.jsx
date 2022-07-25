import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {Loader} from '../../Components/common/loader';
import './ContactsPage.css';
import {SocialFollow} from '../../Components/Header/SocialFollow';
import ContactForm from './Components/ContactForm';

function ContactsPage() {
        /* eslint-disable import/prefer-default-export */
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
        <Loader
          isLoading={isLoading}
        />
      ) : (
        <Container className="contactscontainer">
          <Row>
            <Col>
              <h1 md={4} className="infoheader">
                Контакти
              </h1>
            </Col>
          </Row>
          <Row className="flex">
            <Col className="contactscol">
              <a className="infotext" href="tel:+38 (044) 390 33 33">
                <PhoneIcon className="phoneicon" />
                &nbsp;+38 (044) 390 33 33
              </a>
              <a className="infotext" href="mailto:OCFCUkraine@gmail.com">
                <EmailIcon className="emailicon" />
                &nbsp;OCFCUkraine@gmail.com
              </a>
              <div className="socialaccs">
              <SocialFollow  />
              </div>
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

export  {ContactsPage};
