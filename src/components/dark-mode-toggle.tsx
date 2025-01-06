// Third Party
import { Moon, Sun } from "lucide-react";
// Local
import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

export function DarkModeToggle() {
   const { setTheme } = useTheme();

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button size="icon" className="bg-neutral-300 dark:bg-neutral-700 dark:text-white text-black fixed z-[50] h-8 w-8 top-4 right-4">
               <Sun className="rotate-0 w-[15px] h-[15px] scale-100 transition-all dark:-rotate-90 dark:scale-0" />
               <Moon className="absolute w-[15px] h-[15px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
               <span className="sr-only">Toggle theme</span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
               Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
               Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
               System
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
