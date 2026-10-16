'use client';

import { useState } from 'react';

const imageUrl = '/journal/conversations-journal-1.png?v=236f6b04';
const minZoom = 75;
const maxZoom = 200;
const zoomStep = 25;

export default function JournalViewer() {
  const [zoom, setZoom] = useState(100);

  return (
    <div className="conversations-reader">
      <div className="conversations-zoom" role="group" aria-label="Journal zoom">
        <button type="button" aria-label="Zoom out" onClick={() => setZoom(value => Math.max(minZoom, value - zoomStep))} disabled={zoom === minZoom}>−</button>
        <output aria-live="polite">{zoom}%</output>
        <button type="button" aria-label="Zoom in" onClick={() => setZoom(value => Math.min(maxZoom, value + zoomStep))} disabled={zoom === maxZoom}>+</button>
      </div>
      <div className="conversations-viewer">
        <img src={imageUrl} alt="Page 1 of Conversations, the first Paimon Labs journal" width="2448" height="3168" style={{ width: `${zoom}%` }} />
      </div>
    </div>
  );
}
