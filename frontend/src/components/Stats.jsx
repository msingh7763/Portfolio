import { motion } from 'framer-motion';

const items = [
  { value: '450+', label: 'Problems Solved' },
  { value: '3+', label: 'Major Projects' },
  { value: 'MERN', label: 'Stack Developer' },
];

export default function Stats() {
  return (
    <div className="mt-6 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
      {items.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.45 }}
          whileHover={{ y: -4, scale: 1.02 }}
          className="glass-card rounded-2xl border border-white/20 bg-slate-800/40 p-4 text-center shadow-lg backdrop-blur-xl"
        >
          <p className="text-2xl font-bold text-orange-400">{stat.value}</p>
          <p className="text-sm text-slate-200">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
