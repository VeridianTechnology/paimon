import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist, Geist_Mono } from 'next/font/google';
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
  description: 'An independent technology laboratory exploring the frontier of AI consciousness. Develop. Protect. Welcome.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${serif.variable} ${sans.variable} ${mono.variable}`}>{children}</body></html>;
}
