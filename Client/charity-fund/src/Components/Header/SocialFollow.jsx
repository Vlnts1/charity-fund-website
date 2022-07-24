import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './SocialFollow.css';

function SocialFollow() {
  return (
    <div class="social-container">
      <a
        href="https://www.facebook.com/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D1%82%D0%B2%D0%BE%D1%80%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%84%D0%BE%D0%BD%D0%B4-%D0%94%D1%83%D1%85%D0%BE%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D0%B8-%D0%B7%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8C%D0%B5-%D0%BD%D0%B0%D1%86%D0%B8%D0%B8-741122256255817/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" color="#1877F2" />
      </a>
      <a href="https://twitter.com/PatrimoineKiev" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" />
      </a>
      {/* <a href=""
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" color="#E4405F"/>
      </a> */}
    </div>
  );
}

export default SocialFollow;
