import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "motion/react";
import type { Plan } from "../../types";

const PricingCard = ({ plan, index }: { plan: Plan; index: number }) => (
  <motion.div
    key={plan.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: index * 0.08,
      ease: [0.16, 1, 0.3, 1],
    }}
    className={`relative flex flex-col rounded-xl border p-7 transition-all duration-200 ${
      plan.highlight
        ? "bg-orange-400/4 border-orange-400/25 shadow-[0_0_40px_rgba(251,146,60,0.08)]"
        : "bg-zinc-950 border-white/[0.07] hover:border-white/12"
    }`}
  >
    {plan.highlight && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-orange-400 text-zinc-950">
        Most popular
      </span>
    )}

    <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-4">
      {plan.name}
    </p>

    <div className="flex items-end gap-1 mb-2">
      <span
        className={`text-4xl font-bold tracking-tight ${plan.highlight ? "text-orange-400" : "text-zinc-100"}`}
      >
        {plan.price}
      </span>
      {plan.period && (
        <span className="text-[13px] text-zinc-500 mb-1.5">{plan.period}</span>
      )}
    </div>

    <p className="text-[13px] text-zinc-500 mb-8 leading-relaxed">
      {plan.description}
    </p>

    <ul className="flex flex-col gap-3 mb-10 flex-1">
      {plan.features.map((f) => (
        <li
          key={f}
          className="flex items-center gap-2.5 text-[13px] text-zinc-400"
        >
          <FaCheckCircle />
          {f}
        </li>
      ))}
    </ul>

    <Link
      to="/sign-in"
      className={`flex items-center justify-center h-10 rounded-lg text-[12px] font-bold uppercase tracking-widest transition-all duration-150 ${
        plan.highlight
          ? "bg-orange-400 text-zinc-950 hover:opacity-90 hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]"
          : "bg-white/5 text-zinc-400 border border-white/8 hover:text-zinc-100 hover:bg-white/10"
      }`}
    >
      {plan.id === "enterprise" ? "Contact us" : "Get started"}
    </Link>
  </motion.div>
);

export default PricingCard;
