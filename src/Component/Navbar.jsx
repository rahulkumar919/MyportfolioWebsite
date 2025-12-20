import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const menuItems = [
  { id: "about", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "AboutMe", label: "AboutMe" },
  { id: "education", label: "Education" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [isScroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
    setOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={` bg-[#050414]  flex items-center justify-between fixed w-full p-4 transition duration-300 md:px-[7vw] lg:px-[20vw] z-50 ${
          isScroll
            ? "bg-black bg-opacity-50 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Mr Rahul Kumar</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer ${
                activeSection === item.id ? "text-yellow-400" : ""
              }`}
            >
              <button
                onClick={() => handleClick(item.id)}
                className="text-white hover:text-cyan-500 shadow-lg transition-all font-bold bg-gradient-to-r from-red-500 border-2 border-red-600 rounded-xl hover:from-red-600 duration-300 hover:scale-105 px-4 py-2"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4 text-white md:mr-5">
          <a
            href="https://github.com/rahulkumar919"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-kumar-541458249/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer mr-10"
              onClick={() => setOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer mr-48"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#050414] bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center z-50 space-y-6 transition-all duration-500 md:hidden">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="text-white text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 border-2 border-red-600 rounded-xl shadow-lg px-6 py-3 hover:scale-105 hover:from-red-600 hover:to-red-400 transition-all duration-300"
            >
              {item.label}
            </button>
          ))}
          <div className="flex space-x-4 text-white">
            <a
              href="https://github.com/rahulkumar919"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-kumar-541458249/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
