import React from "react";
import { SkillsInfo } from "../Data/data";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-10 pb-24 px-4 md:px-[12vw] font-sans bg-skills-gradient text-white"
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold">Skills</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4"></div>
      </div>

      {/* Skills Sections */}
      <div className="space-y-12">
        {SkillsInfo.map((section, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold mb-6">{section.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:rounded-full cursor-pointer ">
              {section.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-black rounded-full p-4 hover:scale-110 transition-transform"
                >
                  <Tilt
                    className="  items-center  justify-center sm:w-44 md:w-44   rounded-full md:mt-7 md:rounded-full "
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    perspective={1000}
                    scale={1.05}
                    gyroscope={true}
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className=" rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] md:rounded-full"
                    />

                    <p className="text-sm sm:text-base font-semibold ">{skill.name}</p>
                  </Tilt>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;








