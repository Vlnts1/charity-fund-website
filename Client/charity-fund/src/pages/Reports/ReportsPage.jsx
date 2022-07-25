import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './ReportsPage.css';
import PropTypes from 'prop-types';
import {Loader} from '../../Components/common/loader';

function ReportsPage({ articles }) {
         /* eslint-disable import/prefer-default-export */
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="Articles">
      {isLoading ? (
         <Loader
         isLoading={isLoading}
       />
      ) : (
        <Container className="Containerreports">
          <Row className="animate">
            <Col>
              <h1 className="article-header"> Звіти </h1>
            </Col>
          </Row>
          <Row className="articlesblock">
            <Col className="animate">
              {articles.map((article) => (
                <Card body className="articlecard">
                  <div className="carddiv">
                    <h5>
                      <a href={article.file} download>
                        {article.title}
                      </a>
                    </h5>
                  </div>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}
ReportsPage.PropTypes.shape({
  file: PropTypes.string,
  title: PropTypes.string
})

export  {ReportsPage};
