import React, { useRef }  from "react";
import {Form, Button, FloatingLabel} from 'react-bootstrap';
import './ContactForm.css'


function ContactForm(){
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef =  useRef(null)
    const handleSubmit = (event) => {
        event.preventDefault()
    
        const data = {
              name: nameRef.current.value,
              email: emailRef.current.value,
              message: messageRef.current.value
              }
        alert("Hey!: \n" + JSON.stringify(data) + "Here is ur data 😎")
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
      
        <Button className="btn btn-mod btn-border btn-large" variant="primary" type="submit" 
            style={{display: "block",margin: "auto"}}
            onClick={(handleSubmit)}>
          Відправити
        </Button>
      </Form>
    )
}

export default ContactForm;