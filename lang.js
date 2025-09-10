// Simple language toggle for Arabic/English

const translations = {
  ar: {
    dir: "rtl",
    font: "'Cairo', Arial, sans-serif",
    siteTitle: "جمعية ربوع الفرات",
    nav: {
      services: "الخدمات",
      programs: "البرامج والمشاريع",
      participate: "شارك معنا"
    },
    cards: {
      services: {
        title: "خدمات الجمعية",
        desc: "الدعم الإغاثي، التمكين الاقتصادي، الدعم النفسي"
      },
      programs: {
        title: "برامج الجمعية",
        desc: "الأسر المنتجة، التعليم المجتمعي، التوعية الصحية"
      },
      participate: {
        title: "شارك معنا",
        desc: "التطوع، التبرع، تقديم المبادرات"
      }
    },
    footer: "© 2025 جمعية ربوع الفرات. جميع الحقوق محفوظة.",
    langBtn: "EN",
    navLabel: "القائمة الرئيسية"
  },
  en: {
    dir: "ltr",
    font: "'Roboto', Arial, sans-serif",
    siteTitle: "Rubou Al-Furat Association",
    nav: {
      services: "Services",
      programs: "Programs & Projects",
      participate: "Get Involved"
    },
    cards: {
      services: {
        title: "Our Services",
        desc: "Relief support, Economic empowerment, Psychological support"
      },
      programs: {
        title: "Our Programs",
        desc: "Productive families, Community education, Health awareness"
      },
      participate: {
        title: "Get Involved",
        desc: "Volunteering, Donations, Initiatives"
      }
    },
    footer: "© 2025 Rubou Al-Furat Association. All rights reserved.",
    langBtn: "عربي",
    navLabel: "Main Menu"
  }
};

let currentLang = "ar";

function setLanguage(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  document.body.style.fontFamily = t.font;

  document.getElementById("site-title").textContent = t.siteTitle;
  document.getElementById("nav-services").textContent = t.nav.services;
  document.getElementById("nav-programs").textContent = t.nav.programs;
  document.getElementById("nav-participate").textContent = t.nav.participate;

  document.getElementById("card-services-title").textContent = t.cards.services.title;
  document.getElementById("card-services-desc").textContent = t.cards.services.desc;
  document.getElementById("card-programs-title").textContent = t.cards.programs.title;
  document.getElementById("card-programs-desc").textContent = t.cards.programs.desc;
  document.getElementById("card-participate-title").textContent = t.cards.participate.title;
  document.getElementById("card-participate-desc").textContent = t.cards.participate.desc;

  document.getElementById("footer-text").textContent = t.footer;

  document.getElementById("lang-toggle").textContent = t.langBtn;
  document.getElementById("main-nav").setAttribute("aria-label", t.navLabel);
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  setLanguage(currentLang);
});

// Optional: detect browser language on first load
window.addEventListener("DOMContentLoaded", () => {
  const browserLang = navigator.language.startsWith("en") ? "en" : "ar";
  currentLang = browserLang;
  setLanguage(currentLang);
});
