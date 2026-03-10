import { STEPS } from "../constants";
import SectionHeader from "./SectionHeader";

export function HowItWorks() {
  return (
    <section className="relative z-10 max-w-6xl" id="how-it-works">
      <SectionHeader
        title="How it works"
        primary="Up and running"
        secondary="in three steps."
      />

      <div className="relative flex flex-col lg:flex-row gap-12">
        {STEPS.map((step) => (
          <div
            key={step.id}
            className="relative flex-1 flex flex-col items-center gap-4 lg:px-10"
          >
            <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-zinc-900 border border-white/8 text-orange-400 shrink-0">
              {step.icon}
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-orange-400 border-2 border-[#09090b]" />
            </div>

            <span className="text-[10px] font-bold text-zinc-700 tracking-widest uppercase">
              Step {step.number}
            </span>

            <div>
              <p className="text-[15px] font-bold text-zinc-100 tracking-tight mb-2">
                {step.title}
              </p>
              <p className="text-[13px] text-zinc-500 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
