import React, {useState} from 'react';

import { Form, Button, Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginPage( {
    setIsLoggedIn,
    history,
    setUserName
} ) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLoginChange = (e) => {
      setLogin(e.target.value)
    }
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
    }
  
    const handleLogIn = (e) => {
      e.preventDefault();
  

      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('userName', login);
  
      setUserName(login);
      setIsLoggedIn(true);
      history.push('/');
    }
    
    return(
        <Container style={{width: "25%"}}>
            <Row>
                <Col md={12} style={{alignItems: "center", justifyContent: "center"}}>
                    <h1 style={{textAlign: "center"}}>Login</h1>
                    <Form onSubmit={handleLogIn}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            onChange={handleLoginChange}
                            value={login} 
                            required/>
                        </Form.Group>
      
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            onChange={handlePasswordChange}
                            value={password}
                            required/>
                        </Form.Group>
                        <Button variant="primary" type="submit"> Submit </Button>
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