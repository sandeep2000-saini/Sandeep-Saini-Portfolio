import React, { useEffect } from "react";
import Sandeep10 from "../assets/sandeep10.webp";
import Sandeep2 from "../assets/sandeep 2.webp";
import Sandeep8 from "../assets/sandeep8.webp";
import Sandeep9 from "../assets/sandeep9.webp";
import Sandeep11 from "../assets/sandeep11.webp";


function AboutMePage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on component mount
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto bg-[#fdfaf5] text-black p-4 sm:p-6 md:p-10 shadow-xl rounded-xl font-serif">
      {/* Newspaper Header */}
      <div className="border-b border-black pb-4 mb-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase">
          The Daily SAINI
        </h1>
        <p className="text-sm italic mt-1">Est. 2000 • Stories That Matter</p>
      </div>

      {/* Banner Image */}
      <div className="mb-8">
        <img
          src={Sandeep10}
          alt="About me"
          loading="lazy"
          className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-md"
        />
      </div>

      {/* Headline */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center underline">
        Unfiltered & Unfolding: My Story So Far
      </h2>
      <p className="text-center italic text-gray-600 mb-8 px-2 sm:px-0">
        A quiet reflection on who I was, who I am, and where I’m headed.
      </p>

      {/* Article Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-[16px] sm:text-[17px] leading-relaxed text-gray-800">
        <div>
          <p>
            <b>"</b>-- Chalo, ab seatbelt laga lo! Mera duniya ka chota sa safar
            shuru hota hai. Main wahi hoon jo website ko perfect banane mein
            ghanto laga deta hoon, lekin apna phone kaha rakha tha, yeh 3 minute
            tak yaad nahi kar pata (hint: voh mere hi jeb mein hota hai). Main
            toh bas ‘Ctrl+Z’ ka human version hoon—apni galtiyon ko thoda-thoda
            sudharta rehta hoon. Agar aap mujhe apne computer screen se baat
            karte dekho, toh samajh jao—main usse apni zindagi ke secrets bata
            raha hoon (aur voh mujhse bas ‘404 Error’ hi keh raha hota hai). Aur
            agar mujhe apni galtiyon par hansna dikhe, toh tension mat lena—main
            paagal nahi hoon, bas yeh enjoy kar raha hoon ki life mein ‘undo’
            button nahi hota. Padhte raho... ya nahi bhi padh sakte ho... main
            yahin hoon, apni coffee pee raha hoon aur dikhawa kar raha hoon ki
            kaafi kaam kar raha hoon.--<b>"</b>
          </p>
          <p className="mt-4">
            About Me-- <br />
            <u>
              <b>
                Title: A Journey from Passion to Profession: The Story of
                Sandeep Saini
              </b>
            </u>{" "}
            <br />
            Sometimes in life, we find a way to connect our <b>passions</b> with
            our
            <b> profession</b>, and that takes us down a whole new path. My
            journey has been something like that. My name is{" "}
            <b>Sandeep Saini</b>, and I’m a<b> Frontend Developer</b>. My
            passion lies in blending <b>technology and design</b> to build
            websites that are both <b>user-friendly</b> and{" "}
            <b>visually appealing</b>. In this article, I’ll take you through my{" "}
            <b>career journey</b>—from my <b>education</b> to my ongoing{" "}
            <b>professional growth</b>..
          </p>

          {/* Inline Image */}
          <img
            src={Sandeep2}
            alt="Work inspiration"
            loading="lazy"
            className="my-6 rounded-md shadow-md w-full object-cover"
          />
        </div>

        <div>
          <p>
            <u>
              <b>Early Education & Career Beginnings--</b>{" "}
            </u>
            <br />I completed my<b> Bachelor’s degree</b> in
            <b> Bachelor of Computer Applications</b> from
            <b> Indira Gandhi National Open University</b>. During this time, I
            discovered that my true interest lies in
            <b> technology and coding</b>. This journey was both
            <b> challenging</b> and<b> exciting</b>, as I got to
            <b>learn something new every single day</b>..
          </p>
          <p className="mt-4">
            <u>
              <b>The Turning Point – Courses and Projects</b>{" "}
            </u>
            <br />
            After completing my education, I pursued professional courses in{" "}
            <b>
              <a href="https://drive.google.com/file/d/1TZAYYkoOKyODNs5MZB8vb7uPtvSGIzgI/view?usp=drive_link" title="View Certificate" target="_blank">
                <u>Frontend Development</u>
              </a>
            </b>{" "}
            and{" "}
            <b>
              <a href="https://drive.google.com/file/d/1CwcbJLNEJ6tQDHYSRKmK_btbN2GnoF0g/view?usp=drive_link" title="View Certificate" target="_blank">
                <u>Android Development</u>
              </a>
            </b>
            . These courses gave me a solid understanding of modern technologies
            like <b>React</b> and <b>JavaScript</b>. I started applying my
            knowledge through <b>real-world projects</b>, and the first one I
            completed was a <b>To-Do List app built with React</b>. This project
            taught me the importance of <b>clean UI design</b> and{" "}
            <b>effective state management</b>—skills that have become incredibly
            valuable for me.
          </p>
          <p className="mt-4">
            <u>
              <b>Current Work – The Social Media Web App</b>{" "}
            </u>
            <br />
            These days, I’m working on a{" "}
            <b>fully original social media web app</b>,{" "}
            <b>designed and structured entirely by me</b>. This project reflects
            my <b>creativity</b>, <b>attention to detail</b>, and{" "}
            <b>user-centric approach</b>. For me, it’s not just a{" "}
            <b>technical challenge</b>—it’s also a fun way to{" "}
            <b>test my design skills</b> and <b>push myself to innovate</b>.
          </p>
          <p className="mt-4">
            <u>
              <b>Why I’m Passionate About Frontend Development</b>{" "}
            </u>
            <br />I love <b>frontend development</b> because it allows me to{" "}
            <b>merge technology with art</b>. To build a great{" "}
            <b>user experience</b>, you need a balance of <b>design</b>,{" "}
            <b>functionality</b>, and <b>creativity</b>—and I truly enjoy
            working at that intersection. My goal has always been to create
            interfaces that are <b>seamless</b>, <b>responsive</b>, and{" "}
            <b>engaging</b> for users.
          </p>
          <p className="mt-4">
            <u>
              <b>Looking Ahead – My Future Goals</b>{" "}
            </u>
            <br />
            I’m now looking to <b>grow further in my career</b>. I believe
            there’s <b>something new to learn every day</b>, and I want to be
            part of a <b>team</b> where I can <b>refine my skills</b>,{" "}
            <b>take on new challenges</b>, and <b>contribute meaningfully</b> to
            shared goals. <b>Growth</b>, <b>collaboration</b>, and <b>impact</b>{" "}
            are what I’m aiming for.
          </p>
          <p className="mt-4">
            <u>
              <b>Conclusion</b>{" "}
            </u>
            <br />
            So far, my journey has been <b>incredibly exciting</b>—but I know
            this is just the <b>beginning</b>. Through my{" "}
            <b>projects and experiences</b>, I try to{" "}
            <b>learn something new every day</b>, and I’m confident that the
            road ahead will bring even more <b>growth</b>, <b>opportunities</b>,
            and <b>achievements</b>.
          </p>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="mt-12">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 border-b border-black inline-block">
          Snaps of Me - Because Why Not Capture Every Glorious Moment?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <img
            src={Sandeep8}
            alt="Personal moment"
            loading="lazy"
            className="w-full h-full object-cover rounded-md shadow"
          />
          <img
            src={Sandeep9}
            alt="At work"
            loading="lazy"
            className="w-full h-full object-cover rounded-md shadow"
          />
          <img
            src={Sandeep11}
            alt="Creative vibe"
            loading="lazy"
            className="w-full h-full object-cover rounded-md  shadow"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 border-t border-black pt-4 text-sm text-center text-gray-600 italic">
        Written and published by Sandeep Saini • © 2025 All Rights Reserved
      </div>
    </div>
  );
}

export default AboutMePage;
