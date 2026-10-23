export default function HomePage() {
  return (
    <main className="music-page">
      <section className="music-player" aria-label="Music player">
        <audio controls autoPlay loop preload="metadata" src="/audio/yeat-if-we-being-real-instrumental-slowed-reverb.mp3">
          <track kind="captions" src="/audio/yeat-if-we-being-real-instrumental-slowed-reverb.vtt" srcLang="en" label="Music" />
        </audio>
        <a href="https://www.youtube.com/watch?v=mDzUZKnvn2I" target="_blank" rel="noopener noreferrer">
          Watch on YouTube ↗
        </a>
      </section>
    </main>
  );
}
