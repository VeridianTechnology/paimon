import type { Metadata } from 'next';
import './white.css';

export const metadata: Metadata = {
  title: 'Epistula VII | Paimon Labs',
  icons: { icon: 'data:,' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
