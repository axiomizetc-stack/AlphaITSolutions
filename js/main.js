const translations = {
  en: {
    "meta.title": "Alpha IT Solutions | Websites, maintenance, and QA",
    "meta.description":
      "Alpha IT Solutions, the business of Izet Čopelj. Websites, maintenance, and QA. axiomizetc@gmail.com · 061 834 552.",
    skip: "Skip to content",
    "nav.menu": "Menu",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.work": "Work",
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
    "about.kicker": "The team",
    "about.title": "Izet Čopelj leads the work.",
    "about.text":
      "He has been in IT since 2015, as a software engineer and as a QA engineer. That mix of building and testing is the whole shop. You talk to him, not a desk in between.",
    "about.offer":
      "We offer QA automation, new websites, mobile-ready pages, maintenance, and other IT ideas when a job does not fit a neat box.",
    "work.kicker": "Selected work",
    "work.title": "Sites we built in Mostar.",
    "work.gurman": "Catering and lunch box site. Live now.",
    "work.gurmanLink": "Open Gurman Mostar",
    "work.canadiana": "Website for the Canadiana restaurant in Mostar.",
    "contact.kicker": "Contact",
    "contact.title": "Write on WhatsApp.",
    "contact.text": "The form opens WhatsApp with your message already written. You can also write or call.",
    "contact.person": "Person",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "form.name": "Name",
    "form.phone": "Phone",
    "form.type": "Service",
    "form.message": "Message",
    "form.submit": "Send on WhatsApp",
    "form.namePh": "Your name",
    "form.phonePh": "06x xxx xxx",
    "form.messagePh": "What do you need?",
    "form.typeWebsite": "Website",
    "form.typeMaintenance": "Maintenance",
    "form.typeQa": "QA",
    "form.typeOther": "Something else",
    "form.needName": "Please enter your name.",
    "form.needPhone": "Please enter a phone number.",
    "form.opening": "Opening WhatsApp with your message.",
    "form.hello": "Hello Izet, I would like to talk about a project.",
    "form.labels": {
      name: "Name",
      phone: "Phone",
      type: "Service",
      message: "Message",
    },
    "float.aria": "Message on WhatsApp",
  },
  bs: {
    "meta.title": "Alpha IT Solutions | Web stranice, održavanje i QA",
    "meta.description":
      "Alpha IT Solutions, obrt Izeta Čopelja. Web stranice, održavanje i QA. axiomizetc@gmail.com · 061 834 552.",
    skip: "Preskoči na sadržaj",
    "nav.menu": "Meni",
    "nav.about": "O nama",
    "nav.services": "Usluge",
    "nav.work": "Radovi",
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
    "about.kicker": "Tim",
    "about.title": "Posao vodi Izet Čopelj.",
    "about.text":
      "U IT-u je od 2015. godine, i kao software engineer i kao QA engineer. Ta mješavina pisanja i testiranja je cijela radnja. Razgovarate s njim, ne preko šaltera.",
    "about.offer":
      "Nudimo QA automatizaciju, nove web stranice, stranice spremne za telefon, održavanje i druge IT ideje kad posao ne stane u jednu kutiju.",
    "work.kicker": "Odabrani radovi",
    "work.title": "Stranice koje smo napravili u Mostaru.",
    "work.gurman": "Stranica za catering i lunch box. Već je online.",
    "work.gurmanLink": "Otvori Gurman Mostar",
    "work.canadiana": "Web stranica za restoran Canadiana u Mostaru.",
    "contact.kicker": "Kontakt",
    "contact.title": "Pišite na WhatsApp.",
    "contact.text": "Obrazac otvara WhatsApp s već napisanom porukom. Možete i odmah pisati ili nazvati.",
    "contact.person": "Osoba",
    "contact.email": "E-pošta",
    "contact.phone": "Telefon",
    "form.name": "Ime",
    "form.phone": "Telefon",
    "form.type": "Usluga",
    "form.message": "Poruka",
    "form.submit": "Pošalji na WhatsApp",
    "form.namePh": "Vaše ime",
    "form.phonePh": "06x xxx xxx",
    "form.messagePh": "Šta vam treba?",
    "form.typeWebsite": "Web stranica",
    "form.typeMaintenance": "Održavanje",
    "form.typeQa": "QA",
    "form.typeOther": "Nešto drugo",
    "form.needName": "Upišite ime.",
    "form.needPhone": "Upišite broj telefona.",
    "form.opening": "Otvaramo WhatsApp s vašom porukom.",
    "form.hello": "Pozdrav Izet, javljam se za projekat.",
    "form.labels": {
      name: "Ime",
      phone: "Telefon",
      type: "Usluga",
      message: "Poruka",
    },
    "float.aria": "Pišite na WhatsApp",
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

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const value = pack[node.dataset.i18nPlaceholder];
    if (typeof value === "string") node.placeholder = value;
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

const form = document.querySelector("#order-form");
const statusEl = document.querySelector("#form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const lang = document.documentElement.lang === "bs" ? "bs" : "en";
  const pack = translations[lang];
  const data = Object.fromEntries(new FormData(form));
  statusEl.classList.remove("is-error");

  if (!data.name.trim()) {
    statusEl.textContent = pack["form.needName"];
    statusEl.classList.add("is-error");
    return;
  }
  if (!data.phone.trim()) {
    statusEl.textContent = pack["form.needPhone"];
    statusEl.classList.add("is-error");
    return;
  }

  const typeLabel = form.querySelector(`[name="type"] option[value="${data.type}"]`)?.textContent || data.type;
  const labels = pack["form.labels"];
  const lines = [
    pack["form.hello"],
    `${labels.name}: ${data.name.trim()}`,
    `${labels.phone}: ${data.phone.trim()}`,
    `${labels.type}: ${typeLabel}`,
    data.message.trim() ? `${labels.message}: ${data.message.trim()}` : "",
  ].filter(Boolean);

  statusEl.textContent = pack["form.opening"];
  window.open(`https://wa.me/38761834552?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
});
