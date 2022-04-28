import React, {useState} from 'react';

import { Form, Button, Container, Row, Col} from 'react-bootstrap';

function LoginPage( {
    setIsLoggedIn,
    history,
    setUserName,
    setIsAdmin
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
        // if (login === 'Okarmazina@ukr.net' && password === 'Artist3355') {
        //     setIsAdmin(true);
        //     localStorage.getItem('isAdmin', true)
        // }
        if (login === 'Okarmazina@ukr.net') {
            if (password === 'Artist3355') setIsAdmin(true);
            else { 
                alert('Введіть правильний логін чи пароль')
                return false
            }
        }
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
                    </Form>
                </Col>
            </Row>
        </Container>
       
    );
    
};

export default LoginPage