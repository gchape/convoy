import { motion } from "motion/react";
import { FaChevronDown } from "react-icons/fa";
import { rings } from "../constants";

const scroll = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
};

const Rings = () => (
  <div className="relative z-10 max-w-6xl flex items-center gap-5">
    {rings.map((ring, i) => (
      <motion.button
        key={ring.id}
        onClick={() => scroll(ring.target)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3 + i * 0.1,
          ease: [0.16, 1, 0.3, 1],
          type: "spring",
          bounce: 0.5,
        }}
        className="group flex items-center gap-3 cursor-pointer bg-transparent border-none p-0"
      >
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-900 transition-all duration-200 group-hover:border-orange-400/40 group-hover:bg-orange-400/5">
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-orange-400"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            style={{ boxShadow: "0 0 6px rgba(251,146,60,0.6)" }}
          />

          <motion.span
            className="absolute inset-0 rounded-full border border-dashed border-orange-400/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <FaChevronDown size={8} color="#fb923c" />
          </span>
        </div>

        <span className="text-xs font-semibold tracking-widest text-zinc-500 group-hover:text-zinc-100 transition-colors duration-150">
          {ring.label}
        </span>
      </motion.button>
    ))}
  </div>
);

export default Rings;
