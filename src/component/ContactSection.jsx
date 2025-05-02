"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus("Please fill all the fields.");
      return;
    }

    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_sdipw9g",
          template_id: "template_9vqzr5z",
          user_id: "xUOSJRhvdIfZjPMFV",
          template_params: {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
        }),
      });

      const data = await response.json();
      if (data.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`py-12 px-4 sm:px-6 lg:px-8 ${
        hasScrolled
          ? "bg-gradient-to-b from-white via-[#f3f3f3] to-[#f0f0f0] backdrop-blur-xl bg-opacity-60"
          : "bg-gradient-to-b from-white via-[#f3f3f3] to-[#f0f0f0]"
      } text-black transition-all duration-300 ease-in-out`}
    >
      <motion.div
        variants={itemVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h2 className="text-3xl font-heading sm:text-4xl font-bold text-black mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-700 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg font-body max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out and
            I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center space-y-8"
          >
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                ),
                title: "Name",
                value: "Sandeep Saini",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                ),
                title: "Email",
                value: "sainisandeep583@gmail.com",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                ),
                title: "Social",
                value: (
                  <div className="flex space-x-3 mt-2">
                    <a
                      href="https://x.com/sandeep_saini_0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sandeepsainifrontenddeveloper"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/sandeep2000-saini"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black"
                    >
                      GitHub
                    </a>
                  </div>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold font-heading text-black">Send a Message</h3>
              <p className="text-gray-600 font-body mt-1">
                Fill out the form below and I'll respond as soon as possible.
              </p>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email", "message"].map((field) => (
                  <div key={field} className="space-y-2">
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    {field === "message" ? (
                      <textarea
                        id={field}
                        name={field}
                        rows={4}
                        value={formData[field]}
                        onChange={handleChange}
                        className="block w-full py-2 px-4 border font-body border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400"
                        placeholder={`Write your ${field} here`}
                        required
                      />
                    ) : (
                      <input
                        id={field}
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        value={formData[field]}
                        onChange={handleChange}
                        className="block w-full py-2 px-4 font-body border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400"
                        placeholder={`Enter your ${field}`}
                        required
                      />
                    )}
                  </div>
                ))}

                <div>
                  <button
                    type="submit"
                    className="w-full py-3 font-heading bg-gradient-to-r from-[#f0abfc] to-[#d9c1fc] text-white rounded-md shadow-md hover:bg-gradient-to-l transition duration-300 ease-in-out"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {status && (
                  <p
                    className={`text-center text-lg font-medium ${
                      status === "success"
                        ? "text-green-500"
                        : status === "error"
                        ? "text-red-500"
                        : "text-yellow-400"
                    }`}
                  >
                    {status === "success"
                      ? "Thank you! Your message has been sent."
                      : status === "error"
                      ? "Oops! Something went wrong. (Ignore this message if you’re not a bot and the message reached me.)"
                      : status}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
