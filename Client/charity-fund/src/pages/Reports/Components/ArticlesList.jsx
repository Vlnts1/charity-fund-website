import React from 'react';
import Articlecard from './Articlecard';

const ArticlesList = ({articles}) => {


    return(
        <div>
        {articles.map((article, index )=> 
            <Articlecard  number={index +1} article={article} key={article.id}/>)}

        </div>

        
    )
}

export default ArticlesList;