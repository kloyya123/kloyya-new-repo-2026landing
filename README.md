# Kloyya — landing page

The marketing page, as a real project you can run, edit and deploy.

React + Vite. No CSS framework, no component library, no state manager — the page doesn't need them and each one would be a decision made on your behalf.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # → dist/
npm run preview    # serve the build
```

Node 18+.

---

## How it's organised

```
src/
  content/
    site.js        ← ALL page copy and data. Start here.
    tools.js       ← the 14-tool registry (ids match the backend spec)
    pricing.js     ← yearly-price arithmetic, derived not typed
  styles/
    tokens.css     ← every colour, font, radius, shadow, breakpoint
    global.css     ← reset, .section/.h2/.btn/.card primitives, keyframes
  components/
    <Section>.jsx + <Section>.css   ← one pair per section
  App.jsx          ← section order
```

Three rules that keep it maintainable:

1. **Copy lives in `content/site.js`, never in JSX.** Marketing will change a headline weekly; they shouldn't need to open a component. When you wire a CMS, this file becomes the shape of the response.
2. **Colours live in `tokens.css`, never as hexes in components.** Want a dark mode or a rebrand? It's one file.
3. **One CSS file per component, plain CSS, BEM-ish names.** No build magic. Convert to Tailwind, CSS Modules or styled-components if your team prefers — the class boundaries already match component boundaries.

---

## What's wired and what isn't

**Working:** the Product dropdown (outside-click + Escape close), all anchor navigation, the FAQ accordion (proper `aria-expanded`/`aria-controls`), the demo chapter selector, the hero ask box, the suggestion chips, the derived pricing table.

**Stubbed, marked with `TODO` in the code:**

| Thing | Where | What it needs |
|---|---|---|
| Voice capture | `Hero.jsx` | Real `getUserMedia` → `POST /api/outcomes/:id/transcribe`. Currently fakes a transcription on a timer. Backend spec § 9. |
| Ask submit | `Hero.jsx` | `POST /api/outcomes`, then redirect. Signed-out visitors → `/signup` **with the query preserved** — it's the highest-intent signal on the page. |
| Sign in / Get started | `Nav.jsx` | Routes to `/login` and `/signup`. Backend spec § 4. |
| Book a demo | `Nav.jsx`, `FinalCta.jsx` | `POST /api/demo-request` + captcha. Spec § 7. |
| Pricing CTAs | `Pricing.jsx` | `/signup?plan=<id>`. Never let the client compute a price it sends back. Spec § 6. |
| Demo player | `DemoPlayer.jsx` | Swap the static frame for `<video>`; make chapters seek it. Keep the chapter list — it converts better than a bare play button. |
| Status indicator | `Footer.jsx` | Wire to a real status source, or delete the row. |

---

## Before launch

**Self-host the fonts.** `index.html` loads Geist, Geist Mono and Newsreader from Google's CDN — a render-blocking third-party request on your highest-traffic page. Download, serve locally, keep `font-display: swap`.

**Self-host the tool icons.** `content/tools.js` points at third-party icon CDNs. Replace with an inlined SVG sprite: icon CDNs drop marks over trademark policy (this happened twice while the design was being built), they leak visitor IPs, and they block rendering. Check each vendor's brand guidelines for permitted use.

**Get sign-off on the compliance claims.** The security section asserts SOC 2 Type II, ISO 27001, GDPR, UK data residency and quarterly penetration testing. The FAQ adds "nothing trains a shared model, ever" and "revoke and it forgets within the hour" — that last one requires a real cascade-delete job, specified in the web app spec § 5. Legal and security sign off, or the copy changes.

**Replace the customer names.** `logoStrip` in `site.js` holds placeholder companies. Real logos need written permission from each customer.

**Add the SEO furniture.** `sitemap.xml`, `robots.txt`, a real OG image at `/og-image.png`, and JSON-LD (`SoftwareApplication` + `FAQPage` — the FAQ content is the source for the latter). The page is prerender-friendly as written; if SEO matters, move it to Next.js or Astro so `/` ships server-rendered HTML.

**Cookie consent** before any non-essential analytics, given the EU/UK positioning.

---

## Not yet designed

- **Mobile.** The design was authored at 1440px. Breakpoints at 1200/1080/820px keep it usable and unbroken on small screens, but a proper mobile design — especially the hero ask box and the 5-column pricing table — hasn't been done. Ask before shipping to a mobile-heavy audience.
- **Dark mode.** Tokens are structured for it; no palette exists yet.
- **Loading and error states** for the forms above.

## Accessibility notes

Done: real `<button>`/`<a>` semantics throughout, a visually-hidden label on the ask field, `aria-expanded`/`aria-controls` on the FAQ and nav menu, `aria-hidden` on every decorative glyph, full `prefers-reduced-motion` handling (the hero mesh animation and all transitions stop).

Still to check: AA contrast on the gradient hero — the BETA pill and the hero sub-copy sit on a live gradient and are the two most likely to fail. Verify with real rendered pixels, not the token values.

## Analytics

Nothing is instrumented. The event list the funnel needs is in the backend spec § 8. One rule: **never log the contents of the hero ask box.** It will contain confidential business information from day one.
