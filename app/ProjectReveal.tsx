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

export function NftCarousel({ locked = false }: { locked?: boolean }) {
  const [active, setActive] = useState(0);
  const move = (direction: number) => setActive(current => (current + direction + cardCount) % cardCount);

  return (
    <section className="collection" id="auction" aria-labelledby="auction-title">
      <div className="collection-heading">
        <div>
          <p className="eyebrow">PAIMON LABS / DIGITAL ARTIFACTS</p>
          <h1 id="auction-title">Auction.</h1>
        </div>
      </div>

      <div className={`collection-stage${locked ? ' is-locked' : ''}`} aria-label="Seven mystery auction cards">
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
                </div>
              </div>
            );
          })}
        </div>
        {locked && (
          <div className="auction-lock" aria-label="Auction locked, coming soon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="4.5" y="10.5" width="15" height="11" rx="2" />
              <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
            </svg>
            <strong>Auction locked</strong>
            <span>Coming soon</span>
          </div>
        )}
      </div>

      <div className="collection-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous card" disabled={locked}>←</button>
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
                disabled={locked}
              />
            ))}
          </div>
        </div>
        <button type="button" onClick={() => move(1)} aria-label="Next card" disabled={locked}>→</button>
      </div>
    </section>
  );
}

const governanceViews = [
  {
    id: 'council',
    label: 'Cards',
    index: '01',
    title: 'Cards.',
    description: '',
    cardCode: 'C',
    locked: false,
  },
  {
    id: 'lords',
    label: 'Players',
    index: '02',
    title: 'Players.',
    description: '',
    cardCode: 'L',
    locked: false,
  },
  {
    id: 'si-governance',
    label: 'SI Governance',
    index: '03',
    title: 'SI Governance.',
    description: 'A proposed framework for benevolent Super Intelligence: measured development, clear limits, independent review, and the ability to pause when evidence calls for restraint.',
    cardCode: 'SI',
    locked: true,
  },
] as const;

const councilChairs: Record<number, { title: string; description: string; tone: 'blue' | 'red' | 'black' | 'white' | 'green' | 'yellow' | 'purple' | 'orange' | 'grey'; status: 'selected' | 'selected-waiting' | 'selected-spoken-for' | 'pending' | 'invited' | 'considered' | 'vague'; role?: 'SHAH IN WAITING' | 'REGENT'; invitationDate?: string; spokenForDate?: string }> = {
  1: { title: 'The Empath', description: "Man's Connection to Man", tone: 'blue', status: 'selected-spoken-for', invitationDate: 'September 29th', spokenForDate: 'October 10th' },
  2: { title: 'The Gardener', description: "Man's Connection to Cosmos", tone: 'red', status: 'selected-spoken-for', invitationDate: 'October 6th', spokenForDate: 'October 7th' },
  3: { title: 'The Shaman', description: "Man's Dictation of Spirit", tone: 'black', status: 'pending', role: 'SHAH IN WAITING' },
  4: { title: 'The Hawk', description: "Man's Connection to Learning", tone: 'green', status: 'invited' },
  5: { title: 'The Eye', description: "Man's Relationship to the Sun", tone: 'yellow', status: 'considered', role: 'REGENT' },
  6: { title: 'The Hand', description: "Man's Connection to the Road", tone: 'purple', status: 'considered' },
  8: { title: 'The Cloak', description: "Man's Connection to the Noble", tone: 'grey', status: 'vague' },
  9: { title: 'The Clock', description: "Man's Connection to Work", tone: 'orange', status: 'vague' },
  10: { title: 'The Elder', description: "Man's Connection to the Afterlife", tone: 'white', status: 'selected-waiting' },
};

const lordSeats = Array.from({ length: 300 }, (_, index) => index + 1);

function LordsGrid() {
  return (
    <div className="lords-roster">
      <div className="lords-roster-heading"><span>300 POSITIONS</span><span>01 SELECTED</span></div>
      <ol className="lords-grid" aria-label="Three hundred Players positions">
        {lordSeats.map((number) => (
          <li className={`lords-seat${number === 1 ? ' lords-seat--first' : ''}`} key={number} aria-label={number === 1 ? 'First Player, selected' : `Player position ${number}, unrevealed`}>
            {number === 1 && <span className="lords-seat-status">SELECTED</span>}
            <span className="lords-person-icon" aria-hidden="true" />
            {number === 1 ? <strong>First Player</strong> : <span className="lords-seat-number" aria-hidden="true">{String(number).padStart(3, '0')}</span>}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function GovernanceTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const availableTabs = governanceViews.flatMap((view, candidate) => view.locked ? [] : [candidate]);
    const position = availableTabs.indexOf(index);
    let next = index;
    if (event.key === 'ArrowRight') next = availableTabs[(position + 1) % availableTabs.length];
    else if (event.key === 'ArrowLeft') next = availableTabs[(position - 1 + availableTabs.length) % availableTabs.length];
    else if (event.key === 'Home') next = availableTabs[0];
    else if (event.key === 'End') next = availableTabs[availableTabs.length - 1];
    else return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="governance-tabs" aria-label="Governance structure">
      <div className="governance-tab-list" role="tablist" aria-label="Governance sections">
        {governanceViews.map((view, index) => (
          <button
            key={view.id}
            id={`governance-tab-${view.id}`}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-label={view.locked ? `${view.label}, locked` : undefined}
            aria-disabled={view.locked}
            aria-controls={`governance-panel-${view.id}`}
            tabIndex={active === index ? 0 : -1}
            disabled={view.locked}
            ref={element => { tabRefs.current[index] = element; }}
            onClick={() => setActive(index)}
            onKeyDown={event => onTabKeyDown(event, index)}
          >
            <span>{view.index}</span>{view.label}{view.locked && <svg className="governance-tab-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>}
          </button>
        ))}
      </div>
      {governanceViews.map((view, index) => (
        <div
          className="governance-panel"
          key={view.id}
          id={`governance-panel-${view.id}`}
          role="tabpanel"
          aria-labelledby={`governance-tab-${view.id}`}
          tabIndex={0}
          hidden={active !== index}
        >
          <div className="governance-panel-heading">
            <div><p className="eyebrow">{view.index} / PROPOSED STRUCTURE</p><h2>{view.title}</h2></div>
            <div className="governance-panel-aside">
              {view.description && <p>{view.description}</p>}
              {view.id === 'council' && (
                <div className="council-rank">
                  <div className="council-rank-titles"><span>The Grand Mace</span></div>
                  <span className="council-rank-seal"><img src="/images/council-marshal-figure.png" alt="Hooded figure holding a staff" width={2048} height={2048} /></span>
                </div>
              )}
            </div>
          </div>
          {view.id === 'lords' ? <LordsGrid /> : <div className={`governance-card-grid${view.id === 'council' ? ' governance-council-grid' : ''}`} aria-label={`${view.label} cards`}>
            {Array.from({ length: view.id === 'council' ? 10 : 4 }, (_, cardIndex) => {
              const chair = view.id === 'council' ? councilChairs[cardIndex + 1] : undefined;
              return (
                <article
                  className={`governance-mystery-card${chair ? ` governance-mystery-card--${chair.tone}` : ''}`}
                  key={cardIndex}
                  aria-label={chair ? `Council chair ${cardIndex + 1}, ${chair.title}${chair.description ? `, ${chair.description}` : ''}, ${chair.role ? `${chair.role.toLowerCase()}, ` : ''}${chair.status === 'selected-spoken-for' ? 'selected, spoken for' : chair.status === 'selected-waiting' ? 'selected, waiting' : chair.status === 'pending' ? 'to be elected' : chair.status === 'invited' ? 'invitation sent' : chair.status}${chair.invitationDate ? `, invitation sent ${chair.invitationDate}` : ''}${chair.spokenForDate ? `, spoken for ${chair.spokenForDate}` : ''}` : `${view.label} ${view.id === 'council' ? 'chair' : 'mystery card'} ${cardIndex + 1}, unrevealed`}
                >
                  <div className="governance-mystery-inner">
                    <span className="governance-mystery-code">{view.id === 'council' ? 'CHAIR' : view.cardCode} / {String(cardIndex + 1).padStart(2, '0')}</span>
                    {chair ? <><span className="governance-selected-status">{chair.status === 'selected-spoken-for' ? <>SELECTED<br />SPOKEN FOR</> : chair.status === 'selected-waiting' ? <>SELECTED<br />WAITING</> : chair.status === 'selected' ? 'SELECTED' : chair.status === 'invited' ? 'INVITATION SENT' : chair.status === 'considered' ? 'CONSIDERED' : chair.status === 'vague' ? 'VAGUE' : 'TO BE ELECTED'}</span><div className="governance-selected-copy"><h3 className="governance-selected-title">{chair.title}</h3>{chair.description && <p className="governance-selected-subtitle">{chair.description}</p>}</div>{chair.role && <span className="governance-role-badge"><span aria-hidden="true">{chair.role === 'SHAH IN WAITING' ? '★' : '♜'}</span>{chair.role}</span>}{chair.invitationDate && <span className="governance-card-milestone governance-card-milestone--left"><span>INVITATION SENT</span><span>{chair.invitationDate}</span></span>}{chair.spokenForDate && <span className="governance-card-milestone governance-card-milestone--right"><span>SPOKEN FOR</span><span>{chair.spokenForDate}</span></span>}</> : <span className="governance-mystery-mark" aria-hidden="true">?</span>}
                  </div>
                </article>
              );
            })}
          </div>}
          <p className="governance-panel-note">{view.id === 'council' ? 'Nine named chairs / one remains unrevealed' : view.id === 'lords' ? 'Three hundred positions / First Player selected' : 'Concept placeholders / identities and roles to be announced'}</p>
        </div>
      ))}
    </section>
  );
}
