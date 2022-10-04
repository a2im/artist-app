import React, { useRef, useState } from "react";
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { motion } from "framer-motion"
import { getAllPostsForHome } from '../lib/api'
import Intro from '../components/intro'
import { Hidden } from '@mui/material'

// adding animation to page transitions
const artistcontent = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

export default function Index({ isFirstMount, allPosts: { edges }}) {
  
  const morePosts = edges.slice(0,3)

  return (
      <motion.section exit={{ opacity: 0 }}>
          <Head>
              <title>A2IM Artist - Home</title>
          </Head>
          <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={artistcontent(isFirstMount)}
          className="">
          <Intro />
        </motion.div>
      </motion.section>
  );
  }


export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
};
