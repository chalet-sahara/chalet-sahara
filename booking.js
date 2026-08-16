const HOST_EMAIL = "d.schonne@gmail.com";
const HOST_PHONE = "+15144420697"; // 514-442-0697

const MIN_NIGHTS = 31;
const MAX_NIGHTS = 60;
const MAX_OCCUPANTS = 11; // total adults + children, per Airbnb listing capacity

// TODO ALL VALUES BELOW ARE PLACEHOLDERS — replace with the host's confirmed
// rates. Nightly rate now varies by season and by weekday/weekend (see
// SEASONS + WEEKEND_DAYS below) instead of a single flat rate.
const PRICING = {
  currency: "CAD",
  cleaningFee: 250,
  baseGuests: 2,          // TODO: confirm — number of adults included in the nightly rate
  extraGuestFee: 15,      // TODO: confirm — extra fee per additional adult, per night
  freeChildAge: 5,        // children age 0-5 stay free (not charged, don't count as extra guests)
  petFeePerNight: 5,      // per pet, per night — neutered/spayed dogs only, no cats
  maxPets: 3,             // TODO: confirm max number of dogs allowed
  gstRate: 0.05,          // TPS
  qstRate: 0.09975,       // TVQ
  confirmed: false
};

// Nights falling on these weekdays (0=Sun ... 6=Sat) use the "weekend" rate.
// TODO: confirm which nights count as "weekend" (e.g. Fri+Sat, or Sat+Sun).
const WEEKEND_DAYS = [5, 6]; // Friday, Saturday nights

// Seasons checked in order; the first whose [start, end] (month/day, inclusive,
// year-agnostic) contains the date wins. Ranges may wrap the new year (e.g.
// Dec 15 → Mar 15). The last entry with start=end=null is the fallback.
// TODO: confirm season date ranges and rates with the host.
const SEASONS = [
  {
    name: { fr: "Haute saison (été)", en: "High season (summer)" },
    start: [6, 15], end: [9, 15],
    weekday: 145, weekend: 175
  },
  {
    name: { fr: "Haute saison (hiver)", en: "High season (winter)" },
    start: [12, 15], end: [3, 15],
    weekday: 145, weekend: 175
  },
  {
    name: { fr: "Basse saison", en: "Low season" },
    start: null, end: null,
    weekday: 110, weekend: 130
  }
];

const translations = {
  fr: {
    "nav.photos": "Photos",
    "ph.eyebrow": "Réservation directe",
    "ph.title": "Réservez sans frais de plateforme",
    "ph.lead": "Choisissez vos dates ci-dessous — le calendrier est synchronisé automatiquement avec notre annonce Airbnb, alors les disponibilités sont toujours à jour. Séjour de 31 à 60 nuits, mêmes tarifs que sur Airbnb, sans les frais de service.",
    "ph.syncing": "Chargement du calendrier…",
    "ph.synced": "Calendrier synchronisé avec Airbnb — mis à jour ",
    "ph.syncfail": "Calendrier temporairement indisponible — contactez-nous pour vérifier les disponibilités.",
    "ph.legend.blocked": "Déjà réservé",
    "ph.legend.selected": "Sélectionné",
    "ph.stayrule": "Séjour minimum : 31 nuits · maximum : 60 nuits (même règle que sur Airbnb).",
    "ph.summary.title": "Votre séjour",
    "ph.summary.none": "Aucune date sélectionnée",
    "ph.nofee": "✓ Aucuns frais de service Airbnb",
    "ph.placeholder": "Tarif provisoire en attente de confirmation par l'hôte — le prix final sera confirmé dans la réponse à votre demande.",
    "ph.form.adults": "Adultes",
    "ph.form.children": "Enfants",
    "ph.form.pets": "Chiens (stérilisés uniquement — pas de chats)",
    "ph.form.name": "Nom complet",
    "ph.form.email": "Courriel",
    "ph.form.phone": "Téléphone (optionnel)",
    "ph.form.message": "Message (optionnel)",
    "ph.form.sendEmail": "Envoyer la demande par courriel",
    "ph.form.sendSms": "Envoyer la demande par SMS",
    "msg.pickStart": "Choisissez une date d'arrivée.",
    "msg.pickEnd": "Choisissez une date de départ (31 à 60 nuits après l'arrivée).",
    "msg.tooShort": "Séjour trop court — minimum 31 nuits.",
    "msg.tooLong": "Séjour trop long — maximum 60 nuits.",
    "msg.blocked": "Ces dates incluent des nuits déjà réservées. Choisissez une autre période.",
    "msg.fillForm": "Remplissez le formulaire pour envoyer votre demande.",
    "msg.tooManyGuests": "Capacité maximale dépassée.",
    "footer.addr": "Domaine Lakefield, Argenteuil, Québec",
    "footer.credit": "Chalet privé — location de courte durée"
  },
  en: {
    "nav.photos": "Photos",
    "ph.eyebrow": "Direct booking",
    "ph.title": "Book without platform fees",
    "ph.lead": "Pick your dates below — the calendar syncs automatically with our Airbnb listing, so availability is always up to date. Stays of 31 to 60 nights, same rate as Airbnb, without the service fee.",
    "ph.syncing": "Loading calendar…",
    "ph.synced": "Synced with Airbnb — updated ",
    "ph.syncfail": "Calendar temporarily unavailable — contact us to check availability.",
    "ph.legend.blocked": "Already booked",
    "ph.legend.selected": "Selected",
    "ph.stayrule": "Minimum stay: 31 nights · maximum: 60 nights (same rule as Airbnb).",
    "ph.summary.title": "Your stay",
    "ph.summary.none": "No dates selected",
    "ph.nofee": "✓ No Airbnb service fee",
    "ph.placeholder": "Provisional rate pending confirmation by the host — the final price will be confirmed in the reply to your request.",
    "ph.form.adults": "Adults",
    "ph.form.children": "Children",
    "ph.form.pets": "Dogs (neutered/spayed only — no cats)",
    "ph.form.name": "Full name",
    "ph.form.email": "Email",
    "ph.form.phone": "Phone (optional)",
    "ph.form.message": "Message (optional)",
    "ph.form.sendEmail": "Send request by email",
    "ph.form.sendSms": "Send request by text",
    "msg.pickStart": "Choose a check-in date.",
    "msg.pickEnd": "Choose a check-out date (31 to 60 nights after check-in).",
    "msg.tooShort": "Stay too short — 31-night minimum.",
    "msg.tooLong": "Stay too long — 60-night maximum.",
    "msg.blocked": "These dates include nights that are already booked. Please choose a different period.",
    "msg.fillForm": "Fill in the form to send your request.",
    "msg.tooManyGuests": "Maximum capacity exceeded.",
    "footer.addr": "Lakefield Estate, Argenteuil, Québec",
    "footer.credit": "Private chalet — short-term rental"
  }
};

const monthNames = {
  fr: ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],
  en: ["January","February","March","April","May","June","July","August","September","October","November","December"]
};
const weekdayNames = {
  fr: ["L","M","M","J","V","S","D"],
  en: ["M","T","W","T","F","S","S"]
};

let currentLang = "fr";
let blockedDates = new Set();
let viewYear, viewMonth; // viewMonth 0-11
let selStart = null, selEnd = null;
const today = new Date(); today.setHours(0,0,0,0);

function todayIso() { return isoOf(today); }
function isoOf(d) { return d.toISOString().slice(0,10); }
function dateFromIso(iso) { return new Date(iso + "T00:00:00"); }
function addDaysIso(iso, n) {
  const d = dateFromIso(iso);
  d.setDate(d.getDate() + n);
  return isoOf(d);
}
function diffNights(startIso, endIso) {
  return Math.round((dateFromIso(endIso) - dateFromIso(startIso)) / 86400000);
}
function fmtMoney(n) {
  return n.toLocaleString(currentLang === "fr" ? "fr-CA" : "en-CA", { style: "currency", currency: PRICING.currency, maximumFractionDigits: 0 });
}
function fmtDate(iso) {
  const d = dateFromIso(iso);
  return d.toLocaleDateString(currentLang === "fr" ? "fr-CA" : "en-CA", { day: "numeric", month: "long", year: "numeric" });
}

// Is (month, day) within a year-agnostic [start, end] range? Handles ranges
// that wrap the new year (e.g. Dec 15 → Mar 15).
function monthDayInRange(month, day, start, end) {
  const val = month * 100 + day;
  const s = start[0] * 100 + start[1];
  const e = end[0] * 100 + end[1];
  if (s <= e) return val >= s && val <= e;
  return val >= s || val <= e; // wraps around new year
}

function getSeasonForDate(iso) {
  const d = dateFromIso(iso);
  const month = d.getMonth() + 1, day = d.getDate();
  for (const season of SEASONS) {
    if (season.start === null || monthDayInRange(month, day, season.start, season.end)) {
      return season;
    }
  }
  return SEASONS[SEASONS.length - 1];
}

function getNightlyRate(iso) {
  const season = getSeasonForDate(iso);
  const dow = dateFromIso(iso).getDay(); // 0=Sun..6=Sat
  return WEEKEND_DAYS.includes(dow) ? season.weekend : season.weekday;
}

// Sums the per-night rate (season + weekday/weekend) across [startIso, endIso).
function sumStayRate(startIso, endIso) {
  let total = 0;
  let cur = startIso;
  while (cur < endIso) {
    total += getNightlyRate(cur);
    cur = addDaysIso(cur, 1);
  }
  return total;
}

function rangeHasBlocked(startIso, endIso) {
  let cur = startIso;
  while (cur < endIso) {
    if (blockedDates.has(cur)) return true;
    cur = addDaysIso(cur, 1);
  }
  return false;
}

async function loadAvailability() {
  const note = document.getElementById("syncNote");
  try {
    const res = await fetch("data/availability.json", { cache: "no-store" });
    const data = await res.json();
    blockedDates = new Set(data.blocked || []);
    if (data.generated_at) {
      const d = new Date(data.generated_at);
      note.querySelector("span:last-child").textContent =
        translations[currentLang]["ph.synced"] + d.toLocaleString(currentLang === "fr" ? "fr-CA" : "en-CA", { dateStyle: "medium", timeStyle: "short" });
    } else {
      note.querySelector("span:last-child").textContent =
        currentLang === "fr" ? "Synchronisation Airbnb pas encore configurée." : "Airbnb sync not yet configured.";
    }
  } catch (e) {
    note.querySelector("span:last-child").textContent = translations[currentLang]["ph.syncfail"];
    note.querySelector(".dot").style.background = "#c0554a";
  }
  renderCalendar();
}

function renderCalendar() {
  document.getElementById("calTitle").textContent = `${monthNames[currentLang][viewMonth]} ${viewYear}`;

  const wd = document.getElementById("calWeekdays");
  wd.innerHTML = weekdayNames[currentLang].map(d => `<span>${d}</span>`).join("");

  const grid = document.getElementById("calGrid");
  grid.innerHTML = "";

  const firstOfMonth = new Date(viewYear, viewMonth, 1);
  let startWeekday = firstOfMonth.getDay(); // 0=Sun
  startWeekday = (startWeekday + 6) % 7; // convert to Mon=0

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  for (let i = 0; i < startWeekday; i++) {
    const btn = document.createElement("button");
    btn.className = "empty";
    btn.disabled = true;
    grid.appendChild(btn);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const iso = `${viewYear}-${String(viewMonth+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
    const btn = document.createElement("button");
    btn.textContent = day;
    btn.dataset.iso = iso;

    const isPast = iso < todayIso();
    const isBlocked = blockedDates.has(iso);
    btn.disabled = isPast || isBlocked;

    if (selStart && iso === selStart) btn.classList.add("is-start");
    if (selEnd && iso === selEnd) btn.classList.add("is-end");
    if (selStart && selEnd && iso > selStart && iso < selEnd) btn.classList.add("in-range");

    btn.addEventListener("click", () => onDayClick(iso));
    grid.appendChild(btn);
  }

  document.getElementById("calPrev").disabled =
    viewYear === today.getFullYear() && viewMonth === today.getMonth();
}

function onDayClick(iso) {
  const msg = document.getElementById("selectionMsg");

  if (!selStart || (selStart && selEnd)) {
    selStart = iso;
    selEnd = null;
    showMsg("info", translations[currentLang]["msg.pickEnd"]);
  } else {
    if (iso === selStart) {
      selStart = null;
      showMsg("info", translations[currentLang]["msg.pickStart"]);
    } else if (iso < selStart) {
      selStart = iso;
      selEnd = null;
      showMsg("info", translations[currentLang]["msg.pickEnd"]);
    } else {
      const nights = diffNights(selStart, iso);
      if (nights < MIN_NIGHTS) {
        showMsg("error", translations[currentLang]["msg.tooShort"]);
        return;
      }
      if (nights > MAX_NIGHTS) {
        showMsg("error", translations[currentLang]["msg.tooLong"]);
        return;
      }
      if (rangeHasBlocked(selStart, iso)) {
        showMsg("error", translations[currentLang]["msg.blocked"]);
        return;
      }
      selEnd = iso;
      msg.classList.remove("show");
    }
  }
  renderCalendar();
  updateSummary();
}

function showMsg(type, text) {
  const msg = document.getElementById("selectionMsg");
  msg.className = `selection-msg show ${type}`;
  msg.textContent = text;
}

function computeTotals(startIso, endIso, guests, pets) {
  const nights = diffNights(startIso, endIso);
  const subtotal = sumStayRate(startIso, endIso);
  const avgNightly = subtotal / nights;
  const extraGuests = Math.max(0, (guests || PRICING.baseGuests) - PRICING.baseGuests);
  const extraGuestTotal = extraGuests * PRICING.extraGuestFee * nights;
  const petTotal = (pets || 0) * PRICING.petFeePerNight * nights;
  const taxable = subtotal + extraGuestTotal + petTotal + PRICING.cleaningFee;
  const gst = taxable * PRICING.gstRate;
  const qst = taxable * PRICING.qstRate;
  const total = taxable + gst + qst;
  return { nights, subtotal, avgNightly, extraGuests, extraGuestTotal, pets: pets || 0, petTotal, cleaning: PRICING.cleaningFee, gst, qst, total };
}

function updateSummary() {
  const summaryDates = document.getElementById("summaryDates");
  const breakdown = document.getElementById("priceBreakdown");
  const sendEmail = document.getElementById("sendEmail");
  const sendSms = document.getElementById("sendSms");

  const adults = Number(document.getElementById("adults").value);
  const children = Number(document.getElementById("children").value);
  const occupants = adults + children;
  const msg = document.getElementById("selectionMsg");

  if (occupants > MAX_OCCUPANTS) {
    showMsg("error", translations[currentLang]["msg.tooManyGuests"]);
    breakdown.style.display = "none";
    sendEmail.disabled = true;
    sendSms.disabled = true;
    return;
  } else if (msg.textContent === translations[currentLang]["msg.tooManyGuests"]) {
    msg.classList.remove("show");
  }

  if (!selStart || !selEnd) {
    summaryDates.textContent = translations[currentLang]["ph.summary.none"];
    breakdown.style.display = "none";
    sendEmail.disabled = true;
    sendSms.disabled = true;
    return;
  }

  const nights = diffNights(selStart, selEnd);
  const occupantsLabel = children > 0
    ? `${occupants} ${currentLang === "fr" ? "voyageurs" : "guests"} (${adults} ${currentLang === "fr" ? "adultes" : "adults"}, ${children} ${currentLang === "fr" ? "enfants" : "children"})`
    : `${occupants} ${currentLang === "fr" ? "voyageurs" : "guests"}`;
  summaryDates.textContent = `${fmtDate(selStart)} → ${fmtDate(selEnd)} (${nights} ${currentLang === "fr" ? "nuits" : "nights"}) · ${occupantsLabel}`;

  const pets = Number(document.getElementById("pets").value);
  const t = computeTotals(selStart, selEnd, adults, pets);

  document.getElementById("rowNightly").innerHTML =
    `<span>${currentLang === "fr" ? "Hébergement" : "Accommodation"} (${fmtMoney(t.avgNightly)} ${currentLang === "fr" ? "moy." : "avg."} × ${nights} ${currentLang === "fr" ? "nuits" : "nights"})</span><span>${fmtMoney(t.subtotal)}</span>`;

  const rowExtraGuests = document.getElementById("rowExtraGuests");
  if (t.extraGuests > 0) {
    rowExtraGuests.style.display = "flex";
    const label = currentLang === "fr"
      ? `${t.extraGuests} adulte${t.extraGuests > 1 ? "s" : ""} suppl. × ${fmtMoney(PRICING.extraGuestFee)} × ${nights} nuits`
      : `${t.extraGuests} extra adult${t.extraGuests > 1 ? "s" : ""} × ${fmtMoney(PRICING.extraGuestFee)} × ${nights} nights`;
    rowExtraGuests.innerHTML = `<span>${label}</span><span>${fmtMoney(t.extraGuestTotal)}</span>`;
  } else {
    rowExtraGuests.style.display = "none";
  }

  const rowPets = document.getElementById("rowPets");
  if (t.pets > 0) {
    rowPets.style.display = "flex";
    const label = currentLang === "fr"
      ? `${t.pets} chien${t.pets > 1 ? "s" : ""} × ${fmtMoney(PRICING.petFeePerNight)} × ${nights} nuits`
      : `${t.pets} dog${t.pets > 1 ? "s" : ""} × ${fmtMoney(PRICING.petFeePerNight)} × ${nights} nights`;
    rowPets.innerHTML = `<span>${label}</span><span>${fmtMoney(t.petTotal)}</span>`;
  } else {
    rowPets.style.display = "none";
  }

  const rowCleaning = document.getElementById("rowCleaning");
  if (PRICING.cleaningFee > 0) {
    rowCleaning.style.display = "flex";
    rowCleaning.innerHTML = `<span>${currentLang === "fr" ? "Frais de ménage" : "Cleaning fee"}</span><span>${fmtMoney(t.cleaning)}</span>`;
  } else {
    rowCleaning.style.display = "none";
  }

  document.getElementById("rowGst").innerHTML =
    `<span>${currentLang === "fr" ? "TPS (5 %)" : "GST (5%)"}</span><span>${fmtMoney(t.gst)}</span>`;
  document.getElementById("rowQst").innerHTML =
    `<span>${currentLang === "fr" ? "TVQ (9,975 %)" : "QST (9.975%)"}</span><span>${fmtMoney(t.qst)}</span>`;

  document.getElementById("rowTotal").innerHTML =
    `<span>${currentLang === "fr" ? "Total" : "Total"}</span><span>${fmtMoney(t.total)}</span>`;

  breakdown.style.display = "block";
  sendEmail.disabled = false;
  sendSms.disabled = false;
}

function buildRequestText() {
  const nights = diffNights(selStart, selEnd);
  const adults = Number(document.getElementById("adults").value);
  const children = Number(document.getElementById("children").value);
  const pets = Number(document.getElementById("pets").value);
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const t = computeTotals(selStart, selEnd, adults, pets);

  const lines = currentLang === "fr" ? [
    `Demande de réservation — 8, rue du Sahara`,
    ``,
    `Arrivée : ${fmtDate(selStart)}`,
    `Départ : ${fmtDate(selEnd)}`,
    `Nuits : ${nights}`,
    `Adultes : ${adults}`,
    children > 0 ? `Enfants (0-${PRICING.freeChildAge} ans, gratuit) : ${children}` : null,
    pets > 0 ? `Chiens (stérilisés) : ${pets}` : null,
    `Hébergement (${fmtMoney(t.avgNightly)} moy. × ${nights} nuits) : ${fmtMoney(t.subtotal)}`,
    t.extraGuests > 0 ? `Adultes suppl. (${t.extraGuests} × ${fmtMoney(PRICING.extraGuestFee)} × ${nights}) : ${fmtMoney(t.extraGuestTotal)}` : null,
    t.pets > 0 ? `Chiens (${t.pets} × ${fmtMoney(PRICING.petFeePerNight)} × ${nights}) : ${fmtMoney(t.petTotal)}` : null,
    PRICING.cleaningFee > 0 ? `Frais de ménage : ${fmtMoney(t.cleaning)}` : null,
    `TPS (5 %) : ${fmtMoney(t.gst)}`,
    `TVQ (9,975 %) : ${fmtMoney(t.qst)}`,
    `Total estimé : ${fmtMoney(t.total)}${PRICING.confirmed ? "" : " (à confirmer)"}`,
    ``,
    `Nom : ${name}`,
    `Courriel : ${email}`,
    phone ? `Téléphone : ${phone}` : null,
    message ? `` : null,
    message ? `Message : ${message}` : null
  ] : [
    `Booking request — 8 Sahara Street`,
    ``,
    `Check-in: ${fmtDate(selStart)}`,
    `Check-out: ${fmtDate(selEnd)}`,
    `Nights: ${nights}`,
    `Adults: ${adults}`,
    children > 0 ? `Children (0-${PRICING.freeChildAge} yrs, free): ${children}` : null,
    pets > 0 ? `Dogs (neutered/spayed): ${pets}` : null,
    `Accommodation (${fmtMoney(t.avgNightly)} avg. × ${nights} nights): ${fmtMoney(t.subtotal)}`,
    t.extraGuests > 0 ? `Extra adults (${t.extraGuests} × ${fmtMoney(PRICING.extraGuestFee)} × ${nights}): ${fmtMoney(t.extraGuestTotal)}` : null,
    t.pets > 0 ? `Dogs (${t.pets} × ${fmtMoney(PRICING.petFeePerNight)} × ${nights}): ${fmtMoney(t.petTotal)}` : null,
    PRICING.cleaningFee > 0 ? `Cleaning fee: ${fmtMoney(t.cleaning)}` : null,
    `GST (5%): ${fmtMoney(t.gst)}`,
    `QST (9.975%): ${fmtMoney(t.qst)}`,
    `Estimated total: ${fmtMoney(t.total)}${PRICING.confirmed ? "" : " (to be confirmed)"}`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    message ? `` : null,
    message ? `Message: ${message}` : null
  ];

  return lines.filter(l => l !== null).join("\n");
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const adults = Number(document.getElementById("adults").value);
  const children = Number(document.getElementById("children").value);
  if (!selStart || !selEnd || !name || !email) {
    showMsg("error", translations[currentLang]["msg.fillForm"]);
    return false;
  }
  if (adults + children > MAX_OCCUPANTS) {
    showMsg("error", translations[currentLang]["msg.tooManyGuests"]);
    return false;
  }
  return true;
}

function fillSelect(id, min, max) {
  const sel = document.getElementById(id);
  sel.innerHTML = "";
  for (let i = min; i <= max; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = i;
    sel.appendChild(opt);
  }
}

function populateGuestSelects() {
  fillSelect("adults", 1, MAX_OCCUPANTS);
  fillSelect("children", 0, MAX_OCCUPANTS - 1);
  fillSelect("pets", 0, PRICING.maxPets);
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = translations[currentLang][key];
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === currentLang);
  });
  document.getElementById("childrenLabel").textContent = currentLang === "fr"
    ? `Enfants (0-${PRICING.freeChildAge} ans, gratuit)`
    : `Children (0-${PRICING.freeChildAge} yrs, free)`;
  renderCalendar();
  updateSummary();
}

document.addEventListener("DOMContentLoaded", () => {
  viewYear = today.getFullYear();
  viewMonth = today.getMonth();

  populateGuestSelects();
  document.getElementById("adults").addEventListener("change", updateSummary);
  document.getElementById("children").addEventListener("change", updateSummary);
  document.getElementById("pets").addEventListener("change", updateSummary);

  document.getElementById("calPrev").addEventListener("click", () => {
    viewMonth--; if (viewMonth < 0) { viewMonth = 11; viewYear--; }
    renderCalendar();
  });
  document.getElementById("calNext").addEventListener("click", () => {
    viewMonth++; if (viewMonth > 11) { viewMonth = 0; viewYear++; }
    renderCalendar();
  });

  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.getAttribute("data-lang-btn");
      applyTranslations();
    });
  });

  document.getElementById("sendEmail").addEventListener("click", () => {
    if (!validateForm()) return;
    const subject = encodeURIComponent(currentLang === "fr" ? "Demande de réservation — 8, rue du Sahara" : "Booking request — 8 Sahara Street");
    const body = encodeURIComponent(buildRequestText());
    window.location.href = `mailto:${HOST_EMAIL}?subject=${subject}&body=${body}`;
  });

  document.getElementById("sendSms").addEventListener("click", () => {
    if (!validateForm()) return;
    const body = encodeURIComponent(buildRequestText());
    window.location.href = `sms:${HOST_PHONE}?&body=${body}`;
  });

  loadAvailability();
});
