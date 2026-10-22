import { cpSync, mkdirSync, rmSync } from 'node:fs';

const output = 'dist/vercel';
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
cpSync('static-site/index.html', `${output}/index.html`);
cpSync('static-site/player.js', `${output}/player.js`);
cpSync('app/black.css', `${output}/black.css`);
cpSync('public/images', `${output}/images`, { recursive: true });
cpSync('public/audio', `${output}/audio`, { recursive: true });
