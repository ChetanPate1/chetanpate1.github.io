// Core
import { memo, useCallback, useEffect, useRef, useState } from 'react';
// Third Party
import { NavLink } from 'react-router-dom';
// Local
import Container from '@/components/Container';
import { Card, CardContent } from '@/components/ui/card';
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbList,
   BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const ANIMATION_DURATION = 440;
const PAUSE_DURATION = 2300;

const products = [
   'Tax', 'Billing', 'Invoicing', 'Capital',
   'Atlas', 'Payments', 'Climate', 'Treasury',
   'Connect', 'Radar', 'Terminal', 'Checkout',
   'Issuing', 'Identity', 'Sigma', 'Elements'
] as const;

type Product = typeof products[number];
type ActiveProducts = Record<Product, boolean>;
type StripIconProps = {
   active?: boolean;
   name: Product;
}

const StripeIcon = memo(({ active, name }: StripIconProps) => {
   const icon = name.toLowerCase();
   if (active) {
      return (
         <button type="button" style={{ gridArea: name }} className="relative z-30 flex items-center justify-center scale-110 bg-white shadow-3xl transition-all duration-500 h-20 w-20 rounded-xl">
            <img className="absolute z-0 opacity-0 scale-75 -translate-y-2 transition-all duration-500" src={`./experiments/stripe-animation/${icon}-line.svg`} />
            <img className="absolute z-10 opacity-100  scale-75 -translate-y-2 transition-all duration-500" src={`./experiments/stripe-animation/${icon}-fill.svg`} />

            <span className="absolute z-10 bottom-0 text-[10px] text-neutral-800 font-semibold opacity-100 -translate-y-2 transition-all duration-500">
               {name}
            </span>
         </button>
      );
   }

   return (
      <button type="button" style={{ gridArea: name }} className="relative hover:z-30 flex items-center justify-center bg-transparent h-20 w-20 border border-neutral-300 rounded-xl group hover:scale-110 hover:border-transparent hover:shadow-3xl hover:bg-white transition-all duration-500">
         <img className="absolute z-0 group-hover:scale-75 group-hover:-translate-y-2 group-hover:opacity-0 transition-all duration-500" src={`./experiments/stripe-animation/${icon}-line.svg`} />
         <img className="absolute z-10 group-hover:scale-75 group-hover:-translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500" src={`./experiments/stripe-animation/${icon}-fill.svg`} />
         <span className="absolute z-10 bottom-0 text-[10px] text-neutral-800 font-semibold opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500">
            {name}
         </span>
      </button>
   );
});

const gridStyle = {
   display: 'grid',
   gridTemplateAreas: `
      ". . Tax . . ."
      "Billing . . Invoicing Capital ."
      ". Atlas Payments Climate . Treasury"
      "Connect . . Radar . ."
      ". . Terminal Checkout Issuing ."
      ". Identity . . Sigma Elements"
   `,
   gridTemplateColumns: 'repeat(6, auto)', // Equal width columns
   gridTemplateRows: 'repeat(6, auto)',    // Equal height rows
   height: '540px', // Fixed height to ensure square cells
   width: '540px'
};

function animatePath(path: SVGPathElement, direction: 'in' | 'out'): Promise<void> {
   return new Promise((resolve) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;

      const startTime = performance.now();

      const animate = (currentTime: number) => {
         const elapsed = currentTime - startTime;
         const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
         const currentOffset = direction == 'in' ? `${length * (1 - progress)}` : `${length + (length * (1 - progress))}`;

         path.style.strokeDashoffset = `${currentOffset}`;

         if (progress < 1) {
            requestAnimationFrame(animate);
         } else {
            resolve();
         }
      };

      requestAnimationFrame(animate);
   });
}

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const linearGradientAnimation = () => (
   <>
      <animate attributeName="x1" values="0;100;100;0;0" dur="4s" repeatCount="indefinite" />
      <animate attributeName="y1" values="0;100;100;0;0" dur="4s" repeatCount="indefinite" />
      <animate attributeName="x2" values="100;100;0;0;100" dur="4s" repeatCount="indefinite" />
      <animate attributeName="y2" values="100;0;0;100;100" dur="4s" repeatCount="indefinite" />
   </>
)

const StripeAnimation = () => {
   const [activeProduct, setActiveProduct] = useState<ActiveProducts>(
      Object.fromEntries(products.map(p => [p, false])) as ActiveProducts
   );
   const [isAnimating, setIsAnimating] = useState(true);
   const pathRefs = {
      billingToInvoicing: useRef<SVGPathElement>(null),
      paymentToTax: useRef<SVGPathElement>(null),
      paymentToRadar: useRef<SVGPathElement>(null),
      paymentToConnect: useRef<SVGPathElement>(null),
      paymentToTerminal: useRef<SVGPathElement>(null),
      issuingToCapital: useRef<SVGPathElement>(null),
      issuingToTreasury: useRef<SVGPathElement>(null),
      connectToTerminal: useRef<SVGPathElement>(null)
   };

   const updateActiveProducts = useCallback((updates: Partial<ActiveProducts>) => {
      setActiveProduct(prev => ({ ...prev, ...updates }));
   }, []);

   const animateSequence = useCallback(async (
      startProduct: Product,
      endProducts: Product[],
      paths: SVGPathElement[]
   ) => {
      updateActiveProducts({ [startProduct]: true });
      await Promise.all(paths.map(async (path, index) => {
         await animatePath(path, 'in');
         updateActiveProducts({ [endProducts[index]]: true });
      }));

      await wait(PAUSE_DURATION);

      updateActiveProducts({ [startProduct]: false });

      await Promise.all(paths.map(async (path, index) => {
         await animatePath(path, 'out');
         updateActiveProducts({ [endProducts[index]]: false });
      }));
   }, [updateActiveProducts]);


   const runAnimationLoop = useCallback(async () => {
      const sequences = [
         {
            start: 'Billing' as const,
            ends: ['Invoicing' as const],
            paths: [pathRefs.billingToInvoicing.current!]
         },
         {
            start: 'Payments' as const,
            ends: ['Tax' as const, 'Radar' as const],
            paths: [pathRefs.paymentToTax.current!, pathRefs.paymentToRadar.current!]
         },
         {
            start: 'Connect' as const,
            ends: ['Terminal' as const],
            paths: [pathRefs.connectToTerminal.current!]
         },
         {
            start: 'Issuing' as const,
            ends: ['Capital' as const, 'Treasury' as const],
            paths: [pathRefs.issuingToCapital.current!, pathRefs.issuingToTreasury.current!]
         },
         {
            start: 'Payments' as const,
            ends: ['Connect' as const, 'Terminal' as const],
            paths: [pathRefs.paymentToConnect.current!, pathRefs.paymentToTerminal.current!]
         }
      ];

      while (isAnimating) {
         for (const sequence of sequences) {
            if (!isAnimating) break;
            await animateSequence(sequence.start, sequence.ends, sequence.paths);
         }
      }
   }, [animateSequence, isAnimating]);

   useEffect(() => {
      runAnimationLoop();
      return () => setIsAnimating(false);
   }, [runAnimationLoop]);

   return (
      <Container>
         <div className="mx-auto max-w-5xl pb-10 px-10">
            <Breadcrumb>
               <BreadcrumbList>
                  <BreadcrumbItem>
                     <NavLink to="/experiments" className="hover:text-primary">Experiments</NavLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>Stripe Animation</BreadcrumbItem>
               </BreadcrumbList>
            </Breadcrumb>

            <h1 className="text-5xl font-semibold mt-10 mb-3 dark:text-white">Stripe Animation</h1>
            <p className="text-2xl mb-6 dark:text-neutral-50">
               Cool interactive animation
            </p>

            <p className="dark:text-neutral-100 mb-3">
               This is one of many beautiful animations on stripe.com. I wanted to see if i could recreate it.
            </p>

            <Card className="mt-10">
               <CardContent className="relative min-h-40">
                  <svg className="absolute" style={{ left: 242, top: 79 }} width="2" height="102" viewBox="0 0 2 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 102V0" stroke="url(#paint0_linear_8_213)" strokeWidth="2" strokeDasharray="102 102" ref={pathRefs.paymentToTax} strokeDashoffset={102} />
                     <defs>
                        <linearGradient id="paint0_linear_8_213" x1="100" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                           <stop stopColor="#FF5996" />
                           <stop offset="1" stopColor="#9966FF" />
                           {linearGradientAnimation()}
                        </linearGradient>
                     </defs>
                  </svg>

                  <svg className="absolute" style={{ left: 242, top: 259 }} width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 0V31C1 44.3333 7.66667 51 21 51H52" stroke="url(#paint0_linear_8_219)" strokeWidth="2" strokeDasharray="94.46 94.46" strokeDashoffset={95} ref={pathRefs.paymentToRadar} />
                     <defs>
                        <linearGradient id="paint0_linear_8_219" x1="97.0588" y1="32.1042" x2="2.9412" y2="65.8958" gradientUnits="userSpaceOnUse">
                           <stop stopColor="#FF5996" />
                           <stop offset="1" stopColor="#9966FF" />
                           {linearGradientAnimation()}
                        </linearGradient>
                     </defs>
                  </svg>

                  <svg className="absolute" style={{ left: 103, top: 131 }} width="192" height="2" viewBox="0 0 192 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0 1H192" stroke="url(#paint0_linear_8_216)" strokeWidth="2" strokeDasharray="192 192" strokeDashoffset={192} ref={pathRefs.billingToInvoicing} />
                     <defs>
                        <linearGradient id="paint0_linear_8_216" x1="100" y1="100" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                           <stop stopColor="#FFD848" />
                           <stop offset="1" stopColor="#00D924" />
                           {linearGradientAnimation()}
                        </linearGradient>
                     </defs>
                  </svg>


                  <svg className="absolute" style={{ left: 103, top: 260 }} width="134" height="52" viewBox="0 0 134 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M133 0V31C133 44.3333 126.333 51 113 51H0" stroke="url(#paint0_linear_8_228)" strokeWidth="2" strokeDasharray="176.46 176.46" strokeDashoffset={177} ref={pathRefs.paymentToConnect} />
                     <defs>
                        <linearGradient id="paint0_linear_8_228" x1="-0.748426" y1="54.0094" x2="98.7484" y2="43.9906" gradientUnits="userSpaceOnUse">
                           <stop stopColor="#11EFE3" />
                           <stop offset="1" stopColor="#0073E6" />
                           {linearGradientAnimation()}
                        </linearGradient>
                     </defs>
                  </svg>

                  <svg className="absolute" style={{ left: 249, top: 259 }} width="2" height="102" viewBox="0 0 2 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 0V102" stroke="url(#paint0_linear_8_231)" strokeWidth="2" strokeDasharray="102 102" strokeDashoffset={102} ref={pathRefs.paymentToTerminal} />
                     <defs>
                        <linearGradient id="paint0_linear_8_231" x1="100" y1="100" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                           <stop stopColor="#11EFE3" />
                           <stop offset="1" stopColor="#9966FF" />
                           {linearGradientAnimation()}
                        </linearGradient>
                     </defs>
                  </svg>

                  <svg className="absolute" style={{ left: 417, top: 169 }} width="2" height="192" viewBox="0 0 2 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 192V0" stroke="url(#paint0_linear_8_222)" strokeWidth="2" strokeDasharray="192 192" strokeDashoffset={192} ref={pathRefs.issuingToCapital} />
                     <defs>
                        <linearGradient id="paint0_linear_8_222" x1="100" y1="100" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                           <stop stopColor="#0073E6" />
                           <stop offset="1" stopColor="#FF80FF" />
                           {linearGradientAnimation()}
                        </linearGradient>
                     </defs>
                  </svg>

                  <svg className="absolute" style={{ left: 429, top: 219 }} width="44" height="142" viewBox="0 0 44 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 142V21C1 7.66667 7.66667 1 21 1H44" stroke="url(#paint0_linear_8_225)" strokeWidth="2" strokeDasharray="176.46 176.46" ref={pathRefs.issuingToTreasury} strokeDashoffset={177} />
                     <defs>
                        <linearGradient id="paint0_linear_8_225" x1="93.1918" y1="75.1887" x2="6.80823" y2="24.8113" gradientUnits="userSpaceOnUse">
                           <stop stopColor="#0073E6" />
                           <stop offset="1" stopColor="#FF80FF" />
                           {linearGradientAnimation()}
                        </linearGradient>
                     </defs>
                  </svg>

                  <svg className="absolute" style={{ left: 62, top: 349 }} width="142" height="52" viewBox="0 0 142 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 0V31C1 44.3333 7.66667 51 21 51H142" stroke="url(#paint0_linear_8_237)" strokeWidth="2" strokeDasharray="184.46 184.46" ref={pathRefs.connectToTerminal} strokeDashoffset={185} />
                     <defs>
                        <linearGradient id="paint0_linear_8_237" x1="92.1696" y1="22.135" x2="7.83043" y2="75.865" gradientUnits="userSpaceOnUse">
                           <stop stopColor="#11EFE3" />
                           <stop offset="1" stopColor="#9966FF" />
                           {linearGradientAnimation()}
                        </linearGradient>
                     </defs>
                  </svg>

                  <div className="mt-10" style={gridStyle}>
                     {products.map((p) => (
                        <StripeIcon key={p} name={p} active={activeProduct[p]} />
                     ))}
                  </div>
               </CardContent>
            </Card>
         </div>
      </Container>
   );
};

export default StripeAnimation;
