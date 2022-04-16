import React, {useState} from 'react';

import { Form, Button, Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/users/login', {email, password})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
    return(
        <Container style={{width: "25%"}}>
            <Row>
                <Col md={12} style={{alignItems: "center", justifyContent: "center"}}>
                    <h1 style={{textAlign: "center"}}>Login</h1>
            <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className='py-4'>
            <p style={{textAlign: "center"}}>
                Don't have an account? 
                <Link to="/signup" style={{textDecoration: "none"}}> Sign up </Link>
            </p>
        </div>
      </Form>
      </Col>
            </Row>
        </Container>
       
    );
    
};

export default LoginPage