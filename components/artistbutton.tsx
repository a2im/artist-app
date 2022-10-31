import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ArtistButton ({ children, href, variant }){
  return (
    <div className="mx-auto p-8">
    <div className='flex grow shrink max-w-96'>
        <Link href={href} passHref>
        <div className="p-7 drop-shadow-2xl max-h-21 justify-center leading-tight mx-auto">
            <motion.button 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            className={variant}>
              <h4 className="align-middle grow p-2 pl-10 pr-10 shrink">
              {children}
              </h4>
            </motion.button>
        </div>
        </Link>
    </div>
    </div>
  );
}
