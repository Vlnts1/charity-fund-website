import React, {useState} from 'react';
import Card from './Card';
import { CardGroup} from 'react-bootstrap'

function Projectcards() {
    const [cards, setCards] = useState([
        {id: 1, title: 'проект 1', text: 'Ми реалізуємо проекти, спрямовані на підтримку українських громадян, які постраждали внаслідок конфлікту. До них належить наша основна програма підтримки внутрішньо переміщених осіб (ВПО) — «Радник з питань ВПО», а також освітні настільні ігри, ініціативи з інтеграції ветеранів тощо.'},
        {id: 2, title: 'проект 2', text: 'Ми проводимо комплексні медіа-кампанії для підвищення обізнаності щодо проблем, з якими, стикається населення, яке постраждало внаслідок конфлікту під час з стабілізації та відновлення повної участі в суспільному житті України. Ми готуємо регулярні звіти про наші програми, а також статті, що стосуються питань ВПО.'},
        {id: 3, title: 'проект 3', text: 'БФ «ССС» в рамках наших проектів та ініціатив організовує різноманітні події – від фасилітованих діалогів до зустрічей між посадовими особами та представниками громадянського суспільства, щоб українська громадськість дізналася про життя людей, які постраждали від конфлікту і могла долучитися до його покращення.'},
    ])

  return (

  <CardGroup style={{textAlign: "center"}}>
            {cards.map((card )=>
          <Card card={card} key={card.id}/>)}
  </CardGroup>
  );
}

export default Projectcards;