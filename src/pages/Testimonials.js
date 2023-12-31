// import Layout from "@/Components/Layout";
// import React from "react";
// import Head from "next/head";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../Variants";
// import TestimonialSlider from "@/Components/TestimonialSlider";
// import TransitionEffect from "@/Components/TransitionEffect";
// import AnimatedText from "@/Components/AnimatedText";

// const Testimonials = () => {
//   return (
//     <>
//       <Head>
//         <title>Quantumania23 | Testimonials Page</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="description" content="any description" />
//       </Head>
//       <TransitionEffect />
//       <main className="w-full mb-16 flex flex-col items-center justify-center">
//         <Layout className="pt-16">
//           <AnimatedText
//             text="Transforming ideas into digital reality"
//             className="mb-16 !text-6xl lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8"
//           />
//           <div className="h-full py-32 text-center">
//             <div className="container mx-auto h-full flex flex-col justify-center">
//               {/* title */}
//               <motion.h2
//                 variants={fadeIn("up", 0.2)}
//                 initial="hidden"
//                 animate="show"
//                 exit="hidden"
//                 className="h2 mb-8 2xl:mb-4 xl:mb-0 dark:text-light"
//               >
//                 What clients{" "}
//                 <span className="text-accent dark:text-primaryDark">say.</span>
//               </motion.h2>
//               {/* slider */}
//               <motion.div
//                 variants={fadeIn("up", 0.4)}
//                 initial="hidden"
//                 animate="show"
//                 exit="hidden"
//               >
//                 <TestimonialSlider />
//               </motion.div>
//             </div>
//           </div>
//         </Layout>
//       </main>
//     </>
//   );
// };

// export default Testimonials;
