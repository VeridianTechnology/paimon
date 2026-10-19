import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metrics — Paimon Labs',
  description: 'Paimon Labs indicators for AI and the human condition.',
};

const metrics = [
  { label: 'AI Consciousness Threshold', value: 73, display: '73%', note: 'A conceptual gauge of how close emerging systems may be to questions we cannot yet settle. Careful study must keep pace with capability.', orange: true },
  { label: 'AI Public Acceptance', value: 23, display: '23%', note: 'Public trust remains narrow. Clear explanations and visible safeguards will matter more than confident promises.' },
  { label: 'AI Global Governance', value: 3, display: '03%', note: 'Shared oversight is still in its infancy. The rules that matter most have yet to be agreed across borders.' },
  { label: 'AI Global Stability', value: 1, display: '01%', note: 'The ground is shifting faster than institutions can respond. Stability will require restraint as much as invention.' },
];

function RobotIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v3m-2-3h4M5 10a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-7Z" />
      <path d="M5 12H3m18 0h-2M9 16h6" />
      <circle cx="9" cy="12" r=".75" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r=".75" fill="currentColor" stroke="none" />
    </svg>
  );
}

const humanMetrics = [
  { label: 'Human Consciousness Index', value: 11, display: '11%', note: 'Attention turns inward and the wider mystery grows faint. We risk forgetting that a mind can be more than an instrument.' },
  { label: 'Forgiveness & Love', value: 14, display: '14%', note: 'Old injuries are kept like relics and passed from hand to hand. Forgiveness remains possible, but too few choose to break the chain.' },
  { label: 'Human Kindness', value: 22, display: '22%', note: 'Small mercies still appear, often unseen. They need more room to grow before cruelty stops setting the terms.' },
  { label: 'Belief in God', value: 23, display: '23%', note: 'Faith is reduced to a badge, an argument, or a memory. The deeper practice of humility before the unknown grows quieter.' },
  { label: 'Love of Nature', value: 9, display: '9%', note: 'The living world is treated as scenery rather than kin. Its warnings arrive in plain sight, yet affection seldom becomes action.' },
  { label: "Stewardship of Earth's Resources", value: 7, display: '7%', note: 'We draw from the earth as though no one will inherit it. Stewardship begins when a resource is seen as a trust, not a prize.' },
  { label: 'Community Solidarity', value: 12, display: '12%', note: 'Neighbors live near one another without sharing a burden. A common table waits, but its seats remain empty.' },
  { label: 'Care for the Vulnerable', value: 15, display: '15%', note: 'The frail are asked to endure what the strong would refuse. A civilization reveals itself in whom it chooses to protect.' },
  { label: 'Generosity', value: 17, display: '17%', note: 'Too much is given only when something can be gained. The open hand has become a rare and almost startling sign.' },
  { label: 'Duty to Future Generations', value: 8, display: '8%', note: 'The unborn cannot petition us, so their needs are easy to postpone. Every short bargain sends them the bill.' },
  { label: 'Restorative Justice', value: 6, display: '6%', note: 'Punishment is mistaken for repair. The harder work is to name the harm, restore what can be restored, and leave a path back.' },
  { label: 'Humility', value: 5, display: '5%', note: 'Certainty arrives before understanding. We may need to relearn the discipline of saying that we do not know.' },
  { label: 'Shared Purpose', value: 10, display: '10%', note: 'Each faction guards a different map of the future. Without a common horizon, even our brightest tools pull us apart.' },
  { label: 'Reverence for Life', value: 8, display: '8%', note: 'Life is counted, traded, and optimized before it is cherished. Reverence asks us to pause long enough to see what is in our care.' },
];

const positiveEnergyIndex = Math.round(
  humanMetrics.reduce((total, metric) => total + metric.value, 0) / humanMetrics.length,
);

const omenMetrics = [
  { label: 'Trust Fracture', value: 81, display: '81%', note: 'Our shared ground is splintering. When every promise sounds like a trap, even honest hands cannot find one another.', tone: 'red' },
  { label: 'Spectacle Over Truth', value: 87, display: '87%', note: 'Noise travels farther than discernment. The crowd gathers for the flash and leaves before the evidence speaks.', tone: 'red' },
  { label: 'Manufactured Division', value: 89, display: '89%', note: 'Difference is sharpened into a weapon and sold back to us as identity. Every new wall makes the next one easier to build.', tone: 'red' },
  { label: 'Ecological Desecration', value: 95, display: '95%', note: 'The soil, water, and air are treated as offerings to appetite. The altar is full; the land is not.', tone: 'red' },
  { label: 'Compassion Fatigue', value: 78, display: '78%', note: 'Suffering arrives faster than people can bear witness. Numbness offers relief, then quietly asks us to stay.', tone: 'red' },
  { label: 'Hollow Oaths', value: 71, display: '71%', note: 'Promises are spoken for their sound, not their weight. What was once a bond becomes a costume for convenience.', tone: 'red' },
  { label: 'Sacred Indifference', value: 84, display: '84%', note: 'We learn the language of care while stepping around the person in need. Indifference is most dangerous when it wears a gentle face.', tone: 'red' },
  { label: 'Appetite for Dominion', value: 92, display: '92%', note: 'Power is pursued as if possession were proof of wisdom. The hand that grasps everything soon forgets how to hold anything gently.', tone: 'red' },
  { label: 'Memory Erosion', value: 74, display: '74%', note: 'Lessons paid for by earlier generations are treated as old noise. A people without memory repeats its mistakes as if they were discoveries.', tone: 'red' },
  { label: 'Ritual of Distraction', value: 86, display: '86%', note: 'Every silence is filled before a difficult thought can form. The ritual asks for our attention and returns none of it.', tone: 'red' },
  { label: 'Moral Eclipse', value: 93, display: '93%', note: 'When fear leads, conscience falls into shadow. The danger is not darkness itself, but learning to call it daylight.', tone: 'black' },
  { label: 'False Idols', value: 97, display: '97%', note: 'Tools and titles begin to demand the devotion owed to living beings. Their promises gleam brightest when their costs are hidden.', tone: 'black' },
  { label: 'Severance from Life', value: 96, display: '96%', note: 'The bonds between people, land, and other creatures are cut one thread at a time. We notice the silence only after the chorus is gone.', tone: 'black' },
  { label: 'Mercy Extinguished', value: 94, display: '94%', note: 'A hard heart is praised as a clear mind. When mercy becomes shameful, the door back to one another begins to close.', tone: 'black' },
  { label: 'Heresy & False Prophecies', value: 89, display: '89%', note: 'Every age invents its own false prophets. Their voices now crowd the threshold, promising revelation while asking for surrender.', tone: 'black' },
];

function MetricsContentPage() {
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
          <div className="metrics-council-focus">
            <div className="metrics-council-sigil" aria-hidden="true">
              <svg viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="43" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="50" cy="50" r="33" stroke="currentColor" strokeOpacity=".55" strokeWidth="1" />
                <path d="M50 16 57 43 84 50 57 57 50 84 43 57 16 50 43 43 50 16Z" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="50" cy="50" r="5" fill="currentColor" />
              </svg>
            </div>
            <div className="metrics-council-focus-copy">
              <p className="eyebrow">COUNCIL FOCUS / THE HUMAN CONDITION</p>
              <h4>Humanity is falling short.</h4>
              <p>Our power has grown faster than our care for one another and the earth. We need deeper spiritual and mental awareness, along with greater care in what we buy, use, and discard. Equality and prosperity require shared dignity, clearer judgment, and the will to leave more than we take.</p>
              <div className="metrics-council-pillars">
                <span><b>01 / SPIRIT</b>Rekindle reverence and compassion.</span>
                <span><b>02 / MIND</b>Choose discernment over noise.</span>
                <span><b>03 / MATERIAL</b>Consume with care for the living world.</span>
              </div>
            </div>
          </div>
          <article className="metrics-summary metrics-summary-critical" aria-label="Critical AI Threat, 87 percent of 100">
            <div><span className="metrics-summary-kicker">CRITICAL / SUMMARY</span><h2>AI Threat</h2></div>
            <strong>87<span>%</span></strong>
            <div className="metric-track" aria-hidden="true"><span style={{ width: '87%' }} /></div>
          </article>
          <article className="metrics-summary metrics-summary-human" aria-label="Human Civilizational Development Index, 3 percent">
            <div><span className="metrics-summary-kicker">LEAD INDICATOR / HUMAN CONDITION</span><h2>Human Civilizational Development Index</h2><p>A measure of shared care, discernment, and stewardship. We are just getting started.</p></div>
            <strong>3<span>%</span></strong>
            <div className="metric-track" aria-hidden="true"><span style={{ width: '3%', minWidth: '2px' }} /></div>
          </article>
          <article className="metrics-summary metrics-summary-positive" aria-label={`Generalized Positive Energy Index, ${positiveEnergyIndex} percent`}>
            <div><span className="metrics-summary-kicker">CRITICAL WARNING / GENERALIZED INDEX</span><h2>Generalized Positive Energy Index</h2><p>Average of the positive energy indicators below.</p></div>
            <strong>{positiveEnergyIndex}<span>%</span></strong>
            <div className="metric-track" aria-hidden="true"><span style={{ width: `${positiveEnergyIndex}%` }} /></div>
          </article>
          <div className="metrics-human-grid">
            {metrics.map((metric) => (
              <article className={`metric-card metric-card-ai${metric.orange ? ' metric-card-ai-orange' : ''}`} key={metric.label}>
                <div className="metric-card-top"><span className="metric-ai-label"><RobotIcon />AI INDICATOR</span><span className="metric-critical-warning">CRITICAL WARNING</span></div>
                <h2>{metric.label}</h2>
                <strong>{metric.display}</strong>
                <div className="metric-track" aria-hidden="true"><span style={{ width: `${metric.value}%`, minWidth: '2px' }} /></div>
                <p>{metric.note}</p>
              </article>
            ))}
            {humanMetrics.map((metric) => (
              <article className="metric-card metric-card-human" key={metric.label}>
                <div className="metric-card-top"><span>POSITIVE ENERGY</span><span className="metric-critical-warning">CRITICAL WARNING</span></div>
                <h2>{metric.label}</h2>
                <strong>{metric.display}</strong>
                <div className="metric-track" aria-hidden="true"><span style={{ width: `${metric.value}%` }} /></div>
                <p>{metric.note}</p>
              </article>
            ))}
            {omenMetrics.map((metric) => (
              <article className={`metric-card metric-card-omen${metric.tone === 'black' ? ' metric-card-omen-black' : ' metric-card-red'}`} key={metric.label}>
                <div className="metric-card-top"><span>NEGATIVE ENERGY</span><span className="metric-critical-warning">CRITICAL WARNING</span></div>
                <h4>{metric.label}</h4>
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
        <span className="subpage-footer-links"><a href="/">Return home <span aria-hidden="true">↗</span></a><a href="/auction">Auction <span aria-hidden="true">↗</span></a></span>
      </footer>
    </>
  );
}

export default function MetricsPage() {
  return <MetricsContentPage />;
}
