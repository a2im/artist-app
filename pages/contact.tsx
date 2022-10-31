import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import { motion } from "framer-motion"
import ArtistButton from '../components/artistbutton'


// adding animation to page transitions
const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

export default function Contact({ isFirstMount }) {
  return (
    <main>
    <div className="max-w-6xl mx-auto">
    <Header>CONTACT US</Header>
    </div>
    <motion.section exit={{ opacity: 0 }}>
    {isFirstMount}
      <Head>
        <title>Indie Week - Contact Us</title>
      </Head>
      <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={content(isFirstMount)}
          className="max-w-6xl mx-auto">
        <div className="relative grid grid-cols-0 md:grid-cols-3 max-w-6xl mx-auto gap-10 items-center justify-center">
          <div className='col-span-1 mx-auto p-4 items-center'>
            <h3 className="text-center">
              Sponsorship Inquiries?
            </h3>
            <ArtistButton href="mailto:sales@a2im.org" variant={"iwborder2"}>Click Here</ArtistButton>
          </div>
          <div className='col-span-1 mx-auto p-4 items-center'>
            <h3 className="text-center">
             A2IM Membership Inquiries?
            </h3>
            <ArtistButton href="mailto:membership@a2im.org" variant={"iwborder2"}>Click Here</ArtistButton>
          </div> 
          <div className='col-span-1 mx-auto p-4 items-center'>
            <h3 className="text-center">
            Press Inquiries?
            </h3>
            <ArtistButton href="mailto:marketing@a2im.org" variant={"iwborder2"}>Click Here</ArtistButton>
           </div>
        </div>
      </motion.div>
      </motion.section>
      </main>
  );
}