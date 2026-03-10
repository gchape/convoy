import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import { RINGS } from "../constants";

const Rings = () => {
  const scroll = useCallback(
    (id: string) =>
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "center" }),
    [],
  );

  return (
    <div className="relative z-10 max-w-6xl flex items-center gap-5">
      {RINGS.map((ring) => (
        <button
          key={ring.id}
          onClick={() => scroll(ring.target)}
          className="group flex items-center gap-3 cursor-pointer bg-transparent border-none p-0"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-900 transition-all duration-200 group-hover:border-orange-400/40 group-hover:bg-orange-400/5">
            <span
              className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"
              style={{
                boxShadow: "0 0 6px rgba(251,146,60,0.6)",
              }}
            />

            <span className="absolute top-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <FontAwesomeIcon
                icon={faChevronDown}
                size={"xs"}
                color="#fb923c"
              />
            </span>
          </div>

          <span className="text-xs font-semibold tracking-widest text-zinc-500 group-hover:text-zinc-100 transition-colors duration-150">
            {ring.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Rings;
