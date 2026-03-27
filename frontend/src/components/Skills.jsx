import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
  FaPython,
  FaGithub,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaClock,
  FaUsers,
  FaComments,
  FaRedo,
  FaLightbulb,
  FaBrain
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiPostman,
  SiPhp,
  SiCplusplus,
  SiC
} from "react-icons/si";

export default function Skills() {

  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [highlightIndex, setHighlightIndex] = useState(0);

  /* SKILL ICONS */

  const iconMap = {
    C: <SiC />,
    "C++": <SiCplusplus />,
    Java: <FaJava />,
    Python: <FaPython />,
    JavaScript: <SiJavascript />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    React: <FaReact />,
    Tailwind: <SiTailwindcss />,
    "Node.js": <FaNodeJs />,
    "Express.js": <SiExpress />,
    PHP: <SiPhp />,
    MongoDB: <SiMongodb />,
    MySQL: <SiMysql />,
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
    Postman: <SiPostman />,
    "Time Management": <FaClock />,
    Leadership: <FaUsers />,
    Communication: <FaComments />,
    Adaptability: <FaRedo />,
    "Quick Learner": <FaLightbulb />,
    "Problem Solving": <FaBrain />
  };

  /* CATEGORY ICONS */

  const categoryIcons = {
    Languages: <FaCode />,
    Frontend: <FaReact />,
    Backend: <FaServer />,
    Database: <FaDatabase />,
    Tools: <FaTools />,
    "Soft Skills": <FaBrain />
  };

  const activeSkills = useMemo(() => {
    return skills.find((s) => s.category === activeCategory);
  }, [activeCategory]);

  const skillPercentMap = {
    C: 75,
    "C++": 80,
    Java: 85,
    Python: 88,
    JavaScript: 90,
    HTML: 92,
    CSS: 90,
    React: 90,
    Tailwind: 88,
    "Node.js": 84,
    "Express.js": 82,
    PHP: 70,
    MongoDB: 82,
    MySQL: 78,
    Git: 85,
    GitHub: 88,
    Postman: 83,
    "Time Management": 85,
    Leadership: 82,
    Communication: 88,
    Adaptability: 90,
    "Quick Learner": 92,
    "Problem Solving": 87
  };

  /* CENTER ROTATION */

  useEffect(() => {

    const interval = setInterval(() => {

      setHighlightIndex(prev =>
        (prev + 1) % activeSkills.items.length
      );

    }, 2500);

    return () => clearInterval(interval);

  }, [activeSkills]);

  return (

    <section className="relative w-full min-h-screen px-4 overflow-hidden py-14 sm:px-6 sm:py-20 lg:px-8">

      {/* TITLE */}

      <h2 className="mb-8 text-3xl font-bold text-center text-stone-100 sm:mb-10 sm:text-4xl">
        Skills
      </h2>


      {/* CATEGORY BUTTONS */}

      <div
        className="flex flex-wrap justify-center gap-3 mt-8 sm:gap-4 lg:gap-8"
        style={{ perspective: "1000px" }}
      >

        {skills.map((category) => {

          const isActive = activeCategory === category.category;

          return (

            <motion.button
              key={category.category}

              onClick={() => {
                setActiveCategory(category.category);
                setHighlightIndex(0);
              }}

              whileHover={{
                scale: 1.12,
                rotateX: 8,
                rotateY: -8
              }}

              whileTap={{ scale: 0.95 }}

              animate={{ y: [0, -5, 0] }}

              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                type: "spring",
                stiffness: 200
              }}

              className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold sm:gap-3 sm:px-6 sm:py-4 sm:text-base lg:px-10 lg:py-5 lg:text-lg
              ${
                isActive
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/40"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}

              style={{ transformStyle: "preserve-3d" }}
            >

              <span className="text-xl">
                {categoryIcons[category.category]}
              </span>

              {category.category}

            </motion.button>

          );

        })}

      </div>


      {/* SKILLS ANIMATION AREA */}

      {/* QUICK VIEW (STRAIGHT LINE) */}

      <div className="hidden pb-3 mt-10 md:block lg:mt-14">
        <div className="mx-auto flex w-fit max-w-full items-center justify-center overflow-x-auto rounded-3xl border border-orange-300/35 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-950/95 px-7 py-5 shadow-[0_0_34px_rgba(249,115,22,0.22)] backdrop-blur-md">
          <div className="flex items-center justify-center gap-5 min-w-max">
          {activeSkills.items.map((skill) => (
            <button
              type="button"
              key={`quick-${skill}`}
              className="relative inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold tracking-wide text-orange-100 transition duration-300 border rounded-full group whitespace-nowrap border-orange-300/35 bg-slate-900/90 hover:-translate-y-1 hover:border-orange-200/70 hover:bg-slate-800"
            >
              <span className="relative text-2xl text-orange-300">
                {iconMap[skill]}
              </span>
              {skill}
              <span className="pointer-events-none absolute right-0 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border-2 border-orange-300 bg-slate-950 text-[11px] font-bold text-orange-200 opacity-0 shadow-[0_0_10px_rgba(251,146,60,0.45)] transition-opacity duration-200 group-hover:opacity-100">
                {skillPercentMap[skill] ?? 80}%
              </span>
            </button>
          ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-8 sm:grid-cols-3 md:mt-10 lg:hidden">
        {activeSkills.items.map((skill) => (
          <div
            key={`mobile-${skill}`}
            className="p-4 text-center border shadow-lg rounded-2xl border-orange-300/30 bg-slate-900/85"
          >
            <div className="mb-2 text-3xl text-orange-300">{iconMap[skill]}</div>
            <p className="text-sm font-semibold text-orange-100">{skill}</p>
            <p className="mt-1 text-xs font-semibold text-orange-200/90">{skillPercentMap[skill] ?? 80}%</p>
          </div>
        ))}
      </div>

      <div className="relative mt-3 hidden h-[75vh] w-full lg:block">

        {activeSkills.items.map((skill, index) => {

          const isCenter = index === highlightIndex;

          return (

            <motion.div
              key={skill}

              animate={
                isCenter
                  ? {
                      left: "50%",
                      top: "50%",
                      x: "-50%",
                      y: "-50%",
                      scale: 2.2
                    }
                  : {
                      left: ["5%", "85%", "25%", "70%"],
                      top: ["10%", "75%", "40%", "60%"]
                    }
              }

              transition={
                isCenter
                  ? { duration: 0.6 }
                  : {
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }
              }

              className={`group absolute flex flex-col items-center justify-center rounded-2xl p-6 shadow-xl
              ${
                isCenter
                  ? "bg-orange-500 text-white z-20"
                  : "bg-slate-900 text-slate-300"
              }`}
            >

              {/* ICON */}

              <motion.div
                className="relative text-6xl"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {iconMap[skill]}
              </motion.div>

              {/* TEXT */}

              <motion.p
                className="mt-3 text-sm font-semibold"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {skill}
              </motion.p>

              <span className="pointer-events-none absolute right-0 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border-2 border-orange-300 bg-slate-950 text-xs font-bold text-orange-200 opacity-0 shadow-[0_0_12px_rgba(251,146,60,0.45)] transition-opacity duration-200 group-hover:opacity-100">
                {skillPercentMap[skill] ?? 80}%
              </span>

            </motion.div>

          );

        })}

      </div>

    </section>

  );
}