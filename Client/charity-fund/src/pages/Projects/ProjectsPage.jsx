import React, {useState,useEffect} from 'react';
import Projectslist from './Components/ProjectsList'
import {Container, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CircularProgress from '@mui/material/CircularProgress';
import "./Components/Project.css"


function ProjectsPage({projects}) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  },[])


  return (
    <div className="Projects">
      {isLoading? (
        <CircularProgress isLoading={isLoading}
        style={{position: 'fixed',top: '50%',left: '50%'}}/>
        ) : (
        <Container style={{margin: "12% auto"}}> 
          <Col> 
            <h1 style={{textAlign: "center",margin: "5% auto"}}> Проекти</h1>
          </Col>
          <Col>
            <Projectslist projects={projects}/>
          </Col>
        </Container>
      )}
    </div>
  );
}

export default ProjectsPage;