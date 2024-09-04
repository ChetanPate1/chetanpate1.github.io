// Third Party
import { Outlet } from "react-router-dom";
// Local
// import { Toaster } from "@/components/ui/toaster";
// import TwNavigationBar from "@/components/TwNavigationBar";
import { DarkModeToggle } from "@/components/dark-mode-toggle";

const Root = () => {
   return (
      <div className="bg-white dark:bg-neutral-950 pt-24 pb-10 h-full min-h-screen">
         <DarkModeToggle />
         <Outlet />
      </div>
   );
};

export default Root;