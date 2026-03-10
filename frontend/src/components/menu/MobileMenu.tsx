import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import { NAV_LINKS } from "../constants";

export default function MobileMenu() {
  return (
    <div className="md:hidden flex flex-col bg-zinc-900 border-t border-white/10 px-4 pb-5 pt-2">
      {NAV_LINKS.map(({ label, to }) => (
        <NavLink
          to={to}
          key={label}
          className="flex items-center justify-between text-xs font-semibold tracking-widest py-3 border-b border-white/5 no-underline last:border-b-0 transition-colors duration-150 text-zinc-400 hover:text-zinc-100 [&.active]:text-orange-400"
        >
          {label}
          <FontAwesomeIcon icon={faChevronRight} />
        </NavLink>
      ))}
    </div>
  );
}
