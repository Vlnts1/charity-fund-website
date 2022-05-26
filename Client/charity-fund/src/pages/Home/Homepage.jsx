import React from 'react';
import ButtonPayload  from './Components/Button';
import { Col} from 'react-bootstrap';
import Carouselmain from './Components/Carousel';
import Cards from './Components/Cards'

function Homepage() {

  return (

      
      <div className="Homepage">
        <Carouselmain/>

        <h1 style={{textAlign: "center", margin: "2% auto"}}>Nazva</h1>
        <p style={{width: "80%", margin: "5% auto"}}>
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
         Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный 
         печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
          Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.
           Его популяризации в новое время послужили публикация листов Letraset с образцами 
          Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.

        </p>  
        
     
        <Col style={{margin: '40px',textAlign: "center"}}><ButtonPayload/></Col>
        <Cards/>
      </div>

  );
}

export default Homepage;