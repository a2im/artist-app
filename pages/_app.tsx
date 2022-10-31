import { motion, AnimatePresence } from "framer-motion";
import { ParallaxProvider } from 'react-scroll-parallax';
import { AppProps } from 'next/app'
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react"
import React from "react"
import Image from "next/image";
import Script from "next/script";
import Layout from "../components/layout";
import '../styles/index.css'
import Footer from "../components/footer";
import MyNavbar from '../components/navbar';
import ModalContent from "../components/modal-content";


function MyApp({ Component, pageProps, router }: AppProps) {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  
  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false));

  const [isFirstMount, setIsFirstMount] = React.useState(true);
  
  const content = (isFirstMount) => ({
    animate: {
      transition: { staggerChildren: 0.5, delayChildren: isFirstMount ? 2.8 : 0 },
    },
  });

  React.useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, );

  return (
    <div className="relative z-1">
      <Script id="google-analytics-tag"
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
              `}
      </Script>
    <ParallaxProvider>
      <MyNavbar />
    <Layout>
      <AnimatePresence mode='wait'>
        <Component
          isFirstMount={isFirstMount}
          key={router.route}
          {...pageProps} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          variants={content(isFirstMount)}
          />
      </AnimatePresence>
    </Layout>
    <Footer />
    <div ref={ref}
         className="flex fixed modalbuttonbg bottom-5 right-5 md:right-10">
              <motion.button 
              className="save-button"
              onClick={() => (modalOpen ? close() : open())}
              >
          <Image src="/logos/white-logos/A2IM-button-white.png" alt="a2im button" width={75} height={75} layout={'fixed'} objectFit={'contain'} />
          {modalOpen && <ModalContent handleClose={close} />}
          </motion.button>
        </div>
    </ParallaxProvider>
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

export default MyApp;
