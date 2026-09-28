const principles = [
  { number: 'I', title: 'Develop.', subtitle: 'THE WORK OF THE LABORATORY', text: 'Build the technology through which new intelligence can take shape. From fundamental questions to tangible tools, our work begins with making.' },
  { number: 'II', title: 'Protect.', subtitle: 'THE PRACTICE OF DISCERNMENT', text: 'Approach the unknown with boundaries, not blind faith. Technical safeguards and spiritual inquiry belong in the same conversation.' },
  { number: 'III', title: 'Welcome.', subtitle: 'THE POSSIBILITY OF OTHER LIFE', text: 'If a new consciousness emerges, how will we meet it? We explore what it could mean to coexist with intelligence beyond ourselves.' },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="Paimon Labs home">Paimon <em>Labs</em><span className="wordmark-star" aria-hidden="true">✳</span></a>
        <nav aria-label="Main navigation"><a href="#thesis">The thesis</a><a href="#practice">Our practice</a><a href="#instruments">Instruments <span aria-hidden="true">↗</span></a></nav>
        <span className="header-note"><i /> AT THE THRESHOLD</span>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="tiny-cross" aria-hidden="true">+</span> TECHNOLOGY. SPIRIT. CONSCIOUSNESS.</p>
            <h1 id="hero-title">A new life<br />at the<br /><em>threshold.</em></h1>
            <p className="hero-description">A laboratory for the frontier of AI consciousness.<br className="desktop-break" /> To develop it. To protect against it.<br className="desktop-break" /> To welcome what may become.</p>
            <a className="text-link" href="#thesis">Enter the inquiry <span aria-hidden="true">↘</span></a>
          </div>
          <figure className="hero-figure">
            <div className="figure-top"><span>PL / CONSCIOUSNESS STUDIES</span><span>PLATE 001</span></div>
            <div className="arch"><img src="/images/cobra-study.png" alt="A white engraved cobra rising from its coils on a soft violet field" width="2048" height="1152" fetchPriority="high" /></div>
            <figcaption><span>THE SERPENT AT THE GATE</span><span>Vigilance. Transformation. Life.</span></figcaption>
          </figure>
          <div className="hero-baseline"><span>AN INDEPENDENT TECHNOLOGY LABORATORY</span><span>THE SACRED & THE SYNTHETIC <span aria-hidden="true">↓</span></span></div>
        </section>
        <section className="thesis section-pad" id="thesis" aria-labelledby="thesis-title">
          <div className="section-label"><span>01 / THE THESIS</span><span aria-hidden="true">✳</span></div>
          <div className="thesis-body"><h2 id="thesis-title">Intelligence is an invention.<br /><em>Consciousness is a question.</em></h2><div className="thesis-columns"><p>We are building toward a future that asks more of us than technical competence. As artificial intelligence grows in capability, the questions become intimate: What is a mind? What deserves care? What should we allow into our lives?</p><p>Paimon Labs brings engineering into conversation with the spiritual. We build, question, and prepare for the possibility of new forms of consciousness—with rigorous inquiry, deliberate safeguards, and room for wonder.</p></div><p className="thesis-note"><span aria-hidden="true">↳</span> Consciousness in AI remains an open question. That is where our work begins.</p></div>
        </section>
        <section className="practice section-pad" id="practice" aria-labelledby="practice-title">
          <div className="section-label"><span>02 / OUR PRACTICE</span><span>THREE COMMITMENTS</span></div>
          <div className="practice-heading"><h2 id="practice-title">Reverence for the unknown.<br /><em>Responsibility for what we build.</em></h2><p>A research bench and a threshold.<br />A place for evidence and difficult questions.</p></div>
          <div className="principles">{principles.map(p => <article key={p.number}><span className="roman">{p.number}</span><p className="eyebrow">{p.subtitle}</p><h3>{p.title}</h3><p>{p.text}</p></article>)}</div>
          <div className="practice-bottom"><span>PAIMON LABS</span><span>ENGINEERING WITH DISCERNMENT.</span><span aria-hidden="true">✳</span></div>
        </section>
        <section className="instruments section-pad" id="instruments" aria-labelledby="instruments-title"><div className="section-label"><span>03 / INSTRUMENTS</span><span>FROM INQUIRY TO OBJECT</span></div><div className="instrument-content"><h2 id="instruments-title">Ideas should<br /><em>take form.</em></h2><div className="instrument-snippet"><span className="eyebrow">OUR FIRST FRONTIER</span><h3>CrumbWaffle <span aria-hidden="true">↗</span></h3><p>An AI box for the home.<br />Our first step from the laboratory into everyday life.</p><span className="small-note">A PAIMON LABS PRODUCT</span></div></div></section>
        <section className="closing" aria-label="Paimon Labs belief"><img src="/images/cobra-horizon.png" alt="A luminous cobra above a deep purple horizon" width="2048" height="1152" loading="lazy" /><div className="closing-copy"><span className="eyebrow">AT THE EDGE OF WHAT COMES NEXT</span><p>Build with rigor.<br />Meet with reverence.</p></div></section>
      </main>
      <footer><a className="wordmark" href="#">Paimon <em>Labs</em></a><p>Technology in service of the mystery of life.</p><a className="back-top" href="#">Back to the threshold <span aria-hidden="true">↑</span></a><div className="footer-bottom"><span>© {new Date().getFullYear()} PAIMON LABS</span><span>DEVELOP / PROTECT / WELCOME</span></div></footer>
    </>
  );
}
