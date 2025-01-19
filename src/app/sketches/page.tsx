'use client';
// Core
import { useEffect } from 'react';
// Third party
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
// Local
import { Container } from '@/components/ui/container';

const sketchList = [
   { src: './sketches/bike.jpg', width: 2732, height: 2048, thumbnail: './sketches/small/bike.jpg', alt: 'cafe racer' },
   { src: './sketches/lion.jpg', width: 2732, height: 2048, thumbnail: './sketches/small/lion.jpg', alt: 'lion' },
   { src: './sketches/leopard.png', width: 2732, height: 2048, thumbnail: './sketches/small/leopard.jpg', alt: 'leopard' },
   { src: './sketches/fox-study.jpg', width: 2732, height: 2048, thumbnail: './sketches/small/fox-study.jpg', alt: 'fox study' },
   { src: './sketches/root-study-1.jpg', width: 2732, height: 2048, thumbnail: './sketches/small/root-study-1.jpg', alt: 'root study 1' },
   { src: './sketches/root-study-2.jpg', width: 2732, height: 2048, thumbnail: './sketches/small/root-study-2.jpg', alt: 'root study 2' }
];

const leftArrowSVGString = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>';
const rightArrowSVGString = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>';
const closeSVGString = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
const zoomSVGString = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zoom-in"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg>';

const Page = () => {
   useEffect(() => {
      const lightbox = new PhotoSwipeLightbox({
         gallery: '#sketches',
         arrowPrevSVG: leftArrowSVGString,
         arrowNextSVG: rightArrowSVGString,
         closeSVG: closeSVGString,
         zoomSVG: zoomSVGString,
         children: 'a',
         pswpModule: () => import('photoswipe'),
      });
      lightbox.init();

      return () => {
         lightbox.destroy();
      };
   }, []);

   const renderSketches = () => {
      return sketchList.map((sketch, index) => (
         <a
            key={index}
            href={sketch.src}
            target="_blank"
            data-pswp-width={sketch.width}
            data-pswp-height={sketch.height}
            rel="noreferrer"
         >
            <img className="rounded-[50px] border-4 w-full border-white overflow-hidden" src={sketch.thumbnail} alt={sketch.thumbnail} />
         </a>
      ));
   };

   return (
      <Container>
         <div className="mx-auto max-w-6xl pb-10 px-10">
            <div className="pswp-gallery grid grid-cols-2 gap-6" id="sketches">
               {renderSketches()}
            </div>
         </div>
      </Container>
   );
};

export default Page;