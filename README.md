# Paimon Labs

A responsive editorial site for an independent technology laboratory exploring AI consciousness. Built with React, Vinext, and CSS. Uses the supplied Paimon cobra artwork.

## Local development

Requires Node.js 22.13 or later.

```sh
npm install
npm run dev
```

Open the local URL printed by the server. `npm run build` creates the production bundle.

## Editing

- `app/page.tsx`: page content and sections.
- `app/globals.css`: typography, palette, layout, and responsive styling.
- `app/layout.tsx`: fonts and page metadata.
- `public/images/`: supplied brand artwork.
- `FIGURES-TO-GENERATE.txt`: prioritized briefs for future artwork.
- `public/figures/`: destination for those future assets; integration requires a follow-up edit.

The site includes anchor navigation, reduced-motion support, keyboard focus states, and a skip link. No form, mailing list, or invented contact address is included.
