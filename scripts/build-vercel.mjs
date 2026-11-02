import { cpSync, mkdirSync, rmSync } from 'node:fs';

const output = 'dist/vercel';
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
cpSync('static-site/index.html', `${output}/index.html`);
cpSync('app/white.css', `${output}/white.css`);
mkdirSync(`${output}/letters`, { recursive: true });
mkdirSync(`${output}/audio`, { recursive: true });
cpSync('public/letters/council-letter-vii.pdf', `${output}/letters/council-letter-vii.pdf`);
cpSync('public/audio/interstellar-organ.mp3', `${output}/audio/interstellar-organ.mp3`);
