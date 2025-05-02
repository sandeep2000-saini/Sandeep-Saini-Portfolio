import React, { useRef } from "react";
import { Code, Smartphone, Brush, Gauge, Layers } from "lucide-react";
import { motion, useInView } from "framer-motion";

function WhatIDo() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive UIs using React, JavaScript, and modern CSS frameworks like Tailwind.",
      icon: <Code size={28} className="text-pink-500" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing clean and user-focused interfaces that deliver both aesthetic value and intuitive experience.",
      icon: <Brush size={28} className="text-pink-500" />,
    },
    {
      title: "Performance Optimization",
      description:
        "Improving web performance through optimized code, lazy loading, and best development practices.",
      icon: <Gauge size={28} className="text-pink-500" />,
    },
    {
      title: "Anything Design Related",
      description:
        "Creating visually appealing designs that enhance user experience and engagement.",
      icon: <Layers size={28} className="text-pink-500" />,
    },
    {
      title: "Android Development",
      description:
        "Developing functional and clean Android apps for learning and practical implementation.",
      icon: <Smartphone size={28} className="text-pink-500" />,
    },
    {
      title: "Full Stack Web Development",
      description:
        "Currently learning backend development to complement my frontend skills. I’m exploring Node.js, Express, and MongoDB to build complete, scalable applications from scratch. My goal is to become a versatile developer who can handle both UI and server-side logic efficiently.",
      icon: <Layers size={28} className="text-pink-500" />,
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-14 sm:py-20 px-4 sm:px-8 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading sm:text-4xl font-bold text-white">
          WHAT I DO
        </h2>
        <p className="mt-3 text-gray-300 max-w-xl text-sm font-body sm:text-base mx-auto">
          I craft user-centered web experiences that blend design with
          performance using modern technologies.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        ref={containerRef}
        className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="group backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pink-100 dark:bg-pink-900/40 p-3 rounded-xl">
                {service.icon}
              </div>
              <h3 className="text-lg font-heading sm:text-xl font-semibold text-white">
                {service.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base font-body text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default WhatIDo;
