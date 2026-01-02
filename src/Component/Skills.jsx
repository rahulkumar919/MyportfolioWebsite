import React from "react";
import { SkillsInfo } from "../Data/data";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-16 px-4 md:px-[10vw] font-sans bg-[#0b0b0f] text-white overflow-hidden"
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide">
          Skills
        </h2>
        <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full" />
      </div>

      <div className="space-y-16">
        {SkillsInfo.map((section, index) => (
          <div key={index}>
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left">
              {section.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {section.skills.map((skill, idx) => (
                <Tilt
                  key={idx}
                  tiltMaxAngleX={18}
                  tiltMaxAngleY={18}
                  perspective={1200}
                  scale={1.08}
                  transitionSpeed={1200}
                  gyroscope
                  className="group"
                >
                  <div className="flex flex-col items-center justify-center bg-[#0b0b0f] rounded-2xl p-6 h-full transition-all duration-300 group-hover:bg-[#120f1f] group-hover:shadow-[0_0_35px_rgba(130,69,236,0.45)]">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-black mb-4 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-14 h-14 object-contain drop-shadow-[0_8px_18px_rgba(130,69,236,0.6)]"
                      />
                    </div>

                    <p className="text-sm sm:text-base font-semibold tracking-wide text-center group-hover:text-[#b892ff] transition-colors">
                      {skill.name}
                    </p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
