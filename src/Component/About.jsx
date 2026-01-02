import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import rkk from "../assets/rkk.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-4 md:px-[10vw] bg-[#0b0b0f] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-14">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
            About Me
          </p>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="text-[#8245ec]">Rahul Kumar</span>
          </h1>

          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-gray-300">
            I build{" "}
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  "modern web interfaces",
                  "scalable frontend systems",
                  "clean & interactive UI",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </h2>

          <p className="mt-8 text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
            I’m a frontend-focused developer who enjoys crafting responsive,
            accessible, and performance-driven web experiences. I care deeply
            about clean code, design consistency, and building interfaces that
            feel intuitive and fast.
          </p>

          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-[#8245ec] font-semibold text-sm tracking-wide hover:bg-[#6d35d6] transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-[#8245ec] font-semibold text-sm tracking-wide text-[#8245ec] hover:bg-[#8245ec] hover:text-white transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={18}
            tiltMaxAngleY={18}
            perspective={1200}
            scale={1.08}
            transitionSpeed={1200}
            gyroscope
            className="group"
          >
            <div className="relative w-64 sm:w-72 md:w-80 rounded-full p-1 bg-gradient-to-tr from-[#8245ec] to-transparent">
              <img
                src={rkk}
                alt="Rahul Kumar"
                className="rounded-full object-cover bg-black drop-shadow-[0_0_40px_rgba(130,69,236,0.5)]"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
