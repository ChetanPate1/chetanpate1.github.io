// Core
// Third party
import { ChevronRight } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";

// Local
import Container from '@/components/Container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';

const skills = [
   { name: 'Coding', percentage: 95 },
   { name: 'Figma', percentage: 90 },
   { name: 'Sketching', percentage: 90 },
   { name: 'Wireframing', percentage: 95 },
   { name: 'Graphic Design', percentage: 85 }
];

const Home = () => {
   const renderSkills = () => {
      return skills.map((skill, index) => (
         <div key={index} className="flex justify-between items-center mb-6">
            <h5 className="min-w-44">{skill.name}</h5>
            <Progress value={skill.percentage} />
         </div>
      ));
   }

   return (
      <Container>
         <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="col-span-2">
               <Card>
                  <CardContent className="py-16 px-10">
                     <h1 className="relative font-semibold text-8xl text-primary pl-20">
                        <ChevronRight size={96} className="absolute -left-6" /> I am a <br />
                        Web Developer;<br />

                        <span className="text-primary text-lg font-semibold mt-6">Frontend Specialist</span>
                     </h1>
                  </CardContent>
               </Card>
            </div>

            <Card className="relative bg-primary">
               <CardHeader>
                  <h4 className="font-semibold tracking-wide">Experience</h4>
               </CardHeader>
               <CardContent>
                  <div className="absolute bottom-0 right-0 w-20 h-64 bg-gradient-to-l from-5% from-red-700 opacity-20 rounded-full"></div>
                  <div className="absolute bottom-0 right-20 w-20 h-64 bg-gradient-to-l from-5% from-red-700 opacity-20 rounded-full"></div>
                  <div className="absolute bottom-0 right-40 w-20 h-64 bg-gradient-to-l from-5% from-red-700 opacity-20 rounded-full"></div>
                  <div className="absolute bottom-0 right-60 w-20 h-64 bg-gradient-to-l from-5% from-red-700 opacity-20 rounded-full"></div>
                  <div className="absolute bottom-0 right-80 w-20 h-64 bg-gradient-to-l from-5% from-red-700 opacity-20 rounded-full"></div>


                  <h4 className="font-semibold text-6xl text-black absolute bottom-10 right-8">+7 years</h4>
               </CardContent>
            </Card>
         </div>

         <div className="grid grid-cols-3 gap-6">
            <Card>
               <CardHeader>
                  <h4 className="font-semibold tracking-wide">Tools</h4>
               </CardHeader>
               <CardContent>
                  <div className="grid grid-cols-4 gap-12 justify-items-center pt-10">
                     <img src="./assets/html.svg" alt="html icon" />
                     <img src="../assets/css.svg" alt="css icon" />
                     <img src="../assets/vue.svg" alt="vuejs icon" />
                     <img src="../assets/react.svg" alt="reactjs icon" />
                     <img src="../assets/figma.svg" alt="figma icon" />
                     <img src="../assets/ts.svg" alt="typescript icon" />
                     <img src="../assets/node.svg" alt="node icon" />
                     <img src="./assets/sass.svg" alt="sass icon" />
                  </div>
               </CardContent>
            </Card>

            <Card>
               <CardHeader>
                  <h4 className="font-semibold tracking-wide">Skills</h4>
               </CardHeader>
               <CardContent className="px-10">
                  {renderSkills()}
               </CardContent>
            </Card>

            <Card>
               <CardHeader>
                  <h4 className="font-semibold tracking-wide">Sketches</h4>
               </CardHeader>
               <CardContent>
                  <Carousel
                     opts={{ align: "start", loop: true }}
                     plugins={[Autoplay({
                        delay: 4000
                     })]}
                  >
                     <CarouselContent>
                        <CarouselItem>1</CarouselItem>
                        <CarouselItem>2</CarouselItem>
                        <CarouselItem>3</CarouselItem>
                     </CarouselContent>
                  </Carousel>
               </CardContent>
            </Card>
         </div>
      </Container>
   );
};

export default Home;