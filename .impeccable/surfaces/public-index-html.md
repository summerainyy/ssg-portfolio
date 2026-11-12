---
version: 1
slug: "public-index-html"
primary_target: "public/index.html"
related_targets: []
---

# Surface: portfolio home (index.html)

Mode: Experience (personal portfolio; the work and the photography lead). Primary visitor: OJT supervisor / HR skimming on a laptop. Action: email/phone/Facebook contact or résumé download. Proof: 4 real projects (user trimmed the list on 2026-11-08), 5 real credentials, real counts only. Constraints: all current copy verbatim (headings may shorten), photos limited to the hero cutout and about portrait (user, 2026-11-08: "remove the picture at the bottom and the 'a little bit about me' section"), original golden-hour palette kept.

## Direction contract

THESIS: Lantern night to daylight. The page is one evening walk from her cutout portrait standing in front of the lantern-amber wordmark to a sunlit-stone contact band (the gallery strip and contact photo were removed at the user's request on 2026-11-08), set like an editorial portfolio (user references). It refuses the category default of a split hero with copy beside a rounded photo over rows of equal cards.

OWN-WORLD: Espresso night #14100c bands alternate with cream #f3e6d0 day bands; lantern amber #e8a33d and gold #f2c46d light the night, rust #8f3e1f/#b5532c ink the day. Gloock high-contrast serif for display, Manrope for text, JetBrains Mono only for dates. Hairline rules, square-cornered photographs, drawn SVG arrows.

STORY: A supervisor learns who she is and that she is open for OJT in one viewport, sees what she builds right away (projects, moved directly after the hero by the user on 2026-11-12), meets her as a person (about portrait and bio), counts real proof and her toolkit, checks her credentials, and contacts her.

FIRST VIEWPORT: Meta row (Based in Nueva Ecija / BSIT CLSU / Open for IT OJT). Magazine-cover hero after the user's sample (2026-11-12): SUMMER ANNE on one line across the full width in amber Gloock, a background-removed portrait (images/hero-portrait-2.webp, supplied by the user) centered in front of it, an outlined, transparent title card "SUMMER ANNE SAN GABRIEL" on top of the description, lede and the primary "See my work" plus "View résumé" buttons bottom-left, all above the fold at 1280x720. The portrait fades out at the bottom and the hero flows into Projects with no dividing line. Mobile: SUMMER / ANNE stacked, portrait overlapping only the bottom of ANNE, the outlined title card above the lede, lede and buttons below.

FORM: User-pinned editorial portfolio (references 1-5), code-led; signature interaction: wordmark rises letter by letter from a mask on load while the cutout portrait rises 4% from 55% brightness; seed: none (roll skipped: the user pinned the direction in their own words, "Use the attached pictures as reference to build a unique portfolio" and "keep the color palette of the original"; `concept-seed --check-seed none` confirms seed references are available here, so this records a deliberate skip, not unavailability).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Raster provenance

Every shipping raster carries its origin embedded (JPEG comment; `images/hero-cutout.webp.json` sidecar for the webp); `impeccable embed-prompt --scan images` reports none missing.
- `images/hero-portrait-2.webp`: background-removed portrait supplied by the user (2026-11-12), trimmed.
- `images/hero-portrait.webp`: earlier locally cut-out hero portrait, no longer shown.
- `images/about-cutout.webp`: background-removed About photo on about.jpg's canvas, layered over about.jpg as a pop-out.
- `images/hero-cutout.webp`: previous hero cutout (2026-11-08), no longer shown.
- `images/about.jpg` (shown), `hero.jpg` (og:image), `contact.jpg`, `g1.jpg`-`g5.jpg` (kept on disk, not shown): user's original photographs from the pre-redesign site.
- `images/projects/*.jpg`: user's original project images from the pre-redesign site.
