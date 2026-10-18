'use client';

import { useState } from 'react';
import { mapCountries, type MapCountry } from './war-map-data';

type Tone = 'allies' | 'germany' | 'invited' | 'czech' | 'neutral';

const dispatches = [
  {
    date: 'OCTOBER 15TH',
    year: '1939',
    headline: 'Blockaded Germany — War starts',
    faction: 'ALLIES',
    detail: 'England announces a blockade of Germany. The opening move sets both sides on a war footing.',
  },
  {
    date: 'OCTOBER 16TH',
    year: '1939',
    headline: 'Revolt Plot failed',
    faction: 'GERMANY',
    detail: 'The attempted revolt fails. The opening counter stands at one point for each side.',
  },
];

const mapLabelIds = new Set(['GBR', 'DEU', 'FRA', 'CZE', 'ITA', 'ESP', 'IRL', 'SWE', 'NOR', 'CHE', 'AUT', 'HUN', 'ROU', 'DNK']);

function toneFor(id: string): Tone {
  if (id === 'GBR') return 'allies';
  if (id === 'DEU') return 'germany';
  if (id === 'FRA') return 'invited';
  if (id === 'CZE') return 'czech';
  return 'neutral';
}

function countryStatus(country: MapCountry) {
  switch (country.id) {
    case 'DEU': return { alignment: 'Germany', status: 'At war', leader: 'Adolf Hitler', note: 'The German keycard is active in this opening scenario.' };
    case 'GBR': return { alignment: 'Allies', status: 'Blockade declared', leader: 'Allied command', note: 'England opened the war with a blockade of Germany on October 15th.' };
    case 'FRA': return { alignment: 'Invitation pending', status: 'Invitation sent', leader: 'No commander assigned', note: 'France has received an invitation to join the Allies.' };
    case 'CZE': return { alignment: 'Neutral', status: 'Striped neutral', leader: 'No commander assigned', note: 'Czech remains neutral in this opening scenario.' };
    default: return { alignment: 'Neutral', status: 'No active orders', leader: 'No commander assigned', note: `${country.name} has not entered the conflict.` };
  }
}

export default function WarSimulator() {
  const [selectedId, setSelectedId] = useState('DEU');
  const [counterOpen, setCounterOpen] = useState(true);
  const [selectedDispatch, setSelectedDispatch] = useState(1);
  const selectedCountry = mapCountries.find((country) => country.id === selectedId) ?? mapCountries[0];
  const selectedTone = toneFor(selectedCountry.id);
  const dossier = countryStatus(selectedCountry);

  return (
    <main className="war-simulator" id="main">
      <header className="war-topbar">
        <div className="war-brand">
          <span className="war-brand-mark" aria-hidden="true"><span>39</span></span>
          <div><span className="war-overline">WWII SIMULATOR / ALT HISTORY</span><h1>THEATRE <em>1939</em></h1></div>
        </div>
        <div className="war-date"><span className="war-overline">CURRENT TURN / 02</span><strong>16 OCTOBER 1939</strong><span className="war-live-dot">SIMULATION PAUSED</span></div>
        <div className="war-top-actions">
          <div className="war-top-score" aria-label="Current score: Germany 1, Allies 1"><span>GERMANY</span><strong>01 <i>:</i> 01</strong><span>ALLIES</span></div>
          <button className={`war-view-button ${counterOpen ? 'is-open' : ''}`} type="button" aria-expanded={counterOpen} aria-controls="war-counter" onClick={() => setCounterOpen((open) => !open)}>
            <span className="war-view-icon" aria-hidden="true">▦</span> VIEW MENU <span aria-hidden="true">{counterOpen ? '×' : '+'}</span>
          </button>
        </div>
      </header>

      <div className={`war-workspace ${counterOpen ? '' : 'war-workspace--wide'}`}>
        <aside className="war-left-rail" aria-label="Scenario and map legend">
          <div className="war-rail-kicker"><span>01 / THE SCENARIO</span><span className="war-small-cross" aria-hidden="true">✚</span></div>
          <h2>The opening<br /><em>board.</em></h2>
          <p className="war-intro">Two days into an alternate October, Europe waits to see who moves next.</p>
          <div className="war-divider" />
          <div className="war-brief"><span className="war-label">START DATE</span><strong>15 OCT 1939</strong></div>
          <div className="war-brief"><span className="war-label">CURRENT DATE</span><strong>16 OCT 1939</strong></div>
          <div className="war-brief"><span className="war-label">STATE</span><strong>OPENING PHASE</strong></div>
          <div className="war-divider" />
          <div className="war-legend-title"><span className="war-label">MAP KEY</span><span>05 STATES</span></div>
          <div className="war-legend"><span className="war-swatch war-swatch--allies" /> Allies <small>England</small></div>
          <div className="war-legend"><span className="war-swatch war-swatch--germany" /> Germany <small>Dark grey</small></div>
          <div className="war-legend"><span className="war-swatch war-swatch--invited" /> Invited <small>France</small></div>
          <div className="war-legend"><span className="war-swatch war-swatch--czech" /> Striped neutral <small>Czech</small></div>
          <div className="war-legend"><span className="war-swatch war-swatch--neutral" /> Neutral <small>All others</small></div>
          <p className="war-map-note">Scenario borders are schematic. Select a country for its keycard.</p>
        </aside>

        <section className="war-map-panel" aria-label="Interactive map of Europe">
          <div className="war-map-header"><div><span className="war-overline">EUROPEAN THEATRE / MAP 001</span><h2>Lines on the map</h2></div><div className="war-map-coordinates">52° N / 13° E<br />SITUATION MAP</div></div>
          <div className="war-map-canvas">
            <svg viewBox="0 0 1000 660" aria-label="Selectable map of Europe showing England in red, Germany in dark grey, France in red and white stripes, Czech in brown and neutral stripes, and other countries as neutral">
              <defs>
                <pattern id="war-ocean-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0 H0 V40" fill="none" stroke="#9bb5ad" strokeOpacity=".075" strokeWidth="1" /></pattern>
                <pattern id="war-france-stripes" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(37)"><rect width="18" height="18" fill="#dfd6c4" /><rect width="8" height="18" fill="#af4a4b" /></pattern>
                <pattern id="war-czech-stripes" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(38)"><rect width="16" height="16" fill="#755b43" /><rect width="6" height="16" fill="#b6ac91" /></pattern>
                <radialGradient id="war-map-vignette"><stop offset="0" stopColor="#cee0c8" stopOpacity=".04" /><stop offset="1" stopColor="#081114" stopOpacity=".22" /></radialGradient>
              </defs>
              <rect width="1000" height="660" fill="#2e747b" />
              <rect width="1000" height="660" fill="url(#war-ocean-grid)" />
              <g className="war-country-layer">
                {mapCountries.map((country) => (
                  <a key={country.id} className="war-country-link" href="#war-counter" aria-label={`${country.name}, ${countryStatus(country).alignment}`} aria-current={selectedId === country.id ? 'true' : undefined} onClick={(event) => { event.preventDefault(); setSelectedId(country.id); setCounterOpen(true); }}>
                    <path d={country.path} className={`war-country war-country--${toneFor(country.id)} ${selectedId === country.id ? 'is-selected' : ''}`} fillRule="evenodd" />
                  </a>
                ))}
              </g>
              <rect width="1000" height="660" fill="url(#war-map-vignette)" pointerEvents="none" />
              <g className="war-map-labels" aria-hidden="true">
                {mapCountries.filter((country) => mapLabelIds.has(country.id)).map((country) => <text key={country.id} x={country.labelX} y={country.labelY} className={`war-map-label war-map-label--${toneFor(country.id)}`}>{country.name.toUpperCase()}</text>)}
              </g>
              <g className="war-map-compass" aria-hidden="true"><path d="M928 54 L939 80 L928 106 L917 80 Z" /><text x="928" y="41">N</text></g>
            </svg>
            <div className="war-map-stamp"><span>EUROPE / OCT 1939</span><strong>ALTERNATE TIMELINE</strong></div>
          </div>
          <div className="war-map-footer"><span><i className="war-select-dot" /> SELECT A TERRITORY TO INSPECT</span><span>42 COUNTRIES ON THE BOARD</span></div>
        </section>

        {counterOpen && <aside className="war-counter" id="war-counter" aria-label="War counter and country keycard">
          <div className="war-counter-head"><span className="war-overline">02 / WAR COUNTER</span><button type="button" className="war-close-counter" aria-label="Close view menu" onClick={() => setCounterOpen(false)}>×</button></div>
          <div className="war-score"><div><span>GERMANY</span><strong>1</strong></div><span className="war-score-divider">—</span><div><span>ALLIES</span><strong>1</strong></div></div>
          <div className="war-counter-subtitle"><span>VIEW MENU / DISPATCHES</span><span>02 ENTRIES</span></div>
          <div className="war-dispatch-list">
            {dispatches.map((dispatch, index) => <button key={dispatch.date} type="button" className={`war-dispatch ${selectedDispatch === index ? 'is-active' : ''}`} onClick={() => setSelectedDispatch(index)} aria-pressed={selectedDispatch === index}>
              <span className="war-dispatch-date">{dispatch.date} <i>{dispatch.year}</i></span>
              <strong>{dispatch.headline}</strong>
              <span className="war-dispatch-faction">{dispatch.faction} <span aria-hidden="true">↗</span></span>
            </button>)}
          </div>
          <p className="war-dispatch-detail">{dispatches[selectedDispatch].detail}</p>
          <div className="war-keycard-heading"><span>03 / COUNTRY KEYCARD</span><span>CLICK THE MAP</span></div>
          <article className={`war-keycard war-keycard--${selectedTone}`}>
            <div className="war-keycard-top"><span className="war-keycard-swatch" /><span>COUNTRY FILE / {selectedCountry.id}</span></div>
            <h2>{selectedCountry.name}</h2>
            <div className="war-keycard-rule" />
            <dl>
              <div><dt>ALIGNMENT</dt><dd>{dossier.alignment}</dd></div>
              <div><dt>STATUS</dt><dd>{dossier.status}</dd></div>
              <div><dt>LEADER</dt><dd>{dossier.leader}</dd></div>
            </dl>
            <p>{dossier.note}</p>
          </article>
        </aside>}
      </div>
      <footer className="war-footer"><span>THEATRE 1939 / SCENARIO 001</span><span>AN ALTERNATE-HISTORY SIMULATION</span><span>EUROPE • 15—16 OCTOBER</span></footer>
    </main>
  );
}
