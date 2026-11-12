// Nav background on scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Mobile menu
const btn = document.getElementById("menuBtn");
const links = document.getElementById("links");
btn.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
  document.body.style.overflow = open ? "hidden" : "";
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && links.classList.contains("open")) {
    links.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    btn.focus();
  }
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  })
);

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  io.observe(el);
});

// Hero: stretch SUMMER ANNE tall enough to reach the description (desktop only)
const wordmark = document.querySelector(".wordmark");
const heroCopy = document.querySelector(".hero-copy");
const fitWordmark = () => {
  if (!wordmark || !heroCopy) return;
  wordmark.style.setProperty("--sy", 1);
  wordmark.style.setProperty("--wm-extra", "0px");
  if (window.innerWidth <= 960) return;
  const top = wordmark.getBoundingClientRect().top;
  const h = wordmark.getBoundingClientRect().height;
  const below = 0;
  const gap = Math.max(20, window.innerHeight * 0.035);
  const room = heroCopy.getBoundingClientRect().top - gap - below - top;
  const sy = Math.max(1, Math.min(2.6, room / h));
  wordmark.style.setProperty("--sy", sy.toFixed(3));
  wordmark.style.setProperty("--wm-extra", `${(h * (sy - 1)).toFixed(1)}px`);
};
// Start the hero entrance only once the wordmark is final, so nothing jumps mid-animation.
const hero = document.querySelector(".hero");
let heroShown = false;
const showHero = () => {
  if (heroShown || !hero) return;
  heroShown = true;
  fitWordmark();
  requestAnimationFrame(() => hero.classList.add("is-ready"));
};
// Wait for the display font itself (Gloock), but never longer than 2.5s on a slow connection.
const displayFont = document.fonts && document.fonts.load ? document.fonts.load('400 1em "Gloock"') : Promise.resolve();
Promise.race([displayFont, new Promise((r) => setTimeout(r, 2500))]).then(showHero, showHero);
// If the font arrives after the entrance, re-fit so the stretched name stays exact.
if (document.fonts && document.fonts.addEventListener) document.fonts.addEventListener("loadingdone", fitWordmark);
window.addEventListener("load", fitWordmark);
window.addEventListener("resize", fitWordmark);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Projects: coverflow card slider =====
const stage = document.getElementById("stage");
if (stage) {
  const cards = [...stage.querySelectorAll(".pcard")];
  const dots = [...document.querySelectorAll(".dots .pip")];
  const now = document.getElementById("slideNow");
  const n = cards.length;
  let active = 0;

  const render = () => {
    cards.forEach((card, i) => {
      let pos = (i - active + n) % n;          // 0..n-1
      if (pos > n / 2) pos -= n;               // wrap so neighbours sit on both sides
      card.dataset.pos = Math.max(-2, Math.min(2, pos));
      const front = pos === 0;
      card.setAttribute("aria-hidden", front ? "false" : "true");
    });
    dots.forEach((d, i) => d.setAttribute("aria-current", i === active ? "true" : "false"));
    now.textContent = active + 1;
  };
  const go = (i) => { active = (i + n) % n; render(); };

  document.getElementById("slidePrev").addEventListener("click", () => go(active - 1));
  document.getElementById("slideNext").addEventListener("click", () => go(active + 1));
  dots.forEach((d, i) => d.addEventListener("click", () => go(i)));
  let swiped = false;
  cards.forEach((card, i) => card.addEventListener("click", () => {
    if (swiped) { swiped = false; return; }
    if (i !== active) go(i);
  }));

  stage.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(active + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(active - 1); }
  });

  // swipe / drag
  let startX = null;
  stage.addEventListener("pointerdown", (e) => { startX = e.clientX; });
  stage.addEventListener("pointerup", (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    startX = null;
    swiped = Math.abs(dx) > 40;
    if (swiped) { go(active + (dx < 0 ? 1 : -1)); setTimeout(() => { swiped = false; }, 0); }
  });
  stage.addEventListener("pointercancel", () => { startX = null; });

  render();
}
