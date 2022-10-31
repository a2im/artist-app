import { motion } from "framer-motion"

export default function ModalPopup ({ children, onClick}) {
    return (
        <motion.div 
        className="modalinfobg"
        onClick={onClick}
        initial={{opacity: 0,}}
        animate={{opacity: 1,}}
        exit={{opacity: 0,}}
        >
            {children}
        </motion.div>
    )
}