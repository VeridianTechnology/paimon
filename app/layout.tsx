import type { Metadata } from 'next';
import { BackgroundMusic } from './BackgroundMusic';
import './locked.css';

export const metadata: Metadata = {
  title: '\u200B',
  icons: { icon: 'data:,' },
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <main className="thank-you-screen">
          <a className="letter-download" href="/journal/council-letter-4.pdf" download="Council Letter IV.pdf">
            Download Council Letter IV
          </a>
          <BackgroundMusic />
        </main>
      </body>
    </html>
  );
}
