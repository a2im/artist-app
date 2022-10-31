import Link from 'next/link';
import { useState, useRef, useEffect  } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';


export default function MyNavbar() {
  const ref = useRef();
  const [navbar, setNavbar] = useState(false);
  useOnClickOutside(ref, () => setNavbar(false));
  return (
    <div>
      <nav className="bg-black w-full fixed z-50 shadow">
        <div className="justify-between mx-auto py-2 md:py-0 lg:max-w-7xl items-center md:flex md:px-4">
          <div>
            <div className="flex items-center justify-between md:py-5 md:block">
            <Link href={"/"}>
                <motion.a
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}>
              <div className="flex justify-center gap-10 grid-cols-2">
                <motion.div 
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  className="mygrow a2imbuttonbox ml-2 w-10">
                <Image src="/logos/white-logos/A2IM-button-white.png" alt="a2im logo button" width="100%" height="100%" layout="responsive" />
                </motion.div>
                <motion.div 
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  className="mt-1 artistborder2nav">
                <h2 className="text-2xl text-white font-bold text-center align-middle -ml-5 tracking-wider">A2IM:ARTIST</h2>
                </motion.div>
              </div>
              </motion.a>
              </Link>
              <div className="md:hidden">
                <button
                  className="pr-2 mr-2 pl-2 p-2 text-black rounded-md hover:text-white outline-none focus:border-white focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center mb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul ref={ref} className="items-center justify-center space-x-6 space-y-0 md:flex">
                <motion.li 
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                className="ml-6 p-1 text-center text-2xl text-white artistborder2nav">
                  <Link href={"/about"}>
                  <a onClick={() => setNavbar(false)}

                className="">ABOUT</a>
                  </Link>
                </motion.li>
                <motion.li 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className="ml-6 p-1 text-center text-2xl text-white artistborder1nav">
                  <Link href="/news">
                  <a onClick={() => setNavbar(false)}

                className="">NEWS</a>
                  </Link>
                </motion.li>
                <motion.li 
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  className="ml-6 p-1 text-center text-2xl text-white artistborder3nav">
                  <Link href="/events">
                    <a onClick={() => setNavbar(false)} 
                    className="">EVENTS</a>
                  </Link>
                </motion.li>
                <motion.li 
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  className="ml-6 p-1 text-center text-2xl text-white artistborder4nav">
                  <Link href="/resources">
                    <a onClick={() => setNavbar(false)} 
                    className="">RESOURCES</a>
                  </Link>
                </motion.li>
                <motion.li
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                  className="ml-6 p-1 text-center text-2xl text-white artistborder1nav">
                  <Link href="/faq">
                    <a onClick={() => setNavbar(false)}
                    className="">FAQ</a>
                  </Link>
                </motion.li>
                <motion.li 
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  className="ml-6 p-1 text-center text-2xl text-white artistborder4nav">
                  <Link href="/contact">
                    <a onClick={() => setNavbar(false)}
                    className="">CONTACT</a>
                  </Link>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}