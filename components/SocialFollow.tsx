import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
  import Link from "next/link";
  

export default function SocialFollow() {
  return (
    <div className="social-container content-center grid grid-cols-5 gap-8">
    <Link href="https://youtu.be/mV5DSttNOPE"
    className="youtube social" passHref><a>
    <FontAwesomeIcon icon={faYoutube} size="2x" />
  </a></Link>
  <Link href="https://www.facebook.com/independentlabels/"
    className="facebook social" passHref><a>
    <FontAwesomeIcon icon={faFacebook} size="2x" />
  </a></Link>
  <Link href="https://twitter.com/LiberaAwards" className="twitter social" passHref>
    <a><FontAwesomeIcon icon={faTwitter} size="2x" />
  </a></Link>
  <Link href="https://www.instagram.com/LiberaAwards/"
    className="instagram social" passHref>
    <a><FontAwesomeIcon icon={faInstagram} size="2x" />
  </a></Link>
  <Link href="https://www.linkedin.com/company/a2im-american-association-of-independent-music"
    className="linkedin social" passHref>
    <a><FontAwesomeIcon icon={faLinkedin} size="2x" />
  </a></Link>
  </div>
  );
}