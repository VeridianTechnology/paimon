import type { Metadata } from 'next';
import { GovernanceTabs } from '../ProjectReveal';

export const metadata: Metadata = {
  title: 'Cards — Paimon Labs',
  description: 'Explore the Paimon Labs cards and proposed governance structure.',
};

export default function GovernancePage() {
  return (
    <>
      <main id="main" className="governance-page" tabIndex={-1}>
        <GovernanceTabs />
      </main>
      <footer className="subpage-footer">
        <span>© {new Date().getFullYear()} PAIMON LABS</span>
        <a href="/">Return home <span aria-hidden="true">↗</span></a>
      </footer>
    </>
  );
}
