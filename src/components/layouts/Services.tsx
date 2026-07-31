import React, { useState } from "react";
import { services } from "../../lib/Constants";
import { motion, AnimatePresence } from "motion/react";

const Services = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-pblack px-6 py-12 sm:px-8  md:py-20 lg:px-10 lg:py-32 lg:pb-48">
      {/* Background Image */}
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
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

      <motion.div
        className="flex w-full justify-center"
        initial={{
          opacity: 0,
          y: 100,
          filter: "blur(8px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        viewport={{
          once: true,
          amount: 0.35,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}>
        <div className="relative z-20 w-full max-w-[1500px]">
          {/* Heading */}
          <div className="space-y-8">
            <h1 className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.4em] text-white sm:text-sm">
              <span>[</span>
              <span>Our Services</span>
              <span>]</span>
            </h1>

            <p className="w-full text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:w-2/3 lg:text-5xl">
              Let's create something beautiful and powerful that moves your
              business forward for you.
            </p>
          </div>

          {/* Content */}
          <div className="mt-16 flex flex-col gap-14 lg:mt-24 lg:flex-row lg:items-center lg:gap-16">

            {/* Description */}
            <div className="order-1 w-full max-w-md lg:w-[300px] lg:shrink-0">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeService.header}
                  initial={{
                    opacity: 0,
                    x: -30,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    x: 30,
                    filter: "blur(8px)",
                  }}
                  transition={{ duration: 0.45 }}
                  className="text-sm uppercase lg:leading-7 text-white/80 sm:text-base"
                >
                  {activeService.body}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Icon */}
            <div className="order-3 hidden lg:flex justify-center lg:order-3 lg:flex-1">
              <div className="relative overflow-hidden  px-10 py-12 backdrop-blur-xl sm:px-14 sm:py-16 lg:px-20 lg:py-24">

                {/* Glow */}
                {/* <motion.div
                key={activeService.header}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.35, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-pyellow/20 blur-3xl"
              /> */}

                <div className="relative z-10 h-20 w-20 overflow-hidden sm:h-24 sm:w-24 lg:h-32 lg:w-32">
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
                      className="h-full w-full object-contain"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="order-2 flex-1">
              {services.map((service) => {
                const active = activeService.header === service.header;

                return (
                  <motion.div
                    key={service.header}
                    onMouseEnter={() => setActiveService(service)}
                    onClick={() => setActiveService(service)}
                    className="group relative flex cursor-pointer items-center py-1"
                  >
                    {active && (
                      <motion.div
                        layoutId="service-indicator"
                        className="absolute left-0 h-1 w-8 rounded-full bg-pyellow shadow-[0_0_20px_rgba(255,204,0,0.8)] sm:w-12"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    <motion.h2
                      animate={{
                        x: active ? 28 : 0,
                        scale: active ? 1.02 : 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 25,
                      }}
                      className={`
                      font-bold uppercase leading-[0.72] lg:leading-[0.74] tracking-[-0.08em]
                      text-5xl md:text-6xl lg:text-8xl
                      transition-colors duration-500
                      ${active
                          ? "text-white"
                          : "text-[#242424d5] hover:text-white/80"
                        }
                    `}
                    >
                      {service.header}
                    </motion.h2>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;