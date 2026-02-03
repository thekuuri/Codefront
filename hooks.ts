
import { useState, useEffect, useRef } from 'react';

export const useReveal = (threshold = 0.1) => {
  const [hasRevealed, setHasRevealed] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
        }
      });
    }, { threshold });

    const current = domRef.current;
    if (current) observer.observe(current);
    
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  return { hasRevealed, domRef };
};
