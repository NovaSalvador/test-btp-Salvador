const projects = [
  {
    id: 0,
    name: "Échangeur Ouaga Nord",
    city: "Ouagadougou",
    client: "Marché public",
    type: "public",
    status: "urgent",
    manager: "Issa Kaboré",
    progress: 68,
    budget: 820000000,
    margin: 13,
    crew: 84,
    risk: "Circulation + pluie",
    next: "Coulage tablier phase 2",
    materials: ["Ciment CPJ", "Fer HA12", "Gasoil"],
    tags: ["priorité haute", "contrôle labo", "nuit possible"],
    tasks: [
      { label: "Valider déviation avec police municipale", done: true },
      { label: "Commander 300 sacs de ciment CPJ", done: false },
      { label: "Briefing HSE avant coulage", done: false }
    ]
  },
  {
    id: 1,
    name: "Plateforme logistique Bobo",
    city: "Bobo-Dioulasso",
    client: "Client privé",
    type: "private",
    status: "stable",
    manager: "Awa Traoré",
    progress: 42,
    budget: 360000000,
    margin: 18,
    crew: 46,
    risk: "Approvisionnement fer",
    next: "Élévation hangar module A",
    materials: ["Fer HA10", "Briques BTC", "Tôles"],
    tags: ["privé", "stock critique", "livraison camion"],
    tasks: [
      { label: "Contrôler arrivage fer HA10", done: false },
      { label: "Préparer PV d’implantation", done: true },
      { label: "Affecter maçons supplémentaires", done: false }
    ]
  },
  {
    id: 2,
    name: "Voirie Koudougou Est",
    city: "Koudougou",
    client: "Marché public",
    type: "public",
    status: "urgent",
    manager: "Boukary Sawadogo",
    progress: 55,
    budget: 510000000,
    margin: 11,
    crew: 61,
    risk: "Piste boueuse",
    next: "Compactage couche de base",
    materials: ["Latérite", "Bitume", "Gasoil"],
    tags: ["route", "pluie", "niveleuse"],
    tasks: [
      { label: "Relever points bas avant pluie", done: true },
      { label: "Planifier citerne eau", done: false },
      { label: "Essai densité Proctor", done: false }
    ]
  },
  {
    id: 3,
    name: "CSPS Kaya Extension",
    city: "Kaya",
    client: "ONG santé",
    type: "private",
    status: "stable",
    manager: "Mariam Zongo",
    progress: 76,
    budget: 145000000,
    margin: 16,
    crew: 28,
    risk: "Coupure courant",
    next: "Second œuvre + plomberie",
    materials: ["Carreaux", "PVC", "Peinture"],
    tags: ["santé", "électricité", "réception proche"],
    tasks: [
      { label: "Tester groupe électrogène", done: true },
      { label: "Contrôler réseau plomberie", done: false },
      { label: "Lister réserves réception", done: false }
    ]
  },
  {
    id: 4,
    name: "Dalot route Banfora",
    city: "Banfora",
    client: "Marché public",
    type: "public",
    status: "urgent",
    manager: "Yacouba Compaoré",
    progress: 31,
    budget: 230000000,
    margin: 9,
    crew: 39,
    risk: "Crue saisonnière",
    next: "Ferraillage radier",
    materials: ["Fer HA14", "Moellons", "Ciment"],
    tags: ["ouvrage hydraulique", "crue", "alerte météo"],
    tasks: [
      { label: "Installer batardeau provisoire", done: false },
      { label: "Sécuriser accès riverains", done: true },
      { label: "Vérifier coffrage radier", done: false }
    ]
  }
];

const stocks = [
  { item: "Ciment CPJ 32.5", qty: 920, unit: "sacs", min: 750, supplier: "Ouaga dépôt Est", eta: 1, project: "Échangeur Ouaga Nord" },
  { item: "Fer HA12", qty: 18, unit: "tonnes", min: 25, supplier: "Bobo zone industrielle", eta: 3, project: "Plateforme logistique Bobo" },
  { item: "Latérite sélectionnée", qty: 640, unit: "m3", min: 520, supplier: "Carrière Koudougou", eta: 1, project: "Voirie Koudougou Est" },
  { item: "Bitume 50/70", qty: 22, unit: "fûts", min: 30, supplier: "Ouaga dépôt Sud", eta: 4, project: "Voirie Koudougou Est" },
  { item: "Gasoil chantier", qty: 3800, unit: "L", min: 3000, supplier: "Station partenaire", eta: 1, project: "Tous chantiers" },
  { item: "EPI casques/gilets", qty: 146, unit: "kits", min: 160, supplier: "Ouaga centre", eta: 2, project: "Tous chantiers" }
];

const crews = [
  { id: "A", name: "Brigade Béton A", lead: "Salif", people: 22, present: 19, skill: "Coulage", safety: 92, location: "Ouaga Nord" },
  { id: "B", name: "Équipe Route B", lead: "Adama", people: 31, present: 29, skill: "Compactage", safety: 88, location: "Koudougou" },
  { id: "C", name: "Second œuvre C", lead: "Clarisse", people: 18, present: 16, skill: "Finitions", safety: 95, location: "Kaya" },
  { id: "D", name: "Logistique D", lead: "Hamidou", people: 12, present: 11, skill: "Transport", safety: 81, location: "Bobo" }
];

const risks = [
  { title: "Pluie intense", score: 78, action: "Plan B piste, bâches et stockage hors eau", area: "Koudougou, Banfora" },
  { title: "Chaleur", score: 62, action: "Hydratation, pauses 11h-14h, rotation équipes", area: "Ouaga, Kaya" },
  { title: "Poussière / harmattan", score: 45, action: "Masques, arrosage plateforme, protection machines", area: "Nord et Centre" },
  { title: "Sécurité routière", score: 71, action: "Check pneus, vitesse camion, convoi matériel lourd", area: "Axes RN1, RN4" },
  { title: "Coupure courant", score: 58, action: "Groupe électrogène, batteries niveau laser", area: "Kaya" },
  { title: "Inflation matériaux", score: 66, action: "Actualiser bordereau et verrouiller commandes critiques", area: "Ciment, fer, bitume" }
];

const templates = [
  {
    title: "PV de réception provisoire",
    desc: "Réserves, présence client et signature",
    body: () => `PROCÈS-VERBAL DE RÉCEPTION PROVISOIRE

Entreprise : BTP Nexus BF
Chantier : ${selectedProject().name}
Localité : ${selectedProject().city}
Chef chantier : ${selectedProject().manager}
Date : ${new Date().toLocaleDateString("fr-FR")}

État d’avancement déclaré : ${selectedProject().progress} %
Travaux inspectés : ${selectedProject().next}

Réserves à lever :
- Contrôle qualité des finitions
- Nettoyage de la zone de chantier
- Validation contradictoire avec le représentant du maître d’ouvrage

Signatures :
Entreprise ____________________
Client / Maître d’ouvrage ____________________
Contrôle technique ____________________`
  },
  {
    title: "Bon de livraison",
    desc: "Matériaux, dépôt, transporteur",
    body: () => `BON DE LIVRAISON MATÉRIAUX

Destination : ${selectedProject().name} - ${selectedProject().city}
Matériaux prioritaires : ${selectedProject().materials.join(", ")}
Fournisseur : ${stocks[0].supplier}
Transport : Camion plateau / benne selon disponibilité

Contrôles à l’arrivée :
- Quantité conforme au bon de commande
- État du chargement
- Photo horodatée transmise au siège

Réceptionnaire chantier : ${selectedProject().manager}`
  },
  {
    title: "Feuille de pointage",
    desc: "Présence journalière et primes",
    body: () => `FEUILLE DE POINTAGE JOURNALIER

Chantier : ${selectedProject().name}
Chef chantier : ${selectedProject().manager}
Équipe affectée : ${crews[0].name}
Date : ${new Date().toLocaleDateString("fr-FR")}

Ouvriers présents :
1. ____________________ Heure arrivée ______ Heure départ ______
2. ____________________ Heure arrivée ______ Heure départ ______
3. ____________________ Heure arrivée ______ Heure départ ______

Observations HSE :
- Port EPI vérifié
- Hydratation disponible
- Briefing sécurité effectué`
  },
  {
    title: "Ordre de mission",
    desc: "Déplacement inter-ville",
    body: () => `ORDRE DE MISSION

Collaborateur : ____________________
Départ : ${document.querySelector("#baseSelect")?.value || "Ouagadougou"}
Destination : ${selectedProject().city}
Objet : Suivi technique - ${selectedProject().next}
Durée : 2 jours

Moyen de déplacement : Véhicule chantier
Avance carburant / mission : à valider par la comptabilité

Validation Direction ____________________`
  }
];

let currentProjectId = 0;
let currentFilter = "all";
let currentTemplate = 0;
let paymentMode = "Virement";
let routeDelay = 1;

const els = {
  viewTitle: document.querySelector("#viewTitle"),
  liveClock: document.querySelector("#liveClock"),
  networkMode: document.querySelector("#networkMode"),
  seasonLabel: document.querySelector("#seasonLabel"),
  globalSearch: document.querySelector("#globalSearch"),
  baseSelect: document.querySelector("#baseSelect"),
  kpiGrid: document.querySelector("#kpiGrid"),
  selectedBrief: document.querySelector("#selectedBrief"),
  projectGrid: document.querySelector("#projectGrid"),
  projectDetail: document.querySelector("#projectDetail"),
  scenarioOutput: document.querySelector("#scenarioOutput"),
  activityFeed: document.querySelector("#activityFeed"),
  stockTable: document.querySelector("#stockTable"),
  purchaseCard: document.querySelector("#purchaseCard"),
  routeDelay: document.querySelector("#routeDelay"),
  crewBoard: document.querySelector("#crewBoard"),
  crewSelect: document.querySelector("#crewSelect"),
  projectSelect: document.querySelector("#projectSelect"),
  assignmentForm: document.querySelector("#assignmentForm"),
  skillMatrix: document.querySelector("#skillMatrix"),
  financeOutput: document.querySelector("#financeOutput"),
  cashChart: document.querySelector("#cashChart"),
  riskGrid: document.querySelector("#riskGrid"),
  templateList: document.querySelector("#templateList"),
  docPreview: document.querySelector("#docPreview"),
  toastStack: document.querySelector("#toastStack"),
  quickDialog: document.querySelector("#quickDialog")
};

const activity = [
  "Ouaga Nord : pointage synchronisé, 79 ouvriers validés",
  "Koudougou : pluie probable, compactage avancé à 06h",
  "Bobo : camion fer HA10 parti du dépôt industriel",
  "Kaya : groupe électrogène testé avant plomberie",
  "Banfora : surveillance niveau d’eau activée"
];

function selectedProject() {
  return projects.find((project) => project.id === currentProjectId) || projects[0];
}

function fmtXof(value) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0
  }).format(value);
}

function pct(value) {
  return `${Math.max(0, Math.min(100, Math.round(value)))}%`;
}

function addActivity(message) {
  const now = new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  activity.unshift(`${message} - ${now}`);
  renderActivity();
}

function toast(message) {
  const item = document.createElement("div");
  item.className = "toast";
  item.textContent = message;
  els.toastStack.appendChild(item);
  window.setTimeout(() => {
    item.style.opacity = "0";
    item.style.transform = "translateY(10px)";
    window.setTimeout(() => item.remove(), 240);
  }, 3200);
}

function renderClock() {
  const now = new Date();
  els.liveClock.textContent = now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  const month = now.getMonth() + 1;
  els.seasonLabel.textContent = month >= 6 && month <= 9 ? "Saison des pluies" : "Saison sèche / harmattan";
}

function renderKpis() {
  const urgent = projects.filter((project) => project.status === "urgent").length;
  const averageProgress = projects.reduce((sum, project) => sum + project.progress, 0) / projects.length;
  const totalCrew = projects.reduce((sum, project) => sum + project.crew, 0);
  const criticalStock = stocks.filter((stock) => stock.qty < stock.min).length;
  const kpis = [
    { label: "Chantiers actifs", value: projects.length, hint: `${urgent} urgents à arbitrer`, color: "var(--green)" },
    { label: "Avancement moyen", value: pct(averageProgress), hint: "pondéré par production terrain", color: "var(--cyan)" },
    { label: "Présence ouvriers", value: totalCrew, hint: "chefs + ouvriers déclarés", color: "var(--amber)" },
    { label: "Stocks critiques", value: criticalStock, hint: "fer, bitume, EPI à surveiller", color: "var(--red)" }
  ];

  els.kpiGrid.innerHTML = kpis.map((kpi) => `
    <article class="kpi-card" style="color: ${kpi.color}">
      <small>${kpi.label}</small>
      <strong>${kpi.value}</strong>
      <span>${kpi.hint}</span>
    </article>
  `).join("");
}

function renderBrief() {
  const project = selectedProject();
  document.querySelectorAll(".map-pin").forEach((pin) => {
    pin.classList.toggle("active", Number(pin.dataset.project) === project.id);
  });

  els.selectedBrief.innerHTML = `
    <div class="brief-main">
      <p class="eyebrow">${project.city}</p>
      <h3>${project.name}</h3>
      <span class="meta">${project.client} · Chef chantier ${project.manager}</span>
      <div class="brief-tags">
        ${project.tags.map((tag) => `<span class="tag ${project.status === "urgent" ? "warn" : "good"}">${tag}</span>`).join("")}
      </div>
    </div>
    <div class="brief-stats">
      <div><span class="mini-label">Avancement</span><strong>${project.progress}%</strong></div>
      <div><span class="mini-label">Budget</span><strong>${fmtXof(project.budget)}</strong></div>
      <div><span class="mini-label">Équipe</span><strong>${project.crew} pers.</strong></div>
      <div><span class="mini-label">Risque</span><strong>${project.risk}</strong></div>
    </div>
    <button class="primary-button" data-open-project="${project.id}"><svg><use href="#i-map"></use></svg> Ouvrir la fiche chantier</button>
  `;
}

function renderScenario() {
  const rain = Number(document.querySelector("#rainRange").value);
  const fuel = Number(document.querySelector("#fuelRange").value);
  const payment = Number(document.querySelector("#paymentRange").value);
  const delay = Math.round((rain * 0.07) + (fuel * 0.025) + (payment * 0.035));
  const cash = 100 - Math.round(payment * 0.65 + fuel * 0.2);
  const supply = 100 - Math.round(rain * 0.35 + fuel * 0.28);
  const lines = [
    { label: "Délai", value: Math.min(100, delay * 7), text: `+${delay} j` },
    { label: "Trésorerie", value: cash, text: pct(cash) },
    { label: "Livraison", value: supply, text: pct(supply) }
  ];

  els.scenarioOutput.innerHTML = lines.map((line) => `
    <div class="impact-line">
      <span>${line.label}</span>
      <div class="bar"><span style="width: ${pct(line.value)}"></span></div>
      <strong>${line.text}</strong>
    </div>
  `).join("");
}

function visibleProjects() {
  const query = els.globalSearch.value.trim().toLowerCase();
  return projects.filter((project) => {
    const matchesFilter = currentFilter === "all" || project.status === currentFilter || project.type === currentFilter;
    const haystack = `${project.name} ${project.city} ${project.manager} ${project.client} ${project.materials.join(" ")}`.toLowerCase();
    return matchesFilter && haystack.includes(query);
  });
}

function renderProjects() {
  const rows = visibleProjects();
  els.projectGrid.innerHTML = rows.map((project) => `
    <article class="project-card ${project.id === currentProjectId ? "active" : ""}" tabindex="0" data-project-card="${project.id}">
      <div class="project-top">
        <div>
          <p class="eyebrow">${project.city}</p>
          <h3>${project.name}</h3>
          <span class="meta">${project.client} · ${project.manager}</span>
        </div>
        <span class="tag ${project.status === "urgent" ? "danger" : "good"}">${project.status === "urgent" ? "urgent" : "stable"}</span>
      </div>
      <div>
        <div class="progress-bar"><span style="width: ${project.progress}%"></span></div>
        <span class="meta">${project.progress}% · marge ${project.margin}% · ${project.crew} personnes</span>
      </div>
      <div class="project-tags">
        ${project.materials.map((mat) => `<span class="tag">${mat}</span>`).join("")}
      </div>
      <div class="project-actions">
        <button type="button" data-project-action="open" data-id="${project.id}" title="Ouvrir">Ouvrir</button>
        <button type="button" data-project-action="alert" data-id="${project.id}" title="Alerter">Alerter</button>
        <button type="button" data-project-action="daily" data-id="${project.id}" title="Journal">Journal</button>
      </div>
    </article>
  `).join("") || `<p class="meta">Aucun chantier ne correspond à la recherche.</p>`;

  renderProjectDetail();
}

function renderProjectDetail() {
  const project = selectedProject();
  els.projectDetail.innerHTML = `
    <div>
      <p class="eyebrow">Fiche active</p>
      <h3>${project.name}</h3>
      <span class="meta">${project.city} · ${project.risk}</span>
    </div>
    <div class="progress-bar"><span style="width: ${project.progress}%"></span></div>
    <strong>${project.next}</strong>
    <div class="task-list">
      ${project.tasks.map((task, index) => `
        <label class="task">
          <input type="checkbox" ${task.done ? "checked" : ""} data-task="${index}">
          <span>${task.label}<small>${task.done ? "validé" : "à faire"}</small></span>
        </label>
      `).join("")}
    </div>
    <form class="add-task" id="addTaskForm">
      <input id="taskInput" type="text" placeholder="Nouvelle tâche chantier">
      <button class="icon-button" type="submit" aria-label="Ajouter une tâche" title="Ajouter"><svg><use href="#i-plus"></use></svg></button>
    </form>
    <button class="ghost-button" id="boostProgress"><svg><use href="#i-check"></use></svg> Valider étape +5%</button>
  `;
}

function renderActivity() {
  els.activityFeed.innerHTML = activity.slice(0, 7).map((item, index) => `
    <div class="feed-item">
      <span class="feed-dot" style="background: ${index % 2 ? "var(--amber)" : "var(--cyan)"}"></span>
      <div>
        <strong>${item.split(" - ")[0]}</strong>
        <small>${item.split(" - ")[1] || "maintenant"}</small>
      </div>
    </div>
  `).join("");
}

function renderStocks() {
  els.stockTable.innerHTML = stocks.map((stock, index) => {
    const critical = stock.qty < stock.min;
    const eta = stock.eta + routeDelay;
    return `
      <article class="stock-row">
        <div>
          <strong>${stock.item}</strong>
          <span class="meta">${stock.project}</span>
        </div>
        <div><span class="mini-label">Disponible</span><strong>${stock.qty} ${stock.unit}</strong></div>
        <div><span class="mini-label">Délai estimé</span><strong>${eta} j</strong></div>
        <button type="button" data-reorder="${index}">${critical ? "Commander" : "Réserver"}</button>
      </article>
    `;
  }).join("");

  const critical = stocks.find((stock) => stock.qty < stock.min) || stocks[0];
  els.purchaseCard.innerHTML = `
    <span>Priorité actuelle</span>
    <strong>${critical.item}</strong>
    <span>Projet : ${critical.project}</span>
    <span>Fournisseur : ${critical.supplier}</span>
    <span>Quantité suggérée : ${Math.max(critical.min - critical.qty, Math.ceil(critical.min * 0.25))} ${critical.unit}</span>
    <button class="primary-button" id="confirmPurchase" type="button"><svg><use href="#i-check"></use></svg> Valider le bon</button>
  `;
}

function renderTeams() {
  els.crewBoard.innerHTML = crews.map((crew, index) => `
    <article class="crew-card">
      <div>
        <p class="eyebrow">Équipe ${crew.id}</p>
        <h3>${crew.name}</h3>
        <span class="meta">Chef ${crew.lead} · ${crew.location}</span>
      </div>
      <div class="crew-meta">
        <div><span class="mini-label">Effectif</span><strong>${crew.people}</strong></div>
        <div><span class="mini-label">Présents</span><strong>${crew.present}</strong></div>
        <div><span class="mini-label">HSE</span><strong>${crew.safety}%</strong></div>
      </div>
      <label class="presence"><input type="checkbox" ${index !== 3 ? "checked" : ""} data-presence="${index}"> Présence confirmée</label>
    </article>
  `).join("");

  els.crewSelect.innerHTML = crews.map((crew, index) => `<option value="${index}">${crew.name}</option>`).join("");
  els.projectSelect.innerHTML = projects.map((project) => `<option value="${project.id}">${project.name}</option>`).join("");

  els.skillMatrix.innerHTML = crews.map((crew) => `
    <div class="skill-row">
      <span>${crew.skill}</span>
      <div class="bar"><span style="width: ${crew.safety}%"></span></div>
    </div>
  `).join("");
}

function renderFinance() {
  const amount = Number(document.querySelector("#amountInput").value || 0);
  const taxRate = Number(document.querySelector("#taxInput").value || 0) / 100;
  const retainRate = Number(document.querySelector("#retainInput").value || 0) / 100;
  const advance = Number(document.querySelector("#advanceInput").value || 0);
  const tax = amount * taxRate;
  const total = amount + tax;
  const retain = amount * retainRate;
  const due = Math.max(0, total - retain - advance);

  els.financeOutput.innerHTML = `
    <div class="finance-line"><span>Montant HT</span><strong>${fmtXof(amount)}</strong></div>
    <div class="finance-line"><span>TVA paramétrable</span><strong>${fmtXof(tax)}</strong></div>
    <div class="finance-line"><span>Retenue garantie</span><strong>${fmtXof(retain)}</strong></div>
    <div class="finance-line"><span>Avance reçue</span><strong>${fmtXof(advance)}</strong></div>
    <div class="finance-line"><span>Mode</span><strong>${paymentMode}</strong></div>
    <div class="finance-line"><span>Solde à encaisser</span><strong>${fmtXof(due)}</strong></div>
  `;

  const bases = [0.18, 0.22, 0.17, 0.26, 0.31, 0.38];
  els.cashChart.innerHTML = bases.map((factor, index) => {
    const value = Math.max(12, Math.round((due * factor) / 1000000));
    return `
      <div class="cash-bar">
        <span style="height: ${Math.min(96, value * 3)}%"></span>
        <small>M+${index + 1}</small>
      </div>
    `;
  }).join("");
}

function renderRisks() {
  els.riskGrid.innerHTML = risks.map((risk) => {
    const tone = risk.score > 70 ? "var(--red)" : risk.score > 55 ? "var(--amber)" : "var(--cyan)";
    return `
      <article class="risk-card" style="color: ${tone}">
        <span class="risk-score">${risk.score}/100</span>
        <h3>${risk.title}</h3>
        <span class="meta">${risk.area}</span>
        <p>${risk.action}</p>
      </article>
    `;
  }).join("");
}

function renderDocuments() {
  els.templateList.innerHTML = templates.map((template, index) => `
    <article class="template-card ${index === currentTemplate ? "active" : ""}" tabindex="0" data-template="${index}">
      <strong>${template.title}</strong>
      <span class="meta">${template.desc}</span>
    </article>
  `).join("");
  els.docPreview.value = templates[currentTemplate].body();
}

function refreshAll() {
  renderKpis();
  renderBrief();
  renderScenario();
  renderProjects();
  renderActivity();
  renderStocks();
  renderTeams();
  renderFinance();
  renderRisks();
  renderDocuments();
}

function switchView(viewId) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
  const titles = {
    dashboard: "Pilotage opérationnel",
    chantiers: "Chantiers et production",
    stocks: "Approvisionnements",
    equipes: "Équipes terrain",
    finances: "Trésorerie et devis",
    risques: "Risques et HSE",
    documents: "Documents chantier"
  };
  els.viewTitle.textContent = titles[viewId] || titles.dashboard;
}

function downloadText(filename, text) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  document.querySelectorAll(".map-pin").forEach((pin) => {
    const activate = () => {
      currentProjectId = Number(pin.dataset.project);
      renderBrief();
      renderProjects();
      renderDocuments();
      addActivity(`${selectedProject().city} : fiche chantier consultée`);
    };
    pin.addEventListener("click", activate);
    pin.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });
  });

  els.selectedBrief.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-project]");
    if (!button) return;
    currentProjectId = Number(button.dataset.openProject);
    switchView("chantiers");
    renderProjects();
  });

  document.querySelectorAll("#rainRange, #fuelRange, #paymentRange").forEach((range) => {
    range.addEventListener("input", renderScenario);
  });

  document.querySelectorAll(".segment[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;
      document.querySelectorAll(".segment[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
      renderProjects();
    });
  });

  els.globalSearch.addEventListener("input", renderProjects);

  els.projectGrid.addEventListener("click", handleProjectGrid);
  els.projectGrid.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && event.target.closest("[data-project-card]")) {
      event.preventDefault();
      handleProjectCard(event.target.closest("[data-project-card]"));
    }
  });

  els.projectDetail.addEventListener("change", (event) => {
    if (!event.target.matches("[data-task]")) return;
    selectedProject().tasks[Number(event.target.dataset.task)].done = event.target.checked;
    renderProjectDetail();
    renderDocuments();
    addActivity(`${selectedProject().city} : tâche ${event.target.checked ? "validée" : "rouverte"}`);
  });

  els.projectDetail.addEventListener("submit", (event) => {
    if (event.target.id !== "addTaskForm") return;
    event.preventDefault();
    const input = event.target.querySelector("#taskInput");
    const label = input.value.trim();
    if (!label) return;
    selectedProject().tasks.push({ label, done: false });
    input.value = "";
    renderProjectDetail();
    addActivity(`${selectedProject().city} : nouvelle tâche ajoutée`);
  });

  els.projectDetail.addEventListener("click", (event) => {
    if (event.target.closest("#boostProgress")) {
      const project = selectedProject();
      project.progress = Math.min(100, project.progress + 5);
      renderBrief();
      renderProjects();
      renderKpis();
      addActivity(`${project.city} : étape validée, avancement ${project.progress}%`);
    }
  });

  els.routeDelay.addEventListener("input", () => {
    routeDelay = Number(els.routeDelay.value);
    renderStocks();
  });

  els.stockTable.addEventListener("click", (event) => {
    const button = event.target.closest("[data-reorder]");
    if (!button) return;
    const stock = stocks[Number(button.dataset.reorder)];
    stock.qty += Math.ceil(stock.min * 0.35);
    renderStocks();
    addActivity(`Approvisionnement : ${stock.item} réservé pour ${stock.project}`);
    toast(`Bon d’achat préparé pour ${stock.item}`);
  });

  els.purchaseCard.addEventListener("click", (event) => {
    if (!event.target.closest("#confirmPurchase")) return;
    addActivity("Achat : bon rapide validé par la logistique");
    toast("Bon rapide enregistré dans le journal");
  });

  els.assignmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const crew = crews[Number(els.crewSelect.value)];
    const project = projects.find((item) => item.id === Number(els.projectSelect.value));
    const shift = document.querySelector("#shiftSelect").value;
    project.crew += Math.min(crew.people, 12);
    crew.location = project.city;
    renderTeams();
    renderProjects();
    renderBrief();
    addActivity(`${crew.name} affectée à ${project.city} en quart ${shift}`);
    toast(`${crew.name} affectée à ${project.name}`);
  });

  els.crewBoard.addEventListener("change", (event) => {
    if (!event.target.matches("[data-presence]")) return;
    const crew = crews[Number(event.target.dataset.presence)];
    crew.present = event.target.checked ? Math.min(crew.people, crew.present + 1) : Math.max(0, crew.present - 1);
    renderTeams();
    addActivity(`${crew.name} : présence ${event.target.checked ? "confirmée" : "à vérifier"}`);
  });

  document.querySelectorAll("#amountInput, #taxInput, #retainInput, #advanceInput").forEach((input) => {
    input.addEventListener("input", renderFinance);
  });

  document.querySelectorAll(".payment-mode .segment").forEach((button) => {
    button.addEventListener("click", () => {
      paymentMode = button.dataset.pay;
      document.querySelectorAll(".payment-mode .segment").forEach((item) => item.classList.toggle("active", item === button));
      renderFinance();
    });
  });

  els.templateList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-template]");
    if (!card) return;
    currentTemplate = Number(card.dataset.template);
    renderDocuments();
  });

  els.templateList.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && event.target.closest("[data-template]")) {
      event.preventDefault();
      currentTemplate = Number(event.target.closest("[data-template]").dataset.template);
      renderDocuments();
    }
  });

  document.querySelector("#downloadDoc").addEventListener("click", () => {
    downloadText("document-btp-nexus-bf.txt", els.docPreview.value);
    toast("Document exporté");
  });

  document.querySelector("#exportLog").addEventListener("click", () => {
    downloadText("journal-terrain-btp-nexus-bf.txt", activity.join("\n"));
    toast("Journal téléchargé");
  });

  document.querySelector("#generateInvoice").addEventListener("click", () => {
    currentTemplate = 1;
    switchView("documents");
    renderDocuments();
    toast("Proforma préparée dans les documents");
  });

  document.querySelector("#scanButton").addEventListener("click", () => {
    els.networkMode.textContent = "Scan radio...";
    toast("Scan des chantiers lancé");
    window.setTimeout(() => {
      els.networkMode.textContent = "Synchronisé";
      addActivity("Radio : toutes les bases ont répondu");
    }, 1100);
  });

  document.querySelector("#syncButton").addEventListener("click", () => {
    els.networkMode.textContent = "Sync terrain";
    window.setTimeout(() => {
      els.networkMode.textContent = "Synchronisé";
      toast("Données terrain synchronisées");
    }, 800);
  });

  document.querySelector("#briefingButton").addEventListener("click", () => {
    addActivity("Briefing SMS : EPI, hydratation et objectifs envoyés");
    toast("Briefing transmis aux chefs d’équipe");
  });

  document.querySelector("#sendAlert").addEventListener("click", () => {
    addActivity("Alerte HSE : message multi-canal envoyé");
    toast("Alerte envoyée aux responsables");
  });

  document.querySelector("#themeButton").addEventListener("click", () => {
    document.documentElement.classList.toggle("light");
    const use = document.querySelector("#themeButton use");
    use.setAttribute("href", document.documentElement.classList.contains("light") ? "#i-moon" : "#i-sun");
  });

  document.querySelector("#quickOpen").addEventListener("click", () => els.quickDialog.showModal());
  document.querySelector("#quickClose").addEventListener("click", () => els.quickDialog.close());
  els.quickDialog.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const labels = {
      pointage: "Pointage équipe lancé",
      stock: "Demande ciment créée",
      incident: "Fiche incident HSE ouverte",
      paiement: "Relance paiement préparée"
    };
    addActivity(`Action rapide : ${labels[button.dataset.action]}`);
    toast(labels[button.dataset.action]);
    els.quickDialog.close();
  });

  els.baseSelect.addEventListener("change", () => {
    addActivity(`Base active : ${els.baseSelect.value}`);
    toast(`Base ${els.baseSelect.value} sélectionnée`);
    renderDocuments();
  });

  window.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      els.quickDialog.showModal();
    }
  });
}

function handleProjectGrid(event) {
  const action = event.target.closest("[data-project-action]");
  if (action) {
    const project = projects.find((item) => item.id === Number(action.dataset.id));
    currentProjectId = project.id;
    if (action.dataset.projectAction === "alert") {
      addActivity(`${project.city} : alerte chef chantier envoyée`);
      toast(`Alerte envoyée à ${project.manager}`);
    }
    if (action.dataset.projectAction === "daily") {
      addActivity(`${project.city} : journal quotidien généré`);
      toast("Journal quotidien ajouté");
    }
    renderBrief();
    renderProjects();
    renderDocuments();
    return;
  }

  const card = event.target.closest("[data-project-card]");
  if (card) handleProjectCard(card);
}

function handleProjectCard(card) {
  currentProjectId = Number(card.dataset.projectCard);
  renderBrief();
  renderProjects();
  renderDocuments();
}

function drawSkyline() {
  const canvas = document.querySelector("#skylineCanvas");
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.max(1, Math.floor(rect.width * dpr));
  canvas.height = Math.max(1, Math.floor(rect.height * dpr));
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  let frame = 0;
  function render() {
    const w = rect.width;
    const h = rect.height;
    ctx.clearRect(0, 0, w, h);

    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, "rgba(37,216,200,0.00)");
    sky.addColorStop(1, "rgba(255,200,97,0.15)");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = "rgba(146,255,180,0.18)";
    ctx.lineWidth = 1;
    for (let x = -60 + (frame % 60); x < w; x += 60) {
      ctx.beginPath();
      ctx.moveTo(x, h * 0.1);
      ctx.lineTo(x + 120, h);
      ctx.stroke();
    }

    const ground = h * 0.78;
    ctx.fillStyle = "rgba(9,12,9,0.72)";
    ctx.fillRect(0, ground, w, h - ground);

    const buildings = [
      [w * 0.1, ground - 80, 76, 80],
      [w * 0.22, ground - 124, 98, 124],
      [w * 0.38, ground - 92, 82, 92],
      [w * 0.55, ground - 140, 112, 140],
      [w * 0.73, ground - 106, 88, 106]
    ];
    buildings.forEach(([x, y, bw, bh], index) => {
      ctx.fillStyle = index % 2 ? "rgba(28,38,29,0.86)" : "rgba(38,43,34,0.84)";
      ctx.fillRect(x, y, bw, bh);
      ctx.strokeStyle = "rgba(146,255,180,0.18)";
      ctx.strokeRect(x, y, bw, bh);
      ctx.fillStyle = "rgba(255,200,97,0.22)";
      for (let wy = y + 14; wy < y + bh - 10; wy += 18) {
        ctx.fillRect(x + 12, wy, bw - 24, 2);
      }
    });

    drawCrane(ctx, w * 0.5, ground - 132, 118, frame);
    drawCrane(ctx, w * 0.82, ground - 102, 92, frame + 60);

    ctx.strokeStyle = "rgba(37,216,200,0.36)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, ground + 18);
    ctx.bezierCurveTo(w * 0.25, ground - 8, w * 0.5, ground + 36, w, ground + 8);
    ctx.stroke();

    frame += 0.45;
    requestAnimationFrame(render);
  }

  render();
}

function drawCrane(ctx, x, y, size, frame) {
  ctx.strokeStyle = "rgba(255,200,97,0.55)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + size);
  ctx.moveTo(x - size * 0.52, y + 12);
  ctx.lineTo(x + size * 0.82, y + 12);
  ctx.moveTo(x, y);
  ctx.lineTo(x - size * 0.52, y + 12);
  ctx.moveTo(x, y);
  ctx.lineTo(x + size * 0.82, y + 12);
  ctx.stroke();

  const hookX = x + size * 0.42 + Math.sin(frame / 48) * 10;
  ctx.beginPath();
  ctx.moveTo(hookX, y + 12);
  ctx.lineTo(hookX, y + size * 0.42);
  ctx.stroke();
  ctx.fillStyle = "rgba(146,255,180,0.58)";
  ctx.fillRect(hookX - 8, y + size * 0.42, 16, 12);
}

function init() {
  renderClock();
  window.setInterval(renderClock, 1000);
  refreshAll();
  bindEvents();
  drawSkyline();
  window.addEventListener("resize", () => {
    window.setTimeout(drawSkyline, 120);
  }, { passive: true });
}

init();
