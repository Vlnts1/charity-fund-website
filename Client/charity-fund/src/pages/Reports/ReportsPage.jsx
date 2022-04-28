import React, {useState} from 'react';
import ArticlesList from './Components/ArticlesList';
import {Form, Card, Button} from 'react-bootstrap'
import { Spring, animated } from 'react-spring'


function ReportsPage({isAdmin}) {
  const [articles, setArticles] = useState([
    {id:1, title: 'Новий звіт1', file: ''},
    {id:2, title: 'Новий звіт2', file: ''},
    {id:3, title: 'Новий звіт3', file: ''},
    {id:4, title: 'Новий звіт4', file: ''},
    {id:5, title: 'Новий звіт5', file: ''},
])
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
      <div style={{textAlign: 'center', margin: "1% auto"}}>
      <h1> Звіти </h1>
        <ArticlesList articles={articles}/>
      </div>
      </animated.div>
    )}
    </Spring>
  );
}

export default ReportsPage;