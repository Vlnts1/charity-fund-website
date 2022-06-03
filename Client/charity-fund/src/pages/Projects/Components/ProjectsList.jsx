import React from 'react';
import Project from './Project';
import { Row} from 'react-bootstrap'

function Projectslist ({projects}) {
    
    return(  
        <Row className="flex">
            {projects.map((project )=>
            <Project project={project} key={project.id} />)}
        </Row>
    )  
}

export default Projectslist;