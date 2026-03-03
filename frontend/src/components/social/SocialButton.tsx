import type React from "react";

const SocialButton = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => (
  <button className="flex items-center justify-center gap-2 h-10 bg-zinc-900 border border-white/8 rounded-[9px] text-[12px] font-semibold text-zinc-500 cursor-pointer transition-all duration-150 hover:border-white/15 hover:text-zinc-100 hover:bg-zinc-800">
    {icon}
    {title}
  </button>
);

export default SocialButton;
