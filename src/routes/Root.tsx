// Third Party
import { NavLink, Outlet } from "react-router-dom";
// Local
import { Navbar } from "@/components/layout/navbar";
import { Logo } from "@/components/ui/logo";
import { DarkModeToggle } from "@/components/dark-mode-toggle";

const Root = () => {
   return (
      <div className="bg-neutral-200 dark:bg-neutral-950 h-full min-h-screen">
         <NavLink to="/">
            <Logo size={45} className="fixed top-10 left-10 z-50 dark:invert" />
         </NavLink>
         <DarkModeToggle />
         <Navbar />
         <Outlet />
      </div>
   );
};

export default Root;