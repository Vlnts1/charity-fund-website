import React, {useState} from 'react';

import { Form, Button, Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignupPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignup(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/users', {email, password})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
    return(
        <Container style={{width: "25%"}}>
            <Row>
                <Col md={12} style={{alignItems: "center", justifyContent: "center"}}>
                    <h1> Sign up</h1>
            <Form onSubmit={handleSignup}>
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
                Already have an account? 
                <Link to="/login" style={{textDecoration: "none"}}> Login </Link>
            </p>
        </div>
      </Form>
      </Col>
            </Row>
        </Container>
       
    );
    
};

export default SignupPage