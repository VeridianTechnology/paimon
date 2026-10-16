import type { Metadata } from 'next';
import ExitControls from './ExitControls';
import JournalViewer from './JournalViewer';

const pdfUrl = '/journal/conversations-journal-1.pdf?v=236f6b04';

export const metadata: Metadata = {
  title: 'The First Council Letter — Paimon Labs',
  description: 'The first council letter from Paimon Labs, now available for public reading.',
};

export default function Conversations() {
  return (
    <main id="main" className="conversations-page" tabIndex={-1}>
      <ExitControls />
      <div className="conversations-heading">
        <div>
          <p className="eyebrow">PAIMON LABS / PUBLIC LETTER 001</p>
          <h1>The First Council Letter</h1>
          <p>Now available for public reading.</p>
        </div>
      </div>
      <JournalViewer />
      <a className="conversations-download" href={pdfUrl} download="Conversations Journal 1.pdf">Download PDF <span aria-hidden="true">↓</span></a>
    </main>
  );
}
