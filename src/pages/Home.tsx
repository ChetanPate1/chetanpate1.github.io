// Core
import { useEffect, useState } from 'react';
// Third party
import { ArrowRightIcon, ChevronRight } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'react-router-dom';
// Local
import Container from '@/components/Container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const skills = [
   { name: 'Coding', percentage: 95 },
   { name: 'Figma', percentage: 90 },
   { name: 'Sketching', percentage: 90 },
   { name: 'Wireframing', percentage: 95 },
   { name: 'Graphic Design', percentage: 85 }
];

const sketches = [
   { src: './sketches/small/root-study-2.jpg' },
   { src: './sketches/small/root-study-1.jpg' },
   { src: './sketches/small/fox-study.jpg' },
   { src: './sketches/small/leopard.jpg' },
   { src: './sketches/small/lion.jpg' },
   { src: './sketches/small/bike.jpg' }
];

const Home = () => {
   const [api, setApi] = useState<CarouselApi>();
   const [current, setCurrent] = useState(0);
   const [count, setCount] = useState(0);
   const start = 2017;
   const currentYear = new Date().getFullYear();

   useEffect(() => {
      if (!api) return;

      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)

      api.on('select', () => {
         setCurrent(api.selectedScrollSnap() + 1)
      })
   }, [api]);

   const renderSkills = () => {
      return skills.map((skill, index) => (
         <div key={index} className="flex justify-between items-center mb-3 lg:mb-6">
            <h5 className="min-w-44">{skill.name}</h5>
            <Progress value={skill.percentage} />
         </div>
      ));
   };

   const renderSketches = () => {
      return sketches.map((sketch, index) => (
         <CarouselItem key={index} className="bg-cover bg-center" style={{ 'backgroundImage': `url(${sketch.src})` }} />
      ));
   };

   return (
      <Container>
         <div className="grid grid-cols-5 gap-6 mb-6 px-6 lg:px-0">
            <div className="col-span-full lg:col-span-3">
               <Card>
                  <CardContent className="py-16 px-10">
                     <h1 className="relative font-semibold text-5xl md:text-6xl lg:text-8xl text-primary pl-10 lg:pl-20">
                        <ChevronRight className="w-14 h-14 lg:w-24 lg:h-24 absolute -left-6" /> I am a <br />
                        Web Developer;<br />

                        <span className="text-primary text-lg font-semibold mt-6">
                           Frontend Specialist
                        </span>
                     </h1>
                  </CardContent>
               </Card>
            </div>

            <Card className="relative bg-primary col-span-full lg:col-span-2 min-h-52">
               <Link to="experience">
                  <Button size="icon" className="absolute right-5 top-5 z-10">
                     <ArrowRightIcon className="h-6 w-6" />
                  </Button>
               </Link>

               <svg className="not-sr-only absolute -right-[5px] -top-[5px] z-0" width="157" height="155" viewBox="0 0 157 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H4.77243C34.1812 1 57.9999 24.9568 57.9999 54.3415C57.9999 79.2064 78.1592 99.455 103 99.455C131.745 99.455 155.145 122.338 155.977 150.883L156 155H152V151H151.979C151.939 149.652 151.846 148.318 151.7 147C148.987 122.505 128.218 103.455 103 103.455C75.938 103.455 53.9999 81.4035 53.9999 54.3415C53.9999 28.2383 33.6831 6.77523 7.99994 5.10464C6.93301 5.03524 5.85681 5 4.77243 5H-6.10352e-05L0 1Z" fill="white" />
                  <path d="M157 0H-6.10352e-05L0 1H4.77243C34.1812 1 57.9999 24.9568 57.9999 54.3415C57.9999 79.2064 78.1592 99.455 103 99.455C131.745 99.455 155.145 122.338 155.977 150.883L156 155H157V0Z" fill="#E5E5E5" />
               </svg>

               <CardHeader>
                  <h4 className="font-semibold tracking-wide">Experience</h4>
               </CardHeader>
               <CardContent>
                  <div className="absolute bottom-0 right-0 w-20 h-1/2 lg:h-3/4 bg-gradient-to-l from-5% from-red-700 opacity-20 rounded-full"></div>
                  <div className="absolute bottom-0 right-20 w-20 h-2/3 lg:h-3/4 bg-gradient-to-l from-5% from-red-700 opacity-20 rounded-full"></div>
                  <div className="absolute bottom-0 right-40 w-20 h-3/4 bg-gradient-to-l from-5% from-red-700 opacity-20 rounded-full"></div>
                  <div className="absolute bottom-0 right-60 w-20 h-3/4  bg-gradient-to-l from-5% from-red-700  opacity-0 lg:opacity-20 rounded-full"></div>

                  <h4 className="font-semibold text-5xl text-black absolute bottom-10 right-10">
                     +{currentYear - start} years
                  </h4>
               </CardContent>
            </Card>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 lg:px-0 pb-32 lg:pb-0">
            <Card>
               <CardHeader>
                  <h4 className="font-semibold tracking-wide">Tools</h4>
               </CardHeader>
               <CardContent>
                  <div className="grid grid-cols-4 gap-6 lg:gap-12 justify-items-center lg:pt-10">
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

            <Carousel
               className="relative rounded-[50px] border-4 border-white overflow-hidden"
               opts={{ align: "start", loop: true }}
               setApi={setApi}
               plugins={[Autoplay({
                  delay: 4000
               })]}
            >
               <CarouselContent className=" h-[360px]">
                  {renderSketches()}
               </CarouselContent>

               <h4 className="font-semibold tracking-wide absolute top-8 left-8 drop-shadow-[0_0_3px_rgba(255,255,255,1)]">Sketches</h4>
               <Progress className="absolute bottom-8 right-8 z-30 max-w-10 h-2" value={current / count * 100} />
            </Carousel>
         </div>
      </Container>
   );
};

export default Home;