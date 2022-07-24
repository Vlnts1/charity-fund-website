import React, { useState, useEffect } from 'react';
import './Components/BlogContent.css';
import TwitterContainer from './Components/TwitterContainer';
import CircularProgress from '@mui/material/CircularProgress';
import { Container, Row, Col } from 'react-bootstrap';

function BlogPage() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="blogPage">
      <div className="animate">
        {isLoading ? (
          <CircularProgress
            isLoading={isLoading}
            style={{ position: 'fixed', top: '50%', left: '50%' }}
          />
        ) : (
          <Container>
            <Row>
              <Col>
                <TwitterContainer />
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
