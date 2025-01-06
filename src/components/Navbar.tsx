// Third party
import { NavLink } from "react-router-dom";
import { Brush, History, Home, PencilRuler } from 'lucide-react';
// Local
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@/components/ui/tooltip";

const navigation = [
   { name: 'Home', to: '/', icon: <Home className="sm:h-5 sm:w-5 h-4 w-4 z-10" /> },
   { name: 'Skills', to: '/skills', icon: <PencilRuler className="sm:h-5 sm:w-5 h-4 w-4 z-10" /> },
   { name: 'Experience', to: '/experience', icon: <History className="sm:h-5 sm:w-5 h-4 w-4 z-10" /> },
   { name: 'Sketches', to: '/sketches', icon: <Brush className="sm:h-5 sm:w-5 h-4 w-4 z-10" /> }
];

const Navbar = () => {
   const renderLinks = () => {
      return navigation.map((item) => {
         return (
            <Tooltip
               key={item.name}>
               <TooltipTrigger asChild>
                  <NavLink
                     to={item.to}
                     className="relative text-center text-xl md:h-14 flex flex-row items-center justify-center mx-2 sm:mx-1 md:mx-0 sm:my-2 group text-primary-foreground text-neutral-800 dark:text-neutral-100"
                  >
                     {({ isActive }) => (
                        <div className={`relative sm:h-14 sm:w-14 md:h-16 md:w-16 w-12 h-12 flex flex-row items-center justify-center ${isActive ? 'text-white' : ''}`}>
                           {item.icon}

                           <span className="sr-only">{item.name}</span>
                           <span className={`absolute h-full w-full rounded-full top-0 bg-primary transition-all duration-300 group-hover:scale-100 group-hover:bg-neutral-200 group-hover:dark:bg-neutral-700 group-hover:opacity-100 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></span>
                        </div>
                     )}
                  </NavLink>
               </TooltipTrigger>
               <TooltipContent side="right">
                  <p>{item.name}</p>
               </TooltipContent>
            </Tooltip>
         );
      });
   }

   return (
      <TooltipProvider delayDuration={300}>
         <div className="flex flex-row md:flex-col justify-center fixed z-50 bottom-5 left-0 md:left-5 w-full md:w-20 h-16 md:h-[90%]">
            <nav className="flex flex-row md:flex-col bg-neutral-100 dark:bg-neutral-950 border-2 border-white rounded-full dark:border-neutral-800">
               {renderLinks()}
            </nav>
         </div>
      </TooltipProvider>
   );
};

export default Navbar;