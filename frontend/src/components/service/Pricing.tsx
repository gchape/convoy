import PricingCard from "../card/PricingCard";
import { PLANS } from "../constants";
import SectionHeader from "./SectionHeader";

export function Pricing() {
  return (
    <section id="pricing" className="relative z-10 max-w-6xl scroll-mt-20">
      <SectionHeader
        title="Pricing"
        primary="Two simple models,"
        secondary="you choose."
        margin={4}
      />

      <p className="text-[13px] text-zinc-500 mb-16 max-w-sm">
        Start with zero commitment and pay per order, or switch to a flat
        monthly rate once your volume grows.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PLANS.map((plan, index) => (
          <PricingCard plan={plan} key={plan.id} index={index} />
        ))}
      </div>
    </section>
  );
}
