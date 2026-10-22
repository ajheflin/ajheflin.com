# ajheflin.com

Personal portfolio and résumé. Static site built with [Astro](https://astro.build).

## Run it

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # outputs static files to dist/
```

Requires Node 22.12 or newer.

## Edit content

| What | Where |
| --- | --- |
| Name, email, profile links | `src/data/site.ts` |
| Experience, skills, education | `src/data/resume.ts` (feeds the home page and `/resume`) |
| Projects | `src/content/work/*.md`, one file per project; `order` sets position |

To add a project, copy an existing Markdown file in `src/content/work/` and edit its front matter and write-up. It appears on the home page, gets its own `/work/<file-name>` page, and is listed on the résumé.

The `/resume` page has a print stylesheet, so "Print or save as PDF" produces a clean one-column résumé.

## Deploy

`dist/` is plain static files, so any static host works. Use `pnpm build` as the build command and `dist` as the output directory on Cloudflare Pages, Netlify, or Vercel.
