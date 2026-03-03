"use client";
import { NavLink } from "react-router";
import { navlinks } from "../constants";
import { FaArrowRight } from "react-icons/fa";

export default function MobileMenu() {
  return (
    <div className="md:hidden flex flex-col bg-zinc-900 border-t border-white/10 px-4 pb-5 pt-2">
      {navlinks.map(({ label, to }) => (
        <NavLink
          to={to}
          key={label}
          className={({ isActive }) =>
            [
              "flex items-center justify-between text-xs font-semibold tracking-widest py-3 border-b border-white/5 no-underline last:border-b-0 transition-colors duration-150",
              isActive
                ? "text-orange-400"
                : "text-zinc-400 hover:text-zinc-100",
            ].join(" ")
          }
        >
          {label}
          <FaArrowRight />
        </NavLink>
      ))}
    </div>
  );
}
