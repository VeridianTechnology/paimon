'use client';

import { useRef, useState } from 'react';

const pages = [
  { image: '/journal/council-letter-2.png?v=d2f8821e', label: '02 / OCTOBER 16, 2026', alt: 'Page 2, the second council letter dated October 16, 2026', pdf: '/journal/council-letter-2.pdf?v=c88a8523', filename: 'Council Letter 2.pdf' },
  { image: '/journal/conversations-journal-1.png?v=236f6b04', label: '01 / FIRST COUNCIL LETTER', alt: 'Page 1, the first council letter', pdf: '/journal/council-letter-1.pdf', filename: 'Council Letter 1.pdf' },
];
const minZoom = 75;
const maxZoom = 200;
const zoomStep = 25;

export default function JournalViewer() {
  const [zoom, setZoom] = useState(100);
  const [pageIndex, setPageIndex] = useState(0);
  const readerRef = useRef<HTMLDivElement>(null);

  function changePage() {
    setPageIndex(index => (index === 0 ? 1 : 0));
    window.requestAnimationFrame(() => {
      readerRef.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start',
      });
    });
  }

  const page = pages[pageIndex];

  return (
    <div className="conversations-reader" ref={readerRef}>
      {pageIndex === 0 && <span className="conversations-emergency">EMERGENCY</span>}
      <div className="conversations-zoom" role="group" aria-label="Journal zoom">
        <button type="button" aria-label="Zoom out" onClick={() => setZoom(value => Math.max(minZoom, value - zoomStep))} disabled={zoom === minZoom}>−</button>
        <output aria-live="polite">{zoom}%</output>
        <button type="button" aria-label="Zoom in" onClick={() => setZoom(value => Math.min(maxZoom, value + zoomStep))} disabled={zoom === maxZoom}>+</button>
      </div>
      <div className="conversations-scroll">
        <div className="conversations-pages" style={{ width: `${zoom}%` }}>
          <div className="conversations-sheet" key={page.image}>
            <p className="conversations-page-number">{page.label} <span>{pageIndex + 1} / {pages.length}</span></p>
            <img src={page.image} alt={page.alt} width="2448" height="3168" />
          </div>
        </div>
      </div>
      <button className="conversations-letter-nav" type="button" onClick={changePage}>
        {pageIndex === 0 ? <><span aria-hidden="true">←</span> Previous letter</> : <>Next letter <span aria-hidden="true">→</span></>}
      </button>
      <a className="conversations-download" href={page.pdf} download={page.filename}>Download PDF <span aria-hidden="true">↓</span></a>
    </div>
  );
}
