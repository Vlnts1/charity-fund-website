import React from 'react';
import {Card, Col} from 'react-bootstrap';
import "./Project.css"
import {ReadMoreMore} from 'read-more-more';

function Project ({project}) {
    return(
      
      <Col md={3} style={{ textAlign: 'center' }}>
        <Card style={{ width: '19rem', }}>
          <Card.Img variant="top" src={project.img} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text><ReadMoreMore 
            text={project.text} checkFor={100}/>
            </Card.Text>
            {/* <Link to={`/projects/:${project.id}`}>
            <Button variant="primary">Дізнатися більше</Button>
            </Link> */}
            
          </Card.Body>
        </Card>
      </Col>
    )
}

export default Project;