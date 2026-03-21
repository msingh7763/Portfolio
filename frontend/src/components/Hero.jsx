import { motion } from "framer-motion";
import Stats from "./Stats";
import SocialLinks from "./SocialLinks";
import profileImg from "./img1.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden text-white"
    >
      <div className="relative z-10 flex items-center max-w-screen-xl min-h-screen px-6 mx-auto lg:px-12">
        <div className="grid items-center w-full grid-cols-1 gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >

            <p className="text-sm font-semibold tracking-wider text-orange-400 uppercase">
              Hi I am
            </p>

           <motion.h1
  className="relative text-5xl font-extrabold leading-tight sm:text-6xl"

  initial="hidden"
  animate="visible"

  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }}
>
  <span className="relative inline-block text-transparent stroke-text">
    Muskan Kumari
  </span>

  {/* Fill layer */}
  <motion.span
    className="absolute top-0 left-0 overflow-hidden text-orange-400 whitespace-nowrap"
    initial={{ width: "0%" }}
    animate={{ width: "100%" }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
  >
    Muskan Kumari
  </motion.span>
</motion.h1>

            <p className="text-xl font-semibold text-orange-300 sm:text-2xl">
              Full Stack Developer | MERN Stack Developer
            </p>

            <p className="max-w-xl text-slate-300">
              Computer Science student at Lovely Professional University
              focusing on scalable MERN web apps, clean architecture, and
              high-performance user experiences.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-3">

              <motion.a
                href="/muskankri.pdf"
                download="muskankri.pdf"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 font-semibold text-white border rounded-xl border-white/30 hover:bg-white/10"
              >
                Download CV
              </motion.a>

            </div>

            <SocialLinks />
            <Stats />

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex items-center justify-center w-80 h-80"
            >

              {/* Soft glow (same style as before but cleaner) */}
              <div className="absolute w-full h-full rounded-full bg-orange-500/20 blur-3xl" />

              <img
                src={profileImg}
                alt="Muskan profile"
                className="relative object-cover border-4 rounded-full w-72 h-72 border-orange-400/40"
              />

              {/* subtle ring (same as your old design) */}
              <div className="absolute inset-0 border rounded-full border-orange-300/30" />

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}