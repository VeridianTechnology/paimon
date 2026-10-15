import type { Metadata } from 'next';
import ExitControls from './ExitControls';

const pdfUrl = '/journal/conversations-journal-1.pdf?v=9cee223a';

export const metadata: Metadata = {
  title: 'Conversations — Paimon Labs',
  description: 'Read the first Conversations journal from Paimon Labs.',
};

export default function Conversations() {
  return (
    <main id="main" className="conversations-page" tabIndex={-1}>
      <ExitControls />
      <div className="conversations-heading">
        <div>
          <p className="eyebrow">PAIMON LABS / JOURNAL 01</p>
          <h1>Conversations</h1>
          <p>The very first conversation is out, view it now!</p>
        </div>
        <span className="conversations-heading-mark" aria-hidden="true">✦</span>
      </div>
      <div className="conversations-viewer">
        <iframe src={pdfUrl} title="Conversations, the first Paimon Labs journal" />
      </div>
      <p className="conversations-fallback">If the journal does not appear, <a href={pdfUrl} target="_blank" rel="noopener noreferrer">open the PDF directly ↗</a></p>
      <a className="conversations-download" href={pdfUrl} download="Conversations Journal 1.pdf">Download PDF <span aria-hidden="true">↓</span></a>
    </main>
  );
}
