import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { createPortal } from "react-dom";
import MobileMenu from "./MobileMenu";

export default function Burger() {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [exiting, setExiting] = React.useState<boolean>(false);

  const handleClick = () => {
    if (isOpen) {
      setExiting(true);
      setTimeout(() => {
        setExiting(false);
        setOpen(false);
      }, 150);
    } else {
      setOpen(true);
    }
  };

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      onClick={handleClick}
      className="md:hidden relative flex items-center justify-center p-2 border border-white/10 rounded-lg bg-transparent cursor-pointer transition-colors duration-150 hover:border-orange-400/30"
      style={{ width: 36, height: 36 }}
    >
      <span
        style={{
          display: "inline-flex",
          animation: exiting
            ? "icon-out 0.15s ease forwards"
            : "icon-in 0.15s ease forwards",
        }}
      >
        {isOpen ? (
          <FontAwesomeIcon icon={faXmark} size="lg" color="#fb923c" />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            color="rgba(244,244,245,.6)"
          />
        )}
      </span>

      {isOpen && createPortal(<MobileMenu />, document.querySelector("nav")!)}
    </button>
  );
}
