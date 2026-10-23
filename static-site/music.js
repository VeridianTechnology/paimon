const audio = document.querySelector('#background-audio');

function removeFallback() {
  window.removeEventListener('pointerdown', start);
  window.removeEventListener('keydown', start);
  window.removeEventListener('touchstart', start);
}

function start() {
  audio.play().then(removeFallback).catch(() => {});
}

window.addEventListener('pointerdown', start);
window.addEventListener('keydown', start);
window.addEventListener('touchstart', start);
start();
