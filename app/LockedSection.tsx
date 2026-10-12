export function LockMark() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>;
}

export default function LockedSection({ name, theme }: { name: 'Cards' | 'Metrics'; theme: 'dark' | 'light' }) {
  const headingId = `${name.toLowerCase()}-locked-title`;

  return (
    <main id="main" className={`locked-page locked-page--${theme}`} aria-labelledby={headingId}>
      <div className="locked-page-frame">
        <span className="locked-page-kicker">PAIMON LABS / SEALED SECTION</span>
        <span className="locked-page-emblem" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 27v-7a12 12 0 0 1 24 0v7" />
            <rect x="14" y="27" width="36" height="28" rx="2" />
            <circle cx="32" cy="39" r="3" />
            <path d="M32 42v6" />
          </svg>
        </span>
        <h1 id={headingId}>{name}<span>.</span></h1>
        <p>This section is sealed for now.</p>
        <a href="/">Return home <span aria-hidden="true">↗</span></a>
        <span className="locked-page-index">{name === 'Cards' ? '01' : '02'} / ACCESS PENDING</span>
      </div>
    </main>
  );
}
