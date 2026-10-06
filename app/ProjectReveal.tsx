'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export default function ProjectReveal({ children, className, labelledBy }: { children: ReactNode; className: string; labelledBy: string }) {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    card.classList.add('is-ready');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        card.classList.add('is-visible');
        observer.disconnect();
      }
    }, { rootMargin: '0px 0px -15% 0px', threshold: 0.12 });

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return <article className={`project-card ${className}`} aria-labelledby={labelledBy} ref={cardRef}>{children}</article>;
}
