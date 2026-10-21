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
          <section className="vostok-downloads" aria-label="Looksmax downloads">
            <p className="vostok-dedication">Dedicated to Mrs. Sánchez and Mrs. Chan.</p>
            <div className="vostok-links">
              <a href="/downloads/looksmax-intro.pdf" download="Looksmax Intro.pdf">Looksmax Intro</a>
              <a href="/downloads/looksmax-method-full.pdf" download="Looksmax Method Full.pdf">Looksmax Method Full</a>
            </div>
            <p className="vostok-note">
              This is some cornball shit,<br />
              but I love my method and take looks very seriously.<br />
              I&apos;m a bit of a goof, please enjoy -<br />
              not necessary to do at all.
            </p>
          </section>
          <BackgroundMusic />
        </main>
      </body>
    </html>
  );
}
