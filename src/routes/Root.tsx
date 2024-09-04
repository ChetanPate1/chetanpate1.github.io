// Third Party
import { Outlet } from "react-router-dom";
// Local
// import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import { DarkModeToggle } from "@/components/dark-mode-toggle";

const Root = () => {
   return (
      <div className="bg-white dark:bg-neutral-950 pt-24 pb-10 px-5 sm:px-3 md:px-28 h-full min-h-screen">
         <DarkModeToggle />
         <Navbar />
         <Outlet />
      </div>
   );
};

export default Root;