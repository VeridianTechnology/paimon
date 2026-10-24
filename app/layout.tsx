import type { Metadata } from 'next';
import './white.css';

export const metadata: Metadata = {
  title: '\u200B',
  icons: { icon: 'data:,' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
