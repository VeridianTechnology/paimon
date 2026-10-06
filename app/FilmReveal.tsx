'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export default function FilmReveal({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    section.classList.add('is-ready');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add('is-visible');
        observer.disconnect();
      }
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.1 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return <section className="intro-film" id="film" aria-labelledby="film-title" ref={sectionRef}>{children}</section>;
}
