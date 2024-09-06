// Core
import { useEffect } from 'react';
// Third party
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
// Local
import Container from '@/components/Container';

const sketchList = [
   { src: './sketches/bike.jpg', width: 2732, height: 2048, thumbnail: './sketches/small/bike.jpg', alt: 'cafe racer' },
   { src: './sketches/lion.jpg', width: 2732, height: 2048, thumbnail: './sketches/small/lion.jpg', alt: 'lion' },
   { src: './sketches/leopard.png', width: 2732, height: 2048, thumbnail: './sketches/small/leopard.jpg', alt: 'leopard' },
   { src: './sketches/fox-study.jpg', width: 2732, height: 2048, thumbnail: './sketches/small/fox-study.jpg', alt: 'fox study' },
   { src: './sketches/root-study-1.jpg', width: 2732, height: 2048, thumbnail: './sketches/small/root-study-1.jpg', alt: 'root study 1' },
   { src: './sketches/root-study-2.jpg', width: 2732, height: 2048, thumbnail: './sketches/small/root-study-2.jpg', alt: 'root study 2' }
];

const Sketches = () => {
   useEffect(() => {
      let lightbox = new PhotoSwipeLightbox({
         gallery: '#sketches',
         children: 'a',
         pswpModule: () => import('photoswipe'),
      });
      lightbox.init();

      return () => {
         lightbox.destroy();
         lightbox = null;
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
            <img className="rounded-[50px] border-4 border-white overflow-hidden" src={sketch.thumbnail} alt={sketch.thumbnail} />
         </a>
      ));
   };

   return (
      <Container>
         <div className="mx-auto max-w-5xl pb-10">
            <div className="pswp-gallery grid grid-cols-2 gap-6" id="sketches">
               {renderSketches()}
            </div>
         </div>
      </Container >
   );
};

export default Sketches;