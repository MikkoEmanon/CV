let currentLang = 'en';
let translations = {};
let currentTranslations = {};

const sections = {
  about: document.getElementById("about"),
  academics: document.getElementById("academics"),
  studies: document.getElementById("studies"),
  work: document.getElementById("work"),
  skills: document.getElementById("skills"),
  contact: document.getElementById("contact"),
};

function showSection(sectionId) {
  if (!sections[sectionId]) sectionId = "about";
  Object.values(sections).forEach((s) => s.classList.add("hidden"));
  sections[sectionId].classList.remove("hidden");
  history.pushState(null, "", `#${sectionId}`);
  document
    .querySelectorAll(".nav-link")
    .forEach((l) => l.classList.remove("active"));
  const link = document.querySelector(`[href="#${sectionId}"]`);
  if (link) link.classList.add("active");
}

document
  .querySelectorAll(".nav-link:not(.dropdown-toggle), .dropdown-item")
  .forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.getAttribute("href").substring(1);
      showSection(target);
    });
  });

const cvToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

cvToggle.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  document.querySelector(".dropdown").classList.toggle("open");
});

document.addEventListener("click", () => {
  document.querySelector(".dropdown").classList.remove("open");
});

const langToggle = document.getElementById("lang-toggle");
const langDropdown = document.getElementById("lang-dropdown");

langToggle.innerHTML = "🌐";

langToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  langDropdown.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
    langDropdown.classList.add("hidden");
  }
  if (!cvToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
    document.querySelector(".dropdown").classList.remove("open");
  }
});

async function loadTranslations() {
  try {
    const response = await fetch('translations.json');
    if (!response.ok) throw new Error('Failed to load translations');
    translations = await response.json();
  } catch (error) {
    console.error('Translation load error:', error);
    translations = { en: {} };
  }
}

function updateContent() {
  currentTranslations = translations[currentLang] || translations['en'];

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (currentTranslations[key] !== undefined) {
      el.innerHTML = currentTranslations[key];
    }
  });
  document.title = "Mikko CV";
}

document.querySelectorAll(".lang-option").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = btn.getAttribute("data-lang");
    localStorage.setItem("preferredLang", currentLang);
    updateContent();
    langDropdown.classList.add("hidden");
  });
});

window.addEventListener("load", async () => {
  langToggle.innerHTML = "🌐";

  await loadTranslations();

  const saved = localStorage.getItem("preferredLang");
  if (saved && translations[saved]) {
    currentLang = saved;
  } else if (translations[navigator.language.slice(0, 2)]) {
    currentLang = navigator.language.slice(0, 2);
  } else {
    currentLang = 'en';
  }

  const hash = window.location.hash.substring(1);
  showSection(hash || "about");
  updateContent();

  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
});

window.addEventListener("popstate", () => {
  const hash = window.location.hash.substring(1);
  showSection(hash || "about");
});
