import React, { useState } from "react";
import Layout from "@/Components/Layout";
import Link from "next/link";
import { Particles } from "react-tsparticles";
import Contact from "@/Components/Contacts";
import { LinkArrow } from "@/Components/Icons";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/image-75-74-removebg-preview.png";
import AnimatedText from "@/Components/AnimatedText";
import HireMe from "@/Components/HireMe";
import lightBulb from "../../public/images/svgs/bulb.png";
import TransitionEffect from "@/Components/TransitionEffect";
import ParticlesContainer from "@/Components/ParticlesContainer";

export default function Home() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const handleContactPopupToggle = () => {
    setIsContactPopupOpen(!isContactPopupOpen);
  };

  const handleContactPopupClose = () => {
    setIsContactPopupOpen(false);
  };

  return (
    <>
      <Head>
        <title>Mike&apos;s portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <TransitionEffect />
      <main className="bg-light">
        <div style={{ pointerEvents: "none" }}>
          <ParticlesContainer params={Particles} />
        </div>
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Quantumania23"
                className="w-[580px] h-auto lg:hidden md:inline-block md:w-full rounded-lg"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs dark:text-light">
                As a skilled Front-end developer, I am dedicated to turning ideas into innovative web applications and websites. Explore my latest projects and articles, showcasing my expertise in React.js, Next.js and web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Curriculum vitaez.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark cursor-pointer dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <button
                  onClick={handleContactPopupToggle}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base hover:no-underline cursor-pointer"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-5 bottom-0 inline-block w-24 -rotate-12 animate-pulse duration-75 z-10 md:hidden">
          <Image src={lightBulb} alt="Quantumania23" className="w-full h-auto" />
        </div>
      </main>

      {/* Popup */}
      {isContactPopupOpen && <Contact handleClose={handleContactPopupClose} />}
    </>
  );
}