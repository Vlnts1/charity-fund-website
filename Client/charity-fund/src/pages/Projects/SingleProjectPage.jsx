import React from "react";
import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

function SingleProjectPage () {
    
   
      return (

        <Container fluid="md" style={{width: "80%", margin: "12% auto"}}>
            <Row style={{margin: "2% auto"}}>
                <Col><h1 style={{textAlign: "left"}}>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h1></Col>
            </Row>
            <Row style={{width: "100%", margin: "2% auto", display: "flex", justifyContent: "space-between"}}>
                <Col xs lg="2">
                <img variant="top" style={{ width: '23rem' }} src="https://images.pexels.com/photos/4168645/pexels-photo-4168645.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                </Col>
                <Col xs={6} style={{ width: '44rem' }} >
                 <p>
                 Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, 
                 которые даже отдалённо не напоминают латынь. 
                 <dl/>
                 Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором.
                 Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.
                 <dl/>
                 Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, 
                 которые даже отдалённо не напоминают латынь. 
                 Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, 
                 <dl/>
                 который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором.
                 Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.
                 </p>
 
                </Col>
            </Row>
        </Container>

    )
}

export default SingleProjectPage;