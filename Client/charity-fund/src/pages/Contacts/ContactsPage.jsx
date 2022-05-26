import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import "./ContactsPage.css";
import SocialFollow from "../../Components/Header/SocialFollow"

function ContactsPage() {


  return (

      <Container className="infoblock" style={{margin: "12% auto", width: "60%"}}>
        <Row>
          <Col><h1 md={4}>Контакти</h1></Col>
          <Col></Col>
        </Row>
        <Row style={{position: "flex"}}>
        <Col style={{margin: "2% auto" }}>
        <a className="infotext" href="tel:+38 (044) 390 33 33"><PhoneIcon style={{color:"#fcb900"}}/>&nbsp;+38 (044) 390 33 33</a>
        <br></br>
        <a className="infotext" href="mailto:OCFCUkraine@gmail.com"><EmailIcon style={{color:"#fcb900"}}/>&nbsp;OCFCUkraine@gmail.com</a>
        <br></br>
        <br></br>
        <SocialFollow/>
        </Col>
        <Col></Col>

        </Row>
      </Container>


  );
  
}

export default ContactsPage;