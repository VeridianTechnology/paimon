import { cpSync, mkdirSync, rmSync } from 'node:fs';

const output = 'dist/vercel';
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
cpSync('static-site/index.html', `${output}/index.html`);
cpSync('app/white.css', `${output}/white.css`);
