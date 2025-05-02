import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import sandeepImage from "../assets/sandeep1.webp";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }} // 👈 delay added
      className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 md:px-8 text-white"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Right Side - Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }} // 👈 slight delay after main
          className="relative order-1 md:order-2 flex justify-center md:justify-end overflow-hidden"
        >
          <img
            src={sandeepImage}
            alt="Sandeep Saini"
            loading="lazy"
            className="w-72 sm:w-96 md:w-[500px] lg:w-[600px] object-cover rounded-xl grayscale hover:grayscale-0 transition duration-500 transform scale-x-[-1]"
          />
        </motion.div>

        {/* Left Side - Text with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }} // 👈 same delay as image
          className="space-y-4 text-center md:text-left order-2 md:order-1"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-purple-500 font-heading font-medium">Hello, Future</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-300">
            I'm Sandeep Saini
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-gray-400">
            Front-End Developer & Digital Craftsman
          </h3>
          <p className="text-gray-400 text-sm sm:text-base font-body max-w-md">
            Detail-driven <b>Frontend Development</b> specializing in building immersive, high-performance web applications using <b>React.js, Tailwind CSS,</b> and <b>JavaScript</b>.
            Passionate about turning ideas into dynamic digital realities.
          </p>
          <div className="mb-12 sm:mb-0">
            <Link
              to="/resume"
              className="inline-block font-heading bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md text-sm sm:text-base font-medium tracking-wide shadow-lg hover:shadow-purple-700 transition duration-300"
            >
              Explore My Resume
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
