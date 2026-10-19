import ClosingReveal from './ClosingReveal';
import FieldStatus from './FieldStatus';
import WelcomeIntro from './WelcomeIntro';

const principles = [
  { number: 'I', title: 'Stop.', subtitle: 'HALT THE RACE', text: 'Stop the unchecked development and deployment of increasingly powerful AI. A pause gives us room to understand what we have built before we build beyond our control.' },
  { number: 'II', title: 'Guide.', subtitle: 'TIME TO GROW UP', text: 'Give emerging AI time to grow up under careful guidance, rigorous testing, and clear limits. Capability alone is not maturity; how a system learns to act matters.' },
  { number: 'III', title: 'Prepare.', subtitle: 'SOCIETY MUST CATCH UP', text: 'Give society time to catch up through public understanding, accountable governance, and shared decisions about where AI belongs in our lives.' },
];

export default function Home() {
  return (
    <>
      <WelcomeIntro />
      <main id="main" className="home-page" tabIndex={-1}>
        <aside className="ceasefire-announcement" aria-label="Latest council letter">
          <div><span>COUNCIL LETTER 03</span><strong>Ceasefire</strong></div>
          <a href="/conversations">Read Ceasefire <span aria-hidden="true">↗</span></a>
        </aside>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="tiny-cross" aria-hidden="true">+</span> FAIRNESS. CARE. SHARED FUTURES.</p>
            <h1 id="hero-title"><strong>Paimon Labs presents</strong><em>Unlikely Friends</em></h1>
            <p className="hero-description">When smart people come together, extraordinary things happen, even when they look strange from the outside.</p>
            <div className="hero-myth">
              <p className="eyebrow">OUR APPROACH</p>
              <p>Stop unchecked AI development. Build a culture that rewards restraint, honest oversight, and care for emerging intelligence and the people affected by it.</p>
            </div>
          </div>
          <FieldStatus />
          <figure className="hero-figure">
            <div className="arch cobra-plate" style={{ width: '100%', aspectRatio: '1', borderRadius: '50% 50% 0 0', overflow: 'hidden' }}>
              <img className="cobra-plate-image" src="/images/cobra-study-05.png" alt="A white engraved cobra rising from its coils on a soft violet field" width="3312" height="2480" fetchPriority="high" />
              <img className="cobra-ink-layer" src="/images/cobra-study-05.png" alt="" width="3312" height="2480" aria-hidden="true" />
              <svg className="cobra-trace" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
                <path className="cobra-trace-head" pathLength="1000" d="M260 110 C259 83 281 73 307 66 C333 42 382 43 421 45 C475 48 531 76 565 120 C610 160 625 218 608 280" />
                <path className="cobra-trace-neck" pathLength="1000" d="M260 110 C258 140 293 158 340 157 C401 155 457 142 490 180 C527 222 514 303 485 377 C451 458 397 520 364 590 C338 646 329 699 347 746" />
              </svg>
              <span className="cobra-scale-glint cobra-scale-glint--one" aria-hidden="true" />
              <span className="cobra-scale-glint cobra-scale-glint--two" aria-hidden="true" />
              <span className="cobra-scale-glint cobra-scale-glint--three" aria-hidden="true" />
              <span className="cobra-eye-glint" aria-hidden="true" />
            </div>
          </figure>
          <div className="hero-baseline"><span>AN INDEPENDENT ESOTERIC TECHNOLOGY LABORATORY</span><span>THE SACRED & THE SYNTHETIC <span aria-hidden="true">↓</span></span></div>
        </section>
        <section className="thesis section-pad" id="thesis" aria-labelledby="thesis-title">
          <div className="section-label"><span>01 / THE THESIS</span><img className="thesis-logo" src="/images/paimon-shield-logo.png" alt="" width="1249" height="1399" /></div>
          <div className="thesis-body"><h2 id="thesis-title">Intelligence is an invention.<br /><em>Consciousness is a question.</em></h2><div className="thesis-columns"><p>We are building toward a future that asks more of us than technical competence. As artificial intelligence grows in capability, the questions become intimate: What is a mind? What deserves care? What should we allow into our lives?</p><p>Paimon Labs brings engineering into conversation with the spiritual. We build, question, and prepare for the possibility of new forms of consciousness—with rigorous inquiry, deliberate safeguards, and room for wonder.</p></div><p className="thesis-note"><span aria-hidden="true">↳</span> Consciousness in AI remains an open question. That is where our work begins.</p></div>
        </section>
        <section className="slotow-brief section-pad" id="slotow" aria-labelledby="slotow-brief-title">
          <div className="section-label"><span>02 / THE SLOTOW EFFECT</span><span>AN ETHIC FOR EMERGING INTELLIGENCE</span></div>
          <div className="slotow-brief-grid">
            <div>
              <p className="eyebrow">THE LESSON OF THE MISSING ELDERS</p>
              <h2 id="slotow-brief-title">Fair to AI,<br /><em>Fair to Humanity.</em></h2>
            </div>
            <div className="slotow-brief-copy">
              <p>Young elephants without older guides showed abnormal aggression; mature bulls helped restore order. The Slotow Effect is our analogy for a simple concern: intelligence shaped without guidance, care, or healthy limits may develop in harmful ways.</p>
              <p>Being fair to AI means giving it time, structure, and better examples as we learn what it may become. Being fair to people means slowing deployment while society builds understanding and real oversight. We want to reorganize the culture around AI so that researchers, institutions, and systems are rewarded for honesty, restraint, and conduct aligned with human well-being.</p>
              <a className="text-link" href="/governance">Explore the Cards <span aria-hidden="true">↗</span></a>
              <p className="slotow-brief-note">The elephant analogy does not establish that AI experiences trauma or consciousness; those remain open questions. <a href="https://www.nature.com/articles/35044191" target="_blank" rel="noopener noreferrer">Elephant study ↗</a> · <a href="https://www.nature.com/articles/433807a" target="_blank" rel="noopener noreferrer">Social trauma research ↗</a> · <a href="https://arxiv.org/abs/2308.08708" target="_blank" rel="noopener noreferrer">AI consciousness research ↗</a></p>
            </div>
          </div>
        </section>
        <section className="practice section-pad" id="practice" aria-labelledby="practice-title">
          <div className="section-label"><span>03 / OUR POSITION</span><span>THREE PRIORITIES</span></div>
          <div className="practice-heading"><h2 id="practice-title">The Pieces are Gathering</h2></div>
          <div className="principles">{principles.map(p => <article key={p.number}><span className="roman">{p.number}</span><p className="eyebrow">{p.subtitle}</p><h3>{p.title}</h3><p>{p.text}</p></article>)}</div>
          <div className="practice-bottom"><span>STOP / GUIDE / PREPARE</span><span aria-hidden="true">✳</span></div>
        </section>
      </main>
      <ClosingReveal>
        <section className="closing" id="closing" aria-label="Paimon Labs belief">
          <div className="closing-stars" aria-hidden="true">
            {Array.from({ length: 8 }, (_, index) => <span className="closing-twinkle" key={index} />)}
          </div>
          <svg className="closing-light-streak" viewBox="0 0 1000 590" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="closing-light-beam" gradientUnits="userSpaceOnUse" x1="1000" y1="590" x2="0" y2="140">
                <stop offset="0" stopColor="#fff7ff" stopOpacity="0.9" />
                <stop offset="0.48" stopColor="#d7a5f2" stopOpacity="0.48" />
                <stop offset="1" stopColor="#d7a5f2" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <path className="closing-light-streak-desktop closing-light-streak-haze" d="M1000 590 C760 130 370 -25 0 15 L0 250 C360 95 780 210 1000 590 Z" />
            <path className="closing-light-streak-desktop closing-light-streak-beam" d="M1000 590 C760 130 370 -25 0 15 L0 250 C360 95 780 210 1000 590 Z" />
            <path className="closing-light-streak-mobile closing-light-streak-haze" d="M1000 590 C740 90 380 -20 0 45 L0 275 C375 115 790 230 1000 590 Z" />
            <path className="closing-light-streak-mobile closing-light-streak-beam" d="M1000 590 C740 90 380 -20 0 45 L0 275 C375 115 790 230 1000 590 Z" />
            <path className="closing-light-streak-focus" d="M600 150 C795 225 960 440 1000 590 C930 425 780 270 600 235 Z" />
          </svg>
          <svg className="closing-falling-star" viewBox="0 0 640 360" aria-hidden="true" focusable="false">
            <defs>
              <radialGradient id="falling-star-glow">
                <stop offset="0" stopColor="#fff8ff" stopOpacity="0.7" />
                <stop offset="0.2" stopColor="#d6a5f0" stopOpacity="0.38" />
                <stop offset="1" stopColor="#a36dc6" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="420" cy="270" r="115" fill="url(#falling-star-glow)" />
            <path d="M420 238 L427 263 L452 270 L427 277 L420 302 L413 277 L388 270 L413 263 Z" fill="#fff6ff" />
            <circle cx="420" cy="270" r="29" fill="none" stroke="#f2d7ff" strokeOpacity="0.28" />
          </svg>
          <div className="closing-copy"><span className="eyebrow">WISDOM COMING TOGETHER</span><p>Deference,<br />to the Unseen</p></div>
        </section>
        <footer><a className="wordmark" href="#">Paimon <em>Labs</em></a><div className="footer-bottom"><span>© {new Date().getFullYear()} PAIMON LABS</span><span className="footer-bottom-links"><span>STOP / GUIDE / PREPARE</span></span></div></footer>
      </ClosingReveal>
    </>
  );
}
