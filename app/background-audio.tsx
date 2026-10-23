'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    function removeFallback() {
      window.removeEventListener('pointerdown', start);
      window.removeEventListener('keydown', start);
      window.removeEventListener('touchstart', start);
    }

    function start() {
      void audio?.play().then(removeFallback).catch(() => {});
    }

    window.addEventListener('pointerdown', start);
    window.addEventListener('keydown', start);
    window.addEventListener('touchstart', start);
    start();
    return removeFallback;
  }, []);

  return (
    <audio ref={audioRef} autoPlay loop preload="auto" src="/audio/gravitational-forces-slowed-reverb.mp3">
      <track kind="captions" src="/audio/gravitational-forces-slowed-reverb.vtt" srcLang="en" label="Music" />
    </audio>
  );
}
