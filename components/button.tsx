import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ArtistButtonExternal ({ children, href, variant }){
  return (
    <div className='mx-auto text-center'>
        <Link href={href} passHref target="_blank">
        <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="p-7 drop-shadow-2xl max-h-21 justify-center leading-tight mx-auto">
            <motion.button 
            whileTap={{scale: 0.95}}
            className={variant}>
              <h4 className="align-middle grow p-2 pl-10 pr-10 shrink">
              {children}
              </h4>
            </motion.button>
        </div>
        </a>
        </Link>
    </div>

  );
}

export function ArtistButtonInternal ({ children, href, variant }){
  return (
    <div className='mx-auto text-center'>
        <Link href={href} passHref target="_blank">
        <div className="p-7 drop-shadow-2xl max-h-21 justify-center leading-tight mx-auto">
            <motion.button 
            whileTap={{scale: 0.95}}
            className={variant}>
              <h4 className="align-middle grow p-2 pl-10 pr-10 shrink">
              {children}
              </h4>
            </motion.button>
        </div>
        </Link>
    </div>

  );
}
