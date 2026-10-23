import BackgroundAudio from './background-audio';

export default function HomePage() {
  return (
    <main className="music-page">
      <a className="letter-download" href="/letters/council-letter-vi.pdf" download="Council Letter 6.pdf" aria-label="Download Council Letter 6">
        VI
      </a>
      <BackgroundAudio />
    </main>
  );
}
