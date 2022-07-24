import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './ReportsPage.css';
import CircularProgress from '@mui/material/CircularProgress';

function ReportsPage({ articles }) {
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
        <CircularProgress
          isLoading={isLoading}
          style={{ position: 'fixed', top: '50%', left: '50%' }}
        />
      ) : (
        <Container className="Containerreports">
          <Row className="animate">
            <Col>
              <h1 style={{ textAlign: 'center', margin: '2% auto' }}> Звіти </h1>
            </Col>
          </Row>
          <Row className="articlesblock">
            <Col className="animate">
              {articles.map((article) => (
                <Card body style={{ margin: '2% auto', width: '80%' }}>
                  <div style={{ display: 'flex' }}>
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

export default ReportsPage;
