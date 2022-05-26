import React, {useState} from 'react';
import Projectslist from './Components/ProjectsList'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function ProjectsPage() {


  return (

    <Container>
      <Row classname="mt-2">
        <Col>
              <h1 style={{textAlign: "center", margin: "12% auto"}}> Проекти</h1>
              <Projectslist/>

        </Col>
      </Row>
    </Container>
  );
}

export default ProjectsPage;