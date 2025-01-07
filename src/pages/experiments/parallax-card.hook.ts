import { useRef, useCallback, MouseEvent, TouchEvent } from 'react';

type TiltEvent = MouseEvent | TouchEvent;

export const useParallaxCard = (tiltMax: number = 50) => {
  const ref = useRef<HTMLDivElement>(null);

  const onStart = useCallback(() => {
    // Intentionally left empty
  }, []);

  const onMove = useCallback(
    (e: TiltEvent) => {
      const clientX = 'clientX' in e ? e.clientX : e.touches?.[0]?.clientX;
      const clientY = 'clientY' in e ? e.clientY : e.touches?.[0]?.clientY;

      if (!clientX || !clientY || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      // Use client coordinates instead of page coordinates
      const relativeX = clientX - rect.left;
      const relativeY = clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotationX = -((relativeY - centerY) / centerY) * tiltMax;
      const rotationY = ((relativeX - centerX) / centerX) * tiltMax;

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
