import { motion } from "motion/react";
import { shapes } from "../constants";
import Figure from "./Figure";

const Hero = () => (
  <section className="relative z-10 overflow-visible">
    <div className="absolute lg:left-250 inset-0 overflow-visible" aria-hidden>
      {shapes.map((shape) => (
        <Figure key={shape.id} shape={shape} />
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <h1 className="font-bold text-white/85 text-5xl lg:text-6xl text-center">
        Deliver smarter.
        <br />
        Track in real time.
      </h1>

      <p className="mt-4 text-md text-center text-zinc-500 tracking-wide leading-relaxed max-w-lg">
        The platform for delivery companies — register your fleet, set your
        prices, and let customers place and track orders live on the map.
      </p>
    </motion.div>
  </section>
);

export default Hero;
