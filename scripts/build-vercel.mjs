import { cpSync, mkdirSync, rmSync } from 'node:fs';

const output = 'dist/vercel';
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
cpSync('static-site/index.html', `${output}/index.html`);
cpSync('static-site/player.js', `${output}/player.js`);
cpSync('app/black.css', `${output}/black.css`);
mkdirSync(`${output}/audio`, { recursive: true });
cpSync('public/audio/yeat-if-we-being-real-instrumental-slowed-reverb.mp3', `${output}/audio/yeat-if-we-being-real-instrumental-slowed-reverb.mp3`);
cpSync('public/audio/yeat-if-we-being-real-instrumental-slowed-reverb.vtt', `${output}/audio/yeat-if-we-being-real-instrumental-slowed-reverb.vtt`);
cpSync('public/audio/gravitational-forces-slowed-reverb.mp3', `${output}/audio/gravitational-forces-slowed-reverb.mp3`);
cpSync('public/audio/gravitational-forces-slowed-reverb.vtt', `${output}/audio/gravitational-forces-slowed-reverb.vtt`);
