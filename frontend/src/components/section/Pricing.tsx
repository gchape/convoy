"use client";
import { motion } from "motion/react";
import PricingCard from "../card/PricingCard";
import { plans } from "../constants";
import SectionIntro from "./components/SectionIntro";
import SectionHeader from "./components/SectionTitle";

export function Pricing() {
  return (
    <section id="pricing" className="relative z-10 max-w-6xl scroll-mt-20">
      <SectionIntro title="Pricing" />
      <SectionHeader primary="Two simple models," secondary="you choose." />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-[13px] text-zinc-500 mb-16 max-w-sm"
      >
        Start with zero commitment and pay per order, or switch to a flat
        monthly rate once your volume grows.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <PricingCard plan={plan} index={index} />
        ))}
      </div>
    </section>
  );
}
