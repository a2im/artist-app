import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex justify-center gap-10 items-center mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        A2IM Artist
      </h1>
      <div className="flex-col flex w-96 items-center">
      <h4 className="text-center md:text-left text-lg mt-5">
      ABOUT A2IM:ARTIST      </h4><p className="tracking-tighter">

In Feb 2020, A2IM launched A2IM:Artist with the goal of helping independent, self-releasing artists, optimize their careers by providing crucial information and networking opportunities. There is no cost to be an A2IM:Artist member thought to qualify you must be a self-releasing, independent artists and the only act on the label.

A2IM:Artist members receive robust but limited access to information from A2IM via our online A2IM:Artist Resource Guide, access to A2IM:Artist’s directory, access to curated events, and our social media platforms TikTok and YouTube. JOIN NOW

</p></div>
    </section>
  )
}
