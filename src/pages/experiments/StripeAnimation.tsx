// Core
import { useEffect, useRef, useState } from 'react';
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

const products = [
   'Tax', 'Billing', 'Invoicing', 'Capital',
   'Atlas', 'Payments', 'Climate', 'Treasury',
   'Connect', 'Radar', 'Terminal', 'Checkout',
   'Issuing', 'Identity', 'Sigma', 'Elements'
] as const;

type Product = typeof products[number];

type StripIconProps = {
   active?: boolean;
   name: Product;
}

const StripeIcon = (props: StripIconProps) => {
   const icon = props.name.toLowerCase();

   if (props.active) {
      return (
         <button type="button" style={{ gridArea: props.name }} className="relative z-30 flex items-center justify-center scale-110 bg-white shadow-3xl transition-all duration-500 h-20 w-20 rounded-xl">
            <img className="absolute z-0 opacity-0 scale-75 -translate-y-2 transition-all duration-500" src={`./experiments/stripe-animation/${icon}-line.svg`} />
            <img className="absolute z-10 opacity-100  scale-75 -translate-y-2 transition-all duration-500" src={`./experiments/stripe-animation/${icon}-fill.svg`} />

            <span className="absolute z-10 bottom-0 text-[10px] text-neutral-800 font-semibold opacity-100 -translate-y-2 transition-all duration-500">
               {props.name}
            </span>
         </button>
      );
   }

   return (
      <button type="button" style={{ gridArea: props.name }} className="relative hover:z-30 flex items-center justify-center bg-transparent h-20 w-20 border border-neutral-300 rounded-xl group hover:scale-110 hover:border-transparent hover:shadow-3xl hover:bg-white transition-all duration-500">
         <img className="absolute z-0 group-hover:scale-75 group-hover:-translate-y-2 group-hover:opacity-0 transition-all duration-500" src={`./experiments/stripe-animation/${icon}-line.svg`} />
         <img className="absolute z-10 group-hover:scale-75 group-hover:-translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500" src={`./experiments/stripe-animation/${icon}-fill.svg`} />
         <span className="absolute z-10 bottom-0 text-[10px] text-neutral-800 font-semibold opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500">
            {props.name}
         </span>
      </button>
   );
};

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

function animatePathIn(path: SVGPathElement, onComplete: () => void) {
   const length = path.getTotalLength();

   path.style.strokeDasharray = `${length}`;
   path.style.strokeDashoffset = `${length}`;

   const startTime = performance.now();

   const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / 480, 1);
      path.style.strokeDashoffset = `${length * (1 - progress)}`;

      if (progress < 1) {
         requestAnimationFrame(animate);
      } else {
         onComplete();
      }
   };

   requestAnimationFrame(animate);
}

function animatePathOut(path: SVGPathElement, onComplete: () => void) {
   const length = path.getTotalLength();

   path.style.strokeDashoffset = `${length}`;

   const startTime = performance.now();

   const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / 480, 1);

      path.style.strokeDashoffset = `${length + (length * (1 - progress))}`;

      if (progress < 1) {
         requestAnimationFrame(animate);
      } else {
         onComplete();
      }
   };

   requestAnimationFrame(animate);
}

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const StripeAnimation = () => {
   const [activeProduct, setActiveProduct] = useState({
      Tax: false, Billing: false, Invoicing: false, Capital: false,
      Atlas: false, Payments: false, Climate: false, Treasury: false,
      Connect: false, Radar: false, Terminal: false, Checkout: false,
      Issuing: false, Identity: false, Sigma: false, Elements: false
   });

   const billingToInvoicingRef = useRef<SVGPathElement>(null);
   const paymentToTaxRef = useRef<SVGPathElement>(null);
   const paymentToRadarRef = useRef<SVGPathElement>(null);
   const paymentToConnectRef = useRef<SVGPathElement>(null);
   const paymentToTerminalRef = useRef<SVGPathElement>(null);
   const issuingToCapitalRef = useRef<SVGPathElement>(null);
   const issuingToTreasuryRef = useRef<SVGPathElement>(null);
   const connectToTerminalRef = useRef<SVGPathElement>(null);

   useEffect(() => {

      // animateBillingToInvoicing();
      // animatePaymentToTaxRadar();
      // animatePaymentToConnectTerminal();
      // animateIssuingToCapitalTreasury();
      animateConnectToTerminal()
   }, []);

   const animatePaymentToTaxRadar = async () => {
      setActiveProduct({ ...activeProduct, Payments: true });
      animatePathIn(paymentToTaxRef.current, () => {
         setActiveProduct((props) => ({
            ...props, Tax: true
         }))
      });
      animatePathIn(paymentToRadarRef.current, () => {
         setActiveProduct((props) => ({
            ...props, Radar: true
         }))
      });
      await wait(3000);
      setActiveProduct((props) => ({
         ...props, Payments: false
      }));
      animatePathOut(paymentToTaxRef.current, () => {
         setActiveProduct((props) => ({
            ...props,
            Tax: false, Radar: false
         }));
      });
      animatePathOut(paymentToRadarRef.current, () => { });
   }

   const animateBillingToInvoicing = async () => {
      setActiveProduct({ ...activeProduct, Billing: true });
      animatePathIn(billingToInvoicingRef.current, async () => {
         setActiveProduct((props) => ({ ...props, Invoicing: true }));
         await wait(3000);
         setActiveProduct((props) => ({ ...props, Billing: false }));
         animatePathOut(billingToInvoicingRef.current, () => {
            setActiveProduct((props) => ({ ...props, Invoicing: false }));
         });
      });
   };

   const animatePaymentToConnectTerminal = async () => {
      setActiveProduct({ ...activeProduct, Payments: true });
      animatePathIn(paymentToConnectRef.current, () => {
         setActiveProduct((props) => ({
            ...props, Connect: true
         }))
      });
      animatePathIn(paymentToTerminalRef.current, () => {
         setActiveProduct((props) => ({
            ...props, Terminal: true
         }))
      });
      await wait(3000);
      setActiveProduct((props) => ({
         ...props, Payments: false
      }));
      animatePathOut(paymentToConnectRef.current, () => {
         setActiveProduct((props) => ({
            ...props,
            Connect: false, Terminal: false
         }));
      });
      animatePathOut(paymentToTerminalRef.current, () => { });
   }


   const animateIssuingToCapitalTreasury = async () => {
      setActiveProduct({ ...activeProduct, Issuing: true });
      animatePathIn(issuingToCapitalRef.current, () => {
         setActiveProduct((props) => ({
            ...props, Capital: true
         }))
      });
      animatePathIn(issuingToTreasuryRef.current, () => {
         setActiveProduct((props) => ({
            ...props, Treasury: true
         }))
      });
      await wait(3000);
      setActiveProduct((props) => ({
         ...props, Issuing: false
      }));
      animatePathOut(issuingToCapitalRef.current, () => {
         setActiveProduct((props) => ({
            ...props, Capital: false
         }))
      });
      animatePathOut(issuingToTreasuryRef.current, () => {
         setActiveProduct((props) => ({
            ...props, Treasury: false
         }))
      });
   }

   const animateConnectToTerminal = async () => {
      setActiveProduct({ ...activeProduct, Connect: true });
      animatePathIn(connectToTerminalRef.current, () => {
         setActiveProduct((props) => ({
            ...props, Terminal: true
         }))
      });
      await wait(3000);
      setActiveProduct((props) => ({
         ...props, Connect: false
      }));
      animatePathOut(connectToTerminalRef.current, () => {
         setActiveProduct((props) => ({
            ...props, Terminal: false
         }))
      });
   }

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
                  {/* <svg className="absolute" style={{ left: 242, top: 79 }} width="2" height="102" viewBox="0 0 2 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 102V0" stroke="url(#paint0_linear_8_213)" stroke-width="2" stroke-dasharray="102 102" ref={paymentToTaxRef} />
                     <defs>
                        <linearGradient id="paint0_linear_8_213" x1="100" y1="100" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#FF5996" />
                           <stop offset="1" stop-color="#9966FF" />
                        </linearGradient>
                     </defs>
                  </svg>

                  <svg className="absolute" style={{ left: 242, top: 259 }} width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 0V31C1 44.3333 7.66667 51 21 51H52" stroke="url(#paint0_linear_8_219)" stroke-width="2" stroke-dasharray="94.46 94.46" strokeDashoffset={0} ref={paymentToRadarRef} />
                     <defs>
                        <linearGradient id="paint0_linear_8_219" x1="97.0588" y1="32.1042" x2="2.9412" y2="65.8958" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#FF5996" />
                           <stop offset="1" stop-color="#9966FF" />
                        </linearGradient>
                     </defs>
                  </svg> */}

                  {/* <svg className="absolute" style={{ left: 103, top: 131 }} width="192" height="2" viewBox="0 0 192 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0 1H192" stroke="url(#paint0_linear_8_216)" stroke-width="2" stroke-dasharray="192 192" strokeDashoffset={0} ref={billingToInvoicingRef} />
                     <defs>
                        <linearGradient id="paint0_linear_8_216" x1="nan" y1="nan" x2="nan" y2="nan" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#FFD848" />
                           <stop offset="1" stop-color="#00D924" />
                        </linearGradient>
                     </defs>
                  </svg> */}

                  {/* <svg className="absolute" style={{ left: 103, top: 260 }} width="134" height="52" viewBox="0 0 134 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M133 0V31C133 44.3333 126.333 51 113 51H0" stroke="url(#paint0_linear_8_228)" stroke-width="2" stroke-dasharray="176.46 176.46" strokeDashoffset={0} ref={paymentToConnectRef} />
                     <defs>
                        <linearGradient id="paint0_linear_8_228" x1="-0.748426" y1="54.0094" x2="98.7484" y2="43.9906" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#11EFE3" />
                           <stop offset="1" stop-color="#0073E6" />
                        </linearGradient>
                     </defs>
                  </svg>

                  <svg className="absolute" style={{ left: 249, top: 259 }} width="2" height="102" viewBox="0 0 2 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 0V102" stroke="url(#paint0_linear_8_231)" stroke-width="2" stroke-dasharray="102 102" strokeDashoffset={0} ref={paymentToTerminalRef} />
                     <defs>
                        <linearGradient id="paint0_linear_8_231" x1="nan" y1="nan" x2="nan" y2="nan" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#11EFE3" />
                           <stop offset="1" stop-color="#9966FF" />
                        </linearGradient>
                     </defs>
                  </svg> */}

                  <svg className="absolute" style={{ left: 417, top: 169 }} width="2" height="192" viewBox="0 0 2 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 192V0" stroke="url(#paint0_linear_8_222)" stroke-width="2" stroke-dasharray="192 192" strokeDashoffset={0} ref={issuingToCapitalRef} />
                     <defs>
                        <linearGradient id="paint0_linear_8_222" x1="nan" y1="nan" x2="nan" y2="nan" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#0073E6" />
                           <stop offset="1" stop-color="#FF80FF" />
                        </linearGradient>
                     </defs>
                  </svg>

                  <svg className="absolute" style={{ left: 429, top: 219 }} width="44" height="142" viewBox="0 0 44 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 142V21C1 7.66667 7.66667 1 21 1H44" stroke="url(#paint0_linear_8_225)" stroke-width="2" stroke-dasharray="176.46 176.46" ref={issuingToTreasuryRef} />
                     <defs>
                        <linearGradient id="paint0_linear_8_225" x1="93.1918" y1="75.1887" x2="6.80823" y2="24.8113" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#0073E6" />
                           <stop offset="1" stop-color="#FF80FF" />
                        </linearGradient>
                     </defs>
                  </svg>

                  <svg className="absolute" style={{ left: 62, top: 349 }} width="142" height="52" viewBox="0 0 142 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 0V31C1 44.3333 7.66667 51 21 51H142" stroke="url(#paint0_linear_8_237)" stroke-width="2" stroke-dasharray="184.46 184.46" ref={connectToTerminalRef} />
                     <defs>
                        <linearGradient id="paint0_linear_8_237" x1="92.1696" y1="22.135" x2="7.83043" y2="75.865" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#11EFE3" />
                           <stop offset="1" stop-color="#9966FF" />
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
