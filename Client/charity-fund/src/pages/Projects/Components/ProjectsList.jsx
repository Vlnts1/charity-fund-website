import React from 'react';
import Project from './Project';
import { Row} from 'react-bootstrap'
import {projects} from '../../../data';

function Projectslist () {
    
    return(  
        <Row className="flex">
            {projects.map((project )=>
            <Project project={project} key={project.id}/>)}
        </Row>
    )

    
}

export default Projectslist;