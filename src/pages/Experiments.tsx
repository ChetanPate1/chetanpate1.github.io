// Local
import Container from "@/components/Container";
import { NavLink } from "react-router-dom";

const Experiments = () => {

   const renderExperiments = () => {
      return [{ to: '/experiments/tutorial', name: 'Tutorial' }].map((item, index) => (
         <NavLink
            key={index}
            to={item.to}>
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