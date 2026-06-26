/* =====================================================
   Portfolio v10 — cinematic script
   ===================================================== */
gsap.registerPlugin(ScrollTrigger);

const I18N = {
  pt: {
    "intro.eyebrow": "PORTFÓLIO · 2026",
    "intro.title": "Bem-vindo ao meu portfólio",
    "intro.sub": "Pedro Bonini · Desenvolvedor Web",
    "intro.scroll": "role para começar",

    "nav.home": "Início", "nav.process": "Processo", "nav.skills": "Habilidades",
    "nav.projects": "Projetos", "nav.contact": "Contato", "nav.lang": "Idioma", "nav.theme": "Tema",

    "hero.eyebrow": "DISPONÍVEL PARA PROJETOS · 2026",
    "hero.name": "Pedro Bonini",
    "hero.role": "Desenvolvedor web — construo interfaces e sistemas que respiram.",
    "hero.cta": "Iniciar conversa",
    "hero.worksWith": "STACKS",
    "burst.label": "Vamos trabalhar",
    "burst.hint": "continue rolando",
    "burst.eyebrow": "DISPONÍVEL PARA PROJETOS · 2026",
    "burst.back": "role para voltar",
    "burst.reveal": "role para revelar",
    "badge.text": "VAMOS CONVERSAR · ENTRE EM CONTATO · ",

    "process.kicker": "Processo",
    "process.title": "Três passos, sem teatro.",
    "process.lead": "Sem mistério: a gente alinha o objetivo, desenha a solução e entrega no ar. Cada etapa com você junto, vendo o progresso.",
    "process.1.title": "Estruturar",
    "process.1.text": "Entendo o problema, mapeio o conteúdo e monto a arquitetura da informação antes de qualquer pixel.",
    "process.2.title": "Projetar",
    "process.2.text": "Transformo a estrutura em layout: tipografia, ritmo, cor e movimento — tudo com intenção.",
    "process.3.title": "Entregar",
    "process.3.text": "Código limpo, performático e responsivo, publicado e pronto pra escalar.",

    "skills.kicker": "Habilidades",
    "skills.title": "Habilidades que viram <em>artesanato</em>.",
    "skills.lead": "Oito territórios do meu trabalho. Role — eles passam de lado, um por um.",
    "skills.hint": "role para percorrer",
    "cursor.viewProject": "Ver projeto",

    "skill.frontend.name": "Frontend",
    "skill.frontend.text": "HTML, CSS, JS, React. A camada visível e tudo que segura ela.",
    "skill.backend.name": "Backend &amp; API",
    "skill.backend.text": "Laravel, Node, REST. A engrenagem que ninguém vê, mas todo mundo sente.",
    "skill.motion.name": "Animação",
    "skill.motion.text": "GSAP, Motion, CSS keyframes. Cadência que respira.",
    "skill.ux.name": "UI &amp; UX",
    "skill.ux.text": "Hierarquia, ritmo, decisões que parecem óbvias.",
    "skill.perf.name": "Performance",
    "skill.perf.text": "Bundle leve, render previsível, ms importam.",
    "skill.responsive.name": "Responsividade",
    "skill.responsive.text": "Do desktop ao polegar. Sem quebra, sem desculpa.",
    "skill.a11y.name": "Acessibilidade",
    "skill.a11y.text": "Foco visível, contraste, semântica. Web pra todos.",
    "skill.security.name": "Segurança",
    "skill.security.text": "Validação, autenticação, dados em trânsito. Web sem brechas.",
    "skill.deploy.name": "Deploy",
    "skill.deploy.text": "Git, CI/CD, deploy contínuo. Do commit ao ar, sem fricção.",

    "projects.kicker": "Projetos selecionados",
    "projects.title": "Trabalho que <em>respira</em>.",
    "projects.lead": "Três projetos recentes — clique pra ver o estudo de caso completo.",
    "proj.1.title": "Editorial em movimento",
    "proj.1.text": "Site editorial com transições suaves e tipografia expressiva, feito pra leitura longa e prazerosa.",
    "proj.2.title": "Dashboard sem ruído",
    "proj.2.text": "Painel administrativo com design system próprio: dados claros, sem poluição visual.",
    "proj.3.title": "Landing terracota",
    "proj.3.text": "Landing page de alta conversão com identidade marcante e carregamento instantâneo.",
    "proj.4.title": "App de leitura lenta",
    "proj.4.text": "Aplicativo mobile focado em foco: leitura sem distração, com tipografia caprichada.",
    "proj.5.title": "Household Wallet",
    "proj.5.text": "App pessoal de controle financeiro: orçamento, metas, recorrentes, financiamentos e investimentos em BRL e USD, com gráficos em tempo real.",
    "proj.6.title": "Lirismo Digital",
    "proj.6.text": "Marketplace de e-books com fluxo de autores, aprovação de obras, compra e leitura no navegador — com storage de PDFs e capas.",
    "proj.7.title": "Pedido sem fila",
    "proj.7.text": "App mobile da cantina de uma escola técnica: login, cardápio por categoria, carrinho em tempo real e histórico de pedidos. Sem fila, sem papel.",

    "foot.copy": "© 2026 · Pedro Bonini · São Paulo"
  },
  en: {
    "intro.eyebrow": "PORTFOLIO · 2026",
    "intro.title": "Welcome to my portfolio",
    "intro.sub": "Pedro Bonini · Web Developer",
    "intro.scroll": "scroll to begin",

    "nav.home": "Home", "nav.process": "Process", "nav.skills": "Skills",
    "nav.projects": "Projects", "nav.contact": "Contact", "nav.lang": "Language", "nav.theme": "Theme",

    "hero.eyebrow": "AVAILABLE FOR PROJECTS · 2026",
    "hero.name": "Pedro Bonini",
    "hero.role": "Web developer — I build interfaces and systems that breathe.",
    "hero.cta": "Start a conversation",
    "hero.worksWith": "STACK",
    "burst.label": "Let's work",
    "burst.hint": "keep scrolling",
    "burst.eyebrow": "AVAILABLE FOR PROJECTS · 2026",
    "burst.back": "scroll up to go back",
    "burst.reveal": "scroll to reveal",
    "badge.text": "LET'S TALK · GET IN TOUCH · ",

    "process.kicker": "Process",
    "process.title": "Three steps, no theater.",
    "process.lead": "No mystery: we align the goal, design the solution, and ship it live. Every step with you in the loop, watching progress.",
    "process.1.title": "Structure",
    "process.1.text": "I understand the problem, map the content, and set the information architecture before any pixel.",
    "process.2.title": "Design",
    "process.2.text": "I turn structure into layout: typography, rhythm, color and motion — all with intent.",
    "process.3.title": "Ship",
    "process.3.text": "Clean, performant, responsive code — shipped and ready to scale.",

    "skills.kicker": "Skills",
    "skills.title": "Skills that become <em>craft</em>.",
    "skills.lead": "Eight territories of my craft. Scroll — they slide past, one by one.",
    "skills.hint": "scroll to move across",
    "cursor.viewProject": "View project",

    "skill.frontend.name": "Frontend",
    "skill.frontend.text": "HTML, CSS, JS, React. The visible layer and all that holds it up.",
    "skill.backend.name": "Backend &amp; API",
    "skill.backend.text": "Laravel, Node, REST. The gears no one sees, but everyone feels.",
    "skill.motion.name": "Animation",
    "skill.motion.text": "GSAP, Motion, CSS keyframes. A cadence that breathes.",
    "skill.ux.name": "UI &amp; UX",
    "skill.ux.text": "Hierarchy, rhythm, decisions that feel obvious.",
    "skill.perf.name": "Performance",
    "skill.perf.text": "Light bundle, predictable render — ms matter.",
    "skill.responsive.name": "Responsiveness",
    "skill.responsive.text": "From desktop to thumb. No breakage, no excuses.",
    "skill.a11y.name": "Accessibility",
    "skill.a11y.text": "Visible focus, contrast, semantics. Web for everyone.",
    "skill.security.name": "Security",
    "skill.security.text": "Validation, auth, data in transit. Web with no gaps.",
    "skill.deploy.name": "Deploy",
    "skill.deploy.text": "Git, CI/CD, continuous deploy. From commit to live, frictionless.",

    "projects.kicker": "Selected projects",
    "projects.title": "Work that <em>breathes</em>.",
    "projects.lead": "Three recent projects — click to see the full case study.",
    "proj.1.title": "Editorial in motion",
    "proj.1.text": "Editorial site with smooth transitions and expressive type, built for long, pleasant reading.",
    "proj.2.title": "Dashboard without noise",
    "proj.2.text": "Admin panel with its own design system: clear data, no visual clutter.",
    "proj.3.title": "Terracotta landing",
    "proj.3.text": "High-conversion landing with a strong identity and instant loading.",
    "proj.4.title": "Slow reading app",
    "proj.4.text": "Mobile app focused on focus: distraction-free reading with careful typography.",
    "proj.5.title": "Household Wallet",
    "proj.5.text": "Personal finance app: budget, goals, recurring, financing and investments in BRL and USD, with real-time charts.",
    "proj.6.title": "Lirismo Digital",
    "proj.6.text": "E-book marketplace with an author flow, work approval, in-browser buying and reading — plus PDF and cover storage.",
    "proj.7.title": "Pedido sem fila",
    "proj.7.text": "Mobile app for a technical school canteen: login, menu by category, real-time cart and order history. No queue, no paper.",

    "foot.copy": "© 2026 · Pedro Bonini · São Paulo"
  }
};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.pt;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.documentElement.setAttribute("lang", lang === "en" ? "en" : "pt-BR");
  const label = document.getElementById("langLabel");
  if (label) label.textContent = lang.toUpperCase();
  try { localStorage.setItem("pb-lang", lang); } catch (e) {}
}
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem("pb-theme", theme); } catch (e) {}
}


document.addEventListener("DOMContentLoaded", () => {

  let lang = "pt";
  try { lang = localStorage.getItem("pb-lang") || "pt"; } catch (e) {}
  applyLang(lang);
  let theme = document.documentElement.getAttribute("data-theme") || "dark";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;


  /* ---------- SCROLL SUAVE (Lenis) ---------- */
  let lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new Lenis({
      lerp: 0.075,            // menor = mais suave/pesado (pegada Redox)
      wheelMultiplier: 0.9,   // segura a velocidade do mouse
      touchMultiplier: 1.1,
      smoothWheel: true
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  // navegação ancorada usa o Lenis pra rolar suave
  function scrollToTarget(sel) {
    const el = document.querySelector(sel);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.6 });
    else el.scrollIntoView({ behavior: "smooth" });
  }


  /* ---------- CUSTOM CURSOR (bolinha que segue o mouse) ---------- */
  const cursor = document.getElementById("cursor");
  const cursorLabel = document.getElementById("cursorLabel");
  if (cursor && matchMedia("(pointer: fine)").matches && !reduce) {
    const xTo = gsap.quickTo(cursor, "x", { duration: .45, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: .45, ease: "power3" });
    window.addEventListener("mousemove", (e) => {
      cursor.classList.add("is-on");
      xTo(e.clientX);
      yTo(e.clientY);
    }, { passive: true });
    document.addEventListener("mouseleave", () => cursor.classList.remove("is-on"));
    document.addEventListener("mousedown", () => cursor.classList.add("is-down"));
    document.addEventListener("mouseup", () => cursor.classList.remove("is-down"));
    // cresce sobre elementos interativos
    document.querySelectorAll("a, button, .dock-item, .dock-tool, .skill-card, .cls-item, .scroll-hint").forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
    });
    // projetos: cursor vira disco "Ver projeto"
    document.querySelectorAll(".proj").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (cursorLabel) cursorLabel.textContent = (I18N[lang] || I18N.pt)["cursor.viewProject"] || "Ver projeto";
        cursor.classList.add("is-view");
      });
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-view"));
    });
  }


  /* ---------- SELO: detecta o fundo atrás dele e inverte a cor do texto ---------- */
  const badgeEl = document.getElementById("contactBadge");
  if (badgeEl && window.gsap) {
    const lumOf = (c) => (0.299 * +c[0] + 0.587 * +c[1] + 0.114 * +c[2]) / 255;
    function badgeContrast() {
      const r = badgeEl.getBoundingClientRect();
      const els = document.elementsFromPoint(r.left + r.width / 2, r.top + r.height / 2);
      for (let k = 0; k < els.length; k++) {
        const el = els[k];
        if (el === badgeEl || badgeEl.contains(el)) continue;     // ignora o próprio selo
        const c = getComputedStyle(el).backgroundColor.match(/[\d.]+/g);
        if (c && c.length >= 3 && (c[3] === undefined || +c[3] > 0.25)) {   // 1º fundo opaco atrás
          badgeEl.classList.toggle("on-light", lumOf(c) > 0.55);            // claro -> texto escuro
          return;
        }
      }
    }
    let bcAcc = 0;
    gsap.ticker.add((time, dt) => { bcAcc += dt; if (bcAcc < 90) return; bcAcc = 0; badgeContrast(); });
    badgeContrast();
  }


  /* ---------- DOCK indicator ---------- */
  const dockPill  = document.querySelector(".dock-pill");
  const indicator = document.querySelector(".dock-indicator");
  const navLinks  = document.querySelectorAll(".dock-item[data-section]");
  function moveIndicatorTo(link) {
    if (!dockPill || !indicator || !link) return;
    if (link.classList.contains("dock-cta")) { indicator.style.width = "0px"; return; } // CTA usa estilo próprio
    const a = dockPill.getBoundingClientRect(), b = link.getBoundingClientRect();
    indicator.style.width = b.width + "px";
    indicator.style.transform = `translateX(${b.left - a.left}px)`;
  }
  function syncIndicator() {
    const active = dockPill ? dockPill.querySelector(".dock-item.is-active") : null;
    if (active) moveIndicatorTo(active);
  }
  let rsTimer;
  window.addEventListener("resize", () => { clearTimeout(rsTimer); rsTimer = setTimeout(syncIndicator, 120); });

  function revealDock() {
    gsap.to(".dock", { opacity: 1, y: 0, duration: .8, ease: "power3.out", startAt: { y: 20 } });
    setTimeout(() => { syncIndicator(); indicator && indicator.classList.add("is-ready"); }, 250);
  }


  /* ---------- SCROLL PROGRESS BAR ---------- */
  const bar = document.getElementById("scrollbarFill");
  if (bar) {
    gsap.fromTo(bar, { scaleX: 0 }, {
      scaleX: 1, ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: .3, invalidateOnRefresh: true }
    });
  }


  /* ---------- STAGE: intro → hero (como antes; trava depois que completa) ---------- */
  const sceneIntro = document.getElementById("sceneIntro");
  const sceneHero  = document.getElementById("sceneHero");
  const introTitle = document.getElementById("introTitle");

  if (!reduce && sceneIntro && sceneHero) {
    // entrada da intro (palavras com máscara)
    const text = introTitle.textContent.trim();
    introTitle.innerHTML = text.split(" ").map((w) => `<span class="word"><span>${w}</span></span>`).join(" ");
    const words = introTitle.querySelectorAll(".word > span");
    gsap.set(words, { yPercent: 110 });
    // hero começa pequeno e apagado; cresce e aparece por cima, no centro
    gsap.set(sceneHero, { autoAlpha: 0, scale: .72 });

    const entrance = gsap.timeline({ delay: .25 });
    entrance
      .from(".intro-eyebrow", { opacity: 0, y: 10, duration: .6, ease: "power2.out" })
      .to(words, { yPercent: 0, duration: .9, stagger: .09, ease: "power4.out" }, "-=.15")
      .from(".intro-sub", { opacity: 0, y: 10, duration: .6, ease: "power2.out" }, "-=.4")
      .from(".scroll-hint", { opacity: 0, y: 10, duration: .6, ease: "power2.out", onStart: revealDock }, "-=.2");

    // transição no scroll (palco fixo, reversível): intro sai ANTES da hero entrar (sem sobrepor)
    const stageTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".stage", start: "top top", end: "+=130%",
        pin: ".stage-pin", scrub: .6, anticipatePin: 1, invalidateOnRefresh: true
      }
    });
    stageTl
      .to(sceneIntro, { autoAlpha: 0, scale: .9, y: -40, ease: "power2.in", duration: .5 }, 0)
      .to(sceneHero, { autoAlpha: 1, scale: 1, ease: "power2.out", duration: .55 }, .48);
  } else {
    if (sceneIntro) sceneIntro.style.display = "none";
    if (sceneHero) gsap.set(sceneHero, { autoAlpha: 1, y: 0 });
    revealDock();
  }


  /* ---------- TOGGLES ---------- */
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) themeBtn.addEventListener("click", () => {
    theme = (document.documentElement.getAttribute("data-theme") === "dark") ? "light" : "dark";
    applyTheme(theme);
  });
  const langBtn = document.getElementById("langToggle");
  if (langBtn) langBtn.addEventListener("click", () => {
    lang = (lang === "pt") ? "en" : "pt";
    applyLang(lang);
    requestAnimationFrame(() => { syncIndicator(); ScrollTrigger.refresh(); });
  });


  /* ---------- PROCESS reveal ---------- */
  gsap.from(".process .section-kicker, .process .section-title, .process .section-lead", {
    scrollTrigger: { trigger: ".process", start: "top 78%" }, y: 22, opacity: 0, duration: .8, stagger: .08, ease: "power3.out"
  });


  /* ---------- SKILLS: header reveal ---------- */
  gsap.from(".skills .section-kicker, .skills .section-title, .skills .section-lead", {
    scrollTrigger: { trigger: ".skills", start: "top 78%" }, y: 22, opacity: 0, duration: .8, stagger: .08, ease: "power3.out"
  });

  /* ---------- SKILLS: galeria horizontal (scroll vertical -> deslize lateral) ---------- */
  const skillsStage = document.getElementById("skillsStage");
  const skillsRail  = document.getElementById("skillsRail");
  const skPanels    = gsap.utils.toArray(".sk-panel");
  const skNow       = document.getElementById("skNow");
  const skBar       = document.getElementById("skBar");

  if (!reduce && skillsStage && skillsRail && skPanels.length) {
    const maxX = () => Math.max(1, skillsRail.scrollWidth - skillsStage.clientWidth);

    function paintRail(p) {
      const vw = skillsStage.clientWidth;
      const x = p * maxX();
      skPanels.forEach((panel, i) => {
        const k = Math.max(-1.2, Math.min(1.2, (x - i * vw) / vw));   // -1 chegando · 0 ativo · 1 indo embora
        const idx = panel.querySelector(".sk-index");
        const body = panel.querySelector(".sk-body");
        if (idx)  idx.style.transform = "translateY(-50%) translateX(" + (-k * 90).toFixed(1) + "px)";   // parallax do número
        if (body) {
          const f = 1 - Math.min(1, Math.abs(k));                     // foco: 1 no centro, 0 fora
          body.style.opacity = (0.16 + 0.84 * f).toFixed(3);
          body.style.transform = "translateX(" + (k * 56).toFixed(1) + "px)";
        }
      });
      const now = Math.min(skPanels.length, Math.max(1, Math.floor((x + vw * 0.5) / vw) + 1));
      if (skNow) skNow.textContent = String(now).padStart(2, "0");
      if (skBar) skBar.style.transform = "scaleX(" + p.toFixed(4) + ")";
    }

    // DESKTOP: pina a seção; o scroll vertical vira o deslize horizontal do trilho
    const mm = gsap.matchMedia();
    mm.add("(min-width: 761px)", () => {
      skillsStage.classList.add("rail-on");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsStage, start: "top top",
          end: () => "+=" + Math.round(maxX() * 0.7),   // distância do pin = ritmo do deslize
          pin: true, scrub: 1, anticipatePin: 1, invalidateOnRefresh: true,
          // snap EXTREMAMENTE suave: encaixa numa skill por vez (não deixa parar no meio)
          snap: {
            snapTo: 1 / (skPanels.length - 1),
            duration: { min: 0.3, max: 0.9 },
            ease: "power2.inOut",
            delay: 0.06
          },
          onUpdate: (self) => paintRail(self.progress)
        }
      });
      tl.to(skillsRail, { x: () => -maxX(), ease: "none" }, 0);
      paintRail(0);
      return () => {                                       // mobile/cleanup: solta tudo (painéis empilham)
        skillsStage.classList.remove("rail-on");
        gsap.set(skillsRail, { clearProps: "transform" });
        skPanels.forEach((panel) => {
          const idx = panel.querySelector(".sk-index"), body = panel.querySelector(".sk-body");
          if (idx) idx.style.transform = "";
          if (body) { body.style.opacity = ""; body.style.transform = ""; }
        });
      };
    });
  }


  /* ---------- PROJECTS reveal ---------- */
  gsap.from(".projects .section-kicker, .projects .section-title, .projects .section-lead", {
    scrollTrigger: { trigger: ".projects", start: "top 78%" }, y: 22, opacity: 0, duration: .8, stagger: .08, ease: "power3.out"
  });

  document.documentElement.classList.add("ed-ready");

  /* ---------- PROJETOS: índice — cada linha revela no scroll ---------- */
  gsap.utils.toArray(".px-row").forEach((row) => {
    ScrollTrigger.create({
      trigger: row, start: "top 84%",
      onEnter: () => row.classList.add("ed-in"),
      onEnterBack: () => row.classList.add("ed-in")
    });
  });

  /* ---------- PROCESSO: cada etapa revela no scroll (sem pin, sem parallax) ---------- */
  gsap.utils.toArray(".step").forEach((step) => {
    ScrollTrigger.create({
      trigger: step, start: "top 82%",
      onEnter: () => step.classList.add("ed-in"),
      onEnterBack: () => step.classList.add("ed-in")
    });
  });


  /* ---------- CONTACT — círculo que expande pra tela toda ---------- */
  const burstCircle = document.getElementById("burstCircle");
  const burstContent = document.getElementById("burstContent");
  if (burstCircle) {
    // raio que cobre a tela inteira (meia-diagonal + folga)
    const targetR = () => Math.round(Math.hypot(window.innerWidth, window.innerHeight) / 2 + 60);
    const burstTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".burst", start: "top top", end: "+=95%",
        pin: ".burst-pin", scrub: .5, anticipatePin: 1, invalidateOnRefresh: true
      }
    });
    burstTl
      .fromTo(burstCircle, { "--cr": "110px" }, { "--cr": () => targetR() + "px", ease: "power2.in" }, 0)
      .to("#burstHint", { autoAlpha: 0, duration: .08, ease: "none" }, 0)
      .to(".burst-label", { scale: 2.8, autoAlpha: 0, ease: "power1.in", duration: .55 }, 0)   // cresce junto com a bola e dissolve
      .to(burstContent, { autoAlpha: 1, ease: "none", duration: .2,
        onStart: () => { burstContent.style.pointerEvents = "auto"; },
        onReverseComplete: () => { burstContent.style.pointerEvents = "none"; }
      }, .58);
  }


  /* ---------- NAV active state on scroll ---------- */
  const sections = ["hero", "process", "skills", "projects", "contact"];
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    ScrollTrigger.create({
      trigger: el, start: "top 60%", end: "bottom 40%",
      onToggle: (self) => {
        if (self.isActive) {
          navLinks.forEach((l) => l.classList.toggle("is-active", l.dataset.section === id));
          syncIndicator();
        }
      }
    });
  });
  // dock = só indicador de seção: hover mostra o tooltip, mas o clique NÃO navega
  document.querySelectorAll(".dock-item").forEach((link) => {
    link.addEventListener("click", (e) => { e.preventDefault(); });
  });

  // demais links âncora (ex.: CTA da hero) rolam suave via Lenis
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    if (a.classList.contains("dock-item")) return;   // dock não rola
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id && id.length > 1 && document.querySelector(id)) {
        e.preventDefault();
        scrollToTarget(id);
      }
    });
  });

});
