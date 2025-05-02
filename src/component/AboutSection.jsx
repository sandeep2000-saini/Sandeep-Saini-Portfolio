import React, { useRef } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Sandeep5 from "../assets/sandeep5.webp";

function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
      className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 px-4 sm:px-6 md:px-10 lg:px-20 py-12"
    >
      {/* Left Side - Image with Blob Background */}
      <div className="relative w-[16em] sm:w-[20em] md:w-[25em] lg:w-[30em] xl:w-[35em] h-[20em] sm:h-[24em] md:h-[30em] lg:h-[35em] xl:h-[40em]">
        <img
          src="/src/assets/blob.png"
          alt="Background Blob"
          loading="lazy"
          className="absolute top-4 -left-4 w-[110%] h-[110%] object-contain z-0 opacity-30"
        />
        <img
          src={Sandeep5}
          alt="Sandeep Saini"
          loading="lazy"
          className="relative w-full h-full object-contain z-10"
        />
      </div>

      {/* Right Side - About Text */}
      <div className="max-w-xl text-center lg:text-left">
        <p className="text-sm sm:text-base font-heading text-gray-500 uppercase tracking-wide underline underline-offset-8">
          About Me
        </p>
        <h2 className="text-xl sm:text-2xl font-heading md:text-3xl lg:text-4xl font-bold mt-2 text-gray-800 dark:text-white">
          Who is Sandeep Saini ?
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-body">
          Hi, I’m <b className="font-heading">SANDEEP SAINI</b>, a frontend
          developer with a passion for building clean, responsive, and
          user-friendly web interfaces. I work mainly with React, JavaScript,
          and the MERN stack, focusing on creating intuitive digital
          experiences.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base font-body md:text-lg leading-relaxed">
          I enjoy solving real-world problems through design-driven development
          and constantly strive to improve both function and form. I'm someone
          who values detail, usability, and purposeful code.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base font-body md:text-lg leading-relaxed">
          Always open to new challenges, collaborations, and ideas that push
          creative and technical boundaries.
        </p>

        <div className="mt-8 flex justify-center lg:justify-start">
          <Link
            to="/about"
            className="text-cyan-500 font-heading hover:text-cyan-400 text-lg sm:text-xl font-semibold tracking-wide transition duration-200 flex items-center gap-2"
          >
            Decode Me <HiArrowNarrowRight className="text-xl" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
