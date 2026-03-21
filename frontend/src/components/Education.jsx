import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="max-w-6xl px-4 py-16 mx-auto sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-extrabold tracking-tight text-white"
      >
        Education
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className="max-w-2xl mt-3 text-base font-medium text-white"
      >
        My academic foundation in computer science, software engineering, and practical problem solving.
      </motion.p>

      <div className="relative mt-8 space-y-6 before:absolute before:bottom-4 before:left-[9px] before:top-4 before:w-px before:bg-slate-300/80 dark:before:bg-slate-700 sm:before:left-[11px]">
        {education.map((item, index) => (
          <motion.div
            key={item.period}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="relative pl-8 sm:pl-10"
          >
            <span className="absolute left-0 top-2.5 h-4 w-4 rounded-full border-4 border-white bg-brand-500 shadow-sm dark:border-slate-950 sm:left-[2px]" />

            <article className="p-5 border glass-card rounded-2xl border-slate-200 bg-white/70 shadow-glass dark:border-slate-700 dark:bg-slate-900/65">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm font-semibold text-brand-700 dark:text-brand-200">{item.period}</div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                  {item.grade}
                </span>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{item.degree}</h3>
              <p className="mt-1 text-slate-800 dark:text-slate-100">{item.institution}</p>

              {item.details?.length ? (
                <ul className="grid gap-2 mt-4 text-sm text-slate-800 dark:text-slate-100">
                  {item.details.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </motion.div>
        ))}
      </div>
    </section>
  );
}