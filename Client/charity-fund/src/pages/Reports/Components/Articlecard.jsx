import React from 'react';
import {Container, Row, Col, Card } from 'react-bootstrap';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "./Article.css"
import {Link} from 'react-router-dom'

function Articlecard (props) {
    return(
        <Container style={{margin: "2% auto", width: "59%"}}>
            <Row>
                <Card body>
                    <div style={{display: "flex"}}>
                        <h5>{props.number} {props.article.title}</h5>
                        <Link to={props.article.file} download></Link>
                    </div>
                </Card>
            </Row>
        </Container>   
 )
}

export default Articlecard;