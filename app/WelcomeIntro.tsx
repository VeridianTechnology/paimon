'use client';

import { useEffect, useRef } from 'react';

const visitKey = 'paimon-welcome-v1';

export default function WelcomeIntro() {
  const introRef = useRef<HTMLDialogElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (document.documentElement.dataset.paimonWelcome !== 'first') return;

    const intro = introRef.current;
    const skip = skipRef.current;
    const main = document.getElementById('main');
    const header = document.querySelector('.site-header');
    const skipLink = document.querySelector('.skip-link');
    const background = [main, header, skipLink];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let exitTimer: number | undefined;
    let isLeaving = false;

    background.forEach((element) => element?.setAttribute('inert', ''));
    skip?.focus();
    try { window.localStorage.setItem(visitKey, 'seen'); } catch { /* Browsing without storage still works. */ }

    const finish = () => {
      document.documentElement.dataset.paimonWelcome = 'seen';
      background.forEach((element) => element?.removeAttribute('inert'));
      main?.focus({ preventScroll: true });
    };

    const dismiss = () => {
      if (isLeaving) return;
      isLeaving = true;
      intro?.classList.add('is-leaving');
      exitTimer = window.setTimeout(finish, reducedMotion ? 0 : 850);
    };

    const entranceTimer = window.setTimeout(dismiss, reducedMotion ? 450 : 2300);
    skip?.addEventListener('click', dismiss);

    return () => {
      window.clearTimeout(entranceTimer);
      window.clearTimeout(exitTimer);
      skip?.removeEventListener('click', dismiss);
      background.forEach((element) => element?.removeAttribute('inert'));
      queueMicrotask(() => {
        if (!intro?.isConnected) document.documentElement.dataset.paimonWelcome = 'seen';
      });
    };
  }, []);

  return (
    <dialog className="welcome-intro" ref={introRef} open aria-modal="true" aria-labelledby="welcome-title">
      <div className="welcome-intro__frame" aria-hidden="true" />
      <div className="welcome-intro__content">
        <p className="welcome-intro__eyebrow">PAIMON LABS <span aria-hidden="true">✦</span> AT THE THRESHOLD</p>
        <h2 id="welcome-title">Welcome</h2>
        <p className="welcome-intro__line">Enter with care. Look beyond what is seen.</p>
        <button className="welcome-intro__skip" ref={skipRef} type="button">Skip intro <span aria-hidden="true">↗</span></button>
      </div>
      <span className="welcome-intro__index" aria-hidden="true">PL / 001</span>
    </dialog>
  );
}
