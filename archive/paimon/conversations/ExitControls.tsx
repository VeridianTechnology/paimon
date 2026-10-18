'use client';

import type { MouseEvent } from 'react';

export default function ExitControls() {
  function leave(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    const page = document.querySelector('.conversations-page');
    if (!page || page.classList.contains('is-exiting')) return;

    page.classList.add('is-exiting');
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 420;
    window.setTimeout(() => window.location.assign('/'), delay);
  }

  return (
    <>
      <a className="conversations-close" href="/" onClick={leave} aria-label="Close Conversations and return home">×</a>
      <a className="conversations-back" href="/" onClick={leave}><span aria-hidden="true">←</span> Back</a>
    </>
  );
}
