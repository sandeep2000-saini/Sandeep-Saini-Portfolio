"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Amiox from "../assets/Amiox.webp";
import Portfoilio from "../assets/Portfoilio.webp";
import ChatApp from "../assets/chatApp.webp";
import WeatherApp from "../assets/Weather app.webp";
import PokemonCard from "../assets/pokemoncard.webp";
import TodoApp from "../assets/Todoapplication.webp";

const projects = [
  {
    id: 1,
    title: "Amiox Social Media web App",
    description:
      "I independently designed and built Amiox, a unique full-stack social media platform centered around card sharing and card collection rather than traditional follows. Users connect by collecting each other's cards, which appear on both profiles. The app supports real-time updates (Socket.io) and includes features like custom user search with styled Google Maps integration, multimedia posts (photos, videos, shorts, blogs), and a custom-built video player with dynamic controls and seamless playback. Media uploads are optimized using Cloudinary, Multer, FFmpeg, and Sharp for fast, high-quality performance. The platform delivers a polished, error-free UI using React, Tailwind CSS, Framer Motion, and Redux Toolkit for state management..",
    image: Amiox,
    technologies: ["Mern", "Frontend", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB","redux", "Routers"],
    githubLink: "https://github.com/sandeep2000-saini/Amiox-socail-media-web-app.git",
    liveLink: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A sleek, fully responsive dark-themed portfolio showcasing my work, skills, and journey as a developer. Key sections include Hero, About Me, Skills, Projects, Testimonials, and Contact Visitors can preview my resume directly on the site via the Explore My Resume button before downloading it. The Discover Me section offers a more personal glimpse into my story beyond just technical skills.. Built with React, Tailwind CSS, Framer Motion, and GSAP for smooth animations and an engaging user experience",
    image: Portfoilio ,
    technologies: ["Frontend", "JavaScript", "React.js", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 3,
    title: "Talkverse (Chatting Application)",
    description:
      "Talkverse is a real-time chatting application developed in collaboration with Brains Shaper Technology. The app uses Firebase Cloud Messaging (FCM) for push notifications and handles user authentication through Firestore Database, supporting both sign-up and sign-in functionalities. It utilizes SharedPreferences for session management and incorporates FCM tokens to manage user sign-out securely. The user list is dynamically displayed from the Firestore database, and the chat screen is designed with a clean, responsive layout. Talkverse supports real-time messaging with chat data preparation, custom chat adapters, recent conversations display, and user availability tracking. The application ensures seamless communication by integrating push notifications for an engaging user experience..",
    image: ChatApp,
    technologies: ["Android"," Java", "Firebase","xml","SharedPreferences"],
    githubLink: "https://www.linkedin.com/in/sandeepsainifrontenddeveloper/details/projects/",
    liveLink: "#",
  },
  {
    id: 4,
    title: "Weather app",
    description:
      "Weather App is a location-based weather application developed in collaboration with Brains Shaper Technology. The app fetches real-time temperature and weather details using the WeatherBit API. It determines the device’s location by accessing its latitude and longitude coordinates, allowing it to display accurate weather information for the current location. The application provides users with a simple and reliable way to check weather updates directly based on their geographic position..",
    image: WeatherApp,
    technologies: ["Android" ," Java", "WeatherBit API","xml"],
    githubLink: "https://www.linkedin.com/in/sandeepsainifrontenddeveloper/details/projects/",
    liveLink: "#",
  },
  {
    id: 5,
    title: "Pokemon Card",
    description:
      "Pokémon Card Search App is an interactive web project that showcases a collection of Pokémon character cards, each displaying key details like name, power, and other attributes. The core feature of this project is its intelligent search functionality — users can type one or more letters, and the app instantly filters and displays matching Pokémon cards whose names contain the typed characters. This real-time, dynamic search experience was designed to be fast, intuitive, and user-friendly.",
    image: PokemonCard,
    technologies: ["Frontend","JavaScript", "React.js", "Tailwind CSS"],
    githubLink: "https://github.com/sandeep2000-saini/Pokemon_Card.git",
    liveLink: "#",
  },
  {
    id: 6,
    title: "Todo-Application",
    description:
      "To-Do Application is a simple yet efficient task management app built to help users stay organized and productive. It allows users to add, edit, delete, and mark tasks as completed in a clean and responsive user interface. The app focuses on intuitive usability, making it easy to manage daily tasks with just a few clicks. Designed with performance and minimalism in mind, it ensures a smooth experience across all devices.",
    image: TodoApp,
    technologies: ["Frontend","JavaScript", "React.js", "Tailwind CSS"],
    githubLink: "https://github.com/sandeep2000-saini/Todo-Application.git",
    liveLink: "#",
  },
];

const filters = ["All", "Frontend", "Mern", "Android"];

export default function ProjectSection() {
  const [hovered, setHovered] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.technologies.includes(activeFilter));

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-20 text-white">
      <div className="max-w-full mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-heading sm:text-4xl md:text-5xl font-bold tracking-wide">
            PROJECTS
          </h2>
          <p className="mt-4 text-gray-200 font-body text-base sm:text-lg max-w-xl mx-auto">
            A selection of my most impactful and technically creative work.
          </p>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {filters.map((f, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full font-body text-sm font-medium border transition-all ${
                  activeFilter === f
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow"
                    : "border-white/10 text-gray-400 hover:border-white hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/10 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-pink-500/20 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 backdrop-blur-md bg-white/10 rounded-full hover:bg-white/20 transition"
                    >
                      <Github className="text-white w-5 h-5" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 backdrop-blur-md bg-white/10 rounded-full hover:bg-white/20 transition"
                    >
                      <ExternalLink className="text-white w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 font-body text-sm mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={ project.githubLink }
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition font-medium"
                >
                  View Project
                  <ArrowRight
                    className={`ml-1 w-4 h-4 transition-transform ${
                      hovered === project.id ? "translate-x-1" : ""
                    }`}
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-center mt-16 sm:mt-20"
        >
          <a
            href="#"
            className="inline-block px-8 py-3 bg-black font-heading text-white font-semibold rounded-full shadow hover:shadow-lg transition"
          >
            View Full Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
