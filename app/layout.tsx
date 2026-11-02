import type { Metadata } from 'next';
import './black.css';

export const metadata: Metadata = {
  title: 'Paimon Labs',
  icons: { icon: 'data:,' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
