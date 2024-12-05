import { NavLink } from "react-router-dom";
import Container from "@/components/Container";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { useParallaxCard } from "./parallax-card.hook";

const ParallaxCards = () => {
   const parallaxCard1 = useParallaxCard(15)
   const parallaxCard2 = useParallaxCard(15)

   return (
      <Container className="mb-40">
         <div className="mx-auto max-w-5xl pb-10 px-10">
            <Breadcrumb>
               <BreadcrumbList>
                  <BreadcrumbItem>
                     <NavLink to="/experiments" className="hover:text-primary">Experiments</NavLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>Parallax Cards</BreadcrumbItem>
               </BreadcrumbList>
            </Breadcrumb>

            <h1 className="text-5xl font-semibold mt-10 mb-3 dark:text-white">
               Parallax Cards
            </h1>
            <p className="text-2xl mb-6 dark:text-neutral-50">
               Inspired by the apple tv tiles which tilt as the user hovers
            </p>

            <p className="dark:text-neutral-100 mb-3">
               Using css transforms and perspective we can achieve this effect.
            </p>

            <div>
               <Card className="relative transition-transform will-change-transform mb-24"
                  ref={parallaxCard1.ref}
                  onMouseDown={parallaxCard1.onStart}
                  onMouseMove={parallaxCard1.onMove}
                  onMouseLeave={parallaxCard1.onLeave}
                  onTouchStart={parallaxCard1.onStart}
                  onTouchMove={parallaxCard1.onMove}
                  onTouchEnd={parallaxCard1.onLeave}>
                  <img src="./experiments/parallax-cards/interstellar-7.png" />
                  <img className="absolute z-0 left-0 top-0 origin-center" style={{ transform: 'translateZ(0px)' }} src="./experiments/parallax-cards/interstellar-6.png" />
                  <img className="absolute z-10 left-0 top-0 origin-center" style={{ transform: 'translateZ(20px)' }}
                     src="./experiments/parallax-cards/interstellar-5.png"
                  />
                  <img className="absolute z-20 left-0 top-0 origin-center" style={{ transform: 'translateZ(40px)' }} src="./experiments/parallax-cards/interstellar-4.png"
                  />
                  <img className="absolute z-30 left-0 top-0 origin-center" style={{ transform: 'translateZ(50px)' }} src="./experiments/parallax-cards/interstellar-3.png" />
                  <img className="absolute z-40 left-0 top-0 origin-center" style={{ transform: 'translateZ(70px)' }} src="./experiments/parallax-cards/interstellar-2.png" />
                  <img className="absolute z-50 left-0 top-0 origin-center" style={{ transform: 'translateZ(100px)' }} src="./experiments/parallax-cards/interstellar-1.png" />
               </Card>
            </div>



            <Card className="relative transition-transform will-change-transform"
               ref={parallaxCard2.ref}
               onMouseDown={parallaxCard2.onStart}
               onMouseMove={parallaxCard2.onMove}
               onMouseLeave={parallaxCard2.onLeave}
               onTouchStart={parallaxCard2.onStart}
               onTouchMove={parallaxCard2.onMove}
               onTouchEnd={parallaxCard2.onLeave}>
               <img src="./experiments/parallax-cards/oblivion-4.png" style={{ transform: '' }} />
               <img className="absolute z-20 left-0 top-0 origin-center" style={{ transform: 'translateZ(20px)' }} src="./experiments/parallax-cards/oblivion-3.png" />
               <img className="absolute z-30 left-0 top-0 origin-center" style={{ transform: 'translateZ(40px)' }} src="./experiments/parallax-cards/oblivion-2.png" />
               <img className="absolute z-40 left-0 top-0 origin-center" style={{ transform: 'translateZ(100px)' }} src="./experiments/parallax-cards/oblivion-1.png" />
            </Card>
         </div>
      </Container>
   )
}

export default ParallaxCards;