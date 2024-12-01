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
      image: ''
   },
   {
      to: '/experiments/parallax-cards',
      name: 'parallax-cards',
      image: ''
   }
]

const Experiments = () => {
   const renderExperiments = () => {
      return experiments.map((item, index) => (
         <NavLink
            key={index}
            to={item.to}>
            <Card className="overflow-hidden">
               <img className="w-full" src={item.image} />
            </Card>
            {item.name}
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