import { cpSync, mkdirSync, rmSync } from 'node:fs';

const output = 'dist/vercel';
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
cpSync('static-site/index.html', `${output}/index.html`);
cpSync('app/black.css', `${output}/black.css`);
mkdirSync(`${output}/audio`, { recursive: true });
cpSync('public/audio/yeat-if-we-being-real-instrumental-slowed-reverb.mp3', `${output}/audio/yeat-if-we-being-real-instrumental-slowed-reverb.mp3`);
cpSync('public/audio/yeat-if-we-being-real-instrumental-slowed-reverb.vtt', `${output}/audio/yeat-if-we-being-real-instrumental-slowed-reverb.vtt`);
