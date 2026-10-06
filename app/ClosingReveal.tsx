'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export default function ClosingReveal({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    section.classList.add('is-ready');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add('is-visible');
        observer.disconnect();
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return <div className="closing-wallpaper" ref={sectionRef}>{children}</div>;
}
