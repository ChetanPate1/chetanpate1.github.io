// Core
import { useEffect } from 'react';
// Third party
// Local
import Container from '@/components/Container';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ExperienceCard from '@/components/ExperienceCard';

// ['HTML', 'CSS', 'Javascript', 'Typescript', 'Vue.js', 'React.js', 'Angular.js', 'Design & Implementation', 'Figma']
const Experience = () => {
   return (
      <Container>
         <div className="mx-auto max-w-5xl pb-10">
            <div className="grid grid-cols-2 gap-6">
               <div>
                  <div className="px-8">
                     <p className="text-sm">August</p>
                     <p className="text-2xl font-semibold mb-4">2015</p>
                  </div>

                  <ExperienceCard
                     type="Full Time"
                     skills={['HTML', 'CSS', 'Javascript', 'Typescript', 'Vue.js', 'React.js', 'Angular.js', 'Design & Implementation', 'Figma']} time="7 years" companyLogoName="mug"
                  />
               </div>
            </div>
         </div>
      </Container>
   );
};

export default Experience;