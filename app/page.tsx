import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="music-page">
      <Image className="corner-seal" src="/images/council-letter-v-seal.png" alt="White castle seal" width={2688} height={1520} priority unoptimized />
      <a className="letter-download" href="/letters/council-letter-v.pdf" download="Council Letter 5.pdf">
        Download Council Letter 5
      </a>
      <section className="music-player" aria-label="Music player">
        <p className="song-title">gravitational forces (slowed + reverb)</p>
        <audio controls autoPlay loop preload="metadata" src="/audio/gravitational-forces-slowed-reverb.mp3">
          <track kind="captions" src="/audio/gravitational-forces-slowed-reverb.vtt" srcLang="en" label="Music" />
        </audio>
      </section>
    </main>
  );
}
