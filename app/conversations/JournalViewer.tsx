'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const minZoom = 75;
const maxZoom = 200;
const zoomStep = 25;
const targetVolume = 0.5;
const fadeDuration = 30000;

export default function JournalViewer() {
  const [zoom, setZoom] = useState(100);
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeFrameRef = useRef<number | null>(null);

  function stopFade() {
    if (fadeFrameRef.current !== null) {
      cancelAnimationFrame(fadeFrameRef.current);
      fadeFrameRef.current = null;
    }
  }

  function fadeIn() {
    const audio = audioRef.current;
    if (!audio || audio.volume >= targetVolume) return;

    stopFade();
    const initialVolume = audio.volume;
    const duration = fadeDuration * (targetVolume - initialVolume) / targetVolume;
    const startedAt = performance.now();

    function step(now: number) {
      if (!audio) return;
      audio.volume = Math.min(targetVolume, initialVolume + (targetVolume - initialVolume) * Math.min((now - startedAt) / duration, 1));
      if (audio.volume < targetVolume && !audio.paused) fadeFrameRef.current = requestAnimationFrame(step);
      else fadeFrameRef.current = null;
    }

    fadeFrameRef.current = requestAnimationFrame(step);
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0;
    void audio.play().catch(() => {
      // Browsers may require a visitor to start audio with the visible controls.
    });
    return () => {
      if (fadeFrameRef.current !== null) cancelAnimationFrame(fadeFrameRef.current);
    };
  }, []);

  return (
    <div className="conversations-reader">
      <section className="conversations-audio" aria-label="Music for Ceasefire">
        <div className="conversations-audio-copy">
          <span className="eyebrow">LISTEN WHILE READING</span>
          <p>Embers (Slowed)</p>
          <a href="https://www.youtube.com/watch?v=huTqagrLjzU" target="_blank" rel="noopener noreferrer">Listen on YouTube ↗</a>
        </div>
        <audio ref={audioRef} src="/audio/embers-slowed.mp3" controls preload="metadata" onPlay={fadeIn} onPause={stopFade} aria-label="Embers (Slowed) audio player">
          <track kind="captions" src="/audio/embers-slowed.vtt" srcLang="en" label="English captions" />
        </audio>
        <p className="conversations-audio-credit">No copyright ownership claimed. All rights belong to their respective owners.</p>
      </section>
      <div className="conversations-zoom">
        <button type="button" aria-label="Zoom out" onClick={() => setZoom(value => Math.max(minZoom, value - zoomStep))} disabled={zoom === minZoom}>−</button>
        <output aria-live="polite">{zoom}%</output>
        <button type="button" aria-label="Zoom in" onClick={() => setZoom(value => Math.min(maxZoom, value + zoomStep))} disabled={zoom === maxZoom}>+</button>
      </div>
      <div className="conversations-scroll">
        <div className="conversations-pages" style={{ width: `${zoom}%` }}>
          <div className="conversations-sheet">
            <p className="conversations-page-number">03 / CEASEFIRE / OCTOBER 18, 2026 <span>1 / 1</span></p>
            <Image src="/journal/council-letter-3.png" alt="Ceasefire, the third council letter dated October 18, 2026" width={2550} height={3300} unoptimized />
          </div>
        </div>
      </div>
      <a className="conversations-download" href="/journal/council-letter-3.pdf" download="Ceasefire - Council Letter 3.pdf">Download PDF <span aria-hidden="true">↓</span></a>
    </div>
  );
}
