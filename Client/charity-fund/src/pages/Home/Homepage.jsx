import React, {useState}  from 'react';
import ButtonPayload  from './Components/Button';
import { Spring, animated } from 'react-spring'
import { Col} from 'react-bootstrap';
import Carouselmain from './Components/Carousel';
import Cards from './Components/Cards'

function Homepage() {

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
      <Carouselmain/>
      
      <div>
        <h1 style={{textAlign: "center", margin: "5% auto"}}>Nazva</h1>
        <p style={{width: "80%", margin: "5% auto"}}>
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
         Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный 
         печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
          Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.
           Его популяризации в новое время послужили публикация листов Letraset с образцами 
           Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.

        </p>  
        
      </div>
      <Col style={{margin: '40px',textAlign: "center"}}><ButtonPayload/></Col>
      <Cards/>

    </animated.div>
     )}
     </Spring>
  );
}

export default Homepage;