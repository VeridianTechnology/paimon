'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

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

const cardCount = 7;
const cards = Array.from({ length: cardCount }, (_, index) => index + 1);

export function NftCarousel() {
  const [active, setActive] = useState(0);
  const move = (direction: number) => setActive(current => (current + direction + cardCount) % cardCount);

  return (
    <section className="collection" id="collection" aria-labelledby="collection-title">
      <div className="collection-heading">
        <div>
          <p className="eyebrow">PAIMON LABS / DIGITAL ARTIFACTS</p>
          <h2 id="collection-title">The collection.</h2>
        </div>
        <p>A first look at what is coming. The cards will be revealed here.</p>
      </div>

      <div className="collection-stage" aria-label="Collection card slideshow">
        <div className="collection-card-track">
          {cards.map((number, index) => {
            const position = (index - active + cardCount) % cardCount;
            const offset = position > 3 ? position - cardCount : position;
            return (
              <div
                className={`collection-card collection-card--${offset}`}
                key={number}
                aria-hidden={offset !== 0}
                aria-label={offset === 0 ? `Mystery card ${number} of ${cardCount}` : undefined}
              >
                <div className="collection-card-inner">
                  <span className="collection-card-corner" aria-hidden="true">PL / {String(number).padStart(2, '0')}</span>
                  <span className="collection-card-mark" aria-hidden="true">?</span>
                  <span className="collection-card-foot" aria-hidden="true">REVEAL PENDING</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="collection-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous card">←</button>
        <div className="collection-progress">
          <span className="collection-count" aria-live="polite">{String(active + 1).padStart(2, '0')} / {String(cardCount).padStart(2, '0')}</span>
          <div className="collection-dots" aria-label="Choose a card">
            {cards.map((number, index) => (
              <button
                type="button"
                key={number}
                className={index === active ? 'is-active' : ''}
                aria-label={`Show card ${number}`}
                aria-current={index === active ? 'true' : undefined}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>
        <button type="button" onClick={() => move(1)} aria-label="Next card">→</button>
      </div>
    </section>
  );
}
