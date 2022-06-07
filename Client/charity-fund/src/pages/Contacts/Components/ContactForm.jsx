import React, { useRef }  from "react";
import {Form, Button, FloatingLabel} from 'react-bootstrap';
// import './ContactForm.css'
import Axios from 'axios';

function ContactForm(){
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef =  useRef(null)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        
        let data = {
              name: nameRef.current.value,
              email: emailRef.current.value,
              message: messageRef.current.value
              }
              Axios.post(`https://api.telegram.org/bot5437138113:AAFTFQEUaYHjPIFcXtKZCVEjUHaLZfp4Uro/sendMessage`,{ 
              chat_id: 286615140,
              parse_mode: 'html',
              text: data})
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              }); 
    }
    return(
        <Form id="contact-form" className="form" >
        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
          <Form.Control type="text" ref={nameRef} placeholder="Ваше ім'я" required />
        </Form.Group>
      
        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
          <Form.Control type="email" ref={emailRef} placeholder="Ваша електронна адреса" required />
        </Form.Group>
        <FloatingLabel controlId="floatingTextarea" label="Введіть текст" className="mb-3 form-group">
            <Form.Control class="message" as="textarea" 
            ref={messageRef} 
            placeholder="Введіть текст повідомлення"  
            style={{ height: '100px' }}/>
        </FloatingLabel>
      
        <Button className="btn btn-mod btn-border btn-large" variant="outline-dark" type="submit" 
            style={{display: "block",margin: "auto"}}
            onClick={(handleSubmit)}>
          Відправити
        </Button>
      </Form>
    )
}

export default ContactForm;