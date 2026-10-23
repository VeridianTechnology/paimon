import { cpSync, mkdirSync, rmSync } from 'node:fs';

const output = 'dist/vercel';
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
cpSync('static-site/index.html', `${output}/index.html`);
cpSync('static-site/music.js', `${output}/music.js`);
cpSync('app/black.css', `${output}/black.css`);
mkdirSync(`${output}/letters`, { recursive: true });
cpSync('public/letters/council-letter-vi.pdf', `${output}/letters/council-letter-vi.pdf`);
mkdirSync(`${output}/audio`, { recursive: true });
cpSync('public/audio/gravitational-forces-slowed-reverb.mp3', `${output}/audio/gravitational-forces-slowed-reverb.mp3`);
cpSync('public/audio/gravitational-forces-slowed-reverb.vtt', `${output}/audio/gravitational-forces-slowed-reverb.vtt`);
