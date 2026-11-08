import { cpSync, mkdirSync, rmSync } from 'node:fs';

const output = 'dist/vercel';
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
cpSync('static-site/index.html', `${output}/index.html`);
cpSync('app/black.css', `${output}/black.css`);
mkdirSync(`${output}/letters`, { recursive: true });
cpSync('public/letters/consumer-awareness.pdf', `${output}/letters/consumer-awareness.pdf`);
mkdirSync(`${output}/audio`, { recursive: true });
cpSync('public/audio/interstellar-organ.mp3', `${output}/audio/interstellar-organ.mp3`);
