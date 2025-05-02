import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-20 text-white relative overflow-hidden">
      <motion.div
        ref={ref}
        className="max-w-full mx-auto p-8 relative z-10 bg-gradient-to-b from-[#838384] to-[#a6a6a7] rounded-2xl shadow-sm lg:shadow-lg"
      >
        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Testimonials
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center items-center w-full gap-10 px-4"
        >
          {/* Left Tagline */}
          <div className="w-full md:w-1/2 text-left text-2xl sm:text-3xl font-semibold text-pink-300">
            “What our community says”
          </div>

          {/* Right Description */}
          <div className="w-full md:w-1/2 text-base font-body sm:text-lg text-gray-100">
            We’re collecting words that matter — from creators, learners, and professionals who’ve experienced the journey with us. Their voices will be shared soon to inspire more.
          </div>
        </motion.div>

        {/* Update Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-32 relative flex items-center justify-center h-64 sm:h-72"
        >
          {/* Faded background stacked text */}
          <div className="absolute flex flex-col items-center justify-center z-0 select-none">
            <h1 className="text-[100px] sm:text-[140px] font-extrabold text-white opacity-10 leading-none tracking-tight">
              Update
            </h1>
            <h1 className="text-[100px] sm:text-[140px] font-extrabold text-white opacity-10 leading-none tracking-tight">
              Soon...
            </h1>
          </div>

          {/* Foreground message box */}
          <div className="z-10 bg-white border border-gray-200 shadow-lg px-10 py-6 rounded-xl">
            <h3 className="text-3xl sm:text-4xl font-heading font-bold text-black animate-pulse">
              Update soon
            </h3>
          </div>
        </motion.div>

        {/* Soft blur background lights */}
        <div className="absolute top-[-80px] left-[-80px] w-[200px] h-[200px] bg-pink-500 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[180px] h-[180px] bg-purple-500 rounded-full blur-2xl opacity-20" />
      </motion.div>
    </section>
  );
}

export default TestimonialsSection;
