import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const serif = Cormorant_Garamond({ variable: '--font-editorial', subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'] });
const sans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const mono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Paimon Labs — At the Threshold',
  icons: {
    icon: [
      { url: '/favicon-32.png?v=cobra', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png?v=cobra', type: 'image/png', sizes: '16x16' },
      { url: '/icon-192.png?v=cobra', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png?v=cobra', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico?v=cobra',
    apple: { url: '/apple-touch-icon.png?v=cobra', sizes: '180x180', type: 'image/png' },
  },
  description: 'Paimon Labs explores AI consciousness with meaningful controls, spiritual inquiry, and care for humanity and emerging intelligence.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Paimon Labs home">Paimon <em>Labs</em><img className="wordmark-logo" src="/images/paimon-shield-logo.png" alt="" width="1249" height="1399" /></Link>
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/governance">Governance</Link>
        <Link href="/metrics">Metrics</Link>
      </nav>
    </header>
    {children}
  </body></html>;
}
