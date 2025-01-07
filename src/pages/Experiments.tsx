// Local
import Container from "@/components/Container";
import { Card } from "@/components/ui/card";
import { NavLink } from "react-router-dom";

const experiments = [
   {
      to: '/experiments/tutorial',
      name: 'Tutorial',
      image: './experiments/tutorial.gif'
   },
   {
      to: '/experiments/character-picker',
      name: 'Character Picker',
      image: './experiments/character-picker.gif'
   },
   {
      to: '/experiments/parallax-cards',
      name: 'Parallax Cards',
      image: './experiments/parallax-card.gif'
   }
]

const Experiments = () => {
   const renderExperiments = () => {
      return experiments.map((item, index) => (
         <NavLink
            key={index}
            to={item.to}>
            <Card className="overflow-hidden relative">
               <div className="absolute z-10 left-0 right-0 w-full h-full bg-gradient-to-b from-black/35"></div>
               <p className=" absolute z-20 left-8 top-8 font-bold text-white">{item.name}</p>
               <img className="w-full" src={item.image} />
            </Card>
         </NavLink>
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

export default Experiments;