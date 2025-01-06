import { useRef, useCallback, MouseEvent, TouchEvent } from 'react';

type Event = MouseEvent | TouchEvent;

export const useParallaxCard = (tiltMax: number = 50) => {
  const ref = useRef<HTMLDivElement>(null);

  const onStart = useCallback((e: TiltEvent) => {
    // Intentionally left empty
  }, []);

  const onMove = useCallback(
    (e: TiltEvent) => {
      // Support both mouse and touch events
      const pageX = 'pageX' in e ? e.pageX : (e as TouchEvent).touches?.[0]?.pageX;
      const pageY = 'pageY' in e ? e.pageY : (e as TouchEvent).touches?.[0]?.pageY;

      // Guard clause to prevent errors if coordinates are undefined
      if (!pageX || !pageY || !ref.current) return;

      // Get the element's bounding rectangle for precise positioning
      const rect = ref.current.getBoundingClientRect();

      // Account for scroll position
      const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Calculate precise relative positions considering scroll
      const relativeX = pageX - rect.left + scrollX;
      const relativeY = pageY - rect.top + scrollY;

      // Calculate center points
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate rotation angles with improved precision
      const rotationX = -((relativeY - centerY) / centerY) * tiltMax;
      const rotationY = ((relativeX - centerX) / centerX) * tiltMax;

      // Apply smooth 3D transform with perspective
      ref.current.style.transition = 'transform 0.1s ease-out';
      ref.current.style.transformStyle = 'preserve-3d';
      ref.current.style.transform = `
      rotateX(${rotationX.toFixed(2)}deg)
      rotateY(${rotationY.toFixed(2)}deg)
    `;
    },
    [tiltMax]
  );

  const onLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  }, []);

  return {
    ref,
    onStart,
    onMove,
    onLeave
  };
};
