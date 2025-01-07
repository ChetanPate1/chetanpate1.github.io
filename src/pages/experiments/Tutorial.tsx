// Core
import { useEffect, useRef, useState } from 'react';
// Third Party
import { NavLink } from 'react-router-dom';
import { ChartNoAxesColumn, Cuboid, Download } from 'lucide-react';
// Local
import Container from '@/components/Container';
import { Card, CardContent } from '@/components/ui/card';
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbList,
   BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';

interface Element {
   id: number;
   x: number;
   y: number;
   height: number;
   width: number;
};

const tutorialMap = [
   { id: 0, title: 'Refill Block', text: 'Tap to start refilling your salt blocks.' },
   {
      id: 1, title: 'Block Inventory',
      text: 'This is the number of blocks you have left. Tap to manage stock.'
   },
   { id: 2, title: 'Statistics', text: 'Tap to view your block usage stats.' }
];

const Tutorial = () => {
   const [api, setApi] = useState<CarouselApi>();
   const [current, setCurrent] = useState(0);
   const buttons = useRef<HTMLDivElement>(null);
   const [elementPositions, setElementPositions] = useState<Element[]>([]);
   const [activeElement, setActiveElement] = useState<Element>({ id: 0, x: 0, y: 0, height: 0, width: 0 });
   const [showTutorial, setShowTutorial] = useState(false);

   useEffect(() => {
      if (!api) return;
      setCurrent(api.selectedScrollSnap() + 1);

      api.on("select", () => {
         setCurrent(api.selectedScrollSnap() + 1);
         setActiveElement(elementPositions[api.selectedScrollSnap()]);
      });
   }, [api]);

   useEffect(() => {
      initialiseTutorials();

      window.addEventListener('resize', () => {
         setShowTutorial(false);
         initialiseTutorials();
      });

      return () => {
         window.removeEventListener('resize', () => {
            setShowTutorial(false);
            initialiseTutorials();
         });
      };
   }, []);

   const initialiseTutorials = () => {
      if (!buttons.current) return;

      const buttonElements: HTMLCollection = buttons.current.children;

      if (buttonElements.length > 0) {
         const positions: Element[] = [...buttonElements].map((button, i: number) => {
            const { x, y, height, width } = button.getBoundingClientRect();

            return { id: i, x, y, height, width };
         });
         setElementPositions(positions);
         setActiveElement(positions[0]);
      }
   };

   const onNext = () => {
      if (current === tutorialMap.length) {
         setShowTutorial(false);
         return;
      }

      api?.scrollNext();
   };

   const onSkip = () => {
      setShowTutorial(false);
   };

   const onStart = () => {
      setShowTutorial(true);
      setActiveElement(elementPositions[0]);
   };

   const renderTutorialCarousel = () => {
      return tutorialMap.map((item, i) => {
         return (
            <CarouselItem key={i}>
               <h2 className="text-lg font-semibold dark:text-white">{item.title}</h2>
               <p className="dark:text-neutral-100">{item.text}</p>
            </CarouselItem>
         );
      });
   };

   const renderTutorial = () => {
      if (showTutorial) {
         return (
            <>
               <div className={`h-2 w-2 absolute left-0 top-0 z-[1500] rounded-2xl tutorial-pulsing ${activeElement.id === 0 ? '' : 'transition-transform'}`}
                  style={{
                     transform: `translate(${activeElement.x}px,${activeElement.y}px)`,
                     height: activeElement.height,
                     width: activeElement.width,
                     boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.7)'
                  }}>
               </div>

               <Card className="fixed bottom-8 right-8 z-[1600] w-full max-w-80 rounded-2xl p-3">
                  <div className="flex flex-row justify-between items-center border-b dark:border-neutral-800 mb-3">
                     <Button className="relative -top-1 -left-1" variant="link" onClick={onSkip}>Skip</Button>
                     <p className="relative -top-1 text-xs dark:text-neutral-100">{current} of {tutorialMap.length}</p>
                  </div>

                  <Carousel setApi={setApi} draggable={false}>
                     <CarouselContent>
                        {renderTutorialCarousel()}
                     </CarouselContent>
                  </Carousel>

                  <div className="flex flex-row items-center mt-4">
                     <Progress className="h-1 mr-7" value={(current / tutorialMap.length) * 100} />

                     <Button className="min-w-24" onClick={onNext}>
                        {current == tutorialMap.length ? 'Done' : 'Next'}
                     </Button>
                  </div>
               </Card>
            </>
         );
      }

      return null;
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
                  <BreadcrumbItem>Tutorial</BreadcrumbItem>
               </BreadcrumbList>
            </Breadcrumb>

            <h1 className="text-5xl font-semibold mt-10 mb-3 dark:text-white">Tutorial</h1>
            <p className="text-2xl mb-6 dark:text-neutral-50">
               A user walkthrough of a UI.
            </p>

            <p className="dark:text-neutral-100 mb-3">
               Goal is to highlight parts of the UI and show a tooltip. Use box-shadow to highlight controls with translucent colour with high spread. This give the illusion of a spotlight on the control.
            </p>

            <p className="dark:text-neutral-100">
               Below is a UI from a personal project for a salt block refill system (for a Water Softener).
            </p>

            <Card className="mt-10 max-w-md">
               <CardContent className="relative min-h-40">
                  <div className="flex justify-center mt-10">
                     <div className="flex flex-row max-w-60 justify-around border-2 dark:border-neutral-800 bg-white dark:bg-transparent h-16 rounded-3xl mb-2" ref={buttons}>
                        <div className="relative text-center text-xl flex flex-row items-center justify-center text-primary-foreground text-neutral-800 dark:text-neutral-100 h-16 w-16">
                           <Download className="h-5 w-5" />
                        </div>

                        <div className="relative text-center text-xl flex flex-row items-center justify-center text-primary-foreground text-neutral-800 dark:text-neutral-100 h-16 w-16">
                           5<Cuboid className="h-5 w-5 ml-2" />
                        </div>

                        <div className="relative text-center text-xl flex flex-row items-center justify-center text-primary-foreground text-neutral-800 dark:text-neutral-100 h-16 w-16">
                           <ChartNoAxesColumn className="h-5 w-5" />
                        </div>
                     </div>
                  </div>

                  <Button className="absolute bottom-5 right-5 rounded-full" onClick={onStart}>
                     Demo
                  </Button>
               </CardContent>
            </Card>
         </div>
         {renderTutorial()}
      </Container>
   );
};

export default Tutorial;
