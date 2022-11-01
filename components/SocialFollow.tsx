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
import { motion } from "framer-motion";
  

export function SocialFollowWhite() {
  return (
    <div className="social-container items-center content-center grid grid-cols-5 gap-8">
    <Link href="https://youtu.be/mV5DSttNOPE"
    className="youtube social" passHref>
      <motion.button 
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}>
      <a className="text-white">
    <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      </motion.button>
    </Link>
    <Link href="https://www.facebook.com/independentlabels/"
    className="facebook social" passHref>
      <motion.button 
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}>
      <a className="text-white">
    <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    </motion.button>
    </Link>
    <Link href="https://twitter.com/LiberaAwards" 
    className="twitter social" passHref>
      <motion.button 
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}>
      <a className="text-white">
    <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    </motion.button>
    </Link>
    <Link href="https://www.instagram.com/LiberaAwards/"
    className="instagram social" passHref>
      <motion.button 
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}>
      <a className="text-white">
    <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    </motion.button>
    </Link>
    <Link href="https://www.linkedin.com/company/a2im-american-association-of-independent-music"
    className="linkedin social" passHref>
      <motion.button 
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}>
      <a  className="text-white">
    <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    </motion.button>
    </Link>
  </div>
  );
}

export function SocialFollowBlack() {
  return (
    <div className="social-container items-center content-center grid grid-cols-5 gap-8">
    <Link href="https://youtu.be/mV5DSttNOPE"
    className="youtube social" passHref>
      <motion.button 
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}>
      <a className="text-black">
    <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      </motion.button>
    </Link>
    <Link href="https://www.facebook.com/independentlabels/"
    className="facebook social" passHref>
      <motion.button 
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}>
      <a className="text-black">
    <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    </motion.button>
    </Link>
    <Link href="https://twitter.com/LiberaAwards" 
    className="twitter social" passHref>
      <motion.button 
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}>
      <a className="text-black">
    <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    </motion.button>
    </Link>
    <Link href="https://www.instagram.com/LiberaAwards/"
    className="instagram social" passHref>
      <motion.button 
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}>
      <a className="text-black">
    <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    </motion.button>
    </Link>
    <Link href="https://www.linkedin.com/company/a2im-american-association-of-independent-music"
    className="linkedin social" passHref>
      <motion.button 
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}>
      <a  className="text-black">
    <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    </motion.button>
    </Link>
  </div>
  );
}