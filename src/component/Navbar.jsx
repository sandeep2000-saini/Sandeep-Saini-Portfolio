// Updated Navbar component with working contact form using EmailJS
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNavbar(true);
    }, 900);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = currentScrollY / maxScroll;
      setScrollPercent(Math.min(Math.max(percent, 0), 1));
      setShowNavbar(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: "service_sdipw9g",
            template_id: "template_9vqzr5z",
            user_id: "xUOSJRhvdIfZjPMFV",
            template_params: {
              name,
              email,
              message,
            },
          }),
        }
      );

      if (response.status === 200) {
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

  const textColor = `rgb(${255 - scrollPercent * 255}, ${
    255 - scrollPercent * 255
  }, ${255 - scrollPercent * 255})`;
  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About me", id: "about" },
    { label: "What I do", id: "whatido" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "work" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact me", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 bg-transparent py-2 transition-transform duration-700 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ color: textColor }}
      >
        <div className="max-w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <h1
            className="text-[24px] sm:text-[30px] md:text-[36px] font-extrabold tracking-widest font-heading"
            style={{ color: textColor }}
          >
            SANDEEP{" "}
            <span style={{ color: "#ec4899" }} className="font-heading">
              SAINI
            </span>
          </h1>

          <ul className="hidden lg:flex gap-6 lg:gap-8 items-center">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer font-heading text-[16px] lg:text-[20px] hover:text-pink-400 transition-all duration-300"
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setShowContactModal(true)}
              className="flex items-center gap-2 border px-4 py-2 font-heading rounded-full text-[14px] lg:text-[16px] hover:bg-white hover:text-black transition-all duration-300"
              style={{ borderColor: textColor }}
            >
              Contact <ArrowUpRight size={16} />
            </button>
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 mx-4 bg-[#1a0b2d] rounded-xl p-5 space-y-6 text-center shadow-lg max-h-[70vh] overflow-y-auto">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer text-[18px] font-medium hover:text-pink-400 transition-all duration-300 text-white"
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </nav>

      {showContactModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4"
          onClick={() => setShowContactModal(false)}
        >
          <div
            className="bg-white max-w-md w-full rounded-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
              onClick={() => setShowContactModal(false)}
            >
              <X size={22} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center font-heading text-black">
              Contact Me
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border font-body border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 font-body rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 font-body rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
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
        </div>
      )}
    </>
  );
};

export default Navbar;
