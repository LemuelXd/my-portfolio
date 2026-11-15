# Lemuel Njoroge — Portfolio

Personal portfolio built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

**Live site:** https://portfolio-lemuel.vercel.app/

## Requirements

- Node.js 22+
- npm

## Local development

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Configure the environment variables in `.env.local` before using the contact form or weather service.

## Environment variables

| Variable | Where it runs | Purpose |
| --- | --- | --- |
| `OPENWEATHER_API_KEY` | Server only (Vercel Function) | Calls OpenWeatherMap without exposing the key in browser bundles |
| `VITE_EMAILJS_SERVICE_ID` | Browser | EmailJS service identifier |
| `VITE_EMAILJS_TEMPLATE_ID` | Browser | EmailJS template identifier |
| `VITE_EMAILJS_PUBLIC_KEY` | Browser | EmailJS public key (designed to be public) |

Set these in Vercel Project Settings → Environment Variables for production deployments. Do not commit real credentials or `.env.local`.

## Scripts

- `npm run dev` — start the local development server
- `npm run build` — TypeScript project build and production bundle
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build locally

## Production source visibility

The production build is minified and source maps are disabled. This makes the delivered bundle less readable, but **no browser-based frontend can hide the JavaScript, HTML or CSS required to render it**. Never place private credentials, secret algorithms or privileged business logic in client-side code. Keep those on server endpoints such as `api/weather.js`.

## Deployment

The main site is deployed on Vercel. Add the environment variables above in the Vercel dashboard, then redeploy. The GitHub Pages workflow is retained as an optional CI/deployment workflow.
