import { motion, AnimatePresence } from "framer-motion";
import { ParallaxProvider } from 'react-scroll-parallax';
import { AppProps } from 'next/app'
import { useRouter } from "next/router";
import React from "react"
import Script from "next/script";
import Layout from "../components/layout";
import '../styles/index.css'
import Footer from "../components/footer";
import MyNavbar from '../components/navbar'
import DevNavbar from '../components/navbar-dev';
import { Amplify } from 'aws-amplify';



function MyApp({ Component, pageProps, router }: AppProps) {
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
    <>
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
    </ParallaxProvider>
    </>
  );
}


export default MyApp;
