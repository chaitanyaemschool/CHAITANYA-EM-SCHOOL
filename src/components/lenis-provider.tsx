import { ReactLenis, useLenis } from 'lenis/react';
import { useReducedMotion } from 'motion/react';
import { useEffect, type ReactNode } from 'react';
import { useLocation } from '@tanstack/react-router';

export function LenisProvider({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const location = useLocation();
  const lenis = useLenis();

  // Reset scroll on route change
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, lenis]);

  // If user prefers reduced motion, we disable the smooth scroll interpolation
  if (reduce) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // Smoothness
        duration: 1.2, 
        smoothWheel: true,
        // syncTouch: false (default) ensures we don't hijack mobile native scrolling
      }}
    >
      {children}
    </ReactLenis>
  );
}
