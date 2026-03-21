import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';

function ProjectCard({ id, title, description, details, period, github, live, tech }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (id - 1) * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden transition border group rounded-2xl border-slate-200/90 bg-white/80 shadow-glass backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/70"
    >
      {/* Gradient accent background */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute -right-32 -top-32 h-64 w-64 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
          id === 1 ? 'bg-gradient-to-br from-cyan-400/20 via-sky-400/10 to-transparent' :
          id === 2 ? 'bg-gradient-to-br from-emerald-400/20 via-teal-400/10 to-transparent' :
          'bg-gradient-to-br from-amber-400/20 via-orange-400/10 to-transparent'
        }`} />
      </div>

      <div className="p-6">
        {/* Header with number badge and period */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className={`mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full font-bold text-white ${
              id === 1 ? 'bg-gradient-to-br from-cyan-500 to-sky-600' :
              id === 2 ? 'bg-gradient-to-br from-emerald-500 to-teal-600' :
              'bg-gradient-to-br from-amber-500 to-orange-600'
            }`}>
              {String(id).padStart(2, '0')}
            </div>
          </div>
          {period && <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{period}</span>}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-2xl font-bold text-slate-950 dark:text-slate-50">{title}</h3>
        <p className="mb-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>

        {/* Details (bullet points) */}
        {details && details.length > 0 && (
          <ul className="mb-5 space-y-2">
            {details.map((detail, idx) => (
              <li key={idx} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800/50 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a 
            href={github} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white transition rounded-lg bg-slate-900 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
          >
            GitHub
          </a>
          {live !== '#' && (
            <a 
              href={live} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center px-4 py-2 text-sm font-semibold transition border rounded-lg border-slate-300 text-slate-800 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl px-4 py-16 mx-auto sm:px-6">
      <div className="mb-12 text-center">
        <h2 className="font-['Georgia'] text-4xl font-extrabold text-white sm:text-5xl">
          Projects
        </h2>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
          Production-ready full-stack applications showcasing MERN and web development expertise.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}