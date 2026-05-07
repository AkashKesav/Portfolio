import { useEffect, useState, useCallback } from 'react';

export function useScrollAnimations() {
  const [shouldObserve, setShouldObserve] = useState(false);

  useEffect(() => {
    // Small delay to ensure all sections are mounted
    const timer = setTimeout(() => {
      setShouldObserve(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!shouldObserve) return;

    const elements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    for (const el of elements) {
      el.classList.add('animate-initial');
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [shouldObserve]);
}
