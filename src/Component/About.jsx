import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import rkk from "../assets/rkk.jpg";

const About = () => {
  return (
    <section id="about" className="py-10 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Left Side – Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">Hi, I AM</h1>
          <h2 className="text-4xl font-bold mb-4 text-[#8245ec]">Rahul Kumar</h2>

          <h3 className="text-2xl font-semibold mb-4">
            I AM A{" "}
            <span className="text-[#8245ec]">
              <Typewriter
                words={["Frontend Developer", "UI/UX Designer", "Coder"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </span>
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed font-bold">
            I’m a passionate Frontend Developer with a love for clean code,
            responsive design, and building beautiful user experiences.
          </p>
        </div>

        {/* Right Side – Image with Tilt */}
        <div className="md:w-1/2 flex justify-center md:justify-end ">
          <Tilt
            className="w-60 sm:w-64 md:w-80 border-4 border-purple-700 rounded-full md:mt-7"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            gyroscope={true}
          >
            <img
              src={rkk}
              alt="Rahul Kumar"
              className="w-full h-auto rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
