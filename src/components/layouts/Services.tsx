import React, { useState } from "react";
import { services } from "../../lib/Constants";
import { motion, AnimatePresence } from "motion/react"

const Services = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="relative min-h-fit overflow-hidden bg-pblack p-10 py-32 pb-48 flex flex-col items-center">

      <AnimatePresence mode="wait">
        <motion.img
          key={activeService.image}
          src={activeService.image}
          initial={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
          }}
          animate={{
            opacity: 0.25,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(20px)",
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
          absolute 
          inset-0 
          h-full 
          w-full 
          object-cover
        "
        />
      </AnimatePresence>


      {/* Dark Gradient Overlay */}
      <div className="
        absolute 
        inset-0 
        bg-gradient-to-b 
        from-pblack/100 
        via-black/80
        via-plack/40 
        to-black
      "/>

      <div className="w-full sm:w-full md:w-fit lg:w-fit 2xl:w-full lg:max-w-[1440px] 2xl:max-w-[1500px] z-20">
        <div className="space-y-10">
          <h1 className="text-sm font-semibold uppercase text-white">
            [ Our Services ]
          </h1>

          <p className="w-full font-semibold uppercase text-white md:text-4xl lg:w-2/3 lg:text-5xl">
            Let's create something beautiful and powerful that moves your business
            forward for you.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-10 lg:flex-row lg:items-center w-full">
          {/* Description */}
          <div className="w-full lg:w-[270px] shrink-0">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeService.header}
                initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 30, filter: "blur(8px)" }}
                transition={{ duration: 0.5 }}
                className="text-md leading-5 text-white/80 md:text-base uppercase"
              >
                {activeService.body}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Services */}
          <div className="flex-1 space-y-0 w-full shrink-0">
            {services.map((service) => {
              const active = activeService.header === service.header;

              return (
                <motion.div
                  key={service.header}
                  onMouseEnter={() => setActiveService(service)}
                  className="group relative flex cursor-pointer items-center "
                >
                  {/* Moving yellow indicator */}
                  <AnimatePresence>
                    {active && (
                      <motion.div
                        layoutId="service-indicator"
                        className="absolute left-0 h-1 w-12 rounded-full bg-pyellow shadow-[0_0_20px_rgba(255,204,0,0.8)]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </AnimatePresence>

                  <motion.h2
                    animate={{
                      x: active ? 40 : 0,
                      scale: active ? 1.03 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 25,
                    }}
                    className={`
                      font-bold uppercase leading-[0.85] tracking-[-0.08em]
                      md:text-6xl lg:text-8xl
                      transition-colors duration-500
                      ${active
                        ? "text-white"
                        : "text-gray-700 hover:text-white/80"
                      }
                    `}
                  >
                    {service.header}
                  </motion.h2>
                </motion.div>
              );
            })}
          </div>

          <div className="h-full w-full hidden sm:flex flex-col items-center">
            <div className="
              relative 
              flex 
              flex-col 
              items-center 
              p-20 
              py-32 
              overflow-hidden
              ">

              {/* Ambient glow */}
              {/* <motion.div
                key={activeService.header}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="absolute inset-0 bg-pyellow/20 blur-3xl"
              /> */}

              <div className="relative z-10 h-32 w-32 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeService.header}
                    src={activeService.icon}
                    alt={activeService.header}
                    initial={{
                      y: 120,
                      opacity: 0,
                      filter: "blur(8px)",
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      y: -120,
                      opacity: 0,
                      filter: "blur(8px)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 22,
                    }}
                    className="h-32 w-32 object-contain"
                  />
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;