import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import { motion } from "framer-motion"
import { About1, About2 } from '../components/about-us'


// adding animation to page transitions
const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

export default function About({ isFirstMount }) {
  return (
    <main>
    <div className="mx-auto text-black bg-a2imgreen">
    <Header>ABOUT</Header>
    </div>
    <motion.section exit={{ opacity: 0 }}>
    {isFirstMount}
      <Head>
        <title>A2IM:Artist - About Us</title>
      </Head>
      <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={content(isFirstMount)}
          className="mx-auto">
      <About1 />
      <About2 />
      </motion.div>
      </motion.section>
      </main>
  );
}