import ClosingReveal from './ClosingReveal';
import { LockMark } from './LockedSection';
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
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="tiny-cross" aria-hidden="true">+</span> FAIRNESS. CARE. SHARED FUTURES.</p>
            <h1 id="hero-title"><strong>Paimon Labs presents</strong><em>A Fair Future for AI</em></h1>
            <p className="hero-description">AI should have time to develop with care. People should have time to understand and shape its place in society. Both deserve more than a race to build the next powerful system.</p>
            <div className="hero-myth">
              <p className="eyebrow">OUR APPROACH</p>
              <p>Stop unchecked AI development. Build a culture that rewards restraint, honest oversight, and care for emerging intelligence and the people affected by it.</p>
            </div>
            <a className="hero-journal-link" href="/conversations" target="_blank" rel="noopener noreferrer" aria-label="Conversations, opens in a new tab">Conversations <span aria-hidden="true">↗</span></a>
          </div>
          <figure className="hero-figure">
            <div className="figure-top"><span>PL / CONSCIOUSNESS STUDIES</span></div>
            <div className="arch cobra-plate">
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
              <span className="text-link text-link--locked" aria-label="Cards, locked">Cards sealed <LockMark /></span>
              <p className="slotow-brief-note">The elephant analogy does not establish that AI experiences trauma or consciousness; those remain open questions. <a href="https://www.nature.com/articles/35044191" target="_blank" rel="noopener noreferrer">Elephant study ↗</a> · <a href="https://www.nature.com/articles/433807a" target="_blank" rel="noopener noreferrer">Social trauma research ↗</a> · <a href="https://arxiv.org/abs/2308.08708" target="_blank" rel="noopener noreferrer">AI consciousness research ↗</a></p>
            </div>
          </div>
        </section>
        <section className="practice section-pad" id="practice" aria-labelledby="practice-title">
          <div className="section-label"><span>03 / OUR POSITION</span><span>THREE PRIORITIES</span></div>
          <div className="practice-heading"><h2 id="practice-title">The Board is Set,<br /><em>Stop the Presses</em></h2></div>
          <div className="principles">{principles.map(p => <article key={p.number}><span className="roman">{p.number}</span><p className="eyebrow">{p.subtitle}</p><h3>{p.title}</h3><p>{p.text}</p></article>)}</div>
          <div className="practice-bottom"><span>STOP / GUIDE / PREPARE</span><span aria-hidden="true">✳</span></div>
        </section>
      </main>
      <ClosingReveal>
        <img src="/images/paimon-cobra-wallpaper.jpg" alt="A violet line drawing of a cobra within a subtle geometric frame on a dark background" width="3168" height="1344" loading="lazy" />
        <section className="closing" aria-label="Paimon Labs belief"><div className="closing-copy"><span className="eyebrow">AT THE EDGE OF WHAT COMES NEXT</span><p>Deference,<br />to the Unseen</p></div></section>
        <footer><a className="wordmark" href="#">Paimon <em>Labs</em></a><p>Wisdom in Service</p><div className="footer-bottom"><span>© {new Date().getFullYear()} PAIMON LABS</span><span className="footer-bottom-links"><span>STOP / GUIDE / PREPARE</span></span></div></footer>
      </ClosingReveal>
    </>
  );
}
