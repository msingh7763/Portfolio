import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiCheckCircle, FiX, FiMaximize2 } from 'react-icons/fi';
import { certifications } from '../data/portfolioData';
import { useState } from 'react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="relative max-w-6xl px-4 py-16 mx-auto overflow-hidden sm:px-6">
      <div className="absolute rounded-full pointer-events-none -left-20 top-8 h-52 w-52 bg-amber-300/20 blur-3xl" />
      <div className="absolute bottom-0 rounded-full pointer-events-none -right-24 h-72 w-72 bg-cyan-300/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="inline-flex items-center gap-2 px-4 py-1 text-xs font-semibold tracking-wider uppercase border rounded-full border-amber-300/60 bg-amber-100/70 text-amber-700 dark:border-amber-400/40 dark:bg-amber-500/10 dark:text-amber-300">
          <FiAward size={14} />
          Credentials
        </p>
        <h2 className="mt-4 font-['Georgia'] text-4xl font-extrabold text-white sm:text-5xl">
          Certificates
        </h2>
        <p className="max-w-2xl mt-3 text-base text-slate-200 dark:text-slate-300">
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
            className="relative p-6 overflow-hidden transition border group rounded-3xl border-slate-200/90 bg-white/85 shadow-glass backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/70"
          >
            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 -z-10 group-hover:opacity-100">
              <div className={`absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl ${index % 2 === 0 ? 'bg-gradient-to-br from-cyan-400/25 via-sky-300/10 to-transparent' : 'bg-gradient-to-br from-amber-400/25 via-orange-300/10 to-transparent'}`} />
            </div>

            {item.image ? (
              <div 
                onClick={() => setSelectedCert(item)}
                className="relative mb-4 overflow-hidden border cursor-pointer rounded-2xl border-slate-200/80 dark:border-slate-700/70 group/image"
              >
                <img
                  src={item.image}
                  alt={`${item.title} certificate`}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-colors duration-300 bg-black/0 group-hover/image:bg-black/40">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="text-2xl text-white"
                  >
                    <FiMaximize2 />
                  </motion.div>
                </div>
              </div>
            ) : null}

            <div className="flex items-start justify-between gap-4 mb-4">
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

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl w-full rounded-2xl bg-white dark:bg-slate-900 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute z-10 flex items-center justify-center p-2 transition rounded-full top-4 right-4 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700"
              >
                <FiX size={24} className="text-slate-900 dark:text-white" />
              </button>

              <div className="flex flex-col h-full sm:flex-row">
                <div className="flex items-center justify-center flex-1 p-4 overflow-auto bg-slate-50 dark:bg-slate-800 sm:p-8">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-h-[70vh] w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col justify-between w-full p-6 overflow-y-auto sm:w-80">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                      {selectedCert.title}
                    </h3>
                    <p className="mb-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                      {selectedCert.issuer}
                    </p>
                    <ul className="space-y-2">
                      {selectedCert.points?.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <span className="mt-0.5 text-emerald-500 flex-shrink-0">
                            <FiCheckCircle size={14} />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
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