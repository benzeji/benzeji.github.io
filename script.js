const STEAM_URL = "https://store.steampowered.com/app/3921280/Healthy_Hero__Tower_Defense/";
const STEAM_DEVELOPER_URL = "https://store.steampowered.com/developer/YakutskGames";
const STRAPI_BASE_URL = "https://passionate-nest-1a1217cae5.strapiapp.com";
const STORAGE_KEY = "yakutsk-games-cookie-consent";

const translations = {
  en: {
    nav: { home: "Home", games: "Our Games", news: "News", about: "About" },
    hero: { tagline: "DEFEAT JUNK FOOD!", wishlist: "Add to your wishlist" },
    games: {
      title: "Our Games",
      subtitle: "Here's some of our latest and most precious games.",
      comingSoon: "Coming Soon",
      viewAll: "View all",
    },
    news: {
      title: "LATEST NEWS",
      subtitle: "All the latest news direct from the source... us!",
      indexTitle: "News",
      indexSubtitle: "Updates, announcements, and devlogs from our studio.",
      viewAll: "All posts",
      readMore: "Read More",
      backToNews: "← Back to News",
      update: "Update",
      empty: "News will appear here soon.",
    },
    about: {
      title: "So who are we?",
      description1: "Yakutsk Games is an indie game developer. We develop games thoughtfully, allowing us to preserve the creative vision behind our projects without making unnecessary compromises.",
      description2: "We aim to create engaging, high-quality games that can capture players' interest, stand out through their atmosphere, and deliver a memorable gameplay experience. Our goal is to grow as creators and build projects we truly believe in.",
      gameDesigner: "Game Designer",
      joinUs: "Want to join us?",
      joinUsDescription: "We're always looking out for new talent to join our expanding team.",
      careers: "Careers",
    },
    footer: {
      copyright: "© Yakutsk Games {year} all rights reserved",
      youtube: "YouTube",
      twitter: "Twitter",
      discord: "Discord",
      steam: "Steam",
      email: "Email",
      careers: "Careers",
      contact: "Contact",
      privacyPolicy: "Privacy Policy",
    },
    cookies: {
      title: "We use cookies",
      description: "Cookies help the website work correctly and improve the user experience. You can accept or decline optional cookies.",
      decline: "Decline",
      accept: "Accept",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Have a question, partnership idea, or press inquiry? We'd love to hear from you.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      subject: "Subject",
      subjectPlaceholder: "What is this about?",
      message: "Message",
      messagePlaceholder: "Tell us more...",
      send: "Send Message",
      sending: "Sending...",
      thanks: "Thanks!",
      thanksMessage: "Your message has been sent. We'll get back to you soon.",
      close: "Close",
      orEmail: "Or reach us directly at",
    },
    careers: {
      title: "Careers",
      subtitle: "Interested in working with Yakutsk Games? Send a short intro and links to your work. If there's a match, we'll reach out.",
      contactForm: "Contact form",
      whatToInclude: "What to include",
      role: "Role you're aiming for (art / design / engineering / production).",
      links: "Links to portfolio, GitHub, Steam projects, or playable builds.",
      timezone: "Your timezone and availability.",
    },
    press: {
      title: "Press Kit",
      subtitle: "Need studio info, logos, screenshots, or trailers? Reach out and we'll send the latest press materials.",
      request: "Request press materials",
      emailUs: "Email us",
      mediaInquiries: "Media / inquiries",
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "How Yakutsk Games handles information on this website.",
      updated: "Last updated: May 31, 2026",
      contact: "For privacy questions, contact us at",
      sections: [
        ["Information we collect", ["We do not use advertising trackers or analytics tools on this website.", "If you contact us through the contact form, we receive the information you choose to submit, such as your name, email address, subject, and message.", "If you email us directly, we receive your email address and the content of your message."]],
        ["How we use information", ["We use submitted information only to reply to your message, handle press or partnership requests, and review career inquiries.", "We do not sell personal information."]],
        ["Cookies and local storage", ["The website may save your cookie banner choice in your browser's local storage so the banner does not appear every time you visit.", "This preference is stored on your device and is used only for the website interface."]],
        ["Third-party services", ["The contact form is processed through Formspree, which may handle the information you submit so it can be delivered to us.", "Links to external platforms such as Steam, YouTube, X, Facebook, and Discord open third-party websites. Their own privacy policies apply when you use those services."]],
        ["Your choices", ["You can choose not to submit the contact form and contact us by email instead.", "You can clear this website's local storage in your browser settings to reset the cookie banner choice.", "You can ask us to delete messages or personal information you previously sent to us, unless we need to keep it for legitimate business or legal reasons."]],
      ],
    },
  },
  ru: {
    nav: { home: "Главная", games: "Наши игры", news: "Новости", about: "О нас" },
    hero: { tagline: "ПОБЕДИ ФАСТФУД!", wishlist: "Добавить в список желаемого" },
    games: {
      title: "Наши игры",
      subtitle: "Вот некоторые из наших последних и самых ценных игр.",
      comingSoon: "Скоро",
      viewAll: "Смотреть все",
    },
    news: {
      title: "ПОСЛЕДНИЕ НОВОСТИ",
      subtitle: "Все последние новости напрямую от источника... от нас!",
      indexTitle: "Новости",
      indexSubtitle: "Обновления, анонсы и дневники разработки от нашей студии.",
      viewAll: "Все посты",
      readMore: "Читать далее",
      backToNews: "← Назад к новостям",
      update: "Обновление",
      empty: "Новости скоро появятся здесь.",
    },
    about: {
      title: "Кто мы такие?",
      description1: "Yakutsk Games — инди-разработчик игр. Мы разрабатываем игры вдумчиво, что позволяет нам сохранять творческое видение наших проектов без лишних компромиссов.",
      description2: "Мы стремимся создавать увлекательные, качественные игры, которые могут заинтересовать игроков, выделиться своей атмосферой и подарить запоминающийся игровой опыт. Наша цель — расти как создатели и строить проекты, в которые мы действительно верим.",
      gameDesigner: "Геймдизайнер",
      joinUs: "Хотите присоединиться?",
      joinUsDescription: "Мы всегда ищем новые таланты для присоединения к нашей растущей команде.",
      careers: "Карьера",
    },
    footer: {
      copyright: "© Yakutsk Games {year} все права защищены",
      youtube: "YouTube",
      twitter: "Twitter",
      discord: "Discord",
      steam: "Steam",
      email: "Email",
      careers: "Карьера",
      contact: "Контакты",
      privacyPolicy: "Политика конфиденциальности",
    },
    cookies: {
      title: "Мы используем cookies",
      description: "Cookies помогают сайту работать корректно и улучшают пользовательский опыт. Вы можете принять или отклонить необязательные cookies.",
      decline: "Отклонить",
      accept: "Принять",
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle: "Есть вопрос, идея сотрудничества или запрос от прессы? Мы будем рады услышать вас.",
      name: "Имя",
      namePlaceholder: "Ваше имя",
      email: "Электронная почта",
      emailPlaceholder: "you@example.com",
      subject: "Тема",
      subjectPlaceholder: "О чем это?",
      message: "Сообщение",
      messagePlaceholder: "Расскажите подробнее...",
      send: "Отправить сообщение",
      sending: "Отправка...",
      thanks: "Спасибо!",
      thanksMessage: "Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.",
      close: "Закрыть",
      orEmail: "Или напишите нам напрямую",
    },
    careers: {
      title: "Карьера",
      subtitle: "Хотите работать в Yakutsk Games? Отправьте короткое представление и ссылки на ваши работы. Если мы подойдем друг другу, мы свяжемся с вами.",
      contactForm: "Форма связи",
      whatToInclude: "Что указать",
      role: "Желаемая роль (арт / дизайн / разработка / продюсирование).",
      links: "Ссылки на портфолио, GitHub, проекты в Steam или играбельные сборки.",
      timezone: "Ваш часовой пояс и доступность.",
    },
    press: {
      title: "Пресс-кит",
      subtitle: "Нужна информация о студии, логотипы, скриншоты или трейлеры? Свяжитесь с нами, и мы отправим актуальные материалы.",
      request: "Запросить материалы",
      emailUs: "Написать нам",
      mediaInquiries: "СМИ / запросы",
    },
    privacy: {
      title: "Политика конфиденциальности",
      subtitle: "Как Yakutsk Games обрабатывает информацию на этом сайте.",
      updated: "Обновлено: 31 мая 2026",
      contact: "По вопросам конфиденциальности напишите нам на",
      sections: [
        ["Какие данные мы собираем", ["Мы не используем рекламные трекеры или инструменты аналитики на этом сайте.", "Если вы пишете нам через контактную форму, мы получаем данные, которые вы сами отправляете: имя, адрес электронной почты, тему и текст сообщения.", "Если вы пишете нам напрямую по email, мы получаем ваш адрес электронной почты и содержание письма."]],
        ["Как мы используем данные", ["Мы используем отправленную информацию только для ответа на сообщение, обработки запросов от прессы или партнеров и рассмотрения карьерных обращений.", "Мы не продаем персональные данные."]],
        ["Cookies и localStorage", ["Сайт может сохранить ваш выбор в cookie-плашке в localStorage браузера, чтобы не показывать плашку при каждом посещении.", "Этот выбор хранится на вашем устройстве и используется только для интерфейса сайта."]],
        ["Сторонние сервисы", ["Контактная форма обрабатывается через Formspree. Этот сервис может обрабатывать отправленные вами данные, чтобы доставить сообщение нам.", "Ссылки на Steam, YouTube, X, Facebook и Discord открывают сторонние сайты. При использовании этих сервисов действуют их собственные политики конфиденциальности."]],
        ["Ваш выбор", ["Вы можете не отправлять контактную форму и написать нам напрямую по email.", "Вы можете очистить localStorage этого сайта в настройках браузера, чтобы сбросить выбор в cookie-плашке.", "Вы можете попросить нас удалить сообщения или персональные данные, которые вы отправляли ранее, если их хранение не требуется по деловым или юридическим причинам."]],
      ],
    },
  },
};

function getLocale() {
  if (location.hostname === "yakutskgames.ru" || location.hostname.endsWith(".yakutskgames.ru")) {
    return "ru";
  }

  if (location.hostname === "yakutskgames.com" || location.hostname.endsWith(".yakutskgames.com")) {
    return "en";
  }

  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang");
  if (requested === "ru" || requested === "en") return requested;
  return localStorage.getItem("yakutsk-games-locale") || "en";
}

function isProductionDomain() {
  return (
    location.hostname === "yakutskgames.ru" ||
    location.hostname.endsWith(".yakutskgames.ru") ||
    location.hostname === "yakutskgames.com" ||
    location.hostname.endsWith(".yakutskgames.com")
  );
}

function withLang(path) {
  const locale = getLocale();
  if (isProductionDomain()) return path;
  return locale === "en" ? path : `${path}${path.includes("?") ? "&" : "?"}lang=ru`;
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((el) => {
    el.textContent = value;
  });
}

function setAttr(selector, attr, value) {
  document.querySelectorAll(selector).forEach((el) => {
    el.setAttribute(attr, value);
  });
}

function initLocale() {
  const locale = getLocale();
  localStorage.setItem("yakutsk-games-locale", locale);
  document.documentElement.lang = locale;
  document.body.dataset.locale = locale;
  const t = translations[locale];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = getValue(t, el.dataset.i18n);
    if (typeof value === "string") el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = getValue(t, el.dataset.i18nPlaceholder);
    if (typeof value === "string") el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-about-description1]").forEach((el) => {
    const description = t.about.description1;
    const brand = "Yakutsk Games";
    const index = description.indexOf(brand);
    el.innerHTML = index >= 0
      ? `${escapeHtml(description.slice(0, index))}<strong>${brand}</strong>${escapeHtml(description.slice(index + brand.length))}`
      : escapeHtml(description);
  });

  setText("[data-year-copy]", t.footer.copyright.replace("{year}", new Date().getFullYear()));
  setAttr(".lang-switch img", "src", locale === "ru" ? "/flags/gb.svg" : "/flags/ru.svg");
  setText(".lang-switch span", locale === "ru" ? "en" : "ru");
  const targetLocale = locale === "ru" ? "en" : "ru";
  const targetOrigin = targetLocale === "ru" ? "https://yakutskgames.ru" : "https://yakutskgames.com";

  if (isProductionDomain()) {
    setAttr(".lang-switch", "href", `${targetOrigin}${location.pathname}${location.hash}`);
  } else {
    const langUrl = new URL(window.location.href);
    if (targetLocale === "en") {
      langUrl.searchParams.delete("lang");
    } else {
      langUrl.searchParams.set("lang", "ru");
    }
    setAttr(".lang-switch", "href", langUrl.pathname + langUrl.search + langUrl.hash);
  }
  setAttr(".lang-switch", "title", targetLocale === "ru" ? "Русская версия" : "English version");

  document.querySelectorAll("[data-local-link]").forEach((el) => {
    el.setAttribute("href", withLang(el.getAttribute("data-local-link")));
  });
}

function getValue(obj, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(document.body.classList.contains("menu-open")));
  });
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initCookies() {
  ensureCookieBanner();
  const banner = document.querySelector(".cookie-banner");
  if (!banner || localStorage.getItem(STORAGE_KEY)) return;
  banner.classList.add("visible");
  banner.querySelectorAll("[data-cookie-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEY, button.dataset.cookieChoice);
      banner.classList.remove("visible");
    });
  });
}

function initSocialIcons() {
  const locale = getLocale();
  const footer = translations[locale].footer;
  const icons = {
    youtube: { src: "/assets/social/youtube.svg", label: footer.youtube },
    twitter: { src: "/assets/social/x.svg", label: footer.twitter },
    facebook: { src: "/assets/social/facebook.svg", label: "Facebook" },
    discord: { src: "/assets/social/discord.svg", label: footer.discord },
    steam: { src: "/assets/social/steam.svg", label: footer.steam },
    email: { src: "/assets/social/email.svg", label: footer.email },
  };

  Object.entries(icons).forEach(([className, icon]) => {
    document.querySelectorAll(`.social.${className}`).forEach((link) => {
      link.setAttribute("aria-label", icon.label);
      link.innerHTML = `<img src="${icon.src}" alt=""><span class="tooltip">${icon.label}</span>`;
    });
  });
}

function ensureCookieBanner() {
  if (document.querySelector(".cookie-banner")) return;
  document.body.insertAdjacentHTML("beforeend", `
    <section class="cookie-banner" aria-label="Cookie notice">
      <div class="cookie-inner">
        <div class="cookie-copy">
          <h2 data-i18n="cookies.title">${translations.en.cookies.title}</h2>
          <p data-i18n="cookies.description">${translations.en.cookies.description}</p>
        </div>
        <div class="cookie-actions">
          <button class="cookie-btn" type="button" data-cookie-choice="declined" data-i18n="cookies.decline">${translations.en.cookies.decline}</button>
          <button class="cookie-btn accept" type="button" data-cookie-choice="accepted" data-i18n="cookies.accept">${translations.en.cookies.accept}</button>
        </div>
      </div>
    </section>
  `);
  initLocale();
}

function initContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;
  const modal = document.querySelector(".modal");
  const submit = form.querySelector("button[type='submit']");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const locale = getLocale();
    submit.textContent = translations[locale].contact.sending;
    submit.disabled = true;
    try {
      const response = await fetch("https://formspree.io/f/meedgrzj", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      modal?.classList.add("visible");
    } catch (error) {
      window.location.href = "mailto:contact@yakutskgames.com";
    } finally {
      submit.textContent = translations[locale].contact.send;
      submit.disabled = false;
    }
  });
  modal?.querySelector("button")?.addEventListener("click", () => modal.classList.remove("visible"));
}

function categoryLabel(raw, locale) {
  if (!raw) return "";
  const normalized = raw.trim().toLowerCase();
  const ruLabels = {
    announcement: "Анонс",
    announcements: "Анонсы",
    devlog: "Дневник разработки",
    news: "Новости",
    update: "Обновление",
    updates: "Обновления",
  };
  if (locale === "ru" && ruLabels[normalized]) return ruLabels[normalized];
  return raw.split(/[\s-_]+/g).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function formatDate(iso, locale) {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString(locale === "ru" ? "ru-RU" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function mediaUrl(media, size = "medium") {
  const url = media?.formats?.[size]?.url || media?.formats?.medium?.url || media?.formats?.small?.url || media?.formats?.thumbnail?.url || media?.url;
  if (!url) return "/assets/hero-poster.png";
  if (url.startsWith("/")) return url;
  return url.startsWith("http") ? url : `${STRAPI_BASE_URL}${url}`;
}

async function getArticles(locale) {
  const localArticles = window.YAKUTSK_NEWS?.[locale];
  if (Array.isArray(localArticles) && localArticles.length) {
    return localArticles;
  }

  const query = "populate[cover]=true&populate[blocks][populate]=*";
  try {
    const response = await fetch(`${STRAPI_BASE_URL}/api/articles?${query}&locale=${locale}`);
    if (!response.ok) return [];
    const json = await response.json();
    return Array.isArray(json.data) ? json.data : [];
  } catch {
    return [];
  }
}

function articleCard(article, locale) {
  const t = translations[locale].news;
  return `
    <a href="${withLang(`/news/post.html?slug=${encodeURIComponent(article.slug)}`)}" class="news-card">
      <div class="news-card-image">
        <img src="${mediaUrl(article.cover, "medium")}" alt="${article.cover?.alternativeText || ""}" loading="lazy">
        <div class="news-labels">
          <span class="news-label kind">${categoryLabel(article.category, locale) || t.update}</span>
          <span class="news-label date">${formatDate(article.publishedAt, locale)}</span>
        </div>
      </div>
      <div class="news-card-body">
        <h3>${escapeHtml(article.title)}</h3>
        <p>${escapeHtml(article.description || "")}</p>
        <div class="news-card-action"><span class="button">${t.readMore}</span></div>
      </div>
    </a>`;
}

async function renderNewsList(limit) {
  const grid = document.querySelector("[data-news-grid]");
  if (!grid) return;
  const locale = getLocale();
  const articles = (await getArticles(locale))
    .sort((a, b) => String(b.publishedAt || "").localeCompare(String(a.publishedAt || "")))
    .slice(0, limit || undefined);
  grid.innerHTML = articles.length
    ? articles.map((article) => articleCard(article, locale)).join("")
    : `<div class="empty-news">${translations[locale].news.empty}</div>`;
}

function blockToHtml(block) {
  const body = typeof block.body === "string" ? block.body : block.text || "";
  if (!body) return "";
  return body
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${inlineMarkdown(escapeHtml(paragraph.trim()))}</p>`)
    .join("");
}

function inlineMarkdown(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a class="text-link" href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
}

async function renderNewsPost() {
  const shell = document.querySelector("[data-post]");
  if (!shell) return;
  const locale = getLocale();
  const slug = new URLSearchParams(window.location.search).get("slug");
  if (!slug) {
    window.location.href = withLang("/news/");
    return;
  }
  const articles = await getArticles(locale);
  const article = articles.find((item) => item.slug === slug);
  if (!article) {
    shell.innerHTML = `<div class="empty-news">${translations[locale].news.empty}</div>`;
    return;
  }
  shell.innerHTML = `
    <a class="back-link" href="${withLang("/news/")}">${translations[locale].news.backToNews}</a>
    <div class="post-hero">
      <div class="post-media">
        <img src="${mediaUrl(article.cover, "large")}" alt="${article.cover?.alternativeText || ""}">
        <div class="news-labels">
          <span class="news-label kind">${categoryLabel(article.category, locale) || translations[locale].news.update}</span>
          <span class="news-label date">${formatDate(article.publishedAt, locale)}</span>
        </div>
        <div class="post-title-block">
          <h1>${escapeHtml(article.title)}</h1>
          ${article.description ? `<p>${escapeHtml(article.description)}</p>` : ""}
        </div>
      </div>
    </div>
    <div class="post-body">${(article.blocks || []).map(blockToHtml).join("") || `<p>${escapeHtml(article.description || "")}</p>`}</div>`;
}

function renderPrivacy() {
  const root = document.querySelector("[data-privacy]");
  if (!root) return;
  const locale = getLocale();
  const data = translations[locale].privacy;
  root.innerHTML = data.sections.map(([title, paragraphs]) => `
    <section>
      <h2>${title}</h2>
      <div>${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>
    </section>
  `).join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

document.addEventListener("DOMContentLoaded", () => {
  initLocale();
  initSocialIcons();
  initMenu();
  initCookies();
  initContactForm();
  renderNewsList(document.body.dataset.newsLimit ? Number(document.body.dataset.newsLimit) : undefined);
  renderNewsPost();
  renderPrivacy();
});
