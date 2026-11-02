'use client';

import { useRef, useState } from 'react';

export default function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="audio-control">
      <audio ref={audioRef} src="/audio/interstellar-organ.mp3" preload="none" onEnded={() => setPlaying(false)} />
      <button type="button" onClick={toggle} aria-label={playing ? 'Pause music' : 'Play music'} aria-pressed={playing}>
        <span className="audio-icon" aria-hidden="true">{playing ? 'Ⅱ' : '▶'}</span>
        <span>{playing ? 'PAUSE SOUND' : 'PLAY SOUND'}</span>
      </button>
    </div>
  );
}
