import { motion } from "motion/react";

const SectionHeader = ({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) => (
  <motion.h2
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
    className="text-3xl font-bold tracking-tight text-white/85 leading-tight mb-16 max-w-md"
  >
    {primary}
    <br />

    <span className="text-zinc-500">{secondary}</span>
  </motion.h2>
);

export default SectionHeader;
