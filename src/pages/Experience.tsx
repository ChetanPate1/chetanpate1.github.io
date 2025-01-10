// Core
import { useState } from 'react';
// Third party
import { ArrowLeft, ArrowRight } from 'lucide-react';
// Local
import Container from '@/components/Container';
import ExperienceCard from '@/components/ExperienceCard';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type Images = { src: string, alt: string }[];

const works = {
   healthwatch: [
      { src: './experience/healthwatch/1-A4-young-girl-2.jpg', alt: 'Healthwatch Surrey Poster' },
      { src: './experience/healthwatch/3-A3-01.jpg', alt: 'Healthwatch Surrey Poster' },
      { src: './experience/healthwatch/Postcard-front-1.jpg', alt: 'Healthwatch Surrey Post Card 1' },
      { src: './experience/healthwatch/Postcard-back-1.jpg', alt: 'Healthwatch Surrey Post Card 2' },
      { src: './experience/healthwatch/Postcard-front-2.jpg', alt: 'Healthwatch Surrey Post Card 3' },
      { src: './experience/healthwatch/Postcard-back-2.jpg', alt: 'Healthwatch Surrey Post Card 4' },
      { src: './experience/healthwatch/web-banner.jpg', alt: 'Healthwatch Surrey Web Banner 1' },
      { src: './experience/healthwatch/web-banner-1.jpg', alt: 'Healthwatch Surrey Web Banner 2' },
      { src: './experience/healthwatch/web-banner-2.jpg', alt: 'Healthwatch Surrey Web Banner 3' },
      { src: './experience/healthwatch/web-banner-3.jpg', alt: 'Healthwatch Surrey Web Banner 4' },
      { src: './experience/healthwatch/email-footer-1.jpg', alt: 'Healthwatch Surrey Email Footer 1' },
      { src: './experience/healthwatch/email-footer-2.jpg', alt: 'Healthwatch Surrey Email Footer 2' }
   ],
   lemonade: {
      cover: [
         { src: './experience/lemonade/protection-graph.jpg', alt: 'Protection graph' },
         { src: './experience/lemonade/fhc.jpg', alt: 'Financial health calculator' },
      ],
      onePercentClub: [
         { src: './experience/lemonade/lemonade-1percent.jpg', alt: '1% club Lemonade Money' },
         { src: './experience/lemonade/aberdeen-1percent.jpg', alt: '1% club Aberdeen' },
         { src: './experience/lemonade/fidelity-1percent.jpg', alt: '1% club Fidelity' },
         { src: './experience/lemonade/fidelity-calc.jpg', alt: '1% club Fidelity Calculation 1' },
         { src: './experience/lemonade/fidelity-calc-1.jpg', alt: '1% club Fidelity Calculation 2' }
      ]
   },
   mug: []
};

const Experience = () => {
   const [active, setActive] = useState('mug');
   const order = ['mug', 'lemonade', 'healthwatch'];
   const position = () => {
      if (active === 'mug') {
         return 'translate-x-0';
      } else if (active === 'lemonade') {
         return '-translate-x-[472px] md:-translate-x-[582px]';
      } else if (active === 'healthwatch') {
         return '-translate-x-[942px] md:-translate-x-[1162px]';
      }
   };

   const isLast = order.indexOf(active) === order.length - 1;
   const isFirst = order.indexOf(active) === 0;

   const onNext = () => {
      const currentIndex = order.indexOf(active);
      const nextIndex = currentIndex + 1;
      const next = order[nextIndex];

      setActive(next);
   };

   const onPrev = () => {
      const currentIndex = order.indexOf(active);
      const prevIndex = currentIndex - 1;
      const prev = order[prevIndex];

      setActive(prev);
   };

   const renderImages = (images: Images) => {
      return images.map((work, index) => (
         <Card key={index} className="overflow-hidden border-neutral-100 rounded-3xl mb-4">
            <img src={work.src} alt={work.alt} />
         </Card>
      ));
   };

   return (
      <div>
         <Container className="overflow-hidden">
            <div className="relative mx-auto max-w-full pb-10 px-4 md:px-0">
               <div className="z-10 absolute top-0 -left-36 h-full w-32 bg-gradient-to-r from-neutral-200 dark:from-black from-70%"></div>

               <div className="z-10 absolute top-0 -right-10 h-full w-32 bg-gradient-to-l from-neutral-200 dark:from-black from-40% "></div>

               <div className={`flex flex-nowrap gap-8 mt-3 min-h-[450px] sm:min-h-[440px] ${position()} transition-transform duration-500`}>
                  <div>
                     <div className="px-8 max-w-32 text-center dark:text-white">
                        <p className="text-xs">October</p>
                        <p className="text-xl font-semibold mb-4">2017</p>
                     </div>

                     <ExperienceCard
                        active={active == 'mug'}
                        type="Full Time"
                        skills={['HTML', 'CSS', 'Javascript', 'Typescript', 'Vue.js', 'React.js', 'Angular.js', 'Design & Implementation', 'Figma']} time="7 years"
                        companyLogoName="mug"
                        onClick={() => setActive('mug')}
                     />
                  </div>

                  <div>
                     <div className="px-8 max-w-32 text-center dark:text-white">
                        <p className="text-xs">Decemeber</p>
                        <p className="text-xl font-semibold mb-4">2016</p>
                     </div>

                     <ExperienceCard
                        active={active == 'lemonade'}
                        type="Contract"
                        skills={['HTML', 'CSS', 'Javascript', 'SCSS', 'Angular.js', 'Design & Implementation', 'Figma']} time="1 year"
                        companyLogoName="lemonade"
                        onClick={() => setActive('lemonade')}
                     />
                  </div>

                  <div>
                     <div className="px-8 max-w-32 text-center dark:text-white">
                        <p className="text-xs">August</p>
                        <p className="text-xl font-semibold mb-4">2015</p>
                     </div>

                     <ExperienceCard
                        active={active == 'healthwatch'}
                        type="Contract"
                        skills={['Photoshop', 'Illustrator', 'Sketching', 'Design']} time="6 months" companyLogoName="healthwatch"
                        onClick={() => setActive('healthwatch')}
                     />
                  </div>
               </div>

               <div className="absolute bottom-6 right-2 z-20">
                  <Button size="icon" onClick={onPrev} disabled={isFirst} className="mr-3">
                     <ArrowLeft size={24} />
                  </Button>

                  <Button size="icon" onClick={onNext} disabled={isLast}>
                     <ArrowRight size={24} />
                  </Button>
               </div>
            </div>
         </Container>

         <Container className="bg-white dark:bg-neutral-900">
            <div className="mx-auto max-w-5xl pb-32 px-10">
               <Tabs defaultValue="mug" value={active}>
                  <TabsContent value="mug">
                     <div className="flex justify-between items-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium dark:text-white">
                           MyUtilityGenius LTD
                        </h1>

                        <div>
                           <Badge>Full Time</Badge>
                        </div>
                     </div>

                     <p className="text-xl md:text-2xl font-medium text-primary mt-2 mb-16">
                        Frontend Developer
                     </p>

                     <h4 className="text-xl md:text-2xl font-semibold mb-2 dark:text-white">
                        What they do?
                     </h4>

                     <p className="text-lg dark:text-white">
                        MyUtilityGenius is a software company created by energy professionals for energy professionals. They offer a number of software tools and solutions for domestic and commercial energy professionals and suppliers. They create software solutions can be off-the-shelf or tailored to the clients own specifications.
                     </p>

                     <h4 className="text-xl md:text-2xl font-semibold mb-2 mt-8 dark:text-white">
                        Your role
                     </h4>

                     <p className="text-lg dark:text-white">
                        I manage and maintain existing projects and create new projects. Main achievements marketing campaigns, portals for internal and external use, new quoting system for domestic use.
                     </p>

                     <h5 className="text-xl font-semibold mb-2 mt-8 dark:text-white">
                        Marketing campaigns
                     </h5>

                     <p className="text-lg mb-8 dark:text-white">
                        I led the redevelopment of a legacy energy comparison platform into a vue.js based white-label solution, serving major providers like Evri, E.ON, and Octopus. This enterprise-grade product enhances customer retention and acquisition through a customisable interface.
                     </p>

                     <p className="text-lg mb-8 dark:text-white">
                        The platform delivers a seamless, brand-tailored energy switching experience. Leveraging vue.js, I created a more responsive and efficient user interface, significantly improving user engagement.
                     </p>

                     <p className="text-lg mb-8 dark:text-white">
                        Implementation included phased marketing campaigns, directing customers to the white-label platform via targeted emails. For each client, I oversaw comprehensive UI rebranding to align with their brand identity.
                     </p>

                     <p className="text-lg dark:text-white">
                        This project modernised the technology stack and opened new market opportunities. The white-label approach allows rapid deployment under individual brands, accelerating digital transformation while maintaining customer relationships.
                     </p>

                     <p className="text-center text-xl mt-10 mb-2 dark:text-white">Marketing campaigns</p>
                     <div className="mx-auto w-full max-w-96 border-2 border-black dark:border-white border-dashed rounded-2xl pt-3 pr-6 pb-3 pl-3 flex justify-between">
                        <div className="bg-primary flex items-center justify-center rounded-xl w-2/3 h-28">
                           <p className="text-center text-white text-2xl">White label</p>
                        </div>

                        <div className="flex flex-col justify-center dark:text-white">
                           <p>+ Brand style</p>
                           <p>+ Logo</p>
                           <p>+ Fonts</p>
                           <p>+ Wording</p>
                        </div>
                     </div>

                     <p className="font-semibold text-xl mt-10 mb-2 dark:text-white">Commercial Energy Broker Portal</p>
                     <p className="text-xl mb-3 dark:text-white">
                        Developed a specialized platform for energy brokers serving large commercial clients. Key features:
                     </p>
                     <ul className="text-xl list-disc pl-5 mb-3 dark:text-white">
                        <li>Client portfolio management</li>
                        <li>Custom tender/contract generation</li>
                        <li>E-signature capabilities</li>
                        <li>Streamlined multi-account handling</li>
                     </ul>
                     <p className="text-xl dark:text-white">
                        This portal optimizes commercial energy procurement, enabling brokers to efficiently manage bespoke contracts for high-volume consumers beyond standard tariff structures.
                     </p>

                     <p className="font-semibold text-xl mt-10 mb-2 dark:text-white">Commercial Energy Supplier Portal</p>
                     <p className="text-xl mb-3 dark:text-white">
                        Developed a dual-portal solution for the commercial energy sector:
                     </p>
                     <ul className="text-xl pl-5 mb-3 dark:text-white">
                        <li className="list-decimal mb-3">
                           Broker Portal
                           <ul className="list-disc pl-3">
                              <li>Client portfolio management</li>
                              <li>Custom tender/contract generation</li>
                              <li>E-signature capabilities</li>
                           </ul>
                        </li>

                        <li className="list-decimal">
                           Supplier Portal
                           <ul className="list-disc pl-3">
                              <li>Tariff management</li>
                              <li>Tender review and processing</li>
                           </ul>
                        </li>
                     </ul>

                     <p className="text-xl mt-8 dark:text-white">
                        This integrated system enables a seamless end-to-end workflow, allowing brokers and suppliers to collaborate efficiently on complex commercial energy contracts. Brokers can access both portals, streamlining the entire process from tender creation to contract finalisation.
                     </p>
                  </TabsContent>

                  <TabsContent value="lemonade">
                     <div className="flex justify-between items-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium dark:text-white">
                           Lemonade Money LTD
                        </h1>

                        <div>
                           <Badge>Contract</Badge>
                        </div>
                     </div>

                     <p className="text-xl md:text-2xl font-medium text-primary mt-2 mb-16">
                        Frontend Developer
                     </p>

                     <h4 className="text-xl md:text-2xl font-semibold mb-2 dark:text-white">What they do?</h4>
                     <p className="text-lg dark:text-white">
                        Lemonade Money provide financial advice such as protection for family, retirement or buying a home.
                     </p>

                     <h4 className="text-xl md:text-2xl font-semibold mb-2 mt-8 dark:text-white">Your role</h4>
                     <p className="text-xl mb-3 dark:text-white">
                        I created the company website from the ground up. Previously was a wordpress website. They want to start creating products such as calculators and quote systems to generate more leads.
                     </p>

                     <p className="text-xl mb-3 dark:text-white">
                        A simple brand was provide which I then had to build UIs with similar styling. I also did wireframing and refined designs in photoshop before writing code.
                     </p>

                     <p className="font-semibold text-xl mt-10 mb-2 dark:text-white">Cover Calculator</p>
                     <p className="text-lg dark:text-white">
                        The main was to make me people that they didn't have enough cover for there family if anything happened to them. The calculator was designed to be interactive so the user could see they need more cover. They then shown quotes from cover which they could select.
                     </p>

                     <div className="mt-10 flex flex-row gap-4">
                        {renderImages(works.lemonade.cover)}
                     </div>

                     <p className="font-semibold text-xl mt-10 mb-2 dark:text-white">1% Club</p>
                     <p className="text-lg dark:text-white">
                        This was a white label product which we branded to the clients specifications. The goal was to inform 1% earner in our clients company about there pensions.
                     </p>

                     <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {renderImages(works.lemonade.onePercentClub)}
                     </div>
                  </TabsContent>

                  <TabsContent value="healthwatch">
                     <div className="flex justify-between items-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium dark:text-white">
                           Healthwatch Surrey
                        </h1>

                        <div>
                           <Badge>Contract</Badge>
                        </div>
                     </div>

                     <p className="text-xl md:text-2xl font-medium text-primary mt-2 mb-16">
                        Graphic Designer
                     </p>

                     <h4 className="text-xl md:text-2xl font-semibold mb-2 dark:text-white">
                        What they do?
                     </h4>

                     <p className="text-xl mb-3 dark:text-white">
                        There are over 150 local Healthwatch across the country. They help people to voice there experiences with the heath service. They also provide trustworthy advice for the local health and social care services.
                     </p>

                     <h4 className="text-xl md:text-2xl font-semibold mb-2 mt-8 dark:text-white">
                        Your role
                     </h4>

                     <p className="text-xl mb-3 dark:text-white">
                        My role was to provide poster, banners and postcards by using there existing brand of Healthwatch.
                     </p>

                     <h4 className="text-xl md:text-2xl font-semibold mb-5 mt-8 dark:text-white">
                        Some works
                     </h4>

                     <div className="columns-2 gap-4">
                        {renderImages(works.healthwatch)}
                     </div>
                  </TabsContent>
               </Tabs>
            </div>
         </Container>
      </div>
   );
};

export default Experience;