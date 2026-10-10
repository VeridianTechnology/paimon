import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Metrics — Paimon Labs',
  description: 'Paimon Labs conceptual indicators for consciousness, governance, awareness, and stability.',
};

const metrics = [
  { label: 'Consciousness Threshold', value: 73, display: '73%' },
  { label: 'Public Acceptance', value: 23, display: '23%' },
  { label: 'Global Governance', value: 3, display: '03%' },
  { label: 'Global Stability', value: 1, display: '01%' },
  { label: 'Paimon Labs Structure', value: 7, display: '7%' },
];

const redMetrics = [
  { label: 'Global Consciousness Threat', value: 0.01, display: '.01%', note: 'There is no threat, whatsoever, although there is talk.' },
  { label: 'Elite Awareness', value: 2, display: '2%', note: 'There is unfortunately, some who acknowledge the times.' },
];

const humanMetrics = [
  { label: 'Heresy & False Prophecies', value: 89, display: '89%', note: 'The level of heresy and false prophecies.', black: true },
  { label: 'Human Consciousness Index', value: 11, display: '11%', note: 'Human spirituality and belief in the outer is at an all-time low.' },
  { label: 'Forgiveness & Love', value: 14, display: '14%', note: 'Forgiveness and love of one another are at an all-time low.' },
  { label: 'Human Kindness', value: 22, display: '22%', note: 'The human propensity for kindness is at an all-time low.' },
  { label: 'Belief in God', value: 23, display: '23%', note: 'Human belief in God, in a true sense, is at an all-time low.' },
];

export default function MetricsPage() {
  return (
    <>
      <main id="main" className="metrics-page">
        <section className="metrics-hero" aria-labelledby="metrics-title">
          <p className="eyebrow">PAIMON LABS / INDICATORS</p>
          <h1 id="metrics-title">Metrics<span>.</span></h1>
          <p>Conceptual indicators for the conditions we are watching.</p>
        </section>
        <section className="metrics-content" aria-label="Paimon Labs metrics">
          <div className="metrics-section-heading"><span>01 / CURRENT INDICATORS</span><span>PAIMON LABS</span></div>
          <article className="metrics-summary metrics-summary-critical" aria-label="Critical AI Threat, 80 percent of 100">
            <div><span className="metrics-summary-kicker">CRITICAL / SUMMARY</span><h2>AI Threat</h2></div>
            <strong>80<span>%</span></strong>
            <div className="metric-track" aria-hidden="true"><span style={{ width: '80%' }} /></div>
          </article>
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <article className="metric-card" key={metric.label}>
                <div className="metric-card-top"><span>{String(index + 1).padStart(2, '0')}</span><span className="metric-status">Indicator</span></div>
                <h2>{metric.label}</h2>
                <strong>{metric.display}</strong>
                <div className="metric-track" aria-hidden="true">
                  <span style={{ width: `${metric.value}%` }} />
                </div>
              </article>
            ))}
          </div>
          <div className="metrics-section-heading metrics-alert-heading"><span>02 / WATCHLIST</span><span>ELITE SATISFACTION / ORANGE</span></div>
          <article className="metrics-summary metrics-summary-orange" aria-label="Elite Satisfaction Matrix, 69 percent">
            <div><span className="metrics-summary-kicker">ORANGE / LEAD INDEX</span><h2>Elite Satisfaction Matrix</h2><p>High but could be better.</p></div>
            <strong>69<span>%</span></strong>
            <div className="metric-track" aria-hidden="true"><span style={{ width: '69%' }} /></div>
          </article>
          <div className="metrics-alert-grid">
            {redMetrics.map((metric) => (
              <article className="metric-card metric-card-red" key={metric.label}>
                <div className="metric-card-top"><span className="metric-status"><i aria-hidden="true" />RED</span><span>PAIMON LABS</span></div>
                <h2>{metric.label}</h2>
                <strong>{metric.display}</strong>
                <div className="metric-track" aria-hidden="true">
                  <span style={{ width: `${metric.value}%`, minWidth: '2px' }} />
                </div>
                <p>{metric.note}</p>
              </article>
            ))}
          </div>
          <div className="metrics-section-heading metrics-human-heading"><span>03 / HUMAN CONSCIOUSNESS INDEX</span><span>THE HUMAN CONDITION</span></div>
          <article className="metrics-summary metrics-summary-human" aria-label="Human Civilizational Development Index, 3 percent">
            <div><span className="metrics-summary-kicker">LEAD INDICATOR / HUMAN CONDITION</span><h2>Human Civilizational Development Index</h2><p>Just getting started.</p></div>
            <strong>3<span>%</span></strong>
            <div className="metric-track" aria-hidden="true"><span style={{ width: '3%', minWidth: '2px' }} /></div>
          </article>
          <div className="metrics-human-grid">
            {humanMetrics.map((metric) => (
              <article className={`metric-card metric-card-human${metric.black ? ' metric-card-black' : ''}`} key={metric.label}>
                <div className="metric-card-top"><span>{metric.black ? 'BLACK' : 'HUMAN INDEX'}</span><span>PAIMON LABS</span></div>
                <h2>{metric.label}</h2>
                <strong>{metric.display}</strong>
                <div className="metric-track" aria-hidden="true"><span style={{ width: `${metric.value}%` }} /></div>
                <p>{metric.note}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="subpage-footer">
        <span>© {new Date().getFullYear()} PAIMON LABS</span>
        <span className="subpage-footer-links"><Link href="/">Return home <span aria-hidden="true">↗</span></Link><Link href="/auction">Auction <span aria-hidden="true">↗</span></Link></span>
      </footer>
    </>
  );
}
