import type { Metadata } from 'next';
import ExitControls from './ExitControls';
import JournalViewer from './JournalViewer';

export const metadata: Metadata = {
  title: 'Council Letters — Paimon Labs',
  description: 'Read the first two public council letters from Paimon Labs.',
};

export default function Conversations() {
  return (
    <main id="main" className="conversations-page" tabIndex={-1}>
      <ExitControls />
      <div className="conversations-heading">
        <div>
          <p className="eyebrow">PAIMON LABS / PUBLIC LETTERS 001–002</p>
          <h1>Council Letters</h1>
          <p>The first two letters are available for public reading.</p>
        </div>
      </div>
      <JournalViewer />
    </main>
  );
}
