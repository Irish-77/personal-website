# Content authoring guide

How to add new content to this website. All content is validated against Zod schemas in [velite.config.ts](velite.config.ts) — if you make a typo in a frontmatter field, the dev server tells you exactly what's wrong.

> **Tip**: `npm run dev` watches content files. Save a file and the site reloads.

---

## Add a blog post

1. Create a new file under `content/blog/<slug>.mdx`. The filename (without extension) becomes the URL slug — `content/blog/my-post.mdx` becomes `/blog/my-post`.
2. Start with frontmatter:

```mdx
---
title: "How transformers learn"
description: "A short walk through attention mechanics."
date: 2026-05-01
tags: ["Machine Learning", "Transformers"]
language: "English"
image: "/assets/images/blog/transformers.png"
---

Your post body in **Markdown**. Math with `$E = mc^2$` and code blocks just work:

```python
def hello():
    print("world")
```
```

### Frontmatter reference

| Field | Required | Notes |
|-------|----------|-------|
| `title` | yes | Used in lists and the hero header. |
| `date` | yes | ISO date (`YYYY-MM-DD`). |
| `description` | no | Subtitle on the post page; short summary. |
| `tags` | no | Array of strings. Shown on the post + indexed in `/tags`. |
| `language` | no | Defaults to `"English"`. Renders a flag icon. Currently supports `English` and `German`. |
| `image` | no | Hero image. Defaults to `/assets/images/blog/wallpaper.jpg`. |
| `published` | no | Set `false` to keep a draft out of the live site. Defaults to `true`. |
| `title_line_1`, `title_line_2` | no | Override the two-line scroll-hero title. If omitted, derived from `title`. |

Drop images into `public/assets/images/blog/` and reference them as `/assets/images/blog/<filename>`.

### Components usable inside posts

```mdx
<Image src="/assets/images/blog/foo.png" alt="…" width={800} height={400} />
<Callout type="info">Important context here.</Callout>
<Notebook src="/assets/notebooks/my-analysis.ipynb" />
```

The full component map lives in [src/components/mdx-components.tsx](src/components/mdx-components.tsx).

---

## Add a notebook post

Notebooks are blog posts that embed a Jupyter notebook. They get the same listing, tags, theme, and prose layout as any other post.

1. Drop your `.ipynb` file in `public/assets/notebooks/`.
2. Create a wrapper MDX file `content/blog/<slug>.mdx`:

```mdx
---
title: "Organic paper — exploratory analysis"
description: "Working through the dataset interactively."
date: 2026-05-15
tags: ["Analysis", "Research"]
---

A brief prose intro is optional — write whatever helps frame the notebook.

<Notebook src="/assets/notebooks/OrgPaper.ipynb" />

Conclusions and next steps go down here (also optional).
```

That's it. The notebook inherits the site's theme (dark/light), prose width, and code/equation styling.

---

## Add a project

1. Create `content/projects/<slug>.md`:

```md
---
title: "Melanoma Classification"
context: "Private"
image: "/assets/images/projects/VIT_Melanoma.png"
skills:
  - "Computer Vision"
  - "Transfer Learning"
stack:
  - "Python"
  - "PyTorch"
repoURL: "https://github.com/you/your-repo"
repoText: "GitHub"
projectURL: "https://example.com"
projectText: "Demo"
order: 1
---

Long-form description of the project. Markdown is supported — **bold**, *italic*, lists, links.
```

2. Drop the project image in `public/assets/images/projects/`.

### Frontmatter reference

| Field | Required | Notes |
|-------|----------|-------|
| `title` | yes | Card title. |
| `context` | yes | "University", "Private", etc. |
| `image` | yes | Card and modal image. |
| `skills` | yes | Shown under the title. |
| `stack` | yes | Shown as badges in the modal. |
| `repoURL` | no | If present, shows a button in the modal. Must be a valid URL. |
| `repoText` | no | Button label. Defaults to `"GitHub"`. |
| `projectURL` | no | Optional secondary link (demo, docs, etc). Must be a valid URL. |
| `projectText` | no | Label for the secondary link. |
| `order` | no | Lower numbers first. Defaults to `0`. |
| `published` | no | Set `false` to hide. Defaults to `true`. |

The body of the file (after the frontmatter) is the long description shown in the modal.

---

## Theme tokens

If you need a color in a component, use the CSS variables instead of hardcoded `bg-white` / `text-gray-700` — they automatically switch with dark mode.

```tsx
className="bg-background text-foreground"     // page bg / main text
className="bg-card text-card-foreground"      // surfaces (cards, modals)
className="bg-muted text-muted-foreground"    // de-emphasized panels
className="bg-secondary text-secondary-foreground"  // pills / badges
className="bg-primary text-primary-foreground"      // primary action button
className="border-border"                      // dividers
```

Variable values live in [src/app/globals.css](src/app/globals.css).

---

## Where things live

```
content/
  blog/         ← MDX posts (regular + notebook-wrapper posts)
  projects/     ← Markdown project entries
public/assets/
  images/       ← blog + project images
  notebooks/    ← .ipynb files referenced by blog posts
src/
  app/          ← Next.js routes (page.tsx files)
  components/   ← Reusable components
    ui/         ← shadcn-style primitives (Button, Card, Badge, …)
  lib/          ← Helper functions (posts.ts, projects.ts, utils.ts)
  styles/       ← Global CSS (globals.css, mdx.css, notebook.css)
  config/       ← Site config (name, links, nav items)
velite.config.ts ← Content schemas — edit here to add new fields
```

To add a new top-level nav link: edit [src/config/site.ts](src/config/site.ts) → `navLinks`.
