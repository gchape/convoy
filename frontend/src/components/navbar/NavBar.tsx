"use client";
import Logo from "../logo/Logo.tsx";
import NavLinks from "./NavLinks.tsx";
import UserMenu from "../user/UserMenu.tsx";
import BurgerMenu from "../menu/BurgerMenu.tsx";
import MobileMenu from "../menu/MobileMenu.tsx";
import { Link, Outlet } from "react-router";
import { useUser } from "../../features/context/UserContext.tsx";
import React from "react";
import Notifications from "../notification/Notifications.tsx";

export default function NavBar() {
  const user = useUser();
  const [isOpen, setMobileOpen] = React.useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 font-[Syne,sans-serif]">
        <div className="h-px bg-[linear-gradient(90deg,transparent_0%,rgba(251,146,60,0.5)_30%,rgba(251,146,60,0.5)_70%,transparent_100%)]" />
        <div className="border-b border-white/[0.07] bg-[rgba(9,9,11,0.75)] backdrop-blur-xl">
          <div
            className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-8"
            style={{ height: 56 }}
          >
            <Logo />

            <div className="flex items-center gap-2.5">
              <Notifications />

              <div className="hidden sm:block w-px h-5 bg-white/8" />

              <NavLinks />

              {user.currentUser && <UserMenu user={user.currentUser} />}
              
              <BurgerMenu
                isOpen={isOpen}
                onClick={() => setMobileOpen((o) => !o)}
              />
            </div>
          </div>
        </div>

        {isOpen && <MobileMenu />}
      </nav>

      <Outlet />
    </div>
  );
}
