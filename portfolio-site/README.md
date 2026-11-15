# Portfolio Site

The portfolio is a Vue 3 single-page application built with Vite and Vue Router.

## Requirements

- Node.js 22
- npm

## Development

From this directory, install the locked dependencies and start the development server:

```sh
npm ci
npm run dev
```

Run the frontend tests and production build with:

```sh
npm test -- --run
npm run build
```

The production build is written to `dist/`. The Vite configuration uses `/Portfolio/` as the base path for production builds on GitHub Pages.

## Deployment

The GitHub Pages workflow builds and deploys this site when changes are pushed to the repository's `master` branch. It uses `npm ci` to install the versions recorded in `package-lock.json`.
