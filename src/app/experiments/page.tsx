// Core
import Link from "next/link";
// Local
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";

const experiments = [
   {
      to: '/experiments/tutorial',
      name: 'Tutorial',
      image: '/experiments/tutorial.gif'
   },
   {
      to: '/experiments/character-picker',
      name: 'Character Picker',
      image: '/experiments/character-picker.gif'
   },
   {
      to: '/experiments/parallax-cards',
      name: 'Parallax Cards',
      image: '/experiments/parallax-card.gif'
   }
]

const Page = () => {
   const renderExperiments = () => {
      return experiments.map((item, index) => (
         <Link
            key={index}
            href={item.to}>
            <Card className="overflow-hidden relative">
               <div className="absolute z-10 left-0 right-0 w-full h-full bg-gradient-to-b from-black/35"></div>
               <p className=" absolute z-20 left-8 top-8 font-bold text-white">{item.name}</p>
               <img className="w-full" src={item.image} />
            </Card>
         </Link>
      ));
   };

   return (
      <Container>
         <div className="mx-auto max-w-6xl pb-10 px-10">
            <div className="grid grid-cols-2 gap-6">
               {renderExperiments()}
            </div>
         </div>
      </Container>
   );
};

export default Page;