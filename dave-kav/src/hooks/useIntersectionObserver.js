import { useState, useEffect } from 'react';

export const useIntersectionObserver = (
  elementRef,
  {
    threshold = 0,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false
  } = {}
) => {
  const [entry, setEntry] = useState();

  useEffect(() => {
    const node = elementRef?.current;
    const frozen = entry?.isIntersecting && freezeOnceVisible;

    if (!node || frozen) return;

    const observer = new IntersectionObserver(
      ([entry]) => setEntry(entry),
      { threshold, root, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible, entry?.isIntersecting]);

  return entry;
};
