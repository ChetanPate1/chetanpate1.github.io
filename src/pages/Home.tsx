// Core
// Third party
import { ChevronRight } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";

// Local
import Container from '@/components/Container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const skills = [
   { name: 'Coding', percentage: 95 },
   { name: 'Figma', percentage: 90 },
   { name: 'Sketching', percentage: 90 },
   { name: 'Wireframing', percentage: 95 },
   { name: 'Graphic Design', percentage: 85 }
];

const Home = () => {
   return (
      <Container>
         <div className="grid grid-flow-row-dense grid-cols-3 gap-4 mb-4">
            <div className="col-span-2">
               <Card>
                  <CardContent>
                     <h1 className="font-semibold text-8xl text-primary">
                        <ChevronRight size={96} /> I am a <br />
                        Web Developer;
                     </h1>

                     <h5>Frontend Specialist</h5>
                  </CardContent>
               </Card>
            </div>

            <div className="col-span-1">
               <Card>
                  <CardHeader>
                     <h4 className="font-semibold">Experience</h4>
                  </CardHeader>
                  <CardContent>
                     <h4 className="font-semibold text-3xl text-primary">+7 years</h4>
                  </CardContent>
               </Card>
            </div>
         </div>

         <div className="grid grid-cols-3 gap-4">
            <Card>
               <CardHeader>
                  <h4 className="font-semibold">Tools</h4>
               </CardHeader>
               <CardContent>
                  <div className="grid grid-cols-4 gap-8 justify-items-center pb-10">
                     <img src="./assets/html.svg" alt="html icon" />
                     <img src="../assets/css.svg" alt="css icon" />
                     <img src="../assets/vue.svg" alt="vuejs icon" />
                     <img src="../assets/react.svg" alt="reactjs icon" />
                     <img src="../assets/figma.svg" alt="figma icon" />
                     <img src="../assets/ts.svg" alt="ts icon" />
                     <img src="../assets/node.svg" alt="node icon" />
                     <img src="./assets/sass.svg" alt="sass icon" />
                  </div>
               </CardContent>
            </Card>

            <Card>
               <CardHeader>
                  <h4 className="font-semibold">Skills</h4>
               </CardHeader>
               <CardContent>
                  <div>

                  </div>

               </CardContent>
            </Card>

            <Card>
               <CardHeader>
                  <h4 className="font-semibold">Sketches</h4>
               </CardHeader>
               <CardContent>
                  <Carousel
                     opts={{ align: "start", loop: true }}
                     plugins={[Autoplay({
                        delay: 2000
                     })]}
                  >
                     <CarouselContent>
                        <CarouselItem>...</CarouselItem>
                        <CarouselItem>...</CarouselItem>
                        <CarouselItem>...</CarouselItem>
                     </CarouselContent>
                  </Carousel>
               </CardContent>
            </Card>
         </div>
      </Container>
   );
};

export default Home;