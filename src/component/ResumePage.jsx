import React, { useEffect } from "react";

const ResumePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto bg-[#fdfaf5] text-black p-4 sm:p-6 md:p-10 shadow-xl rounded-xl font-serif min-h-screen">
      {/* Newspaper Header */}
      <div className="border-b border-black pb-4 mb-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase">
          The Daily SAINI
        </h1>
        <p className="text-sm italic mt-1">Est. 2000 • Unlocking My Professional Journey</p>
      </div>

      {/* Resume Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center underline">
        My Resume - A Glimpse into My Professional World
      </h2>

      {/* Download Resume Button */}
      <div className="text-center mb-8">
        <a
          href="/Sandeepsaini.pdf"
          download="SandeepSaini-Resume.pdf"
          title="Download Resume"
          className="bg-black hover:bg-gray-800 font-heading text-white px-6 py-2 rounded-md text-sm sm:text-base font-medium tracking-wide shadow-md"
        >
          Download My Resume
        </a>
      </div>

      {/* Embedded Resume View */}
      <div className="w-full bg-white rounded-md overflow-hidden shadow-lg p-2 border border-black">
        <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[116vh]">
          <iframe
            src="/Sandeepsaini.pdf#toolbar=0&navpanes=0&scrollbar=0"
            title="Resume"
            className="w-full h-full"
            style={{ backgroundColor: "white" }}
            scrolling="no"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 border-t border-black pt-4 text-sm text-center text-gray-600 italic">
        Compiled and presented by Sandeep Saini • © 2025 All Rights Reserved
      </div>
    </div>
  );
};

export default ResumePage;
