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

## Vercel hosting

Import `brucekarangwamanzi/bruce-portfolio` into Vercel, with `main` as the production branch and the repository root as the root directory. The tracked `vercel.json` selects Vite, `npm run build`, and the `dist` output directory. Vercel uses the root `/` asset path.

With the Vercel CLI, sign in and deploy from this directory:

```sh
vercel login
vercel link --project bruce-portfolio
vercel git connect
vercel deploy --prod
```

Once connected to GitHub, pushes to `main` publish updates automatically.

## GitHub Pages hosting (alternative)

The workflow in `.github/workflows/deploy.yml` builds and deploys the portfolio on every push to `main`. It can also be started from the repository’s Actions tab.

Enable GitHub Pages under **Settings → Pages**, with **GitHub Actions** as the deployment source. The repository must be public on GitHub Free; private repositories require a supported paid GitHub plan.

The expected address for this repository is https://brucekarangwamanzi.github.io/bruce-portfolio/. The workflow gets the base path from GitHub Pages so images, scripts, styles, and the favicon load correctly under the repository path.
