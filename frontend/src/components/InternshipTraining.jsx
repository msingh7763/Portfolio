import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaServer,
  FaPython,
  FaCloud,
  FaMicrosoft,
} from "react-icons/fa";
import { FiMaximize2, FiX } from "react-icons/fi";
import { SiTailwindcss, SiMongodb, SiExpress, SiTensorflow } from "react-icons/si";
import internshipImage from "./intenship.png";
import trainingImage from "./training.png";

const experiences = [
  {
    type: "internship",
    title: "Foundation of AI ",
    company: "Edunet Foundation (AICTE & Microsoft)",
    period: "April 2024 – May 2024",
    image: internshipImage,
    description:
      "Completed an intensive internship focused on Artificial Intelligence and Machine Learning using Microsoft Azure AI services. Explored supervised and unsupervised learning, classification, regression models, and computer vision techniques. Built practical solutions using cloud-based AI tools and gained exposure to real-world machine learning workflows.",
    details: [
      "Worked on real-world ML problem statements and model evaluation workflows.",
      "Implemented end-to-end pipelines for data preprocessing, training, and prediction.",
      "Presented internship outcomes through practical demos and documentation.",
    ],
    technologies: [
      { name: "Python", icon: <FaPython className="mr-1" /> },
      { name: "Azure AI", icon: <FaMicrosoft className="mr-1" /> },
      { name: "Machine Learning", icon: <SiTensorflow className="mr-1" /> },
      { name: "Deep Learning", icon: <FaCloud className="mr-1" /> },
    ],
    icon: <FaMicrosoft className="text-2xl text-orange-300" />,
  },
  {
    type: "training",
    title: "Mern Stack Developer Trainee",
    company: "CipherSchools",
    period: "2025",
    image: trainingImage,
    description:
      "Completed an advanced MERN stack training program focusing on modern full-stack web development. Built dynamic applications using React.js for frontend, Node.js and Express.js for backend APIs, and MongoDB for database management. Implemented responsive UI with Tailwind CSS and followed Git-based development workflows.",
    details: [
      "Built and integrated REST APIs with frontend interfaces for complete feature delivery.",
      "Created reusable React components and responsive pages using Tailwind CSS.",
      "Applied Git-based collaboration and deployment best practices in projects.",
    ],
    technologies: [
      { name: "React.js", icon: <FaReact className="mr-1" /> },
      { name: "Node.js", icon: <FaNodeJs className="mr-1" /> },
      { name: "Express.js", icon: <SiExpress className="mr-1" /> },
      { name: "MongoDB", icon: <SiMongodb className="mr-1" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="mr-1" /> },
    ],
    icon: <FaServer className="text-2xl text-orange-300" />,
  },
];

function ExperienceCard({ item, idx, onImageClick }) {
  return (
    <motion.article
      key={item.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.2, duration: 0.6 }}
      whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/80 shadow-xl transition duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]"
    >
      <div 
        onClick={() => onImageClick(item)}
        className="relative w-full h-48 overflow-hidden cursor-pointer group/image"
      >
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            className="text-white text-2xl"
          >
            <FiMaximize2 />
          </motion.div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-orange-300">{item.period}</p>
            <h3 className="mt-1 text-xl font-bold text-white">{item.title}</h3>
            <p className="text-sm text-slate-300">{item.company}</p>
          </div>

          <div className="p-3 text-orange-200 rounded-full bg-orange-300/10">
            {item.icon}
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.description}</p>

        {item.details?.length ? (
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {item.details.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="flex flex-wrap gap-2 mt-5">
          {item.technologies.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center px-3 py-1 text-xs font-medium border rounded-full border-slate-600 bg-slate-800 text-slate-100"
            >
              {tech.icon}
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function InternshipTraining() {
  const [selectedItem, setSelectedItem] = useState(null);
  const internships = experiences.filter((item) => item.type === "internship");
  const trainings = experiences.filter((item) => item.type === "training");

  return (
    <section
      id="experience"
      className="max-w-6xl p-6 mx-auto mt-16 border shadow-2xl rounded-3xl border-white/20 bg-slate-900/60 backdrop-blur-xl sm:p-10"
    >
      {/* Heading */}
      <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest text-orange-400 uppercase">
          Experience
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Internship & Training
        </h2>

        <p className="max-w-3xl mt-3 text-sm text-slate-300 sm:text-base">
          Practical industry exposure and professional training that helped me
          build strong foundations in modern web development and Artificial
          Intelligence technologies.
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-bold text-orange-300 sm:text-2xl">Internship</h3>
        <div
          className={`grid gap-8 ${
            internships.length > 1 ? "md:grid-cols-2" : "mx-auto md:max-w-3xl"
          }`}
        >
          {internships.map((item, idx) => (
            <ExperienceCard key={item.title} item={item} idx={idx} onImageClick={setSelectedItem} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="mb-4 text-xl font-bold text-cyan-300 sm:text-2xl">Training</h3>
        <div
          className={`grid gap-8 ${
            trainings.length > 1 ? "md:grid-cols-2" : "mx-auto md:max-w-3xl"
          }`}
        >
          {trainings.map((item, idx) => (
            <ExperienceCard key={item.title} item={item} idx={idx} onImageClick={setSelectedItem} />
          ))}
        </div>
      </div>

      {/* Experience Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl w-full rounded-2xl bg-white dark:bg-slate-900 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 transition flex items-center justify-center"
              >
                <FiX size={24} className="text-slate-900 dark:text-white" />
              </button>

              <div className="flex flex-col sm:flex-row h-full">
                <div className="flex-1 flex items-center justify-center bg-slate-50 dark:bg-slate-800 p-4 sm:p-8 overflow-auto">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="max-h-[70vh] w-auto object-contain"
                  />
                </div>
                <div className="w-full sm:w-96 p-6 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {selectedItem.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                      {selectedItem.company}
                    </p>
                    <p className="text-xs font-semibold text-orange-500 mb-4">
                      {selectedItem.period}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {selectedItem.description}
                    </p>
                    
                    {selectedItem.details?.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                          Key Highlights
                        </h4>
                        <ul className="space-y-1">
                          {selectedItem.details.map((detail) => (
                            <li key={detail} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedItem.technologies?.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.technologies.map((tech) => (
                            <span
                              key={tech.name}
                              className="inline-flex items-center px-2 py-1 text-xs font-medium border rounded-full border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                            >
                              {tech.icon}
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}