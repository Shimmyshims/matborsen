// ── PRICE INDEX DEMO ──

const MARKET_ITEMS = [
  { name: "Kjøttdeig 400g",        normal: 47, category: "Kjøtt" },
  { name: "Kyllingfilet 400g",     normal: 53, category: "Kjøtt" },
  { name: "Kyllingbryst 500g",     normal: 64, category: "Kjøtt" },
  { name: "Laksefilet 400g",       normal: 89, category: "Fisk" },
  { name: "Torsk 500g",            normal: 72, category: "Fisk" },
  { name: "Pasta 500g",            normal: 17, category: "Tørt" },
  { name: "Basmatiris 500g",       normal: 24, category: "Tørt" },
  { name: "Quinoa 300g",           normal: 39, category: "Tørt" },
  { name: "Røde linser 400g",      normal: 23, category: "Tørt" },
  { name: "Egg 6 stk",             normal: 28, category: "Meieri" },
  { name: "Melk 1L",               normal: 20, category: "Meieri" },
  { name: "Ost 200g",              normal: 36, category: "Meieri" },
  { name: "Yoghurt naturell 500g", normal: 29, category: "Meieri" },
  { name: "Havregryn 500g",        normal: 19, category: "Frokost" },
  { name: "Grovbrød",              normal: 33, category: "Bakst" },
  { name: "Tortilla 8 stk",        normal: 28, category: "Bakst" },
  { name: "Hermetiske tomater",    normal: 15, category: "Hermetikk" },
  { name: "Kokosmelk",             normal: 18, category: "Hermetikk" },
  { name: "Søtpotet 600g",         normal: 35, category: "Grønnsaker" },
  { name: "Brokkoli",              normal: 22, category: "Grønnsaker" },
  { name: "Wokgrønnsaker",         normal: 29, category: "Grønnsaker" },
];

function itemHash(name, offset) {
  const ws = Math.floor(Date.now() / 604800000);
  let h = ws + (offset || 0) * 99991;
  for (let i = 0; i < name.length; i++) h = Math.imul(h ^ name.charCodeAt(i), 2654435761);
  return (h >>> 0) / 4294967295;
}

function computeDeal(item) {
  const r = itemHash(item.name);
  const pct = r < 0.65 ? -(0.05 + (r / 0.65) * 0.27) : (r - 0.65) / 0.35 * 0.08;
  const current = Math.max(1, Math.round(item.normal * (1 + pct)));
  return { current, pct: Math.round(pct * 100), change: current - item.normal };
}

function sparkPoints(item, current) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const r = itemHash(item.name, i + 1);
    const t = i / 5;
    const base = item.normal + (current - item.normal) * Math.pow(t, 1.4);
    pts.push(Math.max(1, Math.round(base + (r - 0.5) * item.normal * 0.1)));
  }
  pts.push(current);
  return pts;
}

function renderSparkSVG(pts, isGood) {
  const W = 72, H = 28;
  const lo = Math.min(...pts), hi = Math.max(...pts);
  const range = hi - lo || 1;
  const coords = pts.map((v, i) => [
    (i / (pts.length - 1)) * W,
    H - 2 - ((v - lo) / range) * (H - 4),
  ]);
  const stroke = isGood ? "#4ade80" : "#f87171";
  const fill = isGood ? "rgba(74,222,128,0.12)" : "rgba(248,113,113,0.12)";
  const poly = coords.map(c => `${c[0].toFixed(1)},${c[1].toFixed(1)}`).join(" ");
  const last = coords[coords.length - 1];
  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="display:block;overflow:visible">
    <polygon points="0,${H} ${poly} ${W},${H}" fill="${fill}"/>
    <polyline points="${poly}" fill="none" stroke="${stroke}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${last[0].toFixed(1)}" cy="${last[1].toFixed(1)}" r="2.5" fill="${stroke}"/>
  </svg>`;
}

function renderPriceChart() {
  const el = document.getElementById("landingPriceChart");
  if (!el) return;

  const priced = MARKET_ITEMS.map(item => {
    const { current, pct } = computeDeal(item);
    const isGood = current < item.normal;
    return { ...item, current, pct, isGood, pts: sparkPoints(item, current) };
  }).filter(item => item.isGood).sort((a, b) => a.pct - b.pct).slice(0, 7);

  el.innerHTML = `
    <div class="price-chart">
      <div class="pch-header">
        <div class="pch-title"><span class="live-dot"></span>Prisindeks (demo)</div>
        <span class="pch-meta" id="pchTime"></span>
      </div>
      <div class="pch-rows">
        ${priced.map(item => `
          <div class="pch-row">
            <div class="pch-info">
              <span class="pch-name">${item.name}</span>
              <span class="pch-cat">${item.category}</span>
            </div>
            <div class="pch-spark">${renderSparkSVG(item.pts, item.isGood)}</div>
            <div class="pch-nums">
              <span class="pch-price">${item.current} kr</span>
              <span class="pch-badge badge-good">${item.pct}%</span>
            </div>
          </div>`).join("")}
      </div>
    </div>`;
}

function updatePchTime() {
  const el = document.getElementById("pchTime");
  if (!el) return;
  const now = new Date();
  const dayStr = now.toLocaleDateString("no-NO", { weekday: "short", day: "numeric", month: "short" });
  const s = now.getSeconds().toString().padStart(2, "0");
  const m = now.getMinutes().toString().padStart(2, "0");
  const h = now.getHours().toString().padStart(2, "0");
  el.textContent = `${dayStr} · ${h}:${m}:${s} · eksempeldata`;
}

renderPriceChart();
updatePchTime();
setInterval(updatePchTime, 1000);

// ── SCROLL ANIMASJONER ──

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

// ── HAMBURGERMENY ──

const hamburgerBtn = document.getElementById("hamburgerBtn");
const menuOverlay = document.getElementById("menuOverlay");

if (hamburgerBtn && menuOverlay) {
  hamburgerBtn.addEventListener("click", () => {
    const isOpen = menuOverlay.classList.toggle("open");
    hamburgerBtn.classList.toggle("open", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
  });

  menuOverlay.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", () => {
      menuOverlay.classList.remove("open");
      hamburgerBtn.classList.remove("open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

// ── VENTELISTE-FORM ──

function handleWaitlistSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  }).catch(() => {}); // fortsett uansett — vis suksess lokalt

  form.classList.add("submitted");
  if (!form.querySelector(".waitlist-success")) {
    const success = document.createElement("div");
    success.className = "waitlist-success";
    success.textContent = "Du er på listen! Vi gir deg beskjed når vi lanserer.";
    form.appendChild(success);
  }
}

document.querySelectorAll(".waitlist-form").forEach(form => {
  form.addEventListener("submit", handleWaitlistSubmit);
});
