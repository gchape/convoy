import type { PropsWithChildren } from "react";
import { Link } from "react-router";

const PricingButton = ({
  highlight,
  to = "/sign-in",
  children,
}: PropsWithChildren<{ highlight: boolean; to?: string }>) => (
  <Link
    to={to}
    className={`flex items-center justify-center h-10 rounded-lg text-[12px] font-bold uppercase tracking-widest transition-all duration-150 ${
      highlight
        ? "bg-orange-400 text-zinc-950 hover:opacity-90 hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]"
        : "bg-white/5 text-zinc-400 border border-white/8 hover:text-zinc-100 hover:bg-white/10"
    }`}
  >
    {children}
  </Link>
);

export default PricingButton;
