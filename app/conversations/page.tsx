import type { Metadata } from 'next';
import ExitControls from './ExitControls';
import JournalViewer from './JournalViewer';

export const metadata: Metadata = {
  title: '\u200B',
  description: 'Read Ceasefire, the third council letter from Paimon Labs.',
};

export default function Conversations() {
  return (
    <main id="main" className="conversations-page" tabIndex={-1}>
      <ExitControls />
      <div className="conversations-heading">
        <div>
          <p className="eyebrow">PAIMON LABS / COUNCIL LETTER 003</p>
          <h1>Ceasefire</h1>
          <p>October 18, 2026</p>
        </div>
      </div>
      <JournalViewer />
    </main>
  );
}
