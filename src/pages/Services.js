import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import React from "react";
import Head from "next/head";
import ServiceSlider from "@/Components/ServiceSlider";
import Circles from "@/Components/Circles";
import TransitionEffect from "@/Components/TransitionEffect";
import { fadeIn } from "../../Variants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <Head>
        <title>Mike&apos;s portfolio | Services Page</title>
        <meta name="description" content="any description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center ">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion fuels purpose!"
            className="mb-16 !text-6xl lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8"
          />
          <div className="h-full py-36 flex items-center">
            <div className="container mx-auto">
              <div className="flex flex-col xl:flex-row lg:flex-row gap-x-8 sm:flex-col">
                {/* text */}
                <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4
              xl:mb-0">
                  <motion.h2
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="h2 2xl:mt-8 xl:mt-4 dark:text-light"
                  >
                    My Services <span className="text-accent dark:text-primaryDark">&middot;</span>
                  </motion.h2>
                  <motion.p
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="mb-4 max-w-[400px] mx-auto lg:mx-0 sm:items-center dark:text-light"
                  >
                    I&apos;ve got a collection of talents you may be intrigued
                    to peruse through.
                  </motion.p>
                </div>
                <motion.div
                  variants={fadeIn("right", 0.6)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="w-full xl:max-w-[65%]"
                >
                  <ServiceSlider />
                </motion.div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Services;
