import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  const accentStyles = [
    'from-cyan-500/20 via-sky-500/10 to-transparent',
    'from-emerald-500/20 via-teal-500/10 to-transparent',
    'from-amber-500/20 via-orange-500/10 to-transparent',
  ];

  return (
    <section id="achievements" className="relative max-w-6xl px-4 py-16 mx-auto overflow-hidden sm:px-6">
      <div className="absolute rounded-full pointer-events-none -right-20 -top-16 h-52 w-52 bg-cyan-400/20 blur-3xl" />
      <div className="absolute w-56 h-56 rounded-full pointer-events-none -bottom-16 -left-16 bg-emerald-400/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">Proof of Work</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          className="mt-2 text-4xl font-['Georgia'] font-extrabold tracking-tight text-white dark:text-slate-50 sm:text-5xl"
        >
          Achievements
        </motion.h2>
        <p className="max-w-2xl mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200 sm:text-lg">
          Impact highlights from hackathons, coding milestones, and project delivery.
        </p>
      </motion.div>

      <div className="relative z-10 mt-8 space-y-5">
        {achievements.map((item, idx) => {
          const data = typeof item === 'string' ? { title: item } : item;

          const isDetailed = Boolean(data.details?.length || data.image || data.github);

          return (
            <motion.article
              key={`${data.title}-${idx}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/80 p-5 shadow-[0_14px_35px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-all dark:border-slate-700 dark:bg-slate-900/70 ${isDetailed ? 'lg:p-7' : ''}`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentStyles[idx % accentStyles.length]}`} />

              <div className={`relative z-10 ${isDetailed ? 'grid gap-5 lg:grid-cols-[1.25fr,0.9fr] lg:items-start' : ''}`}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-slate-900 dark:bg-slate-100 dark:text-slate-900">
                      {`0${idx + 1}`}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-300">Milestone</span>
                  </div>

                  <p className="mt-4 text-lg font-semibold leading-relaxed text-slate-900 dark:text-slate-100 sm:text-xl">
                    {data.title}
                  </p>

                  {data.details?.length ? (
                    <ul className="mt-3 space-y-2.5 text-base text-slate-800 dark:text-slate-200 sm:text-lg">
                      {data.details.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {data.github ? (
                    <div className="mt-4">
                      <a
                        href={data.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center px-4 py-2 text-base font-semibold text-white transition rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
                      >
                        View GitHub Project
                      </a>
                    </div>
                  ) : null}
                </div>

                {data.image ? (
                  <div className="overflow-hidden border rounded-xl border-slate-200/90 dark:border-slate-700">
                    <img
                      src={data.image}
                      alt={data.imageAlt || 'Achievement image'}
                      loading="lazy"
                      className="object-cover w-full h-52 lg:h-full"
                    />
                  </div>
                ) : null}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}