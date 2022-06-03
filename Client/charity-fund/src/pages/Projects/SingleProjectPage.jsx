import React, {useState,useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import {useParams} from 'react-router-dom'

function SingleProjectPage () {
    const {id} = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/typicode/demo/posts/${id}`)
        .then(res => res.json())
        .then(data => setProject(data))
      })
    return (
        <>
            {project && (
                <>
                <Container fluid="md" style={{width: "80%", margin: "12% auto"}}>
                    <Row style={{margin: "2% auto"}}>
                        <Col><h1 style={{textAlign: "left"}}>{project.title}</h1></Col>
                    </Row>
                    <Row style={{width: "100%", margin: "2% auto", display: "flex", justifyContent: "space-between"}}>
                        <Col xs lg="2">
                            <img variant="top" style={{ width: '23rem' }} src={project.img}/>
                        </Col>
                        <Col xs={6} style={{ width: '44rem' }} >
                        <p>{project.text}</p>
                        {id}
                        </Col>
                    </Row>
                </Container>
                </>
            )}
        </>
    )
}

export default SingleProjectPage;