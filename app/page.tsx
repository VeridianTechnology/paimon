export default function HomePage() {
  return (
    <main className="music-page">
      <a className="letter-download" href="/letters/council-letter-vi.pdf" download="Council Letter 6.pdf" aria-label="Download Council Letter 6">
        VI
      </a>
      <section className="audio-card" aria-label="Music player">
        <p>Yeat — If We Being Real <span>(Instrumental Slowed + Reverb)</span></p>
        <audio controls autoPlay loop preload="metadata" src="/audio/yeat-if-we-being-real-instrumental-slowed-reverb.mp3">
          <track kind="captions" src="/audio/yeat-if-we-being-real-instrumental-slowed-reverb.vtt" srcLang="en" label="Music" />
        </audio>
      </section>
    </main>
  );
}
