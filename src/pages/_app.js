import Footer from '@/Components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from '@/Components/Navbar';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Montserrat } from "next/font/google";
import Head from "next/head"
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return(
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <Navbar />
      <AnimatePresence mode='sync'>
      <Component key={router.asPath} {...pageProps} />
      <SpeedInsights/>
      </AnimatePresence>
      <Footer />
    </main>
    </>    
  ); 
}
