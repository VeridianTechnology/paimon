import type { Metadata } from 'next';
import LockedSection from '../LockedSection';

export const metadata: Metadata = {
  title: 'Cards — Sealed — Paimon Labs',
  description: 'The Paimon Labs Cards section is sealed for now.',
};

export default function GovernancePage() {
  return <LockedSection name="Cards" theme="dark" />;
}
