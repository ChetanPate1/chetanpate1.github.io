import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
   skills: string[];
   time: string;
   type: 'Full Time' | 'Part Time' | 'Contract';
   companyLogoName: string;
   className?: string;
};

const ExperienceCard = (props: Props) => {
   const { skills = [], time, type, companyLogoName } = props;

   return (
      <Card className="relative bg-primary">
         <p className="absolute top-7 right-10 z-10 text-sm font-semibold">
            <span className="relative bg-primary h-2 w-2 inline-block -left-1 -top-0.5 rounded-full"></span> {type}
         </p>

         <CardContent className="relative px-10 pt-24">
            <svg className="absolute -right-[5px] -top-[5px] z-0" width="193" height="148" viewBox="0 0 193 148" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M193 0H0V1.5H10.5C32.8675 1.5 51 19.6325 51 42C51 64.3675 69.1325 82.5 91.5 82.5H142C169.614 82.5 192 104.886 192 132.5V146.5C192 147.17 192 148 192 148H193V0Z" fill="#E5E5E5" />
               <path d="M192 132C192 104.386 169.614 82 142 82H91.5C69.1325 82 51 63.8675 51 41.5C51 19.1325 32.8675 1 10.5 1H0V5H10.5C30.6584 5 47 21.3416 47 41.5C47 66.0767 66.9233 86 91.5 86H142C167.405 86 188 106.595 188 132V148H192V132Z" fill="white" />
            </svg>


            <div className="min-h-52">
               <img className="absolute top-10 left-10 max-h-10" src={`./experience/${companyLogoName}-black.png`} />

               <div className="flex flex-row flex-wrap gap-2.5 mt-7">
                  {skills.map((skill) => <Badge variant="secondary">{skill}</Badge>)}
               </div>
            </div>

            <p className="absolute right-12 bottom-10 text-5xl font-semibold">
               {time}
            </p>
         </CardContent>
      </Card>
   );
};

export default ExperienceCard;