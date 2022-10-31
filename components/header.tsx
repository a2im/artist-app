import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Header({ children }) {
  return (
    <AnimatePresence>
          <motion.div 
    key="headertitle"
    initial= {{
      scale: "100%",
        }}
    animate={{
      scale: ["100%", "96%", "92%", "94%", "100%"],
      transition:{ 
        type: 'tween',
        ease: "anticipate", 
        duration: 20, 
        repeat: Infinity,
        repeatType: "reverse", 
      }}}
      exit={{ scale: "100%", }}
      className="md:w-128 py-20 mx-auto">
<h2 className="grow text-5xl md:text-7xl font-bold text-center leading-tight">
<Link href="/">
        <a className="hover:underline">{children}</a>
      </Link>

  </h2>
  </motion.div>
        </AnimatePresence>
  )
}
