import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const links = [
  { icon: FaGithub, url: 'https://github.com/msingh7763', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/muskan-kumari77/', label: 'LinkedIn' },
  { icon: FaCode, url: 'https://leetcode.com/u/msingh7763/', label: 'LeetCode' },
];

export default function SocialLinks() {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
      {links.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
            whileHover={{ scale: 1.12, boxShadow: '0 0 18px rgba(255, 149, 0, 0.4)' }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-900/70 text-orange-300 shadow-sm transition-colors hover:bg-orange-400/30 hover:text-orange-50"
            aria-label={item.label}
          >
            <Icon size={18} />
          </motion.a>
        );
      })}
    </div>
  );
}
