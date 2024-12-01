import { NavLink } from "react-router-dom";
import Container from "@/components/Container";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";

const characters = [
   {
      id: 1,
      image: './experiments/character-picker/1.png',
      imageBg: './experiments/character-picker/bg-1.png',
      name: 'Butcher',
      description: 'Strong, heals quickly, has the stamina of a much younger man. Fearless in battle, what lesser men mistake for anger and rashness.'
   },
   {
      id: 2,
      image: './experiments/character-picker/2.png',
      imageBg: './experiments/character-picker/bg-2.png',
      name: 'Shadow',
      description: 'Respects witch magic enough to avoid unnecessary risks. Why slit throats when a bullet from the shadows achieves the same end?'
   },
   {
      id: 3,
      image: './experiments/character-picker/3.png',
      imageBg: './experiments/character-picker/bg-3.png',
      name: 'Saint',
      description: 'An avid student of the Fates. For as Publilius Syrus noted, against a lucky man even gods are powerless'
   }
]

const CharacterPicker = () => {

   const renderCharacterCards = () => {
      return characters.map((item) => (
         <button type="button" className="group overflow-hidden transition-all duration-300 hover:z-40 w-28 hover:w-64 focus:overflow-visible hover:overflow-visible focus:z-40 focus:w-64 cursor-pointer">
            <Card key={item.id} className="relative w-full flex items-center border rounded-sm h-96 bg-cover bg-center bg-no-repeat"
               style={{ backgroundImage: `url(${item.imageBg})` }}>
               <img className="absolute z-20 h-full min-w-64 left-1/2 -translate-x-1/2 origin-bottom transition-transform duration-300 group-hover:scale-110 group-focus:scale-110" src={item.image} />

               <div className="absolute z-40 left-1/2 -translate-x-1/2 dark:-bottom-8 bottom-4 w-40 sm:w-60 transition-opacity duration-500 group-hover:delay-100 group-focus:delay-100 opacity-0 text-center text-white group-hover:opacity-100 group-focus:opacity-100">
                  <h6 className="text-2xl font-serif italic font-semibold mb-3">{item.name}</h6>
                  <p className="text-xs font-serif italic">{item.description}</p>
               </div>
               <div className="absolute z-30 bottom-0 bg-gradient-to-t from-black/50 w-full h-1/4"></div>
            </Card>
         </button>
      ));
   };

   return (
      <Container>
         <div className="mx-auto max-w-5xl pb-10 px-10">
            <Breadcrumb>
               <BreadcrumbList>
                  <BreadcrumbItem>
                     <NavLink to="/experiments" className="hover:text-primary">Experiments</NavLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>Character Picker</BreadcrumbItem>
               </BreadcrumbList>
            </Breadcrumb>

            <h1 className="text-5xl font-semibold mt-10 mb-3 dark:text-white">
               Character Picker
            </h1>
            <p className="text-2xl mb-6 dark:text-neutral-50">
               Inspired by the character picker from Witchfire the video game.
            </p>

            <p className="dark:text-neutral-100 mb-3">
               Game UI looked interesting hover effect. I wanted to see if I could build it for the web.
            </p>

            <div className="flex gap-2 sm:gap-6 justify-between sm:justify-normal my-16 -mx-3">
               {renderCharacterCards()}
            </div>
         </div>
      </Container>
   );
};

export default CharacterPicker;