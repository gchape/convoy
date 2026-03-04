"use client";
import { Outlet } from "react-router";
import { useUser } from "../../features/context/UserContext.tsx";
import Logo from "../logo/Logo.tsx";
import Burger from "../menu/Burger.tsx";
import UserMenu from "../user/UserMenu.tsx";
import NavLinks from "./NavLinks.tsx";

const Logo_ = () => <Logo />;
const BurgerMenu_ = () => <Burger />;

export default function NavBar() {
  const user = useUser();

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="h-px bg-[linear-gradient(90deg,transparent_0%,rgba(251,146,60,0.5)_30%,rgba(251,146,60,0.5)_70%,transparent_100%)]" />

        <div className="border-b border-white/[0.07] bg-[rgba(9,9,11,0.75)] backdrop-blur-3xl">
          <div className="h-14 max-w-6xl mx-auto px-6 flex items-center justify-between gap-8">
            <Logo_ />

            <div className="flex items-center gap-2.5">
              <NavLinks />
              {user.currentUser && <UserMenu user={user.currentUser} />}
              <BurgerMenu_ />
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
