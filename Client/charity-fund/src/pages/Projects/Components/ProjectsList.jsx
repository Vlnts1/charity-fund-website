import React, {useState} from 'react';
import Project from './Project';
import { CardGroup} from 'react-bootstrap'

function Projectslist ({projects}) {
    
    return(
        <>      

            <CardGroup style={{margin: "5% auto"}}>
                {projects.map((project )=>
                <Project project={project} key={project.id}/>)}
            </CardGroup>
        </>
    )
}

export default Projectslist;