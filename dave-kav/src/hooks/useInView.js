import { useState, useEffect } from 'react';

export const useInView = (ref) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: 0.15,
      rootMargin: '-5% 0px',
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isInView;
};
