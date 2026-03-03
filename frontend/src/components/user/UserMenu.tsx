import React from "react";
import type { User } from "../../types";
import UserSettings from "./UserSettings";

export default function UserMenu({ user }: { user: User }) {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="relative text-[13px] font-[Bricolage_Grotesque,sans-serif] font-bold tracking-normal">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 pl-3 pr-2 py-1 rounded-full border border-white/10 bg-zinc-900 cursor-pointer transition-colors duration-150 hover:border-orange-400/30 hover:bg-orange-400/5"
      >
        <span className="hidden sm:block text-zinc-400">
          {user.shortName}
        </span>

        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] text-zinc-900 select-none shrink-0 bg-linear-to-br from-[#FF5C1A] to-[#FFAA00]">
          {user.initials}
        </div>

        <svg
          className={`text-zinc-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && <UserSettings />}
    </div>
  );
}
