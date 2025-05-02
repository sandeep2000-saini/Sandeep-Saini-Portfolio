import React from "react";

function SocialMedia() {
  return (
    <div className=" relative h-36 w-full  ">
      <div className=" absolute top-28 sm:-top-18 lg:top-28 left-0 w-[100%] rotate-[-2deg] bg-white text-black py-4 px-10 shadow-md">
        <div className="flex font-heading gap-6 sm:gap-10 text-xs sm:text-lg md:text-xl font-semibold whitespace-nowrap justify-center">
          <a
            href="https://www.linkedin.com/in/sandeepsainifrontenddeveloper"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/SandeepSaini2020"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/sandeep.saini.00"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://github.com/sandeep2000-saini"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://x.com/sandeep_saini_0"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
