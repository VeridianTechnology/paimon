import type { Metadata } from 'next';
import Link from 'next/link';
import { NftCarousel } from '../ProjectReveal';

export const metadata: Metadata = {
  title: 'Auction — Paimon Labs',
  description: 'A locked preview of seven forthcoming Paimon Labs digital artifacts.',
};

export default function AuctionPage() {
  return (
    <>
      <main id="main" className="auction-page">
        <NftCarousel locked />
      </main>
      <footer className="subpage-footer">
        <span>© {new Date().getFullYear()} PAIMON LABS</span>
        <Link href="/governance">Governance <span aria-hidden="true">↗</span></Link>
      </footer>
    </>
  );
}
