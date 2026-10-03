const translations = {
  en: {
    "meta.title": "Alpha IT Solutions | Websites, maintenance, and QA",
    "meta.description":
      "Alpha IT Solutions, the business of Izet Čopelj. Websites, maintenance, and QA. axiomizetc@gmail.com · 061 834 552.",
    skip: "Skip to content",
    "nav.menu": "Menu",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.eyebrow": "Sole proprietorship · Izet Čopelj",
    "hero.title": "Websites, maintenance, and QA.",
    "hero.lead":
      "Alpha IT Solutions builds sites, keeps them tidy after launch, and checks that they work before anyone else sees them. You talk to me directly.",
    "hero.primary": "Get in touch",
    "services.1.title": "Websites",
    "services.1.text": "A new site from the brief to launch. Simple, clear, and tidy on a phone.",
    "services.2.title": "Maintenance",
    "services.2.text": "Changes, fixes, and care so the site stays online after the work is done.",
    "services.3.text": "I test flows, forms, and layout. Bugs are reported clearly, before they reach users.",
    note: "You say what you need. I say what I can do, how long it takes, and when it is finished. No middleman.",
    "contact.kicker": "Contact",
    "contact.title": "Write or call.",
    "contact.person": "Person",
    "contact.email": "Email",
    "contact.phone": "Phone",
  },
  bs: {
    "meta.title": "Alpha IT Solutions | Web stranice, održavanje i QA",
    "meta.description":
      "Alpha IT Solutions, obrt Izeta Čopelja. Web stranice, održavanje i QA. axiomizetc@gmail.com · 061 834 552.",
    skip: "Preskoči na sadržaj",
    "nav.menu": "Meni",
    "nav.services": "Usluge",
    "nav.contact": "Kontakt",
    "hero.eyebrow": "Obrt · Izet Čopelj",
    "hero.title": "Web stranice, održavanje i QA.",
    "hero.lead":
      "Alpha IT Solutions pravi stranice, drži ih urednim nakon objave i provjerava da rade prije nego što ih neko vidi. Razgovarate direktno sa mnom.",
    "hero.primary": "Javite se",
    "services.1.title": "Web stranice",
    "services.1.text": "Nova stranica od dogovora do objave. Jednostavna, jasna i uredna na telefonu.",
    "services.2.title": "Održavanje",
    "services.2.text": "Izmjene, popravke i briga da stranica ostane online kad je posao već gotov.",
    "services.3.text": "Testiram tokove, forme i prikaz. Greške prijavim jasno, prije nego što odu korisnicima.",
    note: "Kažete šta treba. Ja kažem šta mogu, koliko traje i kad je gotovo. Bez posrednika.",
    "contact.kicker": "Kontakt",
    "contact.title": "Pišite ili nazovite.",
    "contact.person": "Osoba",
    "contact.email": "E-pošta",
    "contact.phone": "Telefon",
  },
};

const nav = document.querySelector("#nav");
const toggle = document.querySelector(".menu-toggle");

function applyLanguage(lang) {
  const pack = translations[lang] || translations.en;
  document.documentElement.lang = lang === "bs" ? "bs" : "en";
  document.title = pack["meta.title"];
  document.querySelector('meta[name="description"]').setAttribute("content", pack["meta.description"]);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = pack[node.dataset.i18n];
    if (typeof value === "string") node.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const value = pack[node.dataset.i18nAria];
    if (typeof value === "string") node.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === (lang === "bs" ? "bs" : "en")));
  });

  try {
    localStorage.setItem("alpha-lang", lang === "bs" ? "bs" : "en");
  } catch {
    /* private browsing */
  }
}

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

let saved = "en";
try {
  saved = localStorage.getItem("alpha-lang") === "bs" ? "bs" : "en";
} catch {
  saved = "en";
}
applyLanguage(saved);
