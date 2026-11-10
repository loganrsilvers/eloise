# Repository Skeleton

A small static portfolio site. HTML pages at the root are the entry points.
Everything is grouped like this:

- **`assets/`**: files with no logic (images, fonts). Think Blazor's `wwwroot`.
- **`shared/`**: CSS/JS used by more than one page.
- **`pages/<page>/`**: CSS/JS used by exactly one page, kept together.

> **Rule of thumb:** if one page uses it, it lives in that page's folder.
> If two or more pages use it, it moves to `shared/`.

## Directory map

```text
eloise/
├── index.html                      # Portfolio grid + project detail view
├── about.html                      # About profile + press/events
├── resources.html                  # Educational materials
├── contact.html                    # Contact info + embedded Google Form
├── CNAME                           # Custom domain
├── note.txt                        # Dev notes / backlog
├── skeleton.md                     # This file
│
├── assets/
│   ├── fonts/                      # cursive.ttf, demibold.ttf, handCursive.ttf, paper.ttf
│   └── img/
│       ├── art/                    # Portfolio artwork (incl. bacteria/, plants/)
│       ├── blog/                   # Blog/editorial images
│       ├── events/                 # Press, exhibition, event photos
│       ├── icons/                  # Social + software icons
│       ├── resources/              # Educational-material images
│       ├── shop/                   # Shop + coloring-page images
│       └── eloisebody.png, eloisehead.png, eloiseheadshot.png,
│           tomatolise.webp, watermark.png
│
├── shared/
│   ├── css/
│   │   ├── site.css                # ← every page links this first; @imports the 5 below
│   │   ├── tokens.css              # colors (:root) + @font-face
│   │   ├── base.css                # body, a, img, keyframes
│   │   └── components/
│   │       ├── header.css          # title + social icon strip
│   │       ├── nav.css             # nav bar + .active
│   │       ├── footer.css          # footer
│   │       └── zigzag-cards.css    # image+text cards (NOT in site.css; linked by about + resources)
│   └── js/
│       └── protect-images.js       # blocks right-click / long-press on images
│
├── pages/
│   ├── portfolio/                  # index.html
│   │   ├── portfolio.css           # grid + detail view styles
│   │   ├── portfolio.js            # entry: builds grid, wires detail view
│   │   ├── Artwork.js              # class Artwork: one piece of art, draws its own tile
│   │   ├── artworks.js             # ★ THE LIST: add/reorder art here
│   │   └── ProjectView.js          # class ProjectView: back / prev / next
│   ├── about/about.css
│   ├── resources/resources.css
│   └── contact/contact.css
│
└── .github/workflows/jekyll-docker.yml   # Jekyll build on pushes/PRs to main
```

## Page dependency map

```text
Site
├── shared shell (every page)
│   ├── shared/css/site.css
│   │   ├── tokens.css ──> assets/fonts/*
│   │   ├── base.css
│   │   ├── components/header.css ──> assets/img/icons/*
│   │   ├── components/nav.css ──> index · resources · about · contact
│   │   └── components/footer.css
│   └── (header / nav / footer HTML is still copied into each page)
│
├── index.html [Portfolio]
│   ├── pages/portfolio/portfolio.css ──> assets/img/watermark.png
│   ├── pages/portfolio/portfolio.js  (type="module")
│   │   ├── artworks.js ──> new Artwork({...}) × N ──> assets/img/art/*
│   │   │   └── Artwork.js
│   │   └── ProjectView.js
│   └── shared/js/protect-images.js
│
├── resources.html [Educational Materials]
│   ├── shared/css/components/zigzag-cards.css
│   ├── pages/resources/resources.css
│   └── assets/img/art/bacteria/*, assets/img/resources/*, assets/img/shop/*
│
├── about.html [About and Press]
│   ├── shared/css/components/zigzag-cards.css
│   ├── pages/about/about.css
│   └── assets/img/events/*, assets/img/icons/*
│
└── contact.html [Contact]
    ├── pages/contact/contact.css
    ├── assets/img/eloisebody.png
    └── embedded Google Form (external)
```

## CSS load order (matters!)

Each page links: `site.css` → shared components it needs → its own page CSS.
Later files win ties, so page CSS can override shared CSS.

## Running locally

`portfolio.js` is an ES module, and **browsers block modules on `file:///`**.
Serve the folder instead, e.g. VS Code's *Live Server* extension, or:

```bash
python -m http.server 8000   # then open http://localhost:8000
```

## Adding a new artwork

1. Drop the image in `assets/img/art/`.
2. Add a `new Artwork({ ... })` entry in `pages/portfolio/artworks.js` where you want it to appear.
That's it; the grid tile and detail view are built from it.
