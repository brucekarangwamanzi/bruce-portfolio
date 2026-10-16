# Karangwa Manzi Bruce — Personal Portfolio

A React + Vite portfolio for Karangwa Manzi Bruce, a Software Developer & Creative Video Editor based in Kigali, Rwanda.

## Run locally

```sh
npm ci
npm run dev -- --host 0.0.0.0
```

Open the URL Vite prints (normally http://localhost:5173).

## Update the portfolio

- Personal details and profile links: `src/profile.js`.
- Profile photo: `src/assets/me.jpg`.
- About, services, and skills copy: the corresponding components under `src/Components`.
- Page title and description: `index.html`.

The work section links to Bruce’s GitHub. Sample project images, blog posts, and testimonials are not displayed. The contact form opens a draft in the visitor’s email application; it does not send mail through a server.

## Production build

```sh
npm run build
npm run preview
```
