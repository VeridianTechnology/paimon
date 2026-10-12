import type { Metadata } from 'next';
import { GovernanceTabs } from '../ProjectReveal';
import LockedSection from '../LockedSection';

export const metadata: Metadata = {
  title: 'Cards — Sealed — Paimon Labs',
  description: 'The Paimon Labs Cards section is sealed for now.',
};

function GovernanceContentPage() {
  return (
    <>
      <main id="main" className="governance-page">
        <GovernanceTabs />
      </main>
      <footer className="subpage-footer">
        <span>© {new Date().getFullYear()} PAIMON LABS</span>
        <a href="/auction">Auction <span aria-hidden="true">↗</span></a>
      </footer>
    </>
  );
}

export default function GovernancePage() {
  const locked = true;
  return locked ? <LockedSection name="Cards" theme="dark" /> : <GovernanceContentPage />;
}
