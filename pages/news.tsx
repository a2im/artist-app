import React from 'react'
import { GetStaticProps } from 'next'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import Header from '../components/header'
import { motion } from "framer-motion"
import RecentNews from '../components/recent-news'


// adding animation to page transitions
const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

export default function Contact({ isFirstMount, allPosts: { edges } }) {

  const morePosts = edges.slice(0,10)

  return (
    <main>
    <div className="bg-a2imgreen text-black mx-auto">
    <Header>NEWS</Header>
    </div>
    <motion.section exit={{ opacity: 0 }}>
    {isFirstMount}
      <Head>
        <title>A2IM:Artist - News</title>
      </Head>
      <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={content(isFirstMount)}
          className="max-w-4xl mx-auto">
      <RecentNews posts={morePosts}/>
      <div className="py-10" />
      </motion.div>
      </motion.section>
      </main>
  );
  
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
};
