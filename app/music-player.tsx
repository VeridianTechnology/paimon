'use client';

import { useEffect, useRef, useState } from 'react';

const tracks = [
  {
    title: 'If We Being Real (Instrumental Slowed + Reverb)',
    audio: '/audio/yeat-if-we-being-real-instrumental-slowed-reverb.mp3',
    captions: '/audio/yeat-if-we-being-real-instrumental-slowed-reverb.vtt',
  },
  {
    title: 'gravitational forces (slowed + reverb)',
    audio: '/audio/gravitational-forces-slowed-reverb.mp3',
    captions: '/audio/gravitational-forces-slowed-reverb.vtt',
  },
];

export default function MusicPlayer() {
  const [current, setCurrent] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    void audioRef.current?.play().catch(() => {
      // Browsers can require a click before starting audio.
    });
  }, [current]);

  const skip = () => setCurrent((index) => (index + 1) % tracks.length);

  return (
    <section className="music-player" aria-label="Music player">
      <div className="track-list">
        <a
          className={current === 0 ? 'track-name is-current' : 'track-name'}
          href="https://www.youtube.com/watch?v=mDzUZKnvn2I"
          target="_blank"
          rel="noopener noreferrer"
          aria-current={current === 0 ? 'true' : undefined}
        >
          If We Being Real (Instrumental Slowed + Reverb) ↗
        </a>
        <button type="button" className="skip-button" onClick={skip} aria-label="Skip to the other track">
          Skip
        </button>
        <span className={current === 1 ? 'track-name is-current' : 'track-name'} aria-current={current === 1 ? 'true' : undefined}>
          gravitational forces (slowed + reverb)
        </span>
      </div>
      <audio key={current} ref={audioRef} controls autoPlay preload="metadata" src={tracks[current].audio} onEnded={skip} aria-label={tracks[current].title}>
        <track kind="captions" src={tracks[current].captions} srcLang="en" label="Music" />
      </audio>
    </section>
  );
}
