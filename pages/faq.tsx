import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import SectionSeparator from '../components/section-separator';

// adding animation to page transitions
const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

export default function Faqpage({ isFirstMount, }) {
  
  return (
    <main>
    <div className="max-w-6xl">
    <Header>FAQ</Header>
    </div>
    <motion.section exit={{ opacity: 0 }}>
    {isFirstMount}
      <Head>
        <title>A2IM:Artist - FAQ</title>
      </Head>
      <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={content(isFirstMount)}
          className="max-w-4xl mx-auto">
            <div className="artistborder p-8">
            <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      Record of the Year
                    </AccordionItemButton>                
                  </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best record 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Video of the Year
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Most impactful or visually compelling music video. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Label of the Year
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best independent label with 15 or more worldwide full-time employees. The total number of employees is based on the number of worldwide employees of the parent label.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Label of the Year
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best independent label with 6-14 worldwide full-time employees. The total number of employees is based on the number of worldwide employees of the parent label.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Label of the Year 
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best independent label with 5 or fewer worldwide full-time employees. The total number of employees is based on the number of worldwide employees of the parent label.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
A2IM Humanitarian Award
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Program or work that a person, artist or company has done to better the world at large through or with the independent music community.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                            <AccordionItemHeading>
                      <AccordionItemButton>
Best Live/Livestream Act
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best live/livestream individual performance that took place in the calendar year. If the individual performance took place after the submission process is closed, but within the eligibility period, you must send a link to the performance by December 31, 2022. If you are submitting for an entire series you must chooese one individual performance to represent the series.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Outlier Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best record that does not fit other, traditional Libera Awards categories. Recordings nominated for this category cannot be nominated for other categories. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Re-Issue
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best record that does not fit other, traditional Libera Awards categories. Recordings nominated for this category cannot be nominated for other categories. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Short-Form Video
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best utilization of independent music in a short-form video, or, short-form video created by an independent artist or label. Video must have been made public for the first time within the submission period. All music featured must be independent per Libera Awards guidelines.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Sync Usage
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Open to any synchronization that has appeared, for the first time, within the US during the eligibility period. The release date of the synced composition does not need to be within the eligibility period.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Breakthrough Artist
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      Artist or group that have significantly raised their profile and has acheived breakthrough commercial success, in the United States, for the first time, during the eligibility period. "Supergroups" are not eligibile for this category. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
            <AccordionItemButton>
Creative Packaging
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best or most creative packaging, physical or digital including bundled packages, premium offerings or artwork/design packaging.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Independent Champion
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    The non-label entity or individual that best supported and championed Independent labels and artists this year. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
            <AccordionItemButton>
Marketing Genius
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    The most innovative/creative marketing campaign for a record released during the eligibility period.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
Self-Released Record of the Year
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    This category celebrates the entreprenurial spirit of independent self-releasing artists. The submission must be fully self-released by an individual artist or group.  Records co-released with record labels or as a subsidary of a parent company are not eligible. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
            <AccordionItemButton>
Best Alternative Rock Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best alternative rock record.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best American Roots Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best American roots record. American roots includes bluegrass, gospel, old time music, jug bands, Appalachian folk, blues, Cajun, and Native American music.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Blues Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best blues record.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Classical Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best classical record; this category includes all periods and all sizes of ensemble or solo. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Country Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best country record.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Dance Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best dance record.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Electronic Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best electronic record.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Folk Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best folk record. Characterized as traditional music that originated from an oral tradition which was passed down through generations. This category includes contemporary interpretations of folk music. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Global Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best global record.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Heavy Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best heavy record.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Hip-Hop/Rap Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best rap/hip-hop record.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Jazz Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best jazz record.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Latin Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best Latin record. Eligible records contain at least 51% of lyrics in Spanish, Portuguese, or otherwise accepted languages.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Pop Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best pop record.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Punk Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best punk record. Includes all iterations and sub-genres of punk and hardcore music.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best R&B Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best R&B record.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Remix
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best remix. A qualifying remix is a work that uses material from the original composition to create a new and different recording. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Rock Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best rock record.
                    </p>
                </AccordionItemPanel>
            </AccordionItem><AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Singer-Songwriter Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best singer/songwriter record. Artist who writes, composes, and performs their own musical material, including lyrics and melodies.
                    </p>
                </AccordionItemPanel>
            </AccordionItem><AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Soul/Funk Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best soul/funk record.
                    </p>
                </AccordionItemPanel>
            </AccordionItem><AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Spiritual Record
</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Best spiritual record.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
        <SectionSeparator />
        <section>
        <h2 className="grow md:mb-7 text-5xl md:text-6xl font-bold leading-tight">Submissions Info</h2>
          <div className="artistborder p-8">
          <h3 className="grow md:mb-7 text-5xl md:text-6xl font-bold tracking-tighter leading-tight">Eligibility Rules</h3>
            <p>Celebrating the best in independent music; All artists / submissions must be independently owned/controlled, and released in the United States and its Territories during the period between January 1, 2021 through December 31, 2021.
<br></br>
* Single Tracks, EPs, and Albums can qualify for all categories listed as "Best XXX Record."
<br></br>
* You may edit your entry after submitting, up until the entry deadline.
<br></br>
* Please make sure all your personal details are entered accurately, including contact details, as this will be used in the awards presentation if selected as a finalist.  If selected as a finalist, submitted materials may be used for event promo purposes.
<br></br>
* You are eligible to enter more than one category, as long as the work submitted meets the criteria.
<br></br>
* You can use the ‘copy’ feature to create a copy of your entry and change the category as required.
<br></br>
* Entry fees may be paid by credit card only and must be paid online at time of completing submissions.
<br></br>
* If you are submitting for the Self-Released Record of the Year Category, you can save $20 per submission in this category by registering as an A2IM:Artist Member. Membership is FREE. Sign-Up at https://membership.a2im.org/ap/Membership/Application/4pVe2Xr8
<br></br>
* If your submissions have not been paid for at close of entry they will not be included for judging.**</p>
          <SectionSeparator />
          <h3 className="grow md:mb-7 text-5xl md:text-6xl font-bold tracking-tighter leading-tight">Attachments Criteria</h3>
            <p>
            # THE FOLLOWING ATTACHMENTS ARE REQUIRED TO COMPLETE SUBMISSION: 
            <br></br>
* A maximum of ten uploads/links will be accepted for each submission. 
<br></br>
* Cover Art: Please submit Hi-Res JPEG or PNG files, and label the image “ALBUM TITLE_LABEL_COVER”
<br></br>
* URLs: Provide website URL’s to the publicly accessible campaign or active URL of a landing page if applicable. Please ensure any applicable usernames and passwords (for access) are provided and active.
<br></br>
<br></br><br></br>
# WE ALSO ENCOURAGE YOU TO ATTACH THE FOLLOWING ADDITIONAL ASSETS:
<br></br>
* Additional Artwork: Supporting images outside of Cover Art such as press images. Please label them as “Artwork”.
<br></br>
* Video: Attachments can be uploaded directly to this award platform or may be hosted on a video platform such as YouTube or Vimeo.
<br></br>

**Please keep in mind that if nominated, the content that you submit will be used for video modules, promotional graphics, or advertisement for The Libera Awards.**
            </p>
          </div>
        </section>
      </motion.div>
      </motion.section>
      </main>
  );
}

