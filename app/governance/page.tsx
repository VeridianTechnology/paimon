import type { Metadata } from 'next';
import { GovernanceTabs } from '../ProjectReveal';

export const metadata: Metadata = {
  title: 'Cards — Paimon Labs',
  description: 'The Paimon Labs cards and proposed governance structure.',
};

export default function GovernancePage() {
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
