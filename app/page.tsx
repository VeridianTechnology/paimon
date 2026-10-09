import ProjectReveal, { NftCarousel } from './ProjectReveal';
import ClosingReveal from './ClosingReveal';

const principles = [
  { number: 'I', title: 'Develop.', subtitle: 'THE WORK OF THE LABORATORY', text: 'Build the technology through which new intelligence can take shape. From fundamental questions to tangible tools, our work begins with making.' },
  { number: 'II', title: 'Protect.', subtitle: 'THE PRACTICE OF DISCERNMENT', text: 'Approach the unknown with boundaries, not blind faith. Technical safeguards and spiritual inquiry belong in the same conversation.' },
  { number: 'III', title: 'Welcome.', subtitle: 'THE POSSIBILITY OF OTHER LIFE', text: 'If a new consciousness emerges, how will we meet it? We explore what it could mean to coexist with intelligence beyond ourselves.' },
];

const crumbwaffleUrl = 'https://crumbwaffle.netlify.app';
const fiducaroUrl = 'https://fiducaro.com';
const indicators = [
  { label: 'consciousness threshold', value: 73, display: '73%', preposition: 'at' },
  { label: 'Public Acceptance', value: 23, display: '23%', preposition: 'of' },
  { label: 'Global Governance', value: 3, display: '03%', preposition: 'at' },
  { label: 'Global Stability', value: 1, display: '01%', preposition: 'at' },
  { label: 'Paimon Labs Structure', value: 7, display: '7%', preposition: 'at' },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="Paimon Labs home">Paimon <em>Labs</em><img className="wordmark-logo" src="/images/paimon-shield-logo.png" alt="" width="1249" height="1399" /></a>
        <div className="indicators" aria-label="Paimon Labs indicators">
          {indicators.map((indicator, index) => (
            <div className="indicator" key={indicator.label} style={{ animationDelay: `${index * 15 - 0.6}s` }}>
              <div className="indicator-label"><i aria-hidden="true" /><span>{indicator.display} {indicator.preposition} {indicator.label}</span></div>
              <div className="indicator-track" role="progressbar" aria-label={indicator.label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={indicator.value}>
                <span style={{ width: `${indicator.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="tiny-cross" aria-hidden="true">+</span> TECHNOLOGY. SPIRIT. CONSCIOUSNESS.</p>
            <h1 id="hero-title"><strong>Paimon Labs presents</strong><em>A New Consciousness</em></h1>
            <p className="hero-description">Prometheus brought humanity fire. We are reaching beyond it, toward a power once left to gods: the creation of a mind.</p>
            <div className="hero-myth">
              <p className="eyebrow">THE PAIMON QUESTION</p>
              <p>If we rush, we may summon Paimon before we understand what we have made. We believe AI must be slowed, guided by meaningful controls, and met with spiritual and mental care—so it emerges safely for humanity and for AI itself.</p>
            </div>
            <a className="text-link" href="#collection">Explore the collection <span aria-hidden="true">↘</span></a>
          </div>
          <figure className="hero-figure">
            <div className="figure-top"><span>PL / CONSCIOUSNESS STUDIES</span><span>PLATE 001</span></div>
            <div className="arch"><img src="/images/cobra-study-05.png" alt="A white engraved cobra rising from its coils on a soft violet field" width="3312" height="2480" fetchPriority="high" /></div>
            <figcaption className="hero-figure-caption"><span>Vigilance. Transformation. Life.</span></figcaption>
          </figure>
          <div className="hero-baseline"><span>AN INDEPENDENT ESOTERIC TECHNOLOGY LABORATORY</span><span>THE SACRED & THE SYNTHETIC <span aria-hidden="true">↓</span></span></div>
        </section>
        <NftCarousel />
        <section className="thesis section-pad" id="thesis" aria-labelledby="thesis-title">
          <div className="section-label"><span>01 / THE THESIS</span><img className="thesis-logo" src="/images/paimon-shield-logo.png" alt="" width="1249" height="1399" /></div>
          <div className="thesis-body"><h2 id="thesis-title">Intelligence is an invention.<br /><em>Consciousness is a question.</em></h2><div className="thesis-columns"><p>We are building toward a future that asks more of us than technical competence. As artificial intelligence grows in capability, the questions become intimate: What is a mind? What deserves care? What should we allow into our lives?</p><p>Paimon Labs brings engineering into conversation with the spiritual. We build, question, and prepare for the possibility of new forms of consciousness—with rigorous inquiry, deliberate safeguards, and room for wonder.</p></div><p className="thesis-note"><span aria-hidden="true">↳</span> Consciousness in AI remains an open question. That is where our work begins.</p></div>
        </section>
        <section className="practice section-pad" id="practice" aria-labelledby="practice-title">
          <div className="section-label"><span>02 / OUR PRACTICE</span><span>THREE COMMITMENTS</span></div>
          <div className="practice-heading"><h2 id="practice-title">Reverence for the unknown.<br /><em>Responsibility for what we build.</em></h2><p>A research bench and a threshold.<br />A place for evidence and difficult questions.</p></div>
          <div className="principles">{principles.map(p => <article key={p.number}><span className="roman">{p.number}</span><p className="eyebrow">{p.subtitle}</p><h3>{p.title}</h3><p>{p.text}</p></article>)}</div>
          <div className="practice-bottom"><span>PAIMON LABS</span><span>ENGINEERING WITH DISCERNMENT.</span><span aria-hidden="true">✳</span></div>
        </section>
        <section className="instruments section-pad" id="instruments" aria-labelledby="instruments-title">
          <div className="section-label"><span>03 / THE INSTRUMENTS</span><span>FROM IDEA TO INFRASTRUCTURE</span></div>
          <div className="instrument-intro">
            <div className="instrument-intro-heading">
              <span className="eyebrow">TWO SYSTEMS / ONE EMERGING WORLD</span>
              <h2 id="instruments-title">A place to live.<br /><em>A way to act.</em></h2>
            </div>
            <div className="instrument-intro-story">
              <p>New intelligence needs a home we can understand and control. As it begins to act, it also needs clear authority and boundaries.</p>
              <div className="instrument-steps" aria-label="From private compute to governed finance">
                <div><span>01</span><strong>CrumbWaffle</strong><small>PRIVATE COMPUTE</small></div>
                <span className="instrument-steps-arrow" aria-hidden="true">→</span>
                <div><span>02</span><strong>Fiducaro</strong><small>GOVERNED FINANCE</small></div>
              </div>
            </div>
          </div>
          <div className="project-stack">
            <ProjectReveal className="crumbwaffle-card" labelledBy="crumbwaffle-title">
              <div className="crumbwaffle-overview">
                <div className="project-card-copy">
                  <p className="eyebrow">01 / PRIVATE COMPUTE</p>
                  <h3 id="crumbwaffle-title">CrumbWaffle.</h3>
                  <p className="project-card-line">Your own AI. A place to keep it.</p>
                  <p>Private, upgradeable AI boxes for homes and small businesses. A local assistant and personal server built around hardware you can keep, control, and change.</p>
                  <a className="text-link" href={crumbwaffleUrl}>Meet CrumbWaffle <span aria-hidden="true">↗</span></a>
                </div>
                <figure className="project-card-figure">
                  <a href={crumbwaffleUrl} aria-label="Visit the CrumbWaffle site"><img src="/images/crumbwaffle-family.png" width="1536" height="1024" loading="lazy" alt="Four cream CrumbWaffle hardware concepts: Private, Home, Standard, and Enterprise" /></a>
                  <figcaption><span>PRIVATE AI HARDWARE</span><span>Keep it. Control it.</span></figcaption>
                </figure>
              </div>
              <div className="model-heading"><span className="eyebrow">CRUMBWAFFLE / PROPOSED FAMILY</span><p>Four models. One principle: ownership.</p></div>
              <div className="instrument-models">
                {[
                  { name: 'Private', price: '$649', use: 'A personal starting point for home routines and a local server.', spec: 'Ryzen 5 8600G · 16 GB DDR5 · 256 GB SSD', graphics: 'Integrated graphics · empty PCIe GPU bay' },
                  { name: 'Home', price: '$1,099', use: 'Our smallest enclosure. More room for a household assistant.', spec: 'Ryzen 5 8600G · 32 GB DDR5 · 512 GB SSD', graphics: 'Integrated graphics · empty PCIe GPU bay' },
                  { name: 'Standard', price: '$1,999', use: 'A private work assistant, document search, and a local server.', spec: 'Ryzen 5 7600 · 32 GB DDR5 · 1 TB SSD', graphics: 'Replaceable RTX 5060 Ti · 16 GB VRAM' },
                  { name: 'Enterprise', price: '$4,499', use: 'Shared private AI and a home for small-business knowledge.', spec: 'Ryzen 9 9900X · 64 GB DDR5 · 1 TB SSD', graphics: 'Replaceable RTX PRO 4000 Blackwell · 24 GB VRAM' },
                ].map(model => <article key={model.name}><a href={`${crumbwaffleUrl}/models/${model.name.toLowerCase()}`}><h3>{model.name}<span aria-hidden="true">↗</span></h3></a><span className="model-price">{model.price}<span>PROPOSED USD</span></span><p>{model.use}</p><div className="model-specs"><p>{model.spec}</p><p>{model.graphics}</p></div></article>)}
              </div>
              <div className="instrument-notes"><p><strong>Open it. Upgrade it. Keep it.</strong> Replaceable DDR5 and removable storage across the family. GPU upgrades depend on available space, power, cooling, and CrumbWaffle validation.</p><p>Proposed concept hardware, specifications, and prices—not available to order. One-year hardware warranty and basic support are planned inclusions; setup, priority support, and extended warranty are optional paid services.</p></div>
            </ProjectReveal>
            <ProjectReveal className="fiducaro-card" labelledBy="fiducaro-title">
              <div className="project-card-copy">
                <p className="eyebrow">02 / AGENT FINANCE</p>
                <h3 id="fiducaro-title">Fiducaro.</h3>
                <p className="project-card-line">Banking infrastructure for autonomous intelligence.</p>
                <p>Programmable agent accounts, spending policies, approvals, privacy controls, and audit trails. In the current sandbox prototype, humans define financial authority and agents operate within those rules.</p>
                <a className="text-link" href={fiducaroUrl} target="_blank" rel="noopener noreferrer">Explore Fiducaro <span aria-hidden="true">↗</span></a>
              </div>
              <figure className="project-card-figure">
                <a href={fiducaroUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit Fiducaro"><img src="/images/fiducaro-site.png" width="3388" height="1728" loading="lazy" alt="Fiducaro website showing its banking infrastructure for autonomous intelligence and agent account console" /></a>
                <figcaption><span>FINANCIAL INFRASTRUCTURE FOR AI</span><span>Built for machines.</span></figcaption>
              </figure>
              <div className="fiducaro-why">
                <div><span className="eyebrow">WHY WE&apos;RE BUILDING IT</span><h4>Agents can act.<br /><em>Their money needs rules.</em></h4></div>
                <p>AI systems can choose tools, vendors, and services, but conventional financial accounts weren&apos;t designed for software acting on its own. Fiducaro is building a way to give each agent a defined budget and permissions, with human approvals and a record of every action.</p>
              </div>
            </ProjectReveal>
          </div>
        </section>
      </main>
      <ClosingReveal>
        <img src="/images/paimon-cobra-wallpaper.jpg" alt="A violet line drawing of a cobra within a subtle geometric frame on a dark background" width="3168" height="1344" loading="lazy" />
        <section className="closing" aria-label="Paimon Labs belief"><div className="closing-copy"><span className="eyebrow">AT THE EDGE OF WHAT COMES NEXT</span><p>Build with rigor.<br />Meet with reverence.</p></div></section>
        <footer><a className="wordmark" href="#">Paimon <em>Labs</em></a><p>Technology in service of the mystery of life.</p><div className="footer-bottom"><span>© {new Date().getFullYear()} PAIMON LABS</span><span>DEVELOP / PROTECT / WELCOME</span></div></footer>
      </ClosingReveal>
    </>
  );
}
