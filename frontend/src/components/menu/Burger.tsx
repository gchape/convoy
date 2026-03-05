import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { createPortal } from "react-dom";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from "./MobileMenu";

export default function Burger() {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      onClick={() => setOpen((prev) => !prev)}
      className="md:hidden relative flex items-center justify-center p-2 border border-white/10 rounded-lg bg-transparent cursor-pointer transition-colors duration-150 hover:border-orange-400/30"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isOpen ? "close" : "open"}
          initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
          transition={{ duration: 0.15 }}
        >
          {isOpen ? (
            <RxCross2 size={18} color="#fb923c" />
          ) : (
            <RxHamburgerMenu size={18} color="rgba(244,244,245,.6)" />
          )}
        </motion.span>
      </AnimatePresence>

      {isOpen && createPortal(<MobileMenu />, document.querySelector("nav")!)}
    </button>
  );
}
