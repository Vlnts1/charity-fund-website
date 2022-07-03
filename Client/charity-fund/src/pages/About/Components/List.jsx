import React from "react";
import {Accordion} from "react-bootstrap";
export default function List(){
    return(
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Допомога дітям</Accordion.Header>
          <Accordion.Body>
          Фонд допомагає дітям з інвалідністю отримати необхідну медичну допомогу,
           а разом з цим розвиває системні проекти допомоги дітям
            та проводить різноманітні заходи для підопічних родин.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Допомога стареньким</Accordion.Header>
          <Accordion.Body>
          Під постійною опікою нашого фонду знаходяться старенькі з інвалідністю,
           які постраждали від війни в Україні та потребують підтримки.
        Ми надаємо адресну та соціально-психологічну допомогу цим літнім людям.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Розвиток волонтерства та благодійності</Accordion.Header>
          <Accordion.Body>
          Ми залучаємо волонтерів до участі в проектах фонду,
           ініціюємо благодійні акції, події та заходи на користь підопічних фонду.
            Підтримуємо волонтерські ініціативи та інклюзивні проекти.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
}