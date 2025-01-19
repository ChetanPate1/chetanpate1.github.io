import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
   skills: string[];
   time: string;
   type: 'Full Time' | 'Part Time' | 'Contract';
   companyLogoName: string;
   className?: string;
   active: boolean;
   onClick?: () => void;
};

const ExperienceCard = (props: Props) => {
   const { skills = [], time, type, companyLogoName, active, onClick } = props;
   const colourClass = active ? 'bg-primary dark:bg-primary' : '';
   const activeHeight = active ? 'min-h-56' : 'min-h-40';

   return (
      <Card className={`relative ${colourClass} min-w-[440px] md:min-w-[550px] transition-transform duration-500 hover:cursor-pointer hover:scale-105`} onClick={onClick}>
         <p className="absolute top-6 right-12 z-10 text-xs font-semibold">
            <span className="relative bg-primary h-2 w-2 w- inline-block -left-1 -top-0.6 rounded-full"></span> {type}
         </p>

         <CardContent className="relative px-10 pt-24">
            <svg className="absolute -right-[4px] -top-[4px] z-0 opacity-100 dark:opacity-0" width="194" height="119" viewBox="0 0 194 119" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fillRule="evenodd" clipRule="evenodd" d="M0.5 0C19.5538 0 35 15.4462 35 34.5C35 53.5538 50.4462 69 69.5 69H144C171.614 69 194 91.3858 194 119V0H0.5Z" fill="#E5E5E5" />
               <path d="M194 119C194 112.032 192.575 105.398 190 99.3713C182.37 81.5142 164.647 69 144 69H69.5C50.4462 69 35 53.5538 35 34.5C35 21.2768 27.5608 9.7912 16.6393 4C11.8235 1.44641 6.33066 0 0.5 0V4C17.3447 4 31 17.6553 31 34.5C31 55.763 48.237 73 69.5 73H144C169.405 73 190 93.5949 190 119H194Z" fill="white" />
            </svg>

            <svg className="absolute -right-[4px] -top-[4px] z-0 opacity-0 dark:opacity-100" width="194" height="119" viewBox="0 0 194 119" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fillRule="evenodd" clipRule="evenodd" d="M0.5 0C19.5538 0 35 15.4462 35 34.5C35 53.5538 50.4462 69 69.5 69H144C171.614 69 194 91.3858 194 119V0H0.5Z" fill="black" />
               <path d="M194 119C194 112.032 192.575 105.398 190 99.3713C182.37 81.5142 164.647 69 144 69H69.5C50.4462 69 35 53.5538 35 34.5C35 21.2768 27.5608 9.7912 16.6393 4C11.8235 1.44641 6.33066 0 0.5 0V4C17.3447 4 31 17.6553 31 34.5C31 55.763 48.237 73 69.5 73H144C169.405 73 190 93.5949 190 119H194Z" fill="#262626" />
            </svg>

            <div className={`${activeHeight} transition-all duration-500`}>
               <Image height={80} width={150} className={`absolute top-10 left-10 ${active ? 'invert' : ''} dark:invert`} src={`./experience/${companyLogoName}-black.png`} alt="logo" />

               <div className="flex flex-row flex-wrap gap-2.5 mt-7">
                  {skills.map((skill, i) => <Badge className="dark:border-transparent" key={i} variant={active ? 'secondary' : 'default'}>{skill}</Badge>)}
               </div>
            </div>

            <p className="absolute right-12 bottom-10 font-semibold text-4xl">
               {time}
            </p>
         </CardContent>
      </Card>
   );
};

export default ExperienceCard;