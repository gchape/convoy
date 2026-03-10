import { SERVICES } from "../constants";
import SectionHeader from "./SectionHeader";

export function Services() {
  return (
    <section id="services" className="relative z-10 max-w-6xl scroll-mt-20">
      <SectionHeader
        title="Services"
        primary="Everything your delivery company needs,"
        secondary="nothing it doesn't."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 rounded-xl overflow-hidden border border-white/6">
        {SERVICES.map((s) => (
          <div
            key={s.id}
            className="group relative flex flex-col gap-5 p-7 bg-zinc-950 hover:bg-[#0d0d0f] transition-colors duration-200"
          >
            <span className="absolute top-0 left-6 right-6 h-px bg-orange-400/0 group-hover:bg-orange-400/40 transition-all duration-300" />

            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/[0.07] text-orange-400 group-hover:bg-orange-400/10 group-hover:border-orange-400/20 transition-all duration-200">
              {s.icon}
            </div>

            <span className="text-[10px] font-bold text-zinc-600 tracking-widest uppercase">
              {s.label}
            </span>

            <div>
              <p className="text-[14px] font-bold text-zinc-100 tracking-tight mb-2">
                {s.title}
              </p>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
