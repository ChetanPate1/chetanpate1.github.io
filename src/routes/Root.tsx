// Third Party
import { Outlet } from "react-router-dom";
// Local
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import { DarkModeToggle } from "@/components/dark-mode-toggle";

const Root = () => {
   return (
      <div className="bg-neutral-200 dark:bg-neutral-950 pt-24 md:pl-24 h-full min-h-screen">
         <Logo size={45} className="fixed top-10 left-10" />
         <DarkModeToggle />
         <Navbar />
         <Outlet />
      </div>
   );
};

export default Root;