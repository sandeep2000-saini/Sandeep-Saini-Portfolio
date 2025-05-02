import React, { useRef } from "react";
import {
  FaCode,
  FaServer,
  FaAndroid,
  FaPencilRuler,
  FaTools,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const skillData = [
  {
    category: "Technical",
    icon: <FaCode className="text-pink-500" size={24} />,
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
    ],
  },
  {
    category: "Back-End (Basic)",
    icon: <FaServer className="text-green-500" size={24} />,
    skills: [
      { name: "Node.js", level: 50 },
      { name: "Express.js", level: 55 },
      { name: "MongoDB", level: 60 },
    ],
  },
  {
    category: "Android (Basic)",
    icon: <FaAndroid className="text-green-400" size={24} />,
    skills: [
      { name: "Java", level: 50 },
      { name: "XML", level: 55 },
      { name: "Android Studio", level: 70 },
    ],
  },
  {
    category: "UI/UX & Design",
    icon: <FaPencilRuler className="text-yellow-400" size={24} />,
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 75 },
      { name: "Responsive Design", level: 90 },
      { name: "CSS Animations", level: 80 },
    ],
  },
  {
    category: "Tools",
    icon: <FaTools className="text-blue-400" size={24} />,
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 55 },
      { name: "NPM", level: 85 },
      { name: "Webpack", level: 70 },
      { name: "Vite", level: 80 },
      { name: "GCP Console", level: 65 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div id="skills" className="w-full py-16 px-4 sm:px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-heading sm:text-4xl font-bold tracking-wide text-white">
          SKILLS
        </h2>
        <p className="mt-4 text-gray-300 text-base font-body sm:text-lg max-w-xl mx-auto">
          A blend of frontend, backend, and design skills that help me build meaningful digital experiences.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillData.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-2">
              {section.icon}
              <h3 className="text-lg font-semibold font-heading text-white">{section.category}</h3>
            </div>
            <div className="space-y-4">
              {section.skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full mt-1">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;
