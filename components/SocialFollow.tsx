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
    <div className="social-container items-center content-center grid grid-cols-5 p-8 gap-8">           
      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link 
        href="https://youtu.be/mV5DSttNOPE"
        className="youtube social" 
        passHref>
          <a 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-a2imgreen">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </Link>
      </motion.button>

      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link 
        href="https://www.facebook.com/independentlabels/"
        className="facebook social" 
        passHref>
          <a 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-a2imgreen">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </Link>
      </motion.button>

      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link 
        href="https://twitter.com/LiberaAwards"
        className="twitter social" 
        passHref>
          <a 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-a2imgreen">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </Link>
      </motion.button>

      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link 
        href="https://www.instagram.com/LiberaAwards/"
        className="instagram social" 
        passHref>
          <a 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-a2imgreen">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </Link>
      </motion.button>

      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link 
        href="https://www.linkedin.com/company/a2im-american-association-of-independent-music"
        className="linkedin social" 
        passHref>
          <a 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-a2imgreen">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </Link>
      </motion.button>
  </div>
  );
}

export function SocialFollowBlack() {
  return (
    <div className="social-container items-center content-center grid grid-cols-5 p-8 gap-8">           
      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link 
        href="https://youtu.be/mV5DSttNOPE"
        className="youtube social" 
        passHref>
          <a 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black hover:text-a2impurple">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </Link>
      </motion.button>

      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link 
        href="https://www.facebook.com/independentlabels/"
        className="facebook social" 
        passHref>
          <a 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black hover:text-a2impurple">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </Link>
      </motion.button>

      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link 
        href="https://twitter.com/LiberaAwards"
        className="twitter social" 
        passHref>
          <a 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black hover:text-a2impurple">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </Link>
      </motion.button>

      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link 
        href="https://www.instagram.com/LiberaAwards/"
        className="instagram social" 
        passHref>
          <a 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black hover:text-a2impurple">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </Link>
      </motion.button>

      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link 
        href="https://www.linkedin.com/company/a2im-american-association-of-independent-music"
        className="linkedin social" 
        passHref>
          <a 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black hover:text-a2impurple">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </Link>
      </motion.button>
  </div>
  );
}