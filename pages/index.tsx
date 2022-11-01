import Head from 'next/head'
import { motion } from "framer-motion"
import { About1, About2 } from "../components/about-us";
import Intro from "../components/intro";

// adding animation to page transitions
const indieweekcontent = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

export default function Index({ isFirstMount}) {
  

  return (
      <motion.section exit={{ opacity: 0 }}>
          <Head>
              <title>A2IM:Artist - Home</title>
          </Head>
          <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={indieweekcontent(isFirstMount)}
          className=""
          >
            <Intro />
            <About1 />
            <About2 />
        </motion.div>
      </motion.section>
  );
  }


