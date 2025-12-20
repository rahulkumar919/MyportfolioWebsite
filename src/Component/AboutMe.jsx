import React from 'react';

const AboutMe = () => {
  return (
    <section id="AboutMe" className="py-12 px-6 bg-gray-900 text-white font-light">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 border-b-4 inline-block border-red-500 ">
          About Me
        </h2>
        <p className="text-lg leading-relaxed mt-6">
          Hello! I'm <span className="text-red-400 font-semibold">Rahul Kumar</span>, a dedicated BCA second-year student from Sitamarhi, Bihar, currently living in Dehradun. I'm deeply passionate about technology and on a journey to become a skilled <span className="text-red-400 font-semibold">Software Engineer</span>.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          I’ve already learned <span className="text-red-400 font-semibold">React.js</span> and I'm actively improving my Data Structures and Algorithms (DSA) using <span className="text-red-400 font-semibold">C++</span>. I love building creative and user-friendly web applications that solve real-world problems.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          I'm a self-motivated learner, always exploring new technologies, and believe in consistent growth. My goal is not just to get a job but to build a meaningful career where I can innovate, inspire, and make an impact through code.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Let’s build the future, one line of code at a time 🚀
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
