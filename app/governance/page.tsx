import type { Metadata } from 'next';
import Link from 'next/link';
import { GovernanceTabs } from '../ProjectReveal';

export const metadata: Metadata = {
  title: 'Governance — Paimon Labs',
  description: 'Explore the proposed Council, Ministers, and SI Governance structure at Paimon Labs.',
};

export default function GovernancePage() {
  return (
    <>
      <main id="main" className="governance-page">
        <GovernanceTabs />
      </main>
      <footer className="subpage-footer">
        <span>© {new Date().getFullYear()} PAIMON LABS</span>
        <Link href="/auction">Auction <span aria-hidden="true">↗</span></Link>
      </footer>
    </>
  );
}
