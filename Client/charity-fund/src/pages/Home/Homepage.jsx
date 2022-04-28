import React, {useState}  from 'react';
import { Spring, animated } from 'react-spring'

import Textcontainer from '../../Components/common/Textcontainer'
import Cards from './Components/Cards'

function Homepage() {
  const homeinfo = [
    {header: 'Home', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
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
      {homeinfo.map((card)=><Textcontainer card={card}/>)}

      <Cards/>

    </animated.div>
     )}
     </Spring>
  );
}

export default Homepage;