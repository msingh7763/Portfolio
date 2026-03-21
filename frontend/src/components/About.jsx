import { motion } from 'framer-motion';
import profileImg from "./img1.jpeg";

export default function About() {
  return (
    <section id="about" className="max-w-6xl px-4 py-20 mx-auto sm:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="font-['Georgia'] text-4xl font-extrabold text-white sm:text-5xl">About Me</h2>
        <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500"></div>
      </motion.div>

      {/* Professional Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12 rounded-2xl border border-slate-200/30 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-transparent p-5 backdrop-blur-xl dark:border-slate-700/30 sm:p-8"
      >
        <p className="text-lg leading-relaxed text-slate-100 dark:text-slate-200">
          Enthusiastic and detail-oriented B.Tech student with a strong foundation in full-stack web development and data structures & algorithms. Proficient in building scalable applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Experienced in developing real-world projects such as a Job Application Tracker with authentication and CRUD functionalities. Passionate about problem-solving, clean code practices, and continuously learning modern technologies to build impactful software solutions.
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid gap-12 lg:grid-cols-2 lg:items-center"
      >
        {/* Profile Image */}
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
          className="relative group"
        >
          <div className="absolute transition duration-500 opacity-0 -inset-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 rounded-3xl blur group-hover:opacity-75"></div>
          <div className="relative p-2 overflow-hidden border rounded-3xl border-slate-200/50 dark:border-slate-700/50 bg-white/10 backdrop-blur-lg">
            <img
              src={profileImg}
              alt="Muskan Kumari"
              className="h-72 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105 sm:h-96"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Intro */}
          <div className="p-6 transition duration-300 border group rounded-2xl bg-gradient-to-br from-cyan-500/10 via-sky-500/10 to-transparent border-cyan-500/20 hover:border-cyan-500/50 dark:border-cyan-500/30 backdrop-blur-sm">
            <h3 className="flex items-center gap-2 mb-3 text-lg font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400"></span>
              Full-Stack Developer
            </h3>
            <p className="leading-relaxed text-slate-200 dark:text-slate-300">
              I am a B.Tech Computer Science student at Lovely Professional University (CGPA: 8.46). I build modern, scalable, and secure web applications with the MERN stack, combining cutting-edge technologies with clean architecture principles.
            </p>
          </div>

          {/* Passion */}
          <div className="p-6 transition duration-300 border group rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-transparent border-emerald-500/20 hover:border-emerald-500/50 dark:border-emerald-500/30 backdrop-blur-sm">
            <h3 className="flex items-center gap-2 mb-3 text-lg font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"></span>
              Passionate Problem Solver
            </h3>
            <p className="leading-relaxed text-slate-200 dark:text-slate-300">
              I love tackling complex challenges with clean code: 200+ problems solved on LeetCode. Constantly learning new technologies and refining my skills in system design and software architecture.
            </p>
          </div>

          {/* Growth */}
          <div className="p-6 transition duration-300 border group rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-transparent border-amber-500/20 hover:border-amber-500/50 dark:border-amber-500/30 backdrop-blur-sm">
            <h3 className="flex items-center gap-2 mb-3 text-lg font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400"></span>
              Continuous Growth
            </h3>
            <p className="leading-relaxed text-slate-200 dark:text-slate-300">
              Passionate about collaboration, building clean code, and mentoring others. I believe in the power of continuous learning and sharing knowledge within the developer community.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}