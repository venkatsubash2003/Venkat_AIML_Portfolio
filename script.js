const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const projects = {
  careerpilot: {
    kicker: "LLM Job Intelligence",
    title: "CareerPilot AI",
    description: "An AI-powered application assistant for international students. It combines LLM-driven visa sponsorship classification, H1B history lookup, ATS score calculation, resume/JD fit analysis, cover letter generation, recruiter email drafting, and a SQLite application tracker.",
    metrics: [
      ["70%", "Less manual job research"],
      ["ATS", "Resume/JD fit scoring"],
      ["SQLite", "Application tracking"]
    ],
    stack: ["LangChain", "Ollama", "Llama 3.1", "Streamlit", "Python", "SQLite"]
  },
  research: {
    kicker: "Research Intelligence",
    title: "LLM-Based Research Paper Analysis Engine",
    description: "A FastAPI and LangChain platform for summarizing, clustering, and comparing research papers through LLM-driven semantic analysis. Built to reduce manual literature review effort and improve insight extraction quality.",
    metrics: [
      ["75%", "Less manual review effort"],
      ["45%", "Better insight extraction"],
      ["NLP", "Semantic comparison"]
    ],
    stack: ["LangChain", "FastAPI", "Python", "NLP", "Semantic Analysis", "LLM Workflows"]
  },
  crime: {
    kicker: "Risk Modeling",
    title: "Crime Similarity & Risk Prediction System",
    description: "An unsupervised deep learning system using AutoEncoders across 2M+ records. It applies normalization, imputation, encoding, and feature engineering pipelines to improve pattern detection and enable real-time risk scoring.",
    metrics: [
      ["2M+", "Records processed"],
      ["35%", "Pattern detection gain"],
      ["Real-time", "Risk scoring"]
    ],
    stack: ["AutoEncoders", "Scikit-learn", "Python", "Feature Engineering", "Unsupervised Learning"]
  },
  farmers: {
    kicker: "Analytics Platform",
    title: "Farmers Market Analytics & Dashboard System",
    description: "An AI-assisted Tableau and BigQuery analytics system consolidating Smartsheets forms into unified datasets for vendor engagement, attendee demographics, benefits utilization, KPI tracking, and reporting automation.",
    metrics: [
      ["45%", "Reporting efficiency gain"],
      ["60%", "Manual reporting reduction"],
      ["30%", "Cross-dataset accuracy gain"]
    ],
    stack: ["Tableau", "BigQuery", "SQL", "Smartsheets", "Python", "Scikit-learn", "ETL"]
  }
};


const commandIcons = {
  mail: '<svg class="command-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6.75A2.75 2.75 0 0 1 6.25 4h11.5a2.75 2.75 0 0 1 2.75 2.75v10.5A2.75 2.75 0 0 1 17.75 20H6.25a2.75 2.75 0 0 1-2.75-2.75V6.75Zm2.05-.22 6.45 5.12 6.45-5.12a1.25 1.25 0 0 0-.7-.22H6.25c-.26 0-.5.08-.7.22Zm13.45 2.02-6.23 4.95a1.25 1.25 0 0 1-1.54 0L5 8.55v8.7c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25v-8.7Z"/></svg>',
  linkedin: '<svg class="command-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.97H3.75v10.44h3.19V8.97ZM5.35 7.55a1.84 1.84 0 1 0 0-3.68 1.84 1.84 0 0 0 0 3.68Zm14.9 6.1c0-3.15-1.68-4.62-3.92-4.62-1.8 0-2.6.99-3.05 1.68V8.97h-3.05c.04.98 0 10.44 0 10.44h3.18v-5.83c0-.31.02-.62.11-.84.25-.62.82-1.26 1.77-1.26 1.25 0 1.75.95 1.75 2.35v5.58h3.18v-5.76h.03Z"/></svg>',
  github: '<svg class="command-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.75a9.25 9.25 0 0 0-2.93 18.03c.46.08.63-.2.63-.44 0-.22-.01-.94-.01-1.7-2.32.43-2.92-.57-3.1-1.1-.1-.27-.55-1.1-.94-1.33-.32-.17-.78-.6-.01-.62.72-.01 1.24.67 1.41.95.83 1.39 2.16.99 2.68.76.08-.6.32-1 .58-1.23-2.04-.23-4.18-1.02-4.18-4.53 0-1 .36-1.82.95-2.46-.1-.23-.41-1.17.09-2.43 0 0 .77-.25 2.54.94.74-.2 1.52-.31 2.3-.31s1.56.1 2.3.31c1.76-1.2 2.54-.94 2.54-.94.5 1.26.18 2.2.09 2.43.59.64.95 1.46.95 2.46 0 3.52-2.15 4.3-4.19 4.53.33.29.62.84.62 1.7 0 1.23-.01 2.22-.01 2.53 0 .24.17.53.63.44A9.25 9.25 0 0 0 12 2.75Z"/></svg>'
};

const commandItems = [
  { label: "Impact Dashboard", detail: "Jump to quantified metrics", href: "#impact" },
  { label: "Experience Timeline", detail: "University of Cincinnati + Cybereconn", href: "#experience" },
  { label: "Project Case Studies", detail: "Open featured AI systems", href: "#projects" },
  { label: "Technical Arsenal", detail: "View stack by category", href: "#skills" },
  { label: "Contact Venkat", detail: "Email and links", href: "#contact" },
  { label: "Download Resume", detail: "Open PDF in a new tab", href: "assets/VenkatSaiSubash_AIML.pdf", external: true },
  { label: "Email Venkat", detail: "venkatsaisubash.2003@gmail.com", href: "mailto:venkatsaisubash.2003@gmail.com?subject=AI%2FML%20Engineering%20Opportunity%20for%20Venkat", external: true, icon: "mail" },
  { label: "GitHub", detail: "venkatsubash2003", href: "https://github.com/venkatsubash2003", external: true, icon: "github" },
  { label: "LinkedIn", detail: "Professional profile", href: "https://www.linkedin.com/in/venkat-sai-subash-panchakarla-b166ba23a", external: true, icon: "linkedin" }
];

function setYear() {
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
}

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  $$(".reveal").forEach(el => observer.observe(el));
}

function initScrollState() {
  const progress = $(".scroll-progress span");
  const navLinks = $$(".desktop-nav a, .section-rail a");
  const sectionMap = new Map(navLinks.map(link => [link.getAttribute("href"), link]));
  const sections = [$("#top"), $("#impact"), $("#experience"), $("#projects"), $("#skills"), $("#contact")].filter(Boolean);

  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progress) progress.style.width = `${pct}%`;

    let active = "#top";
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.38) active = `#${section.id || "top"}`;
    });
    navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === active));
  }
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initTerminal() {
  const terminal = $("#terminal-lines");
  if (!terminal) return;
  const lines = [
    "> boot venkat.ai_portfolio",
    "> load: Llama 3.1 inference + RAG + vector search",
    "> optimize: p95 latency, retrieval relevance, feature pipelines",
    "> status: ready for production AI impact"
  ];
  let i = 0;
  let text = "";
  function typeLine() {
    if (i >= lines.length) return;
    const line = lines[i];
    let j = 0;
    const interval = setInterval(() => {
      text += line[j] || "";
      terminal.textContent = text + "█";
      j++;
      if (j > line.length) {
        clearInterval(interval);
        text += "\n";
        i++;
        setTimeout(typeLine, 420);
      }
    }, 22);
  }
  typeLine();
}

function initProjectModal() {
  const modal = $("#project-modal");
  const close = $("#modal-close");
  const title = $("#modal-title");
  const kicker = $("#modal-kicker");
  const description = $("#modal-description");
  const metrics = $("#modal-metrics");
  const stack = $("#modal-stack");

  function openProject(key) {
    const project = projects[key];
    if (!project) return;
    title.textContent = project.title;
    kicker.textContent = project.kicker;
    description.textContent = project.description;
    metrics.innerHTML = project.metrics.map(([value, label]) => `<article><strong>${value}</strong><span>${label}</span></article>`).join("");
    stack.innerHTML = project.stack.map(item => `<span>${item}</span>`).join("");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    close.focus();
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  $$(".project-card").forEach(card => {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.addEventListener("click", () => openProject(card.dataset.project));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProject(card.dataset.project);
      }
    });
  });
  close.addEventListener("click", closeModal);
  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
}

function initSkillTabs() {
  const tabs = $$(".skill-tab");
  const groups = $$(".skill-category");
  function applyFilter(cat) {
    tabs.forEach(tab => {
      const active = tab.dataset.filter === cat;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    });
    groups.forEach(group => {
      const focused = group.dataset.cat === cat;
      group.classList.toggle("active", focused);
      group.classList.toggle("dim", !focused);
    });
  }
  tabs.forEach(tab => tab.addEventListener("click", () => applyFilter(tab.dataset.filter)));
  applyFilter("ai");
}

function initCommandPalette() {
  const palette = $("#command-palette");
  const input = $("#command-input");
  const list = $("#command-list");
  const openButton = $("#command-open");

  function render(filter = "") {
    const q = filter.trim().toLowerCase();
    const items = commandItems.filter(item => `${item.label} ${item.detail}`.toLowerCase().includes(q));
    list.innerHTML = items.map((item, index) => `
      <button class="command-item ${index === 0 ? "active" : ""}" data-href="${item.href}" data-external="${item.external ? "true" : "false"}">
        <span class="command-row">${item.icon ? commandIcons[item.icon] : ""}<span>${item.label}</span></span><small>${item.detail}</small>
      </button>
    `).join("");
  }
  function openPalette() {
    render();
    palette.classList.add("open");
    palette.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    setTimeout(() => input.focus(), 10);
  }
  function closePalette() {
    palette.classList.remove("open");
    palette.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    input.value = "";
  }
  function activate(button) {
    if (!button) return;
    const href = button.dataset.href;
    const external = button.dataset.external === "true";
    closePalette();
    if (external) window.open(href, "_blank", "noopener,noreferrer");
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  openButton?.addEventListener("click", openPalette);
  input?.addEventListener("input", () => render(input.value));
  list?.addEventListener("click", event => activate(event.target.closest(".command-item")));
  palette?.addEventListener("click", event => { if (event.target === palette) closePalette(); });
  document.addEventListener("keydown", event => {
    const macK = event.metaKey && event.key.toLowerCase() === "k";
    const ctrlK = event.ctrlKey && event.key.toLowerCase() === "k";
    if (macK || ctrlK) {
      event.preventDefault();
      palette.classList.contains("open") ? closePalette() : openPalette();
    }
    if (event.key === "Escape" && palette.classList.contains("open")) closePalette();
    if (event.key === "Enter" && palette.classList.contains("open")) activate($(".command-item.active", list));
  });
}

function initCopyEmail() {
  const button = $("#copy-email");
  const toast = $("#toast");
  if (!button) return;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("venkatsaisubash.2003@gmail.com");
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 1800);
    } catch {
      window.location.href = "mailto:venkatsaisubash.2003@gmail.com";
    }
  });
}

function initCursorLight() {
  const light = $(".cursor-light");
  if (!light || window.matchMedia("(pointer: coarse)").matches) return;
  window.addEventListener("pointermove", event => {
    light.style.left = `${event.clientX}px`;
    light.style.top = `${event.clientY}px`;
  }, { passive: true });
}

function initMagnetic() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  $$(".magnetic").forEach(el => {
    el.addEventListener("mousemove", event => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0, 0)";
    });
  });
}

function initCanvas() {
  const canvas = $("#neural-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let nodes = [];

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.width = Math.floor(window.innerWidth * dpr);
    height = canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(95, Math.floor(window.innerWidth / 17));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - .5) * .28,
      vy: (Math.random() - .5) * .28,
      r: Math.random() * 1.8 + .6
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    nodes.forEach((a, i) => {
      if (!reduced) {
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > window.innerWidth) a.vx *= -1;
        if (a.y < 0 || a.y > window.innerHeight) a.vy *= -1;
      }
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(91,231,255,.38)";
      ctx.fill();
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 128) {
          ctx.strokeStyle = `rgba(91,231,255,${(1 - dist / 128) * .16})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    });
    if (!reduced) requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

function initSoundDesign() {
  const toggle = $("#sound-toggle");
  const ambient = $("#ambient-audio");
  const hoverSound = $("#hover-audio");
  const hoverTargets = $$(".impact-card, .architecture-card, .timeline-card, .project-card, .skill-category, .education-card, .contact-card");
  if (!toggle || !ambient || !hoverSound) return;

  let enabled = false;
  let audioCtx = null;
  ambient.volume = 0.16;
  hoverSound.volume = 0.34;

  function ensureAudioContext() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
    return audioCtx;
  }

  function updateToggle() {
    toggle.classList.toggle("active", enabled);
    toggle.setAttribute("aria-pressed", enabled ? "true" : "false");
    toggle.title = enabled ? "Pause soothing ambient music" : "Enable soothing ambient music";
    const label = $(".sound-label", toggle);
    if (label) label.textContent = enabled ? "Calm" : "Sound";
  }

  async function setEnabled(next) {
    enabled = next;
    updateToggle();
    if (enabled) {
      ensureAudioContext();
      try {
        await ambient.play();
      } catch {
        enabled = false;
        updateToggle();
      }
    } else {
      ambient.pause();
    }
  }

  function playHoverTone(event) {
    if (!enabled) return;
    const card = event.currentTarget;
    const nowMs = performance.now();
    if (card.dataset.lastTone && nowMs - Number(card.dataset.lastTone) < 260) return;
    card.dataset.lastTone = String(nowMs);

    // Briefly soften the background pad, then let it bloom back in after the chime.
    ambient.volume = 0.11;
    window.clearTimeout(playHoverTone.restoreTimer);
    playHoverTone.restoreTimer = window.setTimeout(() => {
      if (enabled) ambient.volume = 0.16;
    }, 520);

    const chime = hoverSound.cloneNode(true);
    chime.volume = 0.34;
    chime.currentTime = 0;
    chime.play().catch(() => {});
  }

  toggle.addEventListener("click", () => setEnabled(!enabled));
  hoverTargets.forEach(card => card.addEventListener("pointerenter", playHoverTone));
}

setYear();
initReveal();
initScrollState();
initTerminal();
initProjectModal();
initSkillTabs();
initCommandPalette();
initCopyEmail();
initCursorLight();
initMagnetic();
initSoundDesign();
initCanvas();
