// highlight part on the ui and show a tooltip
// use box-shadow to highlight controls with translucent color with high spread

// other ideas:
// create a case study for a existing product and show how you would improve it (maybe apple product)

// Local
import Container from '@/components/Container';
import { Card, CardContent } from '@/components/ui/card';
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';

const Tutorial = () => {
   return (
      <Container>
         <div className="mx-auto max-w-5xl pb-10 px-10">
            <BreadcrumbItem>
               <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                     Experiments
                     <ChevronDownIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                     <DropdownMenuItem>Documentation</DropdownMenuItem>
                     <DropdownMenuItem>Themes</DropdownMenuItem>
                     <DropdownMenuItem>GitHub</DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </BreadcrumbItem>
            <h2>Experiments</h2>
            <h1>Tutorial</h1>
            <p>A UI tooltip</p>
         </div>
      </Container>
   );
};

export default Tutorial;