import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArtistButtonInternal } from "./button";
import { motion, AnimatePresence } from "framer-motion";


export function About1 () {
    return (
      <AnimatePresence>
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto">
            <div className="max-w-6xl flex flex-col md:flex-row mt-10 justify-center items-center mx-auto gap-10 p-5">
              <div className="flex-initial relative p-20 items-center max-w-xl">
                <h2> INDEPENDENT MUSIC'S LARGEST CONFERENCE</h2>
                <hr className="border-a2impurple my-5"></hr>
                <h4>In Feb 2020, A2IM launched A2IM:Artist to help independent, self-releasing artists, optimize their careers by providing crucial information and networking opportunities. There is no cost to be an A2IM:Artist member though to qualify you must be a self-releasing, independent artist and the only act on the label.</h4>
              </div>
              <div className="image-cropper flex-initial w-1/2 max-w-2xl">
                <Image className="roundedimage" src="/images/artist8-sq.jpg" alt='a2im artist speaker' width={300} height={300} layout='responsive' objectFit='contain' />
              </div>
            </div>
            <ArtistButtonInternal href='/tickets' variant="artistborder1">LEARN MORE</ArtistButtonInternal>
          </div>
        </div>
        </AnimatePresence>
    )
}



export function About2 () {
  return (
      <div className="bg-a2imgreen mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-6xl flex flex-col md:flex-row mt-10 justify-center items-center mx-auto gap-10 p-5 pt-10">
            <div className="image-cropper flex-initial max-w-2xl w-1/2">
              <Image className="roundedimage" src="/images/artist5-sq.jpg" alt='a2im artist panelists' width='500px' height='500px' layout='responsive' objectFit='contain' />
            </div>
            <div className="flex-initial relative max-w-xl text-black p-10 text-right">
              <h3><span><h2>FOLLOW A2IM </h2></span>TO
STAY UP TO DATE ON
EVENTS
& NEW RESOURCES</h3>
<hr className="border-a2impurple my-5"></hr>
              <h4>A2IM:Artist is your gateway to essential content. A2IM:Artist members receive access to curated A2IM:Artist events that are both in-person and online, access to the A2IM Artist Info Hub, and crucial music business information tailored to take your career to the next level. JOIN NOW</h4>
            </div>
          </div>
        </div>
        <ArtistButtonInternal href='/tickets' variant="artistborder6">PAST PROGRAMMING</ArtistButtonInternal>
      </div>
  )
}