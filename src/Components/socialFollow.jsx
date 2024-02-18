import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faXTwitter,
    faInstagram,
    faLinkedin,
    faGoogle
  } from "@fortawesome/free-brands-svg-icons";

const socialFollow = () => {
  return (
    <div className='socialContent'>
        <a href="#youtube" className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="#facebook" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="#twitter" className="twitter social">
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
        </a>
        <a href="#instagram" className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="#linkedin" className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="#mail" className="googlemail social">
            <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>
    </div>
  )
}

export default socialFollow