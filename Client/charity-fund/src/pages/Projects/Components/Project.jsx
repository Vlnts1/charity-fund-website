import React from 'react';
import {Card, Col } from 'react-bootstrap';
import "./Project.css"
import {ReadMoreMore} from 'read-more-more';
import {Link} from 'react-router-dom';

function Project ({project}) {

    return(
      <>
      <Col md={3} style={{ textAlign: 'center' }}>
        <Card style={{ width: '19rem' }} className="projectcard">
          <Card.Img variant="top" src={project.img} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text><Link to={`/projects/${project.id}`}><ReadMoreMore 
            text={project.text} checkFor={100}/></Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      </>
    )
}

export default Project;