# Kevin Andrean Haryadi Portfolio

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local URL in the terminal. To create a production build, run `npm run build`.

## Update content

Edit [src/data/content.js](src/data/content.js) for profile details, project copy and links, skills, experience, navigation labels, and contact information. Optional LinkedIn and project URLs are hidden when empty.

## Replace project screenshots

Place project images in `public/images/projects/<project-slug>/`. Update that project's `images` paths in `src/data/content.js` to match the filenames, relative to `public/`. The optional `imagePositions` array sets the thumbnail crop for each image in the same order, using CSS `object-position` values (for example, `center`, `top`, or `50% 35%`). Missing entries default to `center`. The gallery expects three images per project; use 16:10 screenshots for consistent thumbnails. Existing SVGs are labeled placeholders.

## Design directions

The active portfolio uses the engineering-led direction. See [DESIGN-DIRECTIONS.md](./DESIGN-DIRECTIONS.md) for the saved reference for directions 01 and 02.

## Deploy

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the `main` branch to GitHub Pages. In the repository settings, set **Pages** to use **GitHub Actions** as the build and deployment source. The workflow sets `VITE_BASE_PATH` to the repository path. For another deployment path, set `VITE_BASE_PATH` during the build; it defaults to `/` for local development and root deployments.

Project detail URLs use HashRouter, so shared project links work on GitHub Pages without server-side route configuration.