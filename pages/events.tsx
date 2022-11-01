import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import { motion } from "framer-motion"
import Events from '../components/events'

// adding animation to page transitions
const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

export default function MyEvents({ isFirstMount }) {
  
  return (
    <main>
    <div className="mx-auto bg-a2imgreen text-black">
    <Header>Events</Header>
    </div>
    <motion.section exit={{ opacity: 0 }}>
    {isFirstMount}
      <Head>
        <title>A2IM:Artist - Events</title>
      </Head>
      <motion.div
          initial="initial"
          animate="animate"
          variants={content(isFirstMount)}
          className="px-8 py-2"
          >
            <Events />
      </motion.div>
      </motion.section>
      </main>
  );
}
