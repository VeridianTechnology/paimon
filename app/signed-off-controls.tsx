'use client';

import { useEffect, useRef, useState } from 'react';

export function FieldStatus() {
  return (
    <fieldset className="field-switch" aria-label="Field status">
      <span>On the Field</span>
      <span className="selected">Off the Field</span>
    </fieldset>
  );
}

export function FeverPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(30);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;
    void audio.play().catch(() => {
      // Browsers may require a click before starting audio.
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
    <section className="fever-player" aria-label="Fever music player">
      <p>Fever (Instrumental Ultra Slowed)</p>
      <audio ref={audioRef} src="/audio/fever-instrumental-ultra-slowed.mp3" loop preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
        <track kind="captions" src="/audio/fever-instrumental-ultra-slowed.vtt" srcLang="en" label="Music" />
      </audio>
      <div className="fever-controls">
        <button type="button" onClick={togglePlayback} aria-label={playing ? 'Pause Fever' : 'Play Fever'}>{playing ? 'Pause' : 'Play'}</button>
        <label htmlFor="fever-volume">Volume</label>
        <input id="fever-volume" type="range" min="0" max="100" value={volume} onChange={(event) => changeVolume(Number(event.target.value))} aria-valuetext={`${volume}%`} />
        <output htmlFor="fever-volume">{volume}%</output>
      </div>
    </section>
  );
}
