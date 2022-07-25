import React, { useRef } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import './ContactForm.css'
import Axios from 'axios';

function ContactForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    Axios.post(`https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/sendMessage`, {
      chat_id: process.env.REACT_APP_CHAT_ID,
      parse_mode: 'html',
      text: data,
    })
     
  };
  return (
    <Form id="contact-form" className="form">
      <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
        <Form.Control type="text" ref={nameRef} placeholder="Ваше ім'я" required />
      </Form.Group>

      <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
        <Form.Control type="email" ref={emailRef} placeholder="Ваша електронна адреса" required />
      </Form.Group>
      <FloatingLabel controlId="floatingTextarea" label="Введіть текст" className="mb-3 form-group">
        <Form.Control
          class="message"
          as="textarea"
          ref={messageRef}
          placeholder="Введіть текст повідомлення"
          className="formcontrol"
        />
      </FloatingLabel>

      <Button
        className="btn btn-mod btn-border btn-large contactform-btn"
        variant="outline-dark"
        type="submit"
        onClick={handleSubmit}
      >
        Відправити
      </Button>
    </Form>
  );
}

export default ContactForm;
