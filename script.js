const AIRBNB_URL = "https://fr.airbnb.ca/rooms/1663735871317730027";

const translations = {
  fr: {
    "nav.book": "Réserver",
    "hero.eyebrow": "Domaine Lakefield · Argenteuil, Québec",
    "hero.title": "Chalet nature, sauna au bois &amp; accès à 3 lacs",
    "hero.lead": "Un grand chalet familial pour se ressourcer en nature, à quelques minutes de Morin-Heights et Saint-Sauveur.",
    "hero.cta1": "Réserver directement",
    "hero.cta2": "Voir les photos",
    "hero.scroll": "Découvrir ↓",
    "facts.guests": "Voyageurs",
    "facts.bedrooms": "Chambres",
    "facts.beds": "Lits",
    "facts.baths": "Salles de bain",
    "intro.eyebrow": "Bienvenue",
    "intro.title": "Oubliez tous vos soucis",
    "intro.p1": "Ce logement paisible et spacieux vous accueille au cœur d'un domaine privé de la région d'Argenteuil, entre forêt et lacs. Que ce soit pour décrocher, profiter de l'eau ou simplement ralentir le rythme, tout a été pensé pour offrir une expérience confortable et apaisante — idéal pour le télétravail, une retraite entre amis ou un séjour en famille.",
    "intro.p2": "Tout inclus : Wi-Fi, chauffage, électricité. Sauna au bois pour des soirées détente, accès à 3 lacs pour la baignade, le kayak, le paddle board ou la pêche à la truite, terrain de badminton, et des sentiers pédestres directement en bas du chalet — pistes de raquette et de ski de fond en accès libre.",
    "hl.eyebrow": "Points forts",
    "hl.title": "Ce qui rend ce chalet unique",
    "hl.sauna.t": "Sauna au bois",
    "hl.sauna.d": "Pour des soirées détente, chauffé au feu de bois.",
    "hl.lake.t": "Accès à 3 lacs",
    "hl.lake.d": "Baignade, kayak, paddle board et pêche à la truite.",
    "hl.badminton.t": "Terrain de badminton",
    "hl.badminton.d": "Pour s'amuser en famille ou entre amis.",
    "hl.trails.t": "Sentiers &amp; ski de fond",
    "hl.trails.d": "Randonnée, raquette et ski de fond directement en bas du chalet.",
    "hl.selfcheckin.t": "Arrivée autonome",
    "hl.selfcheckin.d": "Une boîte à clé sécurisée vous permet d'entrer à votre rythme.",
    "hl.pets.t": "Chiens stérilisés bienvenus",
    "hl.pets.d": "Chiens stérilisés acceptés (5 $/nuit/animal) — pas de chats.",
    "hl.private.t": "Domaine privé",
    "hl.private.d": "Un environnement partagé où le calme et le respect sont essentiels.",
    "hl.remote.t": "Idéal télétravail",
    "hl.remote.d": "Espace de travail au calme, Wi-Fi inclus.",
    "gal.eyebrow": "Galerie",
    "gal.title": "Un aperçu du chalet",
    "am.eyebrow": "Commodités",
    "am.title": "Pour votre confort",
    "sleep.r1.t": "Chambre 1",
    "sleep.r1.d": "1 très grand lit",
    "sleep.r2.t": "Chambre 2",
    "sleep.r2.d": "1 grand lit",
    "sleep.r3.t": "Chambre 3",
    "sleep.r3.d": "2 grands lits",
    "ex.eyebrow": "Dans les environs",
    "ex.title": "Découvrir la région",
    "bk.eyebrow": "Disponibilités",
    "bk.title": "Prêt à réserver votre séjour ?",
    "bk.lead": "Consultez le calendrier de disponibilité et envoyez votre demande — sans les frais de plateforme d'Airbnb.",
    "bk.cta": "Réserver directement",
    "bk.cta2": "Voir sur Airbnb",
    "bk.contact": 'Une question ? Écrivez-nous au <a href="sms:+15144420697">514-442-0697</a>',
    "footer.addr": "Domaine Lakefield, Argenteuil, Québec",
    "footer.credit": "Chalet privé — location de courte durée"
  },
  en: {
    "nav.book": "Book now",
    "hero.eyebrow": "Lakefield Estate · Argenteuil, Québec",
    "hero.title": "Nature chalet, wood-fired sauna &amp; access to 3 lakes",
    "hero.lead": "A large family chalet to recharge in nature, minutes from Morin-Heights and Saint-Sauveur.",
    "hero.cta1": "Book directly",
    "hero.cta2": "See the photos",
    "hero.scroll": "Explore ↓",
    "facts.guests": "Guests",
    "facts.bedrooms": "Bedrooms",
    "facts.beds": "Beds",
    "facts.baths": "Bathrooms",
    "intro.eyebrow": "Welcome",
    "intro.title": "Forget all your worries",
    "intro.p1": "This peaceful, spacious home sits at the heart of a private estate in the Argenteuil region, between forest and lakes. Whether you're here to unplug, enjoy the water, or simply slow down, everything has been designed for a comfortable, relaxing stay — perfect for remote work, a retreat with friends, or a family getaway.",
    "intro.p2": "Everything included: Wi-Fi, heating, electricity. A wood-fired sauna for cozy evenings, access to 3 lakes for swimming, kayaking, paddleboarding or trout fishing, a badminton court, and hiking trails right below the chalet — with open-access snowshoe and cross-country ski tracks.",
    "hl.eyebrow": "Highlights",
    "hl.title": "What makes this chalet special",
    "hl.sauna.t": "Wood-fired sauna",
    "hl.sauna.d": "For cozy evenings, heated by a wood stove.",
    "hl.lake.t": "Access to 3 lakes",
    "hl.lake.d": "Swimming, kayaking, paddleboarding and trout fishing.",
    "hl.badminton.t": "Badminton court",
    "hl.badminton.d": "Fun for the whole family or friends.",
    "hl.trails.t": "Trails &amp; cross-country skiing",
    "hl.trails.d": "Hiking, snowshoeing and cross-country skiing right below the chalet.",
    "hl.selfcheckin.t": "Self check-in",
    "hl.selfcheckin.d": "A secure lockbox lets you arrive on your own schedule.",
    "hl.pets.t": "Neutered dogs welcome",
    "hl.pets.d": "Neutered/spayed dogs welcome ($5/night per pet) — no cats.",
    "hl.private.t": "Private estate",
    "hl.private.d": "A shared environment where quiet and respect matter.",
    "hl.remote.t": "Great for remote work",
    "hl.remote.d": "A quiet workspace with Wi-Fi included.",
    "gal.eyebrow": "Gallery",
    "gal.title": "A glimpse of the chalet",
    "am.eyebrow": "Amenities",
    "am.title": "For your comfort",
    "sleep.r1.t": "Bedroom 1",
    "sleep.r1.d": "1 extra-large bed",
    "sleep.r2.t": "Bedroom 2",
    "sleep.r2.d": "1 large bed",
    "sleep.r3.t": "Bedroom 3",
    "sleep.r3.d": "2 large beds",
    "ex.eyebrow": "Nearby",
    "ex.title": "Discover the area",
    "bk.eyebrow": "Availability",
    "bk.title": "Ready to book your stay?",
    "bk.lead": "Check availability and send your request — without Airbnb's platform fees.",
    "bk.cta": "Book directly",
    "bk.cta2": "View on Airbnb",
    "bk.contact": 'Questions? Text us at <a href="sms:+15144420697">514-442-0697</a>',
    "footer.addr": "Lakefield Estate, Argenteuil, Québec",
    "footer.credit": "Private chalet — short-term rental"
  }
};

const galleryPhotos = [
  { file: "photo-01", fr: "Extérieur du chalet", en: "Chalet exterior", size: "wide" },
  { file: "photo-02", fr: "La propriété sous la neige", en: "The property under snow" },
  { file: "photo-03", fr: "Terrasse et espace détente extérieur", en: "Outdoor deck & lounge area" },
  { file: "photo-04", fr: "Sauna extérieur au bois", en: "Outdoor wood-fired sauna", size: "tall" },
  { file: "photo-05", fr: "Intérieur du sauna", en: "Sauna interior" },
  { file: "photo-06", fr: "Salon à aire ouverte, plafond cathédrale", en: "Open-concept living room, cathedral ceiling", size: "wide" },
  { file: "photo-07", fr: "Coin salon", en: "Living room lounge" },
  { file: "photo-08", fr: "Salon et foyer", en: "Living room & fireplace" },
  { file: "photo-09", fr: "Cuisine avec îlot", en: "Kitchen with island", size: "tall" },
  { file: "photo-10", fr: "Cuisine équipée", en: "Fully equipped kitchen" },
  { file: "photo-11", fr: "Salle à manger, vue sur la forêt", en: "Dining area with forest view", size: "wide" },
  { file: "photo-12", fr: "Coin repas à l'étage", en: "Upstairs dining nook" },
  { file: "photo-13", fr: "Chambre cosy", en: "Cozy bedroom" },
  { file: "photo-14", fr: "Chambre avec literie douillette", en: "Bedroom with plush bedding" },
  { file: "photo-15", fr: "Chambre à l'étage", en: "Upstairs bedroom" },
  { file: "photo-16", fr: "Chambre lumineuse", en: "Bright bedroom" },
  { file: "photo-17", fr: "Salle de bain, vanité noire", en: "Bathroom, black vanity" },
  { file: "photo-18", fr: "Salle de bain avec baignoire", en: "Bathroom with soaking tub", size: "tall" },
  { file: "photo-19", fr: "Salle de bain moderne", en: "Modern bathroom" },
  { file: "photo-20", fr: "Salle d'eau", en: "Powder room" },
  { file: "photo-21", fr: "Escalier menant à la mezzanine", en: "Stairs to the mezzanine" },
  { file: "photo-22", fr: "Salle familiale", en: "Family room", size: "wide" },
  { file: "photo-23", fr: "Lits superposés", en: "Bunk beds" },
  { file: "photo-24", fr: "Le chalet sous la neige", en: "The chalet under snow" },
  { file: "photo-25", fr: "Sentier enneigé dans la forêt", en: "Snowy forest trail" },
  { file: "photo-26", fr: "Accès au chalet en hiver", en: "Winter access to the chalet" }
];

const amenities = [
  { fr: "Accès à un lac", en: "Lake access" },
  { fr: "Accessible à ski", en: "Ski-in access" },
  { fr: "Cuisine complète", en: "Full kitchen" },
  { fr: "Wi-Fi", en: "Wi-Fi" },
  { fr: "Espace de travail", en: "Workspace" },
  { fr: "Stationnement gratuit sur place", en: "Free on-site parking" },
  { fr: "Sauna privé", en: "Private sauna" },
  { fr: "Chiens stérilisés acceptés (pas de chats)", en: "Neutered dogs allowed (no cats)" },
  { fr: "Téléviseur", en: "TV" },
  { fr: "Laveuse-sécheuse", en: "Washer / dryer" },
  { fr: "Foyer", en: "Fireplace" },
  { fr: "Thermopompe (chauffage)", en: "Heat pump (heating)" },
  { fr: "Eau de puits artésien filtrée", en: "Filtered artesian well water" },
  { fr: "Projecteur & console de jeu", en: "Projector & game console" },
  { fr: "Détecteurs de fumée et de CO", en: "Smoke & CO detectors" }
];

const iconCheck = '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';

const explore = [
  { tag: { fr: "Nature & faune", en: "Nature & wildlife" }, t: { fr: "Parc Oméga", en: "Parc Oméga" }, d: { fr: "Safari en voiture à travers la faune canadienne — cerfs, loups, bisons, ours.", en: "A drive-through safari across Canadian wildlife — deer, wolves, bison, bears." } },
  { tag: { fr: "Découverte animale", en: "Animal encounters" }, t: { fr: "Alpagas Belarroyo, Mirabel", en: "Alpagas Belarroyo, Mirabel" }, d: { fr: "Rencontre avec les animaux, produits locaux et cueillette — idéal avec les enfants.", en: "Animal encounters, local products and picking — great with kids." } },
  { tag: { fr: "Ski & plein air", en: "Skiing & outdoors" }, t: { fr: "Sommet Morin-Heights", en: "Sommet Morin-Heights" }, d: { fr: "Ski alpin, ski de fond, raquette, glissades sur tube et vélo de montagne.", en: "Downhill and cross-country skiing, snowshoeing, tubing and mountain biking." } },
  { tag: { fr: "Piste multifonction", en: "Multi-use trail" }, t: { fr: "Corridor aérobique", en: "Corridor aérobique" }, d: { fr: "Une magnifique piste pour la marche, le vélo et le ski de fond.", en: "A beautiful trail for walking, biking and cross-country skiing." } },
  { tag: { fr: "Nature sauvage", en: "Wild nature" }, t: { fr: "Parc du lac Beattie, Gore", en: "Lac Beattie Park, Gore" }, d: { fr: "Sentiers en forêt, accès au lac et aires de pique-nique à quelques minutes.", en: "Forest trails, lake access and picnic areas minutes from the chalet." } },
  { tag: { fr: "Expérience québécoise", en: "Quebec experience" }, t: { fr: "Cabanes à sucre", en: "Sugar shacks" }, d: { fr: "Repas traditionnel et tire d'érable sur neige au printemps.", en: "Traditional meal and maple taffy on snow in the spring." } },
  { tag: { fr: "Activités familiales", en: "Family activities" }, t: { fr: "Parcs d'aventure", en: "Adventure parks" }, d: { fr: "Tyrolienne et hébertisme du côté de Morin-Heights / Saint-Sauveur.", en: "Ziplining and ropes courses near Morin-Heights / Saint-Sauveur." } },
  { tag: { fr: "Centre aquatique", en: "Aquatic centre" }, t: { fr: "Super Aqua Club", en: "Super Aqua Club" }, d: { fr: "Parc aquatique à Pointe-Calumet, ainsi que le centre aquatique de Mirabel.", en: "Water park in Pointe-Calumet, plus the Mirabel aquatic centre." } },
  { tag: { fr: "Trouvaille locale", en: "Local find" }, t: { fr: "Boîte à pizza, Gore", en: "Pizza box, Gore" }, d: { fr: "Distributeur de pizzas chaudes et froides au parc municipal, chemin Cambria.", en: "A hot-and-cold pizza vending machine at the municipal park, Cambria Road." } }
];

let currentLang = "fr";
let lightboxIndex = 0;

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = translations[currentLang][key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === currentLang);
  });
  renderGallery();
  renderAmenities();
  renderExplore();
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";
  galleryPhotos.forEach((p, i) => {
    const btn = document.createElement("button");
    if (p.size) btn.className = p.size;
    btn.setAttribute("aria-label", p[currentLang]);
    btn.dataset.index = i;
    btn.innerHTML = `<img src="images/thumb/${p.file}.jpg" loading="lazy" alt="${p[currentLang]}">`;
    btn.addEventListener("click", () => openLightbox(i));
    grid.appendChild(btn);
  });
}

function renderAmenities() {
  const grid = document.getElementById("amenitiesGrid");
  grid.innerHTML = "";
  amenities.forEach(a => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `${iconCheck}<span>${a[currentLang]}</span>`;
    grid.appendChild(div);
  });
}

function renderExplore() {
  const grid = document.getElementById("exploreGrid");
  grid.innerHTML = "";
  explore.forEach(e => {
    const div = document.createElement("div");
    div.className = "explore-card";
    div.innerHTML = `<span class="tag">${e.tag[currentLang]}</span><h4>${e.t[currentLang]}</h4><p>${e.d[currentLang]}</p>`;
    grid.appendChild(div);
  });
}

function openLightbox(i) {
  lightboxIndex = i;
  updateLightbox();
  document.getElementById("lightbox").classList.add("open");
}

function updateLightbox() {
  const p = galleryPhotos[lightboxIndex];
  document.getElementById("lightboxImg").src = `images/${p.file}.jpg`;
  document.getElementById("lightboxImg").alt = p[currentLang];
  document.getElementById("lightboxCaption").textContent = `${p[currentLang]} — ${lightboxIndex + 1}/${galleryPhotos.length}`;
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("bookBtn").href = AIRBNB_URL;

  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.getAttribute("data-lang-btn");
      applyTranslations();
    });
  });

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.getElementById("lightboxPrev").addEventListener("click", () => {
    lightboxIndex = (lightboxIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
    updateLightbox();
  });
  document.getElementById("lightboxNext").addEventListener("click", () => {
    lightboxIndex = (lightboxIndex + 1) % galleryPhotos.length;
    updateLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("lightbox").classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") document.getElementById("lightboxNext").click();
    if (e.key === "ArrowLeft") document.getElementById("lightboxPrev").click();
  });

  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  });

  applyTranslations();
});
