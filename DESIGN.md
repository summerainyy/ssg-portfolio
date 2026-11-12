---
name: Summer Anne San Gabriel — Portfolio
description: An editorial evening walk from a lantern-lit night hero to a sunlit daylight close, in golden-hour colors pulled from her own photographs.
colors:
  lantern-amber: "#e8a33d"
  hair-gold: "#f2c46d"
  rust-ink: "#8f3e1f"
  ember: "#6e2f17"
  espresso-night: "#14100c"
  night-ledger: "#1b1510"
  night-street: "#0c0a08"
  cream: "#f3e6d0"
  sunlit-stone: "#ead7b8"
  parchment: "#f0dcc0"
  muted-sand: "#b9a68b"
  day-ink: "#1f1711"
  day-muted: "#5e4a37"
  night-hairline: "rgba(243, 230, 208, 0.14)"
  day-hairline: "rgba(31, 23, 17, 0.16)"
  signal-green: "#7ed37a"
typography:
  display:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(3.5rem, min(12.4vw, 26.5svh), 20rem)"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(2.2rem, min(4.6vw, 8.5svh), 4.25rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline-closing:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(2.8rem, min(6.5vw, 13svh), 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  numeral:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(2.4rem, min(5vw, 9svh), 4.25rem)"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "lnum"
  title:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(1.35rem, min(2.2vw, 4.4svh), 2rem)"
    fontWeight: 400
    lineHeight: 1.1
  title-sm:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.7
  ui:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.12em"
  date:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.82rem"
    fontWeight: 400
    fontFeature: "tnum"
rounded:
  none: "0px"
  xs: "2px"
  full: "50%"
spacing:
  hair: "4px"
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  page-gutter: "clamp(20px, 5vw, 80px)"
  section: "clamp(40px, 7svh, 84px)"
  content-max: "100%"
components:
  button-primary:
    backgroundColor: "{colors.lantern-amber}"
    textColor: "{colors.espresso-night}"
    typography: "{typography.ui}"
    rounded: "{rounded.xs}"
    padding: "15px 22px"
  button-primary-hover:
    backgroundColor: "{colors.hair-gold}"
    textColor: "{colors.espresso-night}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    typography: "{typography.ui}"
    rounded: "{rounded.xs}"
    padding: "15px 22px"
  button-line-hover:
    textColor: "{colors.hair-gold}"
  nav-cta:
    backgroundColor: "{colors.lantern-amber}"
    textColor: "{colors.espresso-night}"
    rounded: "{rounded.xs}"
    padding: "9px 18px"
  nav-cta-hover:
    backgroundColor: "{colors.hair-gold}"
  status-tag:
    textColor: "{colors.signal-green}"
    rounded: "{rounded.xs}"
    padding: "2px 9px"
  contact-link:
    textColor: "{colors.day-ink}"
    typography: "{typography.title-sm}"
    padding: "20px 0"
  contact-link-hover:
    textColor: "{colors.rust-ink}"
  count:
    backgroundColor: "{colors.night-ledger}"
    textColor: "{colors.hair-gold}"
    typography: "{typography.numeral}"
  photograph:
    rounded: "{rounded.none}"
  slider-arrow:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.xs}"
    size: "48px"
  slider-arrow-hover:
    backgroundColor: "{colors.lantern-amber}"
    textColor: "{colors.espresso-night}"
---

# Design System: Summer Anne San Gabriel — Portfolio

## Overview

**Creative North Star: "Lantern Night to Daylight"**

The page is one evening walk. It opens in espresso night lit by a single lantern-amber wordmark with her cutout portrait standing in front of it, passes through alternating night and cream daylight bands, and closes on a sunlit stone band where the contact details sit in open daylight. Every color is pulled from her own photographs, so the palette reads as golden hour rather than as a brand kit, and the photography carries the personality while the layout stays editorial and quiet around it.

Density is magazine-like: oversized Gloock display type set against generous section padding, content spanning the full screen inside the page gutter, and lists drawn as hairline-ruled ledgers instead of card grids. Surfaces are flat. Depth comes from the band sequence and from photographs, not from shadows or containers. Motion is a single slow, decelerating curve used for a staged load moment and gentle reveals, and all of it is gated behind reduced-motion preferences.

Confirmed rejection (from the direction contract): the category default of a split hero with copy beside a rounded photo over rows of equal cards.

**Key Characteristics:**
- Alternating espresso night and cream daylight bands; Ember appears only as the Languages bento card.
- Gloock high-contrast serif at weight 400 for every display role; Manrope for all reading text; JetBrains Mono for dates.
- 1px hairline rules as the main structural device, in a night and a day variant.
- Square-cornered photographs; controls carry only a 2px corner.
- Drawn 1.5px-stroke SVG arrows, square line caps.
- One easing curve, cubic-bezier(.16, 1, .3, 1), across the system.

## Colors

A warm golden-hour palette: near-black espresso browns for night, cream and sunlit stone for day, lantern amber and hair gold as the night's light, rust ink as the day's accent.

### Primary
- **Lantern Amber** (lantern-amber): the night's one solid light. Wordmark, primary button and nav CTA fills, focus ring on night bands, text selection, scrollbar thumb, the slash separators in the skills ledger. Never used as text on cream.
- **Hair Gold** (hair-gold): the lighter warm step. Hover fill for amber buttons, `em` emphasis inside night headings, project stack labels, the count numerals in the skills header.

### Secondary
- **Rust Ink** (rust-ink): the day's accent. `em` emphasis, focus ring and selection on day bands, the 3px education rule, credential dates, contact-link arrows and hover text. It is the rust that holds AA on cream (about 5.9:1).
- **Ember** (ember): deep rust. Background of the highlighted Languages bento card.

### Tertiary
- **Signal Green** (signal-green): availability only. The status dot beside "Open for IT OJT opportunities" and the "Ongoing" project tag (border at 45% alpha, text one step lighter, #93dc8f). Not a decorative accent.

### Neutral
- **Espresso Night** (espresso-night): page background, hero, projects band, mobile menu sheet, text on amber fills.
- **Night Ledger** (night-ledger): the skills band (counts plus tool groups), one step lifted from the page night.
- **Night Street** (night-street): the darkest band; the footer.
- **Cream** (cream): primary text on night; the daylight band background.
- **Sunlit Stone** (sunlit-stone): reserved warm day tone (the closing contact band it filled was removed on 2026-11-12).
- **Parchment** (parchment): label text on ember (the type-tile caption).
- **Muted Sand** (muted-sand): secondary text on night: nav links, lede, project descriptions, captions, meta terms, footer (about 8:1 on espresso night).
- **Day Ink** (day-ink): primary text on day bands.
- **Day Muted** (day-muted): secondary text on day bands (about 6.8:1 on cream).
- **Night Hairline** (night-hairline) and **Day Hairline** (day-hairline): every 1px rule on their respective bands.

### Named Rules
**The Night-and-Day Rule.** Bands alternate espresso night and cream daylight; There is no mid-value band; Ember appears only as the Languages bento card fill. Never introduce a grey or cool band.

**The Ink Swap Rule.** On a day band, every accent duty that amber or gold performs at night (emphasis, focus, selection, icons) passes to Rust Ink. Amber and gold never appear as text on cream.

**The Single Lantern Rule.** Lantern Amber is the only solid accent fill at night: one primary action per cluster, the wordmark, and hover states. Gold is its hover and emphasis step, not a second accent.

## Typography

**Display Font:** Gloock (with Georgia, serif)
**Body Font:** Manrope (with system-ui, sans-serif)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace), dates only

**Character:** A high-contrast editorial serif speaking in one weight at very different sizes, against a clean geometric sans that does all the reading work. The contrast is scale, not weight.

### Hierarchy
- **Display** (400, clamp(3.5rem, min(12.4vw, 26.5svh), 20rem), 0.8, -0.035em; clamp(3.5rem, 19.5vw, 11rem) stacked on two lines below 960px): the SUMMER ANNE wordmark only, centered on one line in Lantern Amber, sized by whichever of width or height is tighter.
- **Headline** (400, clamp(2.2rem, min(4.6vw, 8.5svh), 4.25rem), 1, -0.02em): every section h2. The closing contact headline steps up to clamp(2.8rem, min(6.5vw, 13svh), 6rem) at 0.95.
- **Numeral** (400, clamp(2rem, min(3.6vw, 7svh), 3.4rem), 1, lining figures): the four counts in the skills header; the project slide counter uses Gloock 1.3rem.
- **Title** (400, clamp(1.8rem, 3vw, 2.6rem), 1.1): featured project and education titles.
- **Title Small** (400, 1.3rem, 1.15): bento card titles, with the group's tool count in Gloock 1.6rem Lantern Amber at the card's top right; project card titles run clamp(1.2rem, min(1.7vw, 3.6svh), 1.5rem); the SSG nav and footer marks (1.6rem and 1.4rem, 0.04em tracking); contact values use clamp(1.2rem, 2.4vw, 1.75rem).
- **Body** (400, 17px, 1.7; 16px below 720px): all paragraphs, with `text-wrap: pretty`. Lede at 1.08rem capped at 34em; contact lede at 1.1rem capped at 32em; project descriptions at 0.94rem / 1.6.
- **UI** (600, 0.95rem): buttons and trait rows; nav links at 0.92rem / 500.
- **Label** (600, 0.72 to 0.78rem, 0.12em, uppercase): terms inside definition lists and link rows only (meta terms, contact channel names, type-tile caption at 0.14em).
- **Date** (JetBrains Mono 400, 0.82rem, tabular figures): credential dates and the graduation line.

### Named Rules
**The One-Weight Serif Rule.** Gloock is set at weight 400 everywhere; hierarchy comes from size and color, never from bolding the serif. Headings use `text-wrap: balance`.

**The Mono-Means-Date Rule.** JetBrains Mono appears only on dates. It is not a code or tech-flavor accent.

## Layout

Section order (user request, 2026-11-12): Hero, Projects, About ("Hi, I'm Summer"), Skills ("What I work with"), Credentials ("Where I've learned"), then the footer. The separate "Let's work together" section was removed (user request, 2026-11-12); its details moved into a dark Night Street footer: the SSG mark with the intro line, Email / Phone / Facebook as label-over-value links, and the "View my résumé" button in one row, then a hairline and a bottom bar with the copyright and Back to top. "Say hello" in the nav jumps to the footer; the nav lists Projects, About, Skills, Credentials, then the Say hello button. There is no line between the hero and Projects: the hero cutout fades out over its bottom 28% (mask-image), and the Projects gradient opens on pure Espresso Night so the two read as one surface (user request, 2026-11-12).

Bands run full-bleed; content inside them spans the full screen width, kept off the edges only by the fluid page gutter of clamp(20px, 5vw, 80px), the same gutter as the nav (user request, 2026-11-12: no side margins on wide screens; the 1440px cap and the seam it left in the hero glow were removed). The About block stays a centered fixed-width group. Section padding is the `--sec-y` token, clamp(40px, 7svh, 84px), applied vertically to every band (projects uses 0.75 of it; counts clamp(28px, 5svh, 52px)). Sizes that set a band's height (headlines, the wordmark, the about photo, the featured project image) scale with screen height as well as width.

**Mobile and tablet (audited 2026-11-12 at 320, 360, 390, 430, 768, 1024 and 844x390 landscape).** No size scrolls sideways; no visible text is under 12px; every control has at least a 40px tap area (the logo and Back to top are 44px tall, nav links get 10px block padding, the slider dots keep their 8px look but carry an invisible 32px hit area). Below 960px the hero portrait is capped at min(70%, 430px) wide and max(72svh, 320px) tall so tablets and landscape phones don't get a screen-filling photo. Below 720px the four counts top-align. Below 480px the skills bento becomes one column (two-column cards were too narrow for their titles and counts) and the hero buttons share the row.

**The One-Screen Rule.** On desktop (1280x720 and larger), every band fits within one screen height: at 1440x900, 1366x768 and 1280x720 no section is taller than the viewport. Body paragraphs cap at 62ch to keep lines under about 80 characters. Phones cannot fit the text-heavy bands in one screen and scroll normally.

The hero is a 12-column grid with a 24px column gap: a hairline-ruled meta row across the top, the one-line wordmark across all twelve columns, the portrait centered in columns 4 to 9, the outlined title card above the lede, and the lede and buttons in columns 1 to 4. Content bands use two-column splits: about (three columns centered as one block: portrait 390px, story 560px, and the five strengths as a vertical ruled list 240px under a 2px Rust Ink rule, titled "Skills" in a 1.35rem Rust Ink Gloock subheading; the block is bottom-aligned with the story so the Skills label always sits clearly below the "Hi, I'm Summer" headline, never level with it (user request, 2026-11-12); 330/540/200px between 961 and 1400px wide; stacked on phones. The portrait's visible frame is exactly as tall as the story column, from the headline's top to the last line (user request, 2026-11-12), with the cutout's head rising above it; the portrait is a pop-out: both layers share one box extended 26% above the frame, the original photo clipped to start at the frame line, and a background-removed cutout of the same shot (images/about-cutout.webp, aligned pixel for pixel) sits on top so her head rises above the frame; user request, 2026-11-12), 5/7 (skills header: headline left, the four counts right; credentials), 6/6 (contact with headline left and lede, contact rows and résumé button right). Skills groups sit in a 12-column bento grid (14px gap) sized by how many tools each holds: Languages 5 columns (Ember fill), Frameworks 4, Database 3; Dev tools 4, Platforms 3, AI tools 2, Design 3. Below 960px the bento becomes 2 columns with Languages and Design full width. Each bento card is a 1px night-hairline box with a 2px corner whose tools sit as small outline tags at the bottom; the border warms to amber on hover. The projects band sits on a 165deg gradient from Espresso Night through #24140c and #4a200f into Ember (user request, 2026-11-08). Projects are a coverflow card slider (user reference, 2026-11-08): one wide card in front at min(880px, 64vw) (76vw below 960px, 80vw on phones), with the previous and next cards behind it, scaled to 0.78, pushed 56% to each side, turned 24deg away in 3D (1600px perspective) and dimmed to 50% brightness with their text faded out. The slider loops, so both neighbours always show. Arrow buttons, the pill of dots under the stage, clicking a side card, swiping or dragging, and the keyboard arrow keys all move it; the header counter reads "n / 4". Cards behind the front one are aria-hidden. Jump links land 64px below the top (scroll-padding) so headings clear the fixed nav. The about traits run as one wrapped line separated by Rust Ink slashes. Nothing is sticky.

Spacing rhythm steps 4, 8, 12, 24, 32, 48px for inner gaps; ledger rows pad 20 to 24px vertically.

Hero composition (user sample, 2026-11-12): a magazine-cover layout. SUMMER ANNE runs on one compact line in Lantern Amber Gloock (clamp(3.5rem, min(12.4vw, 26.5svh), 20rem), tracking -0.035em, a 0.14em word gap), centered and never wider than the content. On desktop the wordmark is then stretched vertically (transform: scaleY, origin top, up to 2.6x) so it reaches down toward the description, giving a tall condensed cover headline (user request, 2026-11-12); script.js measures the room between the wordmark and the description on load and resize and sets --sy, and adds the matching bottom margin so it reaches the description. Phones keep the unstretched stacked wordmark. A transparent cutout portrait (images/hero-portrait-4.webp, supplied already cut out by the owner and used as is) stands centered in front of it (columns 4 to 9, z above the wordmark), head over the middle letters. On desktop the hero is exactly one screen tall (min-height 100svh) and the portrait fills it, from just under the meta bar (it tucks up 16px) to the bottom edge (height 100svh - 172px; user request, 2026-11-12); the description wraps before it reaches the portrait, its bottom 24% fading into the night so the hero flows into Projects. an outlined title card reading SUMMER ANNE SAN GABRIEL sits on top of the description (Manrope 700, 0.8rem, 0.2em tracking, uppercase Cream on a transparent background inside a 45% cream 1px outline with a 2px corner; user request, 2026-11-12), and the lede and both buttons sit bottom-left (columns 1 to 4). Bottom-right, mirroring them, sit contact shortcuts (user request, 2026-11-12): Email, Phone and Facebook as hairline-ruled rows (a 0.7rem uppercase Muted Sand label over a Cream 600 value, one line each, with an amber north-east arrow that nudges on hover), 290px wide in columns 10 to 12. On phones they become a row of three outlined label-only buttons under the hero buttons. On phones the wordmark stacks SUMMER / ANNE, the portrait (70% wide) starts low enough to overlap only the bottom of ANNE, the outlined title card sits above the lede, and the lede and buttons follow below.

Responsive: at 960px every split collapses to one column, the hero cutout drops to 66% width aligned right, overlapping the end of both wordmark lines, its bottom 20% fading out through a mask-image gradient, with the surname set bottom-left beside it, sticky positioning is released, and counts go 2 by 2. At 720px the nav becomes a full-screen night sheet with Gloock links, and timeline rows stack.

## Elevation & Depth

The system is flat. Depth comes from the band sequence (night, day, ember) and from photography. There are no shadows. In the hero, depth comes from layering: a transparent cutout portrait (images/hero-portrait-4.webp) stands in front of the wordmark, and its shoulders fade out over the bottom 28% into the night. The fixed nav, once scrolled, becomes a 90% espresso sheet with a 10px backdrop blur and a hairline bottom rule. A faint radial amber glow (10% alpha) behind the hero's right half stands in for the lantern's light spill.

### Shadow Vocabulary
- None. The hero's layering comes from the cutout's alpha, not from a shadow.

### Named Rules
**The Flat Ledger Rule.** No shadows anywhere. Groups are separated by 1px hairlines, band changes, and flat 1px-hairline cards (skills bento at 2px corners, project coverflow cards at 22px).

## Shapes

Photographs are square-cornered (0px) at fixed aspect ratios: 4:5 portraits, 4:3 project shots (16:10 for the feature). Controls (buttons, nav CTA, status tag) carry a barely-there 2px corner; the status dot is the only circle. Structure is drawn with 1px hairlines; the education block's 3px Rust Ink top rule is the one heavier rule. Icons are drawn SVG strokes at 1.5px with square caps, sized 1.1em and colored by `currentColor`.

### Named Rules
**The Square Photograph Rule.** Photographs never get a radius, frame or drop shadow; the hero cutout is the only unframed photograph; a 1px hairline border is allowed on project shots.

## Components

### Buttons
Confident and plain: solid lantern fill or a cream hairline outline, no shadow.
- **Shape:** near-square (2px).
- **Primary:** Lantern Amber fill, Espresso Night text, 600 weight at 0.95rem, 15px 22px padding, 12px gap to a trailing drawn arrow.
- **Hover / Focus:** fill shifts to Hair Gold over 0.25s; the arrow drops 3px on the system curve. Focus is a 2px amber outline at 3px offset (Rust Ink on day bands).
- **Line:** transparent with a 1px cream border at 40% alpha and cream text; hover turns border and text Hair Gold.

### Chips
- **Style:** the status tag only: 1px Signal Green border at 45% alpha, light green text, 2px corner, 2px 9px padding. Stack labels are plain 600-weight Hair Gold text in a wrapped row, not chips.

### Cards / Containers
Projects are uncarded: image, meta line, title, description and stack, stacked in a flex column with no surface.
- **Corner Style:** none.
- **Background:** the band's own background; project shots sit on a #0f0b08 well with a 1px night hairline border.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Hover:** the shot image scales to 1.035 over 0.8s.

### Navigation
Fixed and transparent over the hero; on scroll it gains the blurred espresso sheet and tightens from 18px to 12px block padding. Brand mark "SSG" (her initials) in Gloock 1.6rem, cream, 0.04em tracking, turning Hair Gold on hover; the footer repeats it at 1.4rem. Links in Muted Sand at 0.92rem/500 with 32px gaps; hover turns cream with an amber underline at 6px offset. The last link is an amber "Say hello" CTA. Below 720px a two-bar toggle morphs to an X and opens a full-screen night sheet with Gloock links at 1.5rem.

### Ledger Rows (signature)
The credential timeline and contact links render as hairline-ruled rows. Timeline rows pair a 110px mono date column with a bold title and muted issuer. Contact rows pair an uppercase channel label (110px), a Gloock value, and a north-east arrow in Rust Ink that nudges 4px up and right on hover while the row text turns Rust Ink.

### Skills Header Counts
Four real counts beside the skills headline: Hair Gold Gloock numerals above Muted Sand 600 terms, each with a night hairline on its left, collapsing to 2 by 2 below 960px.

### Project Coverflow (signature)
Each project is a wide card with a 22px corner (the only large radius in the system, taken from the user's coverflow reference) and a 16% cream hairline. The picture fills the whole card and leads on the left; the description is overlaid on the right 46%, on the section's own warm gradient (165deg, #3d1d0f to #55250f to Ember), masked so it fades in from the picture (transparent at the panel's leading edge, 90% by 24%, solid by 38%). No black or near-black scrim: the overlay blends with the band behind the card. On phones the card stacks: a 16:10 picture on top, fading down into the same rust gradient where the description begins. Text on the overlay uses Cream titles, #ecdcc2 body and #e3cfae meta (all above 7:1 on the rust). Cards move on the system curve over 0.7s. Below the stage sits a pill of dots on a 8% cream capsule; the active dot stretches to 22px in Lantern Amber. Header controls: a Gloock counter and 48px outline arrow buttons that fill Lantern Amber on hover.
### Hero Entrance (signature)
One sequence, started only when the page is ready: script.js waits for the Gloock font (at most 2.5s), sizes and stretches the wordmark, then adds `.is-ready` to the hero; until then the wordmark, portrait, copy and contact column are hidden, so nothing jumps (user request "fix the animations", 2026-11-12). Then the wordmark letters rise from a per-line mask (1s, SUMMER staggered 0.05s, ANNE continuing from 0.30s), the cutout portrait rises 4% from 55% brightness (1.4s from 0.1s), the title card, lede and buttons fade up 14px at 0.5s, 0.6s and 0.7s, and the three contact rows fade up at 0.6s, 0.7s and 0.8s. If the font lands after the entrance, the wordmark re-fits once. Without JavaScript everything is simply visible; with reduced motion it appears without movement. Below the hero, section headings and the About photo fade in once as they scroll into view.

## Do's and Don'ts

### Do:
- **Do** alternate espresso night and cream daylight bands, closing on Sunlit Stone.
- **Do** swap every accent to Rust Ink (#8f3e1f) on day bands: emphasis, focus, selection, icons and dates.
- **Do** set every Gloock role at weight 400 and build hierarchy from size.
- **Do** draw structure with 1px hairlines (night-hairline at night, day-hairline by day) and present lists as ruled ledger rows.
- **Do** keep photographs square-cornered at their fixed aspect ratios, and give controls the 2px corner.
- **Do** use the single curve cubic-bezier(.16, 1, .3, 1) for movement and gate every animation behind `prefers-reduced-motion: no-preference`.
- **Do** keep icons as drawn 1.5px square-cap SVG strokes in `currentColor`.

### Don't:
- **Don't** put Lantern Amber or Hair Gold text on cream or sunlit stone; use Rust Ink.
- **Don't** use #b5532c (the lighter brand rust) for text on cream; it measures about 4:1 and fails AA for body copy.
- **Don't** give cards shadows. Bento cards keep the 2px corner; only the project coverflow cards take the 22px corner.
- **Don't** round, frame or tilt photographs.
- **Don't** use JetBrains Mono for anything but dates.
- **Don't** introduce grey, cool or saturated non-palette bands; Signal Green is reserved for availability status.
- **Don't** use uppercase tracked labels as eyebrows above headings; they belong only to terms inside meta rows, contact rows and the type tile.

## Raster provenance

All images are the site owner's own; none are generated. Each file carries its origin embedded (JPEG comment, or `images/hero-cutout.webp.json` for the webp).
- `images/hero-portrait-4.webp`: background-removed portrait supplied by the owner on 2026-11-12, used as is, only trimmed of empty transparent space to 887x1235 (shown in the hero).
- `images/hero-portrait-3.webp`: earlier version of the same photo, background removed locally with @imgly/background-removal-node, 903x1240 (kept on disk, no longer shown).
- `images/hero-portrait-2.webp`: earlier owner-supplied cutout, 890x1235 (kept on disk, no longer shown).
- `images/hero-portrait.webp`: earlier hero cutout made locally with @imgly/background-removal-node (kept on disk, no longer shown).
- `images/about-cutout.webp`: background-removed version of the About photo, on about.jpg's 1000x1500 canvas (shown over `about.jpg` as the pop-out).
- `images/hero-cutout.webp`: the previous hero cutout from 2026-11-08 (kept on disk, no longer shown).
- `images/about.jpg`: original photograph from the pre-redesign site (shown as the pop-out frame).
- `images/hero.jpg` (still the og:image link preview), `contact.jpg`, `g1.jpg`-`g5.jpg`: original photographs, kept on disk; the gallery strip and contact photo were removed at the owner's request on 2026-11-08.
- `images/projects/library-dashboard.jpg`: library dashboard screenshot supplied by the owner on 2026-11-08 (shown; replaces `library.jpg`).
- `images/projects/task-garden.jpg`: screenshot of the Task Garden app supplied by the owner on 2026-11-12, with only the browser scrollbar cropped off, 1690x823 (shown).
- `images/projects/weather.jpg`, `rms.jpg` (shown), `library.jpg` (previous library image) and `todo.jpg`, `itayo.jpg`, `calendar.jpg`, `scitech.jpg` (kept on disk, no longer shown): original project images from the pre-redesign site.
