import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './SocialFollow.css';

function SocialFollow() {
         /* eslint-disable import/prefer-default-export */
  return (
    <div className="social-container">
      <a
        href="https://www.facebook.com/PatrimoineKiev/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" color="#1877F2" />
      </a>
      <a href="https://twitter.com/PatrimoineKiev" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" />
      </a>
    </div>
  );
}

export  {SocialFollow};
