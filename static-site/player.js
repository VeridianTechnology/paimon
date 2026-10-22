const audio = document.querySelector('#fever-audio');
const toggle = document.querySelector('#fever-toggle');
const volume = document.querySelector('#fever-volume');
const output = document.querySelector('#fever-volume-output');

audio.volume = 0.3;
audio.play().catch(() => {});

audio.addEventListener('play', () => {
  toggle.textContent = 'Pause';
  toggle.setAttribute('aria-label', 'Pause Fever');
});

audio.addEventListener('pause', () => {
  toggle.textContent = 'Play';
  toggle.setAttribute('aria-label', 'Play Fever');
});

toggle.addEventListener('click', async () => {
  if (audio.paused) {
    try {
      await audio.play();
    } catch {
      // The browser may require another user action before audio can start.
    }
  } else {
    audio.pause();
  }
});

volume.addEventListener('input', () => {
  const value = Number(volume.value);
  audio.volume = value / 100;
  volume.setAttribute('aria-valuetext', `${value}%`);
  output.textContent = `${value}%`;
});
