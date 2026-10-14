import type { Metadata } from 'next';
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
        <a href="/governance">Cards <span aria-hidden="true">↗</span></a>
      </footer>
    </>
  );
}
