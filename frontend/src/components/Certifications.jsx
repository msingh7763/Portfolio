import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle } from 'react-icons/fi';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="relative mx-auto max-w-6xl overflow-hidden px-4 py-16 sm:px-6">
      <div className="pointer-events-none absolute -left-20 top-8 h-52 w-52 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-100/70 px-4 py-1 text-xs font-semibold tracking-wider text-amber-700 uppercase dark:border-amber-400/40 dark:bg-amber-500/10 dark:text-amber-300">
          <FiAward size={14} />
          Credentials
        </p>
        <h2 className="mt-4 font-['Georgia'] text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
          Certificates
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-300">
          Verified learning milestones showcasing hands-on full-stack engineering, cloud fundamentals, and modern AI development.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/85 p-6 shadow-glass transition backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/70"
          >
            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className={`absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl ${index % 2 === 0 ? 'bg-gradient-to-br from-cyan-400/25 via-sky-300/10 to-transparent' : 'bg-gradient-to-br from-amber-400/25 via-orange-300/10 to-transparent'}`} />
            </div>

            {item.image ? (
              <div className="mb-4 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-700/70">
                <img
                  src={item.image}
                  alt={`${item.title} certificate`}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            ) : null}

            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-300">{item.issuer}</p>
              </div>
              <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white ${index % 2 === 0 ? 'bg-gradient-to-br from-cyan-500 to-sky-600' : 'bg-gradient-to-br from-amber-500 to-orange-600'}`}>
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <ul className="space-y-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              {item.points?.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-emerald-500 dark:text-emerald-300">
                    <FiCheckCircle size={15} />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}