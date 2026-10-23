import BackgroundAudio from './background-audio';

export default function HomePage() {
  return (
    <main className="music-page">
      <a className="letter-download" href="/letters/council-letter-v.pdf" download="Council Letter 5.pdf" aria-label="Download Council Letter 5">
        V
      </a>
      <BackgroundAudio />
    </main>
  );
}
