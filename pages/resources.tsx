import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import { motion } from "framer-motion"

// adding animation to page transitions
const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});


export default function Resources({ isFirstMount, onClick, ref }) {
  return (
    <main>
    <div className="mx-auto bg-a2imgreen text-black">
    <Header>Resources</Header>
    </div>
    <motion.section exit={{ opacity: 0 }}>
    {isFirstMount}
      <Head>
        <title>A2IM:Artist - Resources</title>
      </Head>
      <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={content(isFirstMount)}
          className="">
            <div className="max-w-4xl p-8 mx-auto">
        <div className="LiberaBorder mx-auto">

        <h3 className='mb-8 text-center p-8'>Click below to access A2IM:Artist Resources.</h3>
            <motion.section className='flex flex-col md:flex-row flex-wrap max-w-6xl mb-10 mx-auto gap-10 justify-center content-center'> 
              <Link ref={ref} id="archive22"  onClick={onClick} href="/archive/2022" passHref>
                <div className="artistborder1 text-black hover:text-white justify-center shadow-2xl w-96 p-5 bg-a2imgreen hover:bg-a2impurple mygrow">
                  <h2 className="text-center whitespace-nowrap">2022 WINNERS</h2>
                  </div>
                </Link>
              <Link ref={ref} id="archive21"  onClick={onClick} href="/archive/2021">
              <div className="artistborder2 text-black hover:text-white justify-center shadow-2xl w-96 p-5 bg-a2imgreen hover:bg-a2impurple mygrow">
                  <h3 className="text-center whitespace-nowrap">2021 WINNERS</h3>
                  </div>
                </Link>
              <Link ref={ref} id="archive20"  onClick={onClick} href="/archive/2020">
              <div className="artistborder3 text-black hover:text-white justify-center shadow-2xl w-96 p-5 bg-a2imgreen hover:bg-a2impurple mygrow">
                  <h3 className="text-center whitespace-nowrap">2020 WINNERS</h3>
                  </div>
                </Link>
              <Link ref={ref} id="archive19" className="" onClick={onClick} href="/archive/2019">
              <div className="artistborder4 text-black hover:text-white justify-center shadow-2xl w-96 p-5 bg-a2imgreen hover:bg-a2impurple mygrow">
                  <h3 className="text-center whitespace-nowrap">2019 WINNERS</h3>
                  </div>
                </Link>
              <Link ref={ref} id="archive18" className="" onClick={onClick} href="/archive/2018">
              <div className="artistborder4 text-black hover:text-white justify-center shadow-2xl w-96 p-5 bg-a2imgreen hover:bg-a2impurple mygrow">
                  <h3 className="text-center whitespace-nowrap">2018 WINNERS</h3>
                  </div>
                </Link>
              <Link ref={ref} id="archive17" className="" onClick={onClick} href="/archive/2017">
              <div className="artistborder3 text-black hover:text-white justify-center shadow-2xl w-96 p-5 bg-a2imgreen hover:bg-a2impurple mygrow">
                  <h3 className="text-center whitespace-nowrap">2017 WINNERS</h3>
                  </div>
                </Link>
              <Link ref={ref} id="archive16" className="" onClick={onClick} href="/archive/2016">
              <div className="artistborder2 text-black hover:text-white justify-center shadow-2xl w-96 p-5 bg-a2imgreen hover:bg-a2impurple mygrow">
                  <h3 className="text-center whitespace-nowrap">2016 WINNERS</h3>
                  </div>
                </Link>
              <Link ref={ref} id="archive15" className="" onClick={onClick} href="/archive/2015">
              <div className="artistborder1 text-black hover:text-white justify-center shadow-2xl w-96 p-5 bg-a2imgreen hover:bg-a2impurple mygrow">
                  <h3 className="text-center whitespace-nowrap">2015 WINNERS</h3>
                  </div>
                </Link>
              <Link ref={ref} id="archive14" className="" onClick={onClick} href="/archive/2014">
              <div className="artistborder1 text-black hover:text-white justify-center shadow-2xl w-96 p-5 bg-a2imgreen hover:bg-a2impurple mygrow">
                  <h3 className="text-center whitespace-nowrap">2014 WINNERS</h3>
                  </div>
                </Link>
              <Link ref={ref} id="archive13" className="" onClick={onClick} href="/archive/2013">
              <div className="artistborder2 text-black hover:text-white justify-center shadow-2xl w-96 p-5 bg-a2imgreen hover:bg-a2impurple mygrow">
                  <h3 className="text-center whitespace-nowrap">2013 WINNERS</h3>
                  </div>
                </Link>
              <Link ref={ref} id="archive12" className="" onClick={onClick} href="/archive/2012">
              <div className="artistborder3 text-black hover:text-white justify-center shadow-2xl w-96 p-5 bg-a2imgreen hover:bg-a2impurple mygrow">
                  <h3 className="text-center whitespace-nowrap">2012 WINNERS</h3>
                  </div>
                </Link>
            </motion.section>
            </div>
            </div>
      </motion.div>
      </motion.section>
      </main>
  );
}