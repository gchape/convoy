"use client";
import React from "react";
import { createPortal } from "react-dom";
import MobileMenu from "./MobileMenu";

export default function BurgerMenu() {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      onClick={() => setOpen((prev) => !prev)}
      className="md:hidden flex flex-col justify-center p-2 border border-white/10 rounded-lg bg-transparent cursor-pointer transition-colors duration-150 hover:border-orange-400/30"
      style={{ gap: 5 }}
    >
      {[
        "translateY(7px) rotate(45deg)",
        "scaleX(0)",
        "translateY(-7px) rotate(-45deg)",
      ].map((transform, i) => (
        <span
          key={i}
          className="block rounded-sm transition-all duration-200"
          style={{
            width: 18,
            height: 2,
            transform: isOpen ? transform : "none",
            opacity: i === 1 && isOpen ? 0 : 1,
            background: isOpen ? "#fb923c" : "rgba(244,244,245,.6)",
          }}
        />
      ))}

      {isOpen && createPortal(<MobileMenu />, document.querySelector("nav")!)}
    </button>
  );
}
