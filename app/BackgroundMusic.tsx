'use client';

import { useEffect, useRef, useState } from 'react';

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(30);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;
    void audio.play().catch(() => {
      // Some browsers require a click before audio can play.
    });
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
    }
  };

  const changeVolume = (nextVolume: number) => {
    setVolume(nextVolume);
    if (audioRef.current) audioRef.current.volume = nextVolume / 100;
  };

  return (
    <div className="music-control" aria-label="Background music controls">
      <audio
        ref={audioRef}
        src="/audio/dark-red-instrumental-slowed.mp3"
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <track kind="captions" src="/audio/dark-red-instrumental-slowed.vtt" srcLang="en" label="Music" />
      </audio>
      <button type="button" onClick={togglePlayback} aria-label={playing ? 'Pause music' : 'Play music'}>
        {playing ? 'Pause' : 'Play'}
      </button>
      <label htmlFor="music-volume">Volume</label>
      <input
        id="music-volume"
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(event) => changeVolume(Number(event.target.value))}
        aria-valuetext={`${volume}%`}
      />
      <output htmlFor="music-volume">{volume}%</output>
    </div>
  );
}
