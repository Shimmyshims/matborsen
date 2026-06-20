const STORES = [
  { id: "rema",     name: "Rema 1000",  abbr: "R1",  color: "#dc2626", logo: "https://www.google.com/s2/favicons?sz=64&domain=rema.no" },
  { id: "kiwi",     name: "Kiwi",       abbr: "KW",  color: "#16a34a", logo: "https://www.google.com/s2/favicons?sz=64&domain=kiwi.no" },
  { id: "meny",     name: "Meny",       abbr: "MN",  color: "#1d4ed8", logo: "https://www.google.com/s2/favicons?sz=64&domain=meny.no" },
  { id: "spar",     name: "Spar",       abbr: "SP",  color: "#ea580c", logo: "https://www.google.com/s2/favicons?sz=64&domain=spar.no" },
  { id: "coop_prix",name: "Coop Prix",  abbr: "CP",  color: "#7c3aed", logo: "https://www.google.com/s2/favicons?sz=64&domain=coop.no" },
  { id: "bunnpris", name: "Bunnpris",   abbr: "BP",  color: "#0891b2", logo: "https://www.google.com/s2/favicons?sz=64&domain=bunnpris.no" },
  { id: "joker",    name: "Joker",      abbr: "JO",  color: "#db2777", logo: "https://www.google.com/s2/favicons?sz=64&domain=joker.no" },
  { id: "extra",    name: "Coop Extra", abbr: "CE",  color: "#059669", logo: "https://www.google.com/s2/favicons?sz=64&domain=extra.coop" },
];

const DAYS = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];

const BREAKFASTS = [
  { name: "Havregrøt med banan", ingredients: ["Havregryn 500g", "Melk 1L", "Banan"], basePrice: 12 },
  { name: "Egg og brødskiver", ingredients: ["Egg 6 stk", "Grovbrød", "Smør"], basePrice: 14 },
  { name: "Yoghurt med müsli", ingredients: ["Yoghurt naturell 500g", "Müsli 500g", "Bær (frosne)"], basePrice: 18 },
  { name: "Brød med pålegg", ingredients: ["Grovbrød", "Ost 200g", "Kaviar"], basePrice: 10 },
];

const QUICK_LUNCHES = [
  { name: "Brødskive med egg og ost", ingredients: ["Egg 4 stk", "Ost 100g", "Grovbrød"], basePrice: 15 },
  { name: "Wrap med kylling og grønt", ingredients: ["Tortilla 4 stk", "Kyllingpålegg", "Salat", "Tomat"], basePrice: 22 },
  { name: "Gresk salat med fetaost", ingredients: ["Agurk", "Tomat", "Fetaost 100g", "Oliven"], basePrice: 28 },
  { name: "Tomatsuppe med brød", ingredients: ["Hermetiske tomater 2 boks", "Løk", "Hvitløk", "Grovbrød"], basePrice: 20 },
];

const MEALS = [
  {
    name: "Pasta Bolognese",
    desc: "Klassisk og mettende",
    basePrice: 45, protein: 38,
    ingredients: ["Kjøttdeig 400g", "Pasta 500g", "Hermetiske tomater", "Løk", "Hvitløk"],
    stores: ["rema", "kiwi", "spar"],
    highProtein: false,
    makesLeftovers: true,
  },
  {
    name: "Kyllingwok med ris",
    desc: "Rask, sunn og full av smak",
    basePrice: 55, protein: 52,
    ingredients: ["Kyllingfilet 400g", "Basmatiris 500g", "Wokgrønnsaker", "Soyasaus"],
    stores: ["meny", "rema", "extra"],
    highProtein: true, makesLeftovers: true,
  },
  {
    name: "Linsesupe",
    desc: "Næringsrik og veldig billig",
    basePrice: 25, protein: 18,
    ingredients: ["Røde linser 400g", "Kokosmelk", "Karri", "Løk", "Ingefær"],
    stores: ["kiwi", "spar", "bunnpris"],
    highProtein: false, makesLeftovers: true,
  },
  {
    name: "Pannekaker med skinke",
    desc: "Alltid en vinner til middag",
    basePrice: 30, protein: 22,
    ingredients: ["Mel 500g", "Melk 1L", "Egg 6 stk", "Kokt skinke"],
    stores: ["rema", "kiwi", "joker"],
    highProtein: false, makesLeftovers: false,
  },
  {
    name: "Omelett med grønnsaker",
    desc: "Rask hverdagsmiddag på 15 min",
    basePrice: 28, protein: 30,
    ingredients: ["Egg 6 stk", "Paprika", "Champignon", "Ost 150g"],
    stores: ["spar", "meny", "coop_prix"],
    highProtein: false, makesLeftovers: false,
  },
  {
    name: "Fiskegrateng",
    desc: "Norsk klassiker – god og rimelig",
    basePrice: 50, protein: 44,
    ingredients: ["Torsk 500g", "Makaroni 500g", "Melk 0,5L", "Egg 2 stk"],
    stores: ["meny", "extra", "rema"],
    highProtein: true, makesLeftovers: true,
  },
  {
    name: "Taco",
    desc: "Fredagsfavoritt – tilpass etter smak",
    basePrice: 60, protein: 35,
    ingredients: ["Kjøttdeig 400g", "Tacokrydder", "Tortilla 8 stk", "Salsa", "Rømme"],
    stores: ["rema", "kiwi", "spar", "bunnpris"],
    highProtein: false, makesLeftovers: false,
  },
  {
    name: "Kyllingbryst med søtpotet",
    desc: "Ren og mettende – perfekt etter trening",
    basePrice: 65, protein: 58,
    ingredients: ["Kyllingbryst 500g", "Søtpotet 600g", "Brokkoli", "Olivenolje"],
    stores: ["meny", "rema", "extra"],
    highProtein: true, makesLeftovers: true,
  },
  {
    name: "Laks med quinoa",
    desc: "Proteinbombe med omega-3",
    basePrice: 75, protein: 62,
    ingredients: ["Laksefilet 400g", "Quinoa 300g", "Spinat", "Sitron", "Hvitløk"],
    stores: ["meny", "extra", "spar"],
    highProtein: true, makesLeftovers: true,
  },
  {
    name: "Bønneburrito",
    desc: "Vegetar-vinner – proteinrik og billig",
    basePrice: 35, protein: 24,
    ingredients: ["Bønner på boks 2 stk", "Tortilla 8 stk", "Ris 300g", "Guacamole"],
    stores: ["kiwi", "meny", "bunnpris"],
    highProtein: false, makesLeftovers: true,
  },
  {
    name: "Kyllingsuppe med nudler",
    desc: "Varm og mettende – enkel å lage",
    basePrice: 48, protein: 45,
    ingredients: ["Kyllingfilet 300g", "Eggnudler 400g", "Gulrot", "Selleri", "Kyllingbuljong"],
    stores: ["rema", "spar", "coop_prix"],
    highProtein: true, makesLeftovers: true,
  },
];

const MARKET_ITEMS = [
  { name: "Kjøttdeig 400g",       normal: 47, category: "Kjøtt" },
  { name: "Kyllingfilet 400g",    normal: 53, category: "Kjøtt" },
  { name: "Kyllingbryst 500g",    normal: 64, category: "Kjøtt" },
  { name: "Laksefilet 400g",      normal: 89, category: "Fisk" },
  { name: "Torsk 500g",           normal: 72, category: "Fisk" },
  { name: "Pasta 500g",           normal: 17, category: "Tørt" },
  { name: "Basmatiris 500g",      normal: 24, category: "Tørt" },
  { name: "Quinoa 300g",          normal: 39, category: "Tørt" },
  { name: "Røde linser 400g",     normal: 23, category: "Tørt" },
  { name: "Egg 6 stk",            normal: 28, category: "Meieri" },
  { name: "Melk 1L",              normal: 20, category: "Meieri" },
  { name: "Ost 200g",             normal: 36, category: "Meieri" },
  { name: "Yoghurt naturell 500g",normal: 29, category: "Meieri" },
  { name: "Havregryn 500g",       normal: 19, category: "Frokost" },
  { name: "Grovbrød",             normal: 33, category: "Bakst" },
  { name: "Tortilla 8 stk",       normal: 28, category: "Bakst" },
  { name: "Hermetiske tomater",   normal: 15, category: "Hermetikk" },
  { name: "Kokosmelk",            normal: 18, category: "Hermetikk" },
  { name: "Søtpotet 600g",        normal: 35, category: "Grønnsaker" },
  { name: "Brokkoli",             normal: 22, category: "Grønnsaker" },
  { name: "Wokgrønnsaker",        normal: 29, category: "Grønnsaker" },
];

const PROTEIN_MULTIPLIERS = {
  light:    { maintain: 1.2, build: 1.6, lose: 1.4 },
  moderate: { maintain: 1.4, build: 1.8, lose: 1.6 },
  heavy:    { maintain: 1.6, build: 2.2, lose: 2.0 },
};

let selectedStores = new Set();
let currentMode = "budget";

function setMode(mode) {
  currentMode = mode;
  document.getElementById("modebudget").classList.toggle("active", mode === "budget");
  document.getElementById("modeprotein").classList.toggle("active", mode === "protein");
  document.getElementById("step-protein").classList.toggle("hidden", mode === "budget");
  if (mode === "protein") updateProteinResult();
}

function updateProteinResult() {
  const weight = parseFloat(document.getElementById("weight").value) || 75;
  const level = document.getElementById("trainingLevel").value;
  const goal = document.getElementById("goal").value;
  const multiplier = PROTEIN_MULTIPLIERS[level][goal];
  const dailyProtein = Math.round(weight * multiplier);

  const el = document.getElementById("proteinResult");
  el.classList.remove("hidden");
  el.innerHTML = `
    <div class="protein-badge">
      <span>Ditt daglige proteinmål</span>
      <strong>${dailyProtein}g protein</strong>
    </div>
  `;
  el.dataset.daily = dailyProtein;
}

function renderStores() {
  const grid = document.getElementById("storeGrid");
  grid.innerHTML = STORES.map(s => `
    <button class="store-btn" id="store-${s.id}" onclick="toggleStore('${s.id}')">
      <img class="store-logo" src="${s.logo}" alt="${s.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
      <span class="store-initial" style="background:${s.color};display:none">${s.abbr}</span>
      ${s.name}
    </button>
  `).join("");
}

function toggleStore(id) {
  if (selectedStores.has(id)) {
    selectedStores.delete(id);
    document.getElementById(`store-${id}`).classList.remove("selected");
  } else {
    selectedStores.add(id);
    document.getElementById(`store-${id}`).classList.add("selected");
  }
}

async function generatePlan() {
  if (selectedStores.size === 0) {
    alert("Velg minst én butikk først.");
    return;
  }

  if (localStorage.getItem("matbors_free_used")) {
    document.getElementById("paywallOverlay").classList.remove("hidden");
    return;
  }
  if (currentMode === "protein") updateProteinResult();

  const dinners = parseInt(document.getElementById("dinners").value);
  const persons = parseInt(document.getElementById("persons").value);
  const budget = parseInt(document.getElementById("budget").value);

  const btn = document.getElementById("generateBtn");
  btn.disabled = true;
  btn.textContent = "Genererer plan...";

  const resultSection = document.getElementById("step-result");
  resultSection.classList.remove("hidden");
  document.getElementById("planOutput").innerHTML = `
    <div class="spinner"><div class="spin"></div>Finner beste tilbud...</div>`;
  document.getElementById("shoppingList").innerHTML = "";
  document.getElementById("savingsBanner").innerHTML = "";
  document.getElementById("proteinSummary").innerHTML = "";

  await new Promise(r => setTimeout(r, 900));

  const selected = [...selectedStores];
  const dailyProtein = currentMode === "protein"
    ? parseInt(document.getElementById("proteinResult")?.dataset.daily || 150)
    : null;

  const plan = buildMealPlan(selected, dinners, persons, dailyProtein);
  renderPlan(plan, persons, budget, dailyProtein);

  localStorage.setItem("matbors_free_used", "1");
  btn.disabled = false;
  btn.textContent = "Generer ny plan";
  resultSection.scrollIntoView({ behavior: "smooth" });
}

function buildMealPlan(selected, dinners, persons, dailyProtein) {
  let available = MEALS.filter(m => m.stores.some(s => selected.includes(s)));

  if (dailyProtein) {
    const high = available.filter(m => m.highProtein).sort(() => Math.random() - 0.5);
    const low = available.filter(m => !m.highProtein).sort(() => Math.random() - 0.5);
    const highCount = Math.ceil(dinners * 0.6);
    const lowCount = dinners - highCount;
    available = [...high.slice(0, highCount), ...low.slice(0, lowCount)].sort(() => Math.random() - 0.5);
  } else {
    available = available.sort(() => Math.random() - 0.5);
  }

  const shuffledBreakfasts = [...BREAKFASTS].sort(() => Math.random() - 0.5);
  const shuffledLunches = [...QUICK_LUNCHES].sort(() => Math.random() - 0.5);

  return available.slice(0, Math.min(dinners, available.length)).map((meal, i) => {
    const matchingStores = meal.stores.filter(s => selected.includes(s));
    const storeId = matchingStores[Math.floor(Math.random() * matchingStores.length)];
    const storeInfo = STORES.find(s => s.id === storeId);
    const totalPrice = Math.round(meal.basePrice * (0.85 + Math.random() * 0.3) * Math.max(1, persons * 0.7));
    const totalProtein = Math.round(meal.protein * Math.max(1, persons * 0.8));

    // Lunsj: rester fra forrige dags middag hvis den lager rester, ellers kjapp lunsj
    const prevMeal = i > 0 ? available[i - 1] : null;
    const lunch = prevMeal?.makesLeftovers
      ? { type: "leftovers", from: prevMeal.name }
      : { type: "fresh", ...shuffledLunches[i % shuffledLunches.length] };

    const breakfast = shuffledBreakfasts[i % shuffledBreakfasts.length];

    return { ...meal, day: DAYS[i], storeId, storeInfo, totalPrice, totalProtein, lunch, breakfast };
  });
}

function renderPlan(plan, persons, budget, dailyProtein) {
  const totalCost = plan.reduce((sum, m) => sum + m.totalPrice, 0);
  const savedEstimate = Math.round(totalCost * 0.22);
  const avgDailyProtein = Math.round(plan.reduce((sum, m) => sum + m.totalProtein, 0) / plan.length);

  if (dailyProtein) {
    const hit = avgDailyProtein >= dailyProtein * 0.85;
    const pct = Math.min(100, Math.round(avgDailyProtein / dailyProtein * 100));
    document.getElementById("proteinSummary").innerHTML = `
      <div class="protein-summary ${hit ? "" : "miss"}">
        <div class="protein-summary-top">
          <strong>${hit ? "Proteinmål nådd" : "Litt under proteinmål"}</strong>
          <span>${avgDailyProtein}g snitt / ${dailyProtein}g mål</span>
        </div>
        <div class="protein-bar-wrap">
          <div class="protein-bar" style="width:${pct}%"></div>
        </div>
      </div>`;
  }

  document.getElementById("planOutput").innerHTML = `
    <div class="meal-grid">
      ${plan.map(m => `
        <div class="day-card">
          <div class="day-header">${m.day}</div>
          <div class="day-meals">

            <div class="day-meal-row">
              <span class="meal-type-label">Frokost</span>
              <span class="meal-type-name">${m.breakfast.name}</span>
              <span class="meal-type-price">${Math.round(m.breakfast.basePrice * Math.max(1, persons * 0.7))} kr</span>
            </div>

            <div class="day-meal-row">
              <span class="meal-type-label">Lunsj</span>
              ${m.lunch.type === "leftovers"
                ? `<span class="meal-type-name">Rester fra ${m.lunch.from} <span class="leftover-tag">Rester</span></span><span class="meal-type-price free-tag">Gratis</span>`
                : `<span class="meal-type-name">${m.lunch.name}</span><span class="meal-type-price">${Math.round(m.lunch.basePrice * Math.max(1, persons * 0.7))} kr</span>`
              }
            </div>

            <div class="day-meal-row dinner-row">
              <span class="meal-type-label">Middag</span>
              <div class="dinner-info">
                <span class="meal-type-name">${m.name}</span>
                <div class="meal-tags" style="margin-top:0.3rem">
                  <span class="tag tag-store" style="background:${m.storeInfo.color}18;color:${m.storeInfo.color}">${m.storeInfo.name}</span>
                  ${m.makesLeftovers ? `<span class="tag tag-leftovers">+ rester til lunsj</span>` : ""}
                  ${dailyProtein ? `<span class="tag tag-protein">${m.totalProtein}g protein</span>` : ""}
                </div>
              </div>
              <span class="meal-type-price">${m.totalPrice} kr</span>
            </div>

          </div>
        </div>
      `).join("")}
    </div>
    <div class="plan-total">
      <span>Totalt denne uken</span>
      <span>
        ${totalCost} kr
        <span class="${totalCost > budget ? "budget-over" : "budget-ok"}">
          ${totalCost > budget ? "over budsjett" : "innenfor budsjett"}
        </span>
      </span>
    </div>`;

  // Samle alle ingredienser (middag + frokost + lunsj) på første tilgjengelige butikk
  const firstStore = plan[0];
  const byStore = {};

  const addToStore = (storeId, storeInfo, ingredients, mealName) => {
    if (!byStore[storeId]) byStore[storeId] = { info: storeInfo, items: [] };
    ingredients.forEach(ing => byStore[storeId].items.push({ name: ing, meal: mealName }));
  };

  plan.forEach(meal => {
    // Middag
    addToStore(meal.storeId, meal.storeInfo, meal.ingredients, meal.name);
    // Frokost (legg til første butikk)
    addToStore(firstStore.storeId, firstStore.storeInfo, meal.breakfast.ingredients, meal.breakfast.name);
    // Lunsj (kun hvis ikke rester)
    if (meal.lunch.type === "fresh") {
      addToStore(firstStore.storeId, firstStore.storeInfo, meal.lunch.ingredients, meal.lunch.name);
    }
  });

  const storeEntries = Object.values(byStore);
  document.getElementById("shoppingList").innerHTML = `
    <div class="notepad">
      <div class="notepad-top">
        <div class="notepad-rings">
          ${[...Array(6)].map(() => `<div class="notepad-ring"></div>`).join("")}
        </div>
        <div class="notepad-title">Handleliste</div>
        <div class="notepad-subtitle">${plan.length} middager · ${storeEntries.length} butikk${storeEntries.length > 1 ? "er" : ""}</div>
      </div>
      <div class="notepad-body">
        ${storeEntries.map(s => {
          const aggregated = aggregateItems(s.items);
          return `
          <div class="notepad-store">
            <div class="notepad-store-header">
              <img src="${s.info.logo}" alt="${s.info.name}" class="notepad-store-logo" onerror="this.style.display='none'" />
              <span>${s.info.name}</span>
            </div>
            <ul class="notepad-items">
              ${aggregated.map((item, i) => `
                <li class="notepad-item">
                  <input type="checkbox" id="item-${s.info.id}-${i}" class="notepad-check" />
                  <label for="item-${s.info.id}-${i}">
                    <span class="notepad-item-name">${item.fullName}${item.count > 1 ? ` <span class="notepad-qty">×${item.count}</span>` : ""}</span>
                  </label>
                </li>`).join("")}
            </ul>
          </div>`;
        }).join("")}
      </div>
    </div>`;

  document.getElementById("savingsBanner").innerHTML = renderSavingsGauge(savedEstimate, totalCost);
}

function renderSavingsGauge(saved, total) {
  const pct = Math.min(saved / (total + saved), 0.85);
  const angle = -150 + pct * 300; // -150° (venstre) → +150° (høyre)
  const rad = (angle * Math.PI) / 180;
  const cx = 110, cy = 105, r = 80;
  const nx = cx + r * Math.sin(rad);
  const ny = cy - r * Math.cos(rad);

  // Arc lengths
  const arcLen = Math.PI * r; // halvbue
  const dashOffset = arcLen * (1 - pct);

  return `
    <div class="gauge-wrap">
      <div class="gauge-label-top">Sparemåler</div>
      <svg viewBox="0 0 220 130" class="gauge-svg">
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f87171"/>
            <stop offset="50%" stop-color="#fbbf24"/>
            <stop offset="100%" stop-color="#4ade80"/>
          </linearGradient>
        </defs>
        <!-- Bakgrunnsarc -->
        <path d="M 30 105 A 80 80 0 0 1 190 105"
              fill="none" stroke="rgba(255,255,255,0.15)"
              stroke-width="14" stroke-linecap="round"/>
        <!-- Fargebue -->
        <path d="M 30 105 A 80 80 0 0 1 190 105"
              fill="none" stroke="url(#gaugeGrad)"
              stroke-width="14" stroke-linecap="round"
              stroke-dasharray="${arcLen}"
              stroke-dashoffset="${dashOffset}"
              class="gauge-arc"/>
        <!-- Nål -->
        <line x1="${cx}" y1="${cy}" x2="${nx}" y2="${ny}"
              stroke="white" stroke-width="2.5" stroke-linecap="round"
              class="gauge-needle"/>
        <circle cx="${cx}" cy="${cy}" r="5" fill="white"/>
        <!-- Tekst -->
        <text x="${cx}" y="${cy + 28}" text-anchor="middle"
              font-size="22" font-weight="800" fill="white"
              class="gauge-number">–${saved} kr</text>
        <text x="${cx}" y="${cy + 44}" text-anchor="middle"
              font-size="9" fill="rgba(255,255,255,0.55)"
              letter-spacing="1">ESTIMERT SPARING DENNE UKEN</text>
      </svg>
      <div class="gauge-labels">
        <span>Lite spart</span>
        <span>Maks sparing</span>
      </div>
    </div>`;
}

function normalizeKey(name) {
  // Ta alt før første tall/mengde — "Havregryn 500g" → "havregryn", "Egg 6 stk" → "egg"
  return name.replace(/\s+\d[\d,.]*\s*\w*\.?$/, "").trim().toLowerCase();
}

function aggregateItems(items) {
  const map = new Map();
  items.forEach(({ name, meal }) => {
    const key = normalizeKey(name);
    if (map.has(key)) {
      const entry = map.get(key);
      entry.count += 1;
      if (!entry.meals.includes(meal)) entry.meals.push(meal);
    } else {
      map.set(key, { fullName: name, count: 1, meals: [meal] });
    }
  });
  return [...map.values()];
}

// ── PRICE CHART ──

function itemHash(name) {
  const ws = Math.floor(Date.now() / 604800000); // week number
  let h = ws;
  for (let i = 0; i < name.length; i++) h = Math.imul(h ^ name.charCodeAt(i), 2654435761);
  return (h >>> 0) / 4294967295;
}

function itemHashOffset(name, offset) {
  let h = offset * 99991;
  for (let i = 0; i < name.length; i++) h = Math.imul(h ^ name.charCodeAt(i), 2654435761);
  h = Math.imul(h ^ Math.floor(Date.now() / 604800000), 2654435761);
  return (h >>> 0) / 4294967295;
}

function computeDeal(item) {
  const r = itemHash(item.name);
  // ~65% on sale (5–32% off), rest flat or slightly up
  const pct = r < 0.65 ? -(0.05 + (r / 0.65) * 0.27) : (r - 0.65) / 0.35 * 0.08;
  const current = Math.max(1, Math.round(item.normal * (1 + pct)));
  return { current, pct: Math.round(pct * 100), change: current - item.normal };
}

function sparkPoints(item, current) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const r = itemHashOffset(item.name, i);
    const t = i / 5;
    const base = item.normal + (current - item.normal) * Math.pow(t, 1.4);
    pts.push(Math.max(1, Math.round(base + (r - 0.5) * item.normal * 0.1)));
  }
  pts.push(current);
  return pts;
}

function renderSparkSVG(pts, isGood, idx) {
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
  const areaPoly = `0,${H} ${poly} ${W},${H}`;
  const last = coords[coords.length - 1];
  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="display:block;overflow:visible">
    <polygon points="${areaPoly}" fill="${fill}"/>
    <polyline points="${poly}" fill="none" stroke="${stroke}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${last[0].toFixed(1)}" cy="${last[1].toFixed(1)}" r="2.5" fill="${stroke}"/>
  </svg>`;
}

function renderPriceChart() {
  const priced = MARKET_ITEMS.map((item, idx) => {
    const { current, pct, change } = computeDeal(item);
    const isGood = current < item.normal;
    return { ...item, current, pct, change, isGood, pts: sparkPoints(item, current), idx };
  }).sort((a, b) => a.pct - b.pct);

  const now = new Date();
  const dayStr = now.toLocaleDateString("no-NO", { weekday: "short", day: "numeric", month: "short" });
  const timeStr = `${now.getHours().toString().padStart(2,"0")}:${now.getMinutes().toString().padStart(2,"0")}`;

  return `
    <div class="price-chart">
      <div class="pch-header">
        <div class="pch-title"><span class="live-dot"></span>Live prisindeks</div>
        <span class="pch-meta">${dayStr} · ${timeStr} · Kassal.app</span>
      </div>
      <div class="pch-rows">
        ${priced.map((item) => `
          <div class="pch-row">
            <div class="pch-info">
              <span class="pch-name">${item.name}</span>
              <span class="pch-cat">${item.category}</span>
            </div>
            <div class="pch-spark">${renderSparkSVG(item.pts, item.isGood, item.idx)}</div>
            <div class="pch-nums">
              <span class="pch-price">${item.current} kr</span>
              <span class="pch-badge ${item.isGood ? "badge-good" : "badge-bad"}">${item.pct > 0 ? "+" : ""}${item.pct}%</span>
            </div>
          </div>`).join("")}
      </div>
    </div>`;
}

function changeVal(id, delta) {
  const input = document.getElementById(id);
  const min = parseFloat(input.min) || 0;
  const max = parseFloat(input.max) || Infinity;
  const newVal = Math.min(max, Math.max(min, parseFloat(input.value) + delta));
  input.value = newVal;
}

renderStores();
document.getElementById("weight").addEventListener("input", updateProteinResult);
document.getElementById("trainingLevel").addEventListener("change", updateProteinResult);
document.getElementById("goal").addEventListener("change", updateProteinResult);
