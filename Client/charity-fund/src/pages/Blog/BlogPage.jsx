import React, { useState, useEffect } from 'react';
import './Components/BlogContent.css';
import { Container, Row, Col } from 'react-bootstrap';
import {Loader} from '../../Components/common/loader';
import TwitterContainer from './Components/TwitterContainer';

function BlogPage() {
         /* eslint-disable import/prefer-default-export */
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
        <Loader
          isLoading={isLoading}
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

export  {BlogPage};
