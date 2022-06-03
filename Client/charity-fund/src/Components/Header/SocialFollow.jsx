import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import './SocialFollow.css'

function SocialFollow() {
  return (
    <div class="social-container">
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" color="#1877F2" />
      </a>
      <a href="https://twitter.com/caritative_kiev?s=11&t=mulM3xBKVmQRYMV0ThbUUw" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2"/>
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" color="#E4405F"/>
      </a>
    </div>
  );
}

export default SocialFollow;