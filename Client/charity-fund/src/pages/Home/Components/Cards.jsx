import React, {useState} from 'react';
import Card from './Card';
import { CardGroup } from 'react-bootstrap'

function Cards() {
    const [cards, setCards] = useState([
        // {id: 1, img: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title: 'Наші проекти', text: 'Ми реалізуємо проекти, спрямовані на підтримку українських громадян, які постраждали внаслідок конфлікту. До них належить наша основна програма підтримки внутрішньо переміщених осіб (ВПО) — «Радник з питань ВПО», а також освітні настільні ігри, ініціативи з інтеграції ветеранів тощо.', link: '/projects'},
        {id: 2, img: 'https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', title: 'Блог', text: 'Ми проводимо комплексні медіа-кампанії для підвищення обізнаності щодо проблем, з якими, стикається населення, яке постраждало внаслідок конфлікту під час з стабілізації та відновлення повної участі в суспільному житті України. Ми готуємо регулярні звіти про наші програми, а також статті, що стосуються питань ВПО.', link: '/blog'},
        {id: 3, img: 'https://images.pexels.com/photos/2058147/pexels-photo-2058147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title: 'Звіти', text: 'БФ «ССС» в рамках наших проектів та ініціатив організовує різноманітні події – від фасилітованих діалогів до зустрічей між посадовими особами та представниками громадянського суспільства, щоб українська громадськість дізналася про життя людей, які постраждали від конфлікту і могла долучитися до його покращення.', link: '/reports'},
    ])

  return (
    <div className="flex">
      <h1 style={{textAlign: "center", margin: "5% auto"}}>Що ми робимо</h1>
      <CardGroup style={{margin: "5% auto", width: '80%'}}>
              {cards.map((card )=>
          <Card card={card} key={card.id}/>)}
      </CardGroup>
    </div>
  );
}

export default Cards;