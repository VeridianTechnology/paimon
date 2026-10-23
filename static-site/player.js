const tracks = [
  {
    audio: '/audio/yeat-if-we-being-real-instrumental-slowed-reverb.mp3',
    captions: '/audio/yeat-if-we-being-real-instrumental-slowed-reverb.vtt',
  },
  {
    audio: '/audio/gravitational-forces-slowed-reverb.mp3',
    captions: '/audio/gravitational-forces-slowed-reverb.vtt',
  },
];

const audio = document.querySelector('#playlist-audio');
const captions = document.querySelector('#playlist-captions');
const labels = [document.querySelector('#first-track'), document.querySelector('#second-track')];
let current = 0;

function skip() {
  current = (current + 1) % tracks.length;
  audio.src = tracks[current].audio;
  captions.src = tracks[current].captions;
  labels.forEach((label, index) => {
    label.classList.toggle('is-current', index === current);
    if (index === current) label.setAttribute('aria-current', 'true');
    else label.removeAttribute('aria-current');
  });
  audio.load();
  audio.play().catch(() => {
    // Browsers can require a click before starting audio.
  });
}

document.querySelector('#skip-track').addEventListener('click', skip);
audio.addEventListener('ended', skip);
audio.play().catch(() => {});
