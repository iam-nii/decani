import React from "react";
import Header from "./Header";
import { motion } from "motion/react";

const Hero = () => {
   return (
      <div className="group relative inset-0 h-full overflow-hidden">

         {/* Background Image Zoom Animation */}
         <motion.div
            className="
               absolute 
               inset-0 
               bg-cover 
               bg-center 
               bg-no-repeat 
               grayscale
            "
            style={{
               backgroundImage: "url('./bg-3.jpg')",
               zIndex: 0,
            }}
            initial={{
               scale: 1,
            }}
            animate={{
               scale: 1.12,
            }}
            transition={{
               duration: 3,
               ease: "easeOut",
            }}
         />


         {/* Soft overlay */}
         <motion.div
            className="
            absolute 
            inset-0 
            bg-black/40 
            bg-blend-overlay
         "
            style={{
               zIndex: 1,
            }}
            initial={{
               opacity: 0.2,
            }}
            animate={{
               opacity: 1,
            }}
            transition={{
               duration: 3,
               ease: "easeInOut",
            }}
         />


         {/* Light → Dark Gradient Transition */}
         <motion.div
            className="
               absolute 
               inset-0
               bg-gradient-to-b
               from-black/20
               via-black/60
               to-black
            "
            initial={{
               opacity: 0.4,
            }}
            animate={{
               opacity: 1,
            }}
            transition={{
               duration: 1.9,
               ease: "easeInOut",
            }}
         />


         {/* Content */}
         <div className="absolute flex h-full w-screen flex-col z-10">

            <header>
               <Header />
            </header>


            <motion.div
               className="
                  flex 
                  h-full 
                  items-center 
                  justify-center
               "
               initial={{
                  opacity: 0,
                  y: 40,
                  filter: "blur(10px)"
               }}
               animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)"
               }}
               transition={{
                  duration: 1.2,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1]
               }}
            >

               <div
                  className="
                  flex
                  w-full
                  max-w-[1440px]
                  flex-col
                  items-center
                  justify-center
                  px-5
                  md:px-10
                  "
               >

                  <h1
                     className="
                     flex
                     flex-col
                     justify-center
                     text-center
                     font-sans
                     text-white
                     text-[70px]
                     sm:text-[73px]
                     lg:text-[180px]
                     font-extrabold
                     uppercase
                     leading-[0.83]
                     tracking-[-0.08em]
                  "
                  >
                     <span>Decani</span>
                     <span>Creative</span>
                     <span>Agency</span>
                  </h1>


               </div>

            </motion.div>

         </div>

      </div>
   );
};

export default Hero;