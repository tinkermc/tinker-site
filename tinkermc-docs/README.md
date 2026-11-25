# Tinker Docs

The docs site for Tinker, built with [Vocs](https://vocs.dev). Lives at **docs.tinkermc.com**.

## Tommy's quick guide

### Run it on your computer

```bash
cd tinkermc-docs
npm install      # first time only
npm run dev      # then open http://localhost:5173
```

Leave `npm run dev` running. Every time you save a file, the page in your browser updates.

### Where things are

| What | Where |
| --- | --- |
| Pages | `src/pages/` (one `.mdx` file = one page) |
| Sidebar menu | `vocs.config.ts` → `sidebar` |
| Screenshots and images | `public/images/` |
| A blank page to copy | `templates/page.mdx` |
| Every formatting option (callouts, steps, tabs, code) | `src/pages/contributing/kitchen-sink.mdx`, or open `/contributing/kitchen-sink` in the browser |
| Colours and fonts | `public/vocs.css` (you shouldn't need to touch this) |

### Write a page that already exists

Every page in the sidebar already has a file with a **"To write"** box listing what it should cover.
Open the file, delete the `{/* TODO */}` line and the "To write" box, and write the page.

Search the project for `TODO(Tommy)` to see which pages are still empty.

### Add a new page

1. Copy `templates/page.mdx` into `src/pages/`, in the right folder. For example, `src/pages/dash/backups.mdx`.
2. Change the `title` and `description` at the top.
3. Add it to the sidebar in `vocs.config.ts`. The link is the file path without `src/pages` and `.mdx`:
   ```ts
   { text: 'Backups', link: '/dash/backups' },
   ```

### Add a screenshot

1. Put the image in `public/images/`, in a folder per section: `public/images/dash/console-filters.png`.
2. Use it in a page (leave out `public`):
   ```md
   ![The console with the Warnings filter on](/images/dash/console-filters.png)
   ```

### Links

- To another docs page: `[Install the Agent](/agent/install)`
- To the main site: `[Tinker Plus](https://tinkermc.com/#plus)`

The build fails if a link points to a page that doesn't exist, so typos get caught.

### Before you push

```bash
npm run build
```

If that finishes without errors, the site will deploy fine.

## Deploying (docs.tinkermc.com)

The docs build to plain HTML files in `dist/public` (`renderStrategy: 'full-static'` in `vocs.config.ts`). Host them as their own **Cloudflare Pages** project, connected to the same GitHub repo as the main site:

| Setting | Value |
| --- | --- |
| Root directory | `tinkermc-docs` |
| Build command | `npm run build` |
| Build output directory | `dist/public` |
| Environment variable | `NODE_VERSION` = `22` |

Then in that Pages project: **Custom domains → Set up a domain → `docs.tinkermc.com`**. Because tinkermc.com's DNS is already on Cloudflare, it adds the `docs` record for you.

Every push to `main` redeploys the docs. Pull requests get their own preview link.
