import React from 'react';
import {Card, Col } from 'react-bootstrap';
import "./Project.css"
import {ReadMoreMore} from 'read-more-more';
import { useNavigate } from 'react-router-dom';

function Project ({project}) {
  const navigate = useNavigate();

    return(
      <>
      <Col md={3} style={{ textAlign: 'center' }}>
        <Card style={{ width: '19rem', }} onClick={() => navigate( '/project/:id' + project.id)}>
          <Card.Img variant="top" src={project.img} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text><ReadMoreMore 
            text={project.text} checkFor={100}/>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      </>
    )
}

export default Project;