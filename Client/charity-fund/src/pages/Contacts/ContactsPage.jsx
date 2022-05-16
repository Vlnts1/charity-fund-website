import React, { useState} from 'react';
import { Spring, animated } from 'react-spring'
import { Container, } from 'react-bootstrap';
import Textcard from '../../Components/common/Textcard';

function ContactsPage() {
  const contacts = [
    { header: 'Контакти',
     id: 1, title1: 'Електронна адреса', text1: '.....@gmail.com',
     id: 2, title2: 'Контактні телефони', text2: '38067-(823)-26-32, 38067-(823)-26-32', }
]
const [isVisible, setIsVisible] = useState(false);

  return (
    <Spring
    from={{ opacity: 0, transform: 'translateY(-4rem)'}}
    to={[
      { opacity: 1, transform: 'translateY(0rem)' },
    ]}
    reverse={isVisible}>
    {styles => (
      <animated.div style={styles}>

      <Container style={{margin: "20% auto", width: '60%'}}>
      {contacts.map((card )=>
      <Textcard card={card} key={card.id}/>)}
      </Container>

      </animated.div>
        )}
        </Spring>
  );
}

export default ContactsPage;