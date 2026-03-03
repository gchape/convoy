import { motion } from "motion/react";

const SectionIntro = ({ title }: { title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="flex items-center gap-3 mb-6"
  >
    <span className="w-5 h-px bg-orange-400" />

    <span className="text-[11px] font-semibold text-orange-400 uppercase tracking-widest">
      {title}
    </span>
  </motion.div>
);

export default SectionIntro;
