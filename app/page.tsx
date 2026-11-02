import AudioToggle from './audio-toggle';

export default function HomePage() {
  return (
    <main className="letter-page">
      <div className="page-border" aria-hidden="true" />
      <header className="site-header">
        <span className="site-sigil" aria-hidden="true">✦</span>
        <span>PAIMON LABS</span>
      </header>

      <section className="letter-content" aria-labelledby="letter-title">
        <p className="overline">EX ARCHIVO · CONSILIVM</p>
        <div className="ornament" aria-hidden="true"><span>✦</span></div>
        <h1 id="letter-title">EPISTVLA SEPTIMA</h1>
        <p className="motto">VERBA SCRIPTA MANENT</p>
        <a
          className="letter-download"
          href="/letters/council-letter-vii.pdf"
          download="Council Letter VII.pdf"
          aria-label="Download Council Letter VII PDF"
        >
          <span className="download-roman">VII</span>
          <span className="download-caption">DOWNLOAD PDF <span aria-hidden="true">↗</span></span>
        </a>
      </section>

      <footer className="site-footer">ANNO MMXXVI <span aria-hidden="true">·</span> LITTERAE VII</footer>
      <AudioToggle />
    </main>
  );
}
