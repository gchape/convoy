"use client";
import { NavLink } from "react-router";
import { navlinks } from "../constants";
import { useUser } from "../../features/context/UserContext";

export default function NavLinks() {
  const user = useUser();

  return (
    <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
      {navlinks
        .filter(({ label }) =>
          user.currentUser ? label.toLowerCase() !== "sign in" : true,
        )
        .map(({ label, to }) => (
          <li key={label}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `nav-underline relative px-3 py-1.5 text-sm font-["Bricolage_Grotesque",sans-serif] font-semibold tracking-widest rounded-t-md transition-colors duration-150 ${
                  isActive
                    ? "text-orange-400"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
    </ul>
  );
}
