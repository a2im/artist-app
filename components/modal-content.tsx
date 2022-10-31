import { motion } from "framer-motion";
import ModalPopup from "./modal-popup";
import Link from "next/link";

export default function ModalContent ({handleClose}){
    const dropIn = {
        hidden: {
            x: "-3vw",
            y: "100vh",
            opacity: 0,
        },
        visible: {
            x: "-3vw",
            y: "-50vh",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 40,
                stiffness: 300,
            }
        },
        exit: {
            y:"-100vh",
            opacity: 0,
        },
    };
    return (
        <ModalPopup onClick={handleClose}>
                <motion.div
                onClick={(e) => e.stopPropagation()}
                className="  backdrop-blur-xl shadow-xl fixed p-5 modalinfo items-end content-end w-96"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                >

<div className="grid grid-cols-0 p-5">
<h3 className="text-white drop-shadow text-xl font-bold">A2IM:Artist INFO</h3>
<p className="text-white drop-shadow-2xl">
A2IM:Artist is you gateway to essential content.

A2IM:Artists members receive access to curated A2IM:Artist events that are both in-person and online, access to the A2IM Artist Info Hub, and crucial music business information tailored to take your career to the next level.

 
<br></br><br></br>
<Link href="https://membership.a2im.org/artist-application">
    <motion.button
    whileHover={{scale: 1.1}}
    whileTap={{scale: 0.9}}
    className="artistborder1">
        click to become an A2IM Artist!
    </motion.button>
</Link>

</p></div>
                </motion.div>
        </ModalPopup>
    )
}