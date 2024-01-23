import React from "react";
import { CircularText } from "./Icons";
import { useRouter } from 'next/router';

const HireMe = () => {
  // Initialize the router
  const router = useRouter();

  // Function to handle button click and navigate to the Contact page
  const handleButtonClick = () => {
    // Use the push method to navigate to the Contact page
    router.push('/Contact');
  };

  return (
    <div
      className="fixed left-4 bottom-4 
    flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute
    sm:right-0"
      style={{ pointerEvents: "md:auto" }}
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />

        {/* Use the onClick event to call the handleButtonClick function */}
        <div
          onClick={handleButtonClick}
          className="flex items-center justify-center
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
          text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full 
            font-semibold hover:bg-light hover:text-dark
             dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
              hover:dark:border-light
            md:w-12 md:h-12 md:text-[10px]
            "
        >
          Hire Me
        </div>
      </div>
    </div>
  );
};

export default HireMe;
