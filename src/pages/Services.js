import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import React from "react";
import Head from "next/head";
import Circles from "@/Components/Circles";
import TransitionEffect from "@/Components/TransitionEffect";
import { fadeIn } from "../../Variants";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { RxCrop, RxPencil2, RxReader, RxRocket, RxCamera, RxCode } from "react-icons/rx";



// data
export const services = [
    {
      title: 'Development',
      type: 'Front-end and Back-end',
      icon: <RxCode/>,
      iconBg: "#1b1b1b",
      iconBgg: "#b7e4c7",
      descriptions: [
        'I love creating websites that are interactive, and are user-friendly'],
    },
    {
      title: 'Design',
      type: 'Ui/Ux and Graphic',
      icon: <RxPencil2 />,
      iconBg: "#1b1b1b",
      iconBgg: "#b7e4c7",
      descriptions: [
        'Have any ideas to help sparkle your day, I can design your dream into reality'],
    },
    {
      title: 'Videography',
      type: 'Editing and filming',
      icon: <RxCamera />,
      iconBg: "#1b1b1b",
      iconBgg: "#b7e4c7",
      descriptions: [
        'I shoot and edit short films videos shoots and a bit of cinematography that exceeds client expectations'],
    },
    {
      title: 'Digital Marketing',
      type: 'SEO, Email marketing and Social media management',
      icon: <RxCrop />,
      iconBg: "#1b1b1b",
      iconBgg: "#b7e4c7",
      descriptions: [
        'With Google Digital Garage to back my story, I am well articulated in this digital space'],
    },
    {
      title: 'Copywriting',
      type: 'Proofreading and Essay writing',
      icon: <RxReader />,
      iconBg: "#1b1b1b",
      iconBgg: "#b7e4c7",
      descriptions: [
        'I prize myself as a well-versed individual across the spaces of English literature and writing skills'],
    },
    {
      title: 'Digital journalism',
      type: 'Digitized media',
      icon: <RxRocket />,
      iconBg: "#1b1b1b",
      iconBgg: "#b7e4c7",
      descriptions: [
        'As a certified journalist, I bring the news right on the palm of your hands'],
    },
  ];

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
            <div className=" mx-auto">
              <div className="flex flex-col xl:flex-row lg:flex-row gap-x-8 sm:flex-col">
                {/* text */}
                <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4
              xl:mb-0">
                  <motion.h2
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="h2 2xl:mt-4 xl:mt-4 dark:text-light"
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
                
                  <div className="flex">
                  <VerticalTimeline>
                    {services.map((service) => (
                      <VerticalTimelineElement
                      key={service.type}
                      icon={<div className="flex justify-center items-center
                      w-full h-full">
                      <div className='w-[60%] h-[60%] object-contain text-4xl text-accent mb-4 dark:text-primaryDark flex items-center'>{service.icon}</div>
                      </div>}
                      iconStyle={{background: service.iconBg}}
                      contentStyle={{
                        borderBottom: '8px',
                        borderStyle: 'solid rounded-lg',
                        borderBottomColor: service.iconBgg,
                        boxShadow: 'none',
                      }}
                      >
                        <div>
                          <h3 className="text-black text-xl font-semibold">
                            {service.title}
                          </h3>
                          <p className="text-black/50 font-medium font-base"
                          style={{margin:0}}>
                            {service.type}
                          </p>
                        </div>

                        <ul className="my-5 list-disc ml-5 space-y-2">
                          {service.descriptions.map((description, index) => (
                            <li key={`service.description-${index}`}
                            className="text-black/70 font-normal pl-1 text-sm">
                              {description}
                            </li>
                          ))}
                        </ul>
                      </VerticalTimelineElement>
                    ))}
                  </VerticalTimeline>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <hr className="border-slate-200"/>

            
        </Layout>
      </main>
    </>
  );
};

export default Services;
