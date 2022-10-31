import React from "react"
import Image from "next/image"
import Link from "next/link"
import ArtistButton from "./artistbutton";
import { motion, AnimatePresence } from "framer-motion";


export function About1 () {
    return (
      <AnimatePresence>
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto">
          <motion.div
        key="two"
        initial= {{
            opacity:0,
            x:300,
            y:500,
            scale: "20%",
              }}
        whileInView={{
            opacity: 1,
            x: 300,
            y:160,
            scale: ["105%", "90%", "110%", "90%"],
            transition:{ 
              delay: 0, 
              duration: 1,
              when: "afterChildren",
              ease: "anticipate", 
            }}}
          viewport={{ once: false, amount: 0.6 }}
          className="w-32">
                    <motion.div
        key="two.grow"
        initial= {{
            scale: "100%",
              }}
        animate={{
            rotateX: [360, 180, 360],
            scale: ["90%", "70%", "100%", "70%", "100%", "90%"],
            transition:{
              ease: "anticipate",
              duration: 8,
              repeat: Infinity,
              delay: 0,
          }
            }}
            whileTap={{scale: 0.9}}
          className="-ml-64 w-32 -mt-32">
<Image src="/images/sparkle-red.png" layout="responsive" width={100} height={100} objectFit={'contain'}></Image>
        </motion.div>
        </motion.div>
            <div className="max-w-6xl z-10 flex flex-col md:flex-row mt-10 justify-center items-center mx-auto gap-10 p-5">
              <div className="flex-initial relative p-20 items-center max-w-xl">
                <h2> INDEPENDENT MUSIC'S LARGEST CONFERENCE</h2>
                <hr className="border-iwred my-5"></hr>
                <h4>Held annually in New York City, A2IM Indie Week
is the largest gathering of the independent
music community. Drawing labels, distributors,
DSPs, agencies and more, participants can
expect 4 days of insightful discussions and
fruitful networking.</h4>
              </div>
              <div className="image-cropper flex-initial w-1/2 max-w-2xl">
                <Image className="roundedimage" src="/images/opening-reception-sq.jpg" alt='indie week opening reception' width={300} height={300} layout='responsive' objectFit='contain' />
              </div>
            </div>
            <ArtistButton href='/tickets' variant="iwbuttonsolid">LEARN MORE</ArtistButton>
          </div>
        </div>
        </AnimatePresence>
    )
}



export function About2 () {
  return (
      <div className="mx-auto">
        <div className="mx-auto max-w-6xl">
        <motion.div
        key="two"
        initial= {{
            opacity:0,
            x:200,
            y:300,
            scale: "20%",
              }}
        whileInView={{
            opacity:1,
            x: 400,
            y: 150,
            scale: ["105%", "80%", "90%", "105%"],
            transition:{ 
              delay: 1, 
              duration: 1,
              when: "afterChildren",
              ease: "anticipate", 
            }}}
          viewport={{ once: false, amount: 0.8 }}
          className="w-32 -mt-32">
                    <motion.div
        key="two.grow"
        initial= {{
            scale: "100%",
              }}
        animate={{
            rotateX: [360, 180, 360],
            scale: ["105%", "70%", "80%", "100%", "105%"],
            transition:{
              ease: "anticipate",
              duration: 5,
              repeat: Infinity,
              delay: 0,
          }
            }}
            whileTap={{scale: 0.9}}
          className="w-32">
<Image src="/images/sparkle-red.png" layout="responsive" width={100} height={100} objectFit={'contain'}></Image>
        </motion.div>
        </motion.div>
          <div className="max-w-6xl flex flex-col md:flex-row mt-10 justify-center items-center mx-auto gap-10 p-5">
            <div className="image-cropper flex-initial max-w-2xl w-1/2">
              <Image className="roundedimage" src="/images/iwmeetings-sq.jpg" alt='indie week meeting room' width='500px' height='500px' layout='responsive' objectFit='contain' />
            </div>
            <div className="flex-initial relative max-w-xl p-10 text-right">
              <h3><span><h2>FOLLOW A2IM </h2></span>TO
STAY UP TO DATE ON
PROGRAMMING
& TICKET SALES</h3>
<hr className="border-iwred my-5"></hr>
              <h4>Each year we carefully curate our lineup of
expert speakers to discuss the most precient
topics in music. Subjects covered have included
touring, marketing, sync licensing, industry
predictions, DSP workshops, and many more.</h4>
            </div>
          </div>
          <ArtistButton href='/tickets' variant="iwbuttonsolid">PAST PROGRAMMING</ArtistButton>
        </div>
      </div>
  )
}