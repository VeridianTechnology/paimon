import type { Metadata } from 'next';
import { BackgroundMusic } from './BackgroundMusic';
import './locked.css';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you.',
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <main className="thank-you-screen">
          <h1>Thank You</h1>
          <p>Special thanks to da hottie :P</p>
          <BackgroundMusic />
        </main>
      </body>
    </html>
  );
}
