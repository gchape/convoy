import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PricingButton from "./PricingButton";

const PricingCard = ({ plan }: { plan: Plan; index: number }) => {
  const highlighted = plan.highlight;

  return (
    <div
      className={`relative flex flex-col rounded-xl border p-7 transition-all duration-200 ${
        highlighted
          ? "bg-orange-400/4 border-orange-400/25 shadow-[0_0_40px_rgba(251,146,60,0.08)]"
          : "bg-zinc-950 border-white/[0.07] hover:border-white/12"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-orange-400 text-zinc-950">
          Most popular
        </span>
      )}

      <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-4">
        {plan.name}
      </p>

      <div className="flex items-end gap-1 mb-2">
        <span
          className={`text-4xl font-bold tracking-tight ${highlighted ? "text-orange-400" : "text-zinc-100"}`}
        >
          {plan.price}
        </span>

        {plan.period && (
          <span className="text-[13px] text-zinc-500 mb-1.5">
            {plan.period}
          </span>
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
            <FontAwesomeIcon icon={faCheck} />
            {f}
          </li>
        ))}
      </ul>

      <PricingButton
        highlight={highlighted}
        to={plan.id === "enterprise" ? "/contact-us" : undefined}
      >
        {plan.id === "enterprise" ? "Contact us" : "Get started"}
      </PricingButton>
    </div>
  );
};

export default PricingCard;
