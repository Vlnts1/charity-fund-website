
import React, {useState} from 'react';
import { Spring, animated } from 'react-spring'

import { Container, Col } from 'react-bootstrap';
import Imagecap from '../../Components/common/Imagecap';
import Textcontainer from '../../Components/common/Textcontainer';


function AboutPage() {
  const aboutinfo = [
    {image: 'https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  ]

  const [isVisible, setIsVisible] = useState(false);


  return (
    // <Spring
    // from={{ opacity: 0, transform: 'translateY(-4rem)'}}
    // to={[
    //   { opacity: 1, transform: 'translateY(0rem)' },
    // ]}
    // reverse={isVisible}>
    // {styles => (
    //   <animated.div style={styles}>
    <Container style={{margin: "10% auto", width: '60%'}}>
        <Col>{aboutinfo.map((card)=><Imagecap card={card}/>)}</Col>
        <Col style={{textAlign: "center",margin: "2% auto"}}><h1>About us</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p></Col>
    </Container>
    // </animated.div>
    // )}
    // </Spring>
    
  );
}

export default AboutPage;