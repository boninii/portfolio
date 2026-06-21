/* =====================================================
   Portfolio v7 — script
   ===================================================== */
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- 1. NAV reveal on load ---------- */
  gsap.to(".nav", {
    opacity: 1,
    y: 0,
    duration: .9,
    delay: .3,
    ease: "power3.out",
    startAt: { y: -30 }
  });


  /* ---------- 2. NAV sliding indicator ---------- */
  const navPill   = document.querySelector(".nav-pill");
  const indicator = document.querySelector(".nav-indicator");
  // Only the section links receive the indicator (CTA "Contato" doesn't)
  const indicatorLinks = navPill ? navPill.querySelectorAll(".nav-link[data-section]") : [];

  function moveIndicatorTo(link) {
    if (!navPill || !indicator || !link) return;
    const navRect  = navPill.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const x = linkRect.left - navRect.left - 6;   // -6 to align with the indicator's top:6px inset
    indicator.style.width = linkRect.width + "px";
    indicator.style.transform = `translateX(${x + 6}px)`;
  }

  function syncIndicator() {
    const active = navPill ? navPill.querySelector(".nav-link.is-active") : null;
    if (active) moveIndicatorTo(active);
  }

  // Initial position (after nav fades in)
  setTimeout(() => {
    syncIndicator();
    indicator && indicator.classList.add("is-ready");
  }, 700);

  // Recompute on resize
  let rsTimer;
  window.addEventListener("resize", () => {
    clearTimeout(rsTimer);
    rsTimer = setTimeout(syncIndicator, 120);
  });


  /* ---------- 3. HERO content reveal ---------- */
  const heroTl = gsap.timeline({ delay: .45, defaults: { ease: "power3.out" } });
  heroTl
    .from(".hero-pill",       { y: 14, opacity: 0, duration: .55 })
    .from(".hero-h1",         { y: 26, opacity: 0, duration: .9 }, "-=.3")
    .from(".hero-lead",       { y: 14, opacity: 0, duration: .6 }, "-=.55")
    .from(".hero-actions",    { y: 12, opacity: 0, duration: .55 }, "-=.4")
    .from(".cls-label, .cls-row",  { y: 12, opacity: 0, duration: .6, stagger: .08 }, "-=.3")
    .from(".demo-frame",      { y: 30, opacity: 0, duration: 1, scale: .96 }, "-=1.4")
    .from(".demo-tag",        { y: -10, opacity: 0, duration: .5, stagger: .08 }, "-=.55")
    .from(".side--ugly",      { x: -30, opacity: 0, duration: .8 }, "-=.75")
    .from(".side--clean",     { x: 30,  opacity: 0, duration: .8 }, "-=.75")
    .from(".drag-handle",     { y: 12, opacity: 0, scale: .8, duration: .55, ease: "back.out(2)" }, "-=.45")
    .from(".demo-labels .demo-label", { y: 8, opacity: 0, duration: .45, stagger: .1 }, "-=.4");


  /* ---------- 4. COMPARE — hover-driven split ---------- */
  const compare = document.getElementById("compare");

  const splitObj = { value: 50 };
  const setSplit = gsap.quickTo(splitObj, "value", {
    duration: .35,
    ease: "power3.out",
    onUpdate: () => compare.style.setProperty("--split", splitObj.value + "%")
  });

  compare.style.setProperty("--split", "50%");

  let isInside = false;
  compare.addEventListener("mouseenter", () => {
    isInside = true;
    compare.classList.add("is-active");
  });
  compare.addEventListener("mousemove", (e) => {
    if (!isInside) return;
    const rect = compare.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(8, Math.min(92, (x / rect.width) * 100));
    setSplit(pct);
  });
  compare.addEventListener("mouseleave", () => {
    isInside = false;
    compare.classList.remove("is-active");
    setSplit(50);
  });
  compare.addEventListener("touchstart", () => { isInside = true; compare.classList.add("is-active"); }, { passive: true });
  compare.addEventListener("touchmove", (e) => {
    if (!isInside) return;
    const t = e.touches[0];
    const rect = compare.getBoundingClientRect();
    const x = t.clientX - rect.left;
    const pct = Math.max(8, Math.min(92, (x / rect.width) * 100));
    setSplit(pct);
  }, { passive: true });
  compare.addEventListener("touchend", () => {
    isInside = false;
    compare.classList.remove("is-active");
    setSplit(50);
  });


  /* ---------- 5. PROCESS reveal ---------- */
  gsap.from(".process .section-kicker, .process .section-title, .process .section-lead", {
    scrollTrigger: { trigger: ".process", start: "top 78%" },
    y: 22, opacity: 0, duration: .8, stagger: .08, ease: "power3.out"
  });
  gsap.from(".process-card", {
    scrollTrigger: { trigger: ".process-grid", start: "top 80%" },
    y: 50, opacity: 0, duration: 1, stagger: .12, ease: "power3.out"
  });


  /* ---------- 6. SKILLS reveal ---------- */
  gsap.from(".skills .section-kicker, .skills .section-title, .skills .section-lead", {
    scrollTrigger: { trigger: ".skills", start: "top 78%" },
    y: 22, opacity: 0, duration: .8, stagger: .08, ease: "power3.out"
  });
  gsap.from(".skill-row", {
    scrollTrigger: { trigger: ".skills-list", start: "top 82%" },
    x: -30, opacity: 0, duration: .8, stagger: .1, ease: "power3.out"
  });


  /* ---------- 7. PROJECTS reveal ---------- */
  gsap.from(".projects .section-kicker, .projects .section-title, .projects .section-lead", {
    scrollTrigger: { trigger: ".projects", start: "top 78%" },
    y: 22, opacity: 0, duration: .8, stagger: .08, ease: "power3.out"
  });
  gsap.from(".proj", {
    scrollTrigger: { trigger: ".projects-grid", start: "top 82%" },
    y: 40, opacity: 0, duration: .85, stagger: .12, ease: "power3.out"
  });


  /* ---------- 8. FOOTER reveal ---------- */
  gsap.from(".foot-row > *, .foot-row--meta > *", {
    scrollTrigger: { trigger: ".foot", start: "top 90%" },
    y: 14, opacity: 0, duration: .6, stagger: .06, ease: "power3.out"
  });


  /* ---------- 9. NAV active state on scroll + slide indicator ---------- */
  const sections = ["hero", "process", "skills", "projects"];
  const navLinks = document.querySelectorAll(".nav-link[data-section]");

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    ScrollTrigger.create({
      trigger: el,
      start: "top 60%",
      end: "bottom 40%",
      onToggle: (self) => {
        if (self.isActive) {
          navLinks.forEach((l) => l.classList.toggle("is-active", l.dataset.section === id));
          syncIndicator();
        }
      }
    });
  });

  // Click on a nav link should also move the indicator immediately
  indicatorLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.toggle("is-active", l === link));
      moveIndicatorTo(link);
    });
  });

});
