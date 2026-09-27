const STEAM_URL = "https://store.steampowered.com/app/3921280/Project_Zarya/";
const STEAM_DEVELOPER_URL = "https://store.steampowered.com/developer/benzejiGames";
const STRAPI_BASE_URL = "https://passionate-nest-1a1217cae5.strapiapp.com";
const CONTACT_EMAIL = "contact@benzejigames.xyz";
const STORAGE_KEY = "benzeji-games-cookie-consent";
const LOCALE_STORAGE_KEY = "benzeji-games-locale";

class BrandingManager {
  constructor(markPath) {
    this.markPath = markPath;
  }

  apply() {
    document.querySelectorAll('link[rel="icon"]').forEach((icon) => { icon.href = this.markPath; });
    document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
      const subject = new URL(link.href).search;
      link.href = `mailto:${CONTACT_EMAIL}${subject}`;
      if (link.textContent.trim().includes("@")) link.textContent = CONTACT_EMAIL;
    });
    const socialLinks = {
      youtube: "https://www.youtube.com/@BenzejiGames",
      twitter: "https://x.com/benzejiGames",
      telegram: "https://t.me/BenzejiGames",
      vk: "https://vk.ru/projectzarya_game",
      discord: "https://discord.gg/ThkzJvhSUg",
      steam: STEAM_DEVELOPER_URL,
    };
    Object.entries(socialLinks).forEach(([network, url]) => {
      document.querySelectorAll(`.social.${network}`).forEach((link) => {
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      });
    });
  }
}

const translations = {
  en: {
    nav: { home: "Home", games: "Games", news: "News", about: "About Me" },
    donate: {
      button: "Donate",
      title: "Donate",
      description: "Choose a convenient way to support Benzeji Games.",
      cloudtips: "Donate with a bank card",
      boosty: "Donate with Visa, Mastercard or MIR",
      crypto: "Cryptocurrency transfer",
      network: "Network",
      addressLabel: "USDT Address",
      copy: "Copy",
      copied: "Address copied",
      copyError: "Could not copy the address",
      close: "Close",
      kicker: "SUPPORT PROJECT ZARYA",
      fundraiserTitle: "Help Fund Full‑Time Development",
      fundraiserDescription: "Support helps me set aside more time to work on Project Zarya.",
      raised: "$70 raised",
      goal: "Goal: $24,000",
      progress: "0.3% funded",
    },
    hero: {
      description: "Open-world survival in post-apocalyptic Russia. Explore, gather resources, build, craft, and fight the infected alone or with friends.",
      wishlist: "Add to your wishlist",
    },
    games: {
      title: "Games",
      subtitle: "Games I'm working on.",
      comingSoon: "Coming Soon",
      viewAll: "View all",
    },
    news: {
      title: "LATEST NEWS",
      subtitle: "Notes and updates from Project Zarya's development.",
      indexTitle: "News",
      indexSubtitle: "Updates, announcements, and development notes.",
      viewAll: "All posts",
      readMore: "Read More",
      backToNews: "← Back to News",
      update: "Update",
      empty: "News will appear here soon.",
    },
    about: {
      title: "About the Developer",
      description1: "I'm developing Project Zarya on my own under the name Benzeji Games. I share progress here as the game takes shape.",
      gameDesigner: "Game Designer",
      joinUs: "Want to join me?",
      joinUsDescription: "If you'd like to help with Project Zarya, send me a message. This is voluntary, unpaid work.",
      careers: "Help with Project Zarya",
    },
    footer: {
      copyright: "© Benzeji Games {year} all rights reserved",
      youtube: "YouTube",
      twitter: "X",
      telegram: "Telegram",
      vk: "VK",
      tiktok: "TikTok",
      discord: "Discord",
      steam: "Steam",
      email: "Email",
      careers: "Help with Project Zarya",
      contact: "Contact",
      privacyPolicy: "Privacy Policy",
    },
    cookies: {
      title: "This site uses cookies",
      description: "Cookies help the website work correctly and improve the user experience. You can accept or decline optional cookies.",
      decline: "Decline",
      accept: "Accept",
    },
    contact: {
      title: "Contact Me",
      subtitle: "Questions about Project Zarya, press requests, or ideas for working together? Send me a message.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      subject: "Subject",
      subjectPlaceholder: "What is this about?",
      message: "Message",
      messagePlaceholder: "Your message...",
      send: "Send Message",
      sending: "Sending...",
      thanks: "Thanks!",
      thanksMessage: "Your message has been sent. I'll reply when I can.",
      close: "Close",
      orEmail: "Or email me directly at",
    },
    careers: {
      title: "Help with Project Zarya",
      subtitle: "I develop Project Zarya on my own and welcome people who want to contribute. This is voluntary, unpaid work.",
      invitation: "Tell me what you'd like to work on and show me something you've made. I'll get back to you if there's a way to work together.",
      contactForm: "Contact form",
      whatToInclude: "What to include",
      role: "What you'd like to help with.",
      links: "A link to your work, if you have one.",
      timezone: "How much time you can spend on the project.",
    },
    press: {
      title: "Press Kit",
      subtitle: "Need information or media for a story about Project Zarya? Write to me with what you're looking for.",
      request: "Request press materials",
      emailUs: "Email me",
      mediaInquiries: "Media / inquiries",
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "How Benzeji Games handles information on this website.",
      updated: "Last updated: May 31, 2026",
      contact: "For privacy questions, email me at",
      sections: [
        ["Information I collect", ["I do not use advertising trackers or analytics tools on this website.", "If you use the contact form, I receive the information you submit, such as your name, email address, subject, and message.", "If you email me directly, I receive your email address and the content of your message."]],
        ["How I use information", ["I use submitted information only to reply to messages and handle press, collaboration, or volunteer inquiries.", "I do not sell personal information."]],
        ["Cookies and local storage", ["The website may save your cookie banner choice in your browser's local storage so the banner does not appear every time you visit.", "This preference is stored on your device and is used only for the website interface."]],
        ["Third-party services", ["The contact form uses Formspree, which may process the information you submit so the message reaches me.", "Links to external platforms such as Steam, YouTube, X, TikTok, and Discord open third-party websites. Their own privacy policies apply when you use those services."]],
        ["Your choices", ["You can email me instead of using the contact form.", "You can clear this website's local storage in your browser settings to reset the cookie banner choice.", "You can ask me to delete messages or personal information you previously sent, unless I need to keep it for legitimate business or legal reasons."]],
      ],
    },
  },
  ru: {
    nav: { home: "Главная", games: "Игры", news: "Новости", about: "Обо мне" },
    donate: {
      button: "Donate",
      title: "Поддержать",
      description: "Выберите удобный способ поддержать Benzeji Games.",
      cloudtips: "Поддержать банковской картой",
      boosty: "Поддержать картой Visa, Mastercard или МИР",
      crypto: "Перевод в криптовалюте",
      network: "Сеть",
      addressLabel: "USDT Address",
      copy: "Копировать",
      copied: "Адрес скопирован",
      copyError: "Не удалось скопировать адрес",
      close: "Закрыть",
      kicker: "ПОДДЕРЖАТЬ PROJECT ZARYA",
      fundraiserTitle: "Сбор на фулл-тайм разработку игры",
      fundraiserDescription: "Поддержка помогает мне выделять больше времени на разработку Project Zarya.",
      raised: "Собрано 6 100 ₽",
      goal: "Цель: 2 078 057 ₽",
      progress: "Собрано 0,3%",
    },
    hero: {
      description: "Выживание в открытом мире постапокалиптической России. Исследуйте, собирайте ресурсы, стройте, создавайте снаряжение и сражайтесь с заражёнными в одиночку или с друзьями.",
      wishlist: "Добавить в список желаемого",
    },
    games: {
      title: "Игры",
      subtitle: "Игры, над которыми я работаю.",
      comingSoon: "Скоро",
      viewAll: "Смотреть все",
    },
    news: {
      title: "ПОСЛЕДНИЕ НОВОСТИ",
      subtitle: "Заметки и новости о разработке Project Zarya.",
      indexTitle: "Новости",
      indexSubtitle: "Обновления, анонсы и заметки о разработке.",
      viewAll: "Все посты",
      readMore: "Читать далее",
      backToNews: "← Назад к новостям",
      update: "Обновление",
      empty: "Новости скоро появятся здесь.",
    },
    about: {
      title: "О разработчике",
      description1: "Я разрабатываю Project Zarya самостоятельно под именем Benzeji Games. Здесь рассказываю, как продвигается работа над игрой.",
      gameDesigner: "Геймдизайнер",
      joinUs: "Хотите присоединиться?",
      joinUsDescription: "Если хотите помочь с Project Zarya, напишите мне. Участие добровольное и без оплаты.",
      careers: "Помочь Project Zarya",
    },
    footer: {
      copyright: "© Benzeji Games {year} все права защищены",
      youtube: "YouTube",
      twitter: "X",
      telegram: "Telegram",
      vk: "VK",
      tiktok: "TikTok",
      discord: "Discord",
      steam: "Steam",
      email: "Email",
      careers: "Помочь Project Zarya",
      contact: "Контакты",
      privacyPolicy: "Политика конфиденциальности",
    },
    cookies: {
      title: "На сайте используются cookies",
      description: "Cookies помогают сайту работать корректно и улучшают пользовательский опыт. Вы можете принять или отклонить необязательные cookies.",
      decline: "Отклонить",
      accept: "Принять",
    },
    contact: {
      title: "Свяжитесь со мной",
      subtitle: "Вопрос о Project Zarya, запрос от прессы или идея сотрудничества? Напишите мне.",
      name: "Имя",
      namePlaceholder: "Ваше имя",
      email: "Электронная почта",
      emailPlaceholder: "you@example.com",
      subject: "Тема",
      subjectPlaceholder: "О чем это?",
      message: "Сообщение",
      messagePlaceholder: "Ваше сообщение...",
      send: "Отправить сообщение",
      sending: "Отправка...",
      thanks: "Спасибо!",
      thanksMessage: "Сообщение отправлено. Я отвечу, когда смогу.",
      close: "Закрыть",
      orEmail: "Или напишите мне напрямую",
    },
    careers: {
      title: "Помочь с Project Zarya",
      subtitle: "Я разрабатываю Project Zarya самостоятельно и открыт к помощи. Участие добровольное и без оплаты.",
      invitation: "Расскажите, чем хотите заняться, и покажите свои работы. Если получится поработать вместе, я напишу вам.",
      contactForm: "Форма связи",
      whatToInclude: "Что указать",
      role: "С чем хотите помочь.",
      links: "Ссылка на ваши работы, если есть.",
      timezone: "Сколько времени сможете уделять проекту.",
    },
    press: {
      title: "Пресс-кит",
      subtitle: "Готовите материал о Project Zarya? Напишите, какая информация или медиафайлы вам нужны.",
      request: "Запросить материалы",
      emailUs: "Написать мне",
      mediaInquiries: "СМИ / запросы",
    },
    privacy: {
      title: "Политика конфиденциальности",
      subtitle: "Как Benzeji Games обрабатывает информацию на этом сайте.",
      updated: "Обновлено: 31 мая 2026",
      contact: "По вопросам конфиденциальности напишите мне на",
      sections: [
        ["Какие данные я получаю", ["Я не использую на этом сайте рекламные трекеры и инструменты аналитики.", "Если вы пишете через контактную форму, я получаю данные, которые вы отправляете: имя, адрес электронной почты, тему и текст сообщения.", "Если вы пишете мне напрямую по email, я получаю ваш адрес и содержание письма."]],
        ["Как я использую данные", ["Я использую отправленные данные только для ответа на сообщения и запросы от прессы, обсуждения сотрудничества или помощи с игрой.", "Я не продаю персональные данные."]],
        ["Cookies и localStorage", ["Сайт может сохранить ваш выбор в cookie-плашке в localStorage браузера, чтобы не показывать плашку при каждом посещении.", "Этот выбор хранится на вашем устройстве и используется только для интерфейса сайта."]],
        ["Сторонние сервисы", ["Контактная форма работает через Formspree. Сервис может обрабатывать отправленные вами данные, чтобы доставить сообщение мне.", "Ссылки на Steam, YouTube, X, TikTok и Discord открывают сторонние сайты. При использовании этих сервисов действуют их собственные политики конфиденциальности."]],
        ["Ваш выбор", ["Вы можете написать мне по email вместо контактной формы.", "Вы можете очистить localStorage этого сайта в настройках браузера, чтобы сбросить выбор в cookie-плашке.", "Вы можете попросить меня удалить сообщения или персональные данные, которые отправляли ранее, если их хранение не требуется по деловым или юридическим причинам."]],
      ],
    },
  },
};

function isSupportedLocale(locale) {
  return locale === "ru" || locale === "en";
}

function getStoredLocale() {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    return isSupportedLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

function storeLocale(locale) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // URL-based language selection still works when storage is unavailable.
  }
}

class CountryLanguageSuggestion {
  constructor(container, request) {
    this.container = container;
    this.request = request;
    // Regional language grouping, including associated and former CIS countries.
    this.russianCountries = new Set(["AM", "AZ", "BY", "KG", "KZ", "MD", "RU", "TJ", "TM", "UZ", "UA"]);
  }

  async initialize() {
    if (!this.container || typeof this.request !== "function") {
      console.error("CountryLanguageSuggestion: container and request function are required.");
      return;
    }
    if (getStoredLocale() || isSupportedLocale(new URLSearchParams(window.location.search).get("lang"))) return;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    try {
      const response = await this.request("https://api.country.is/", {
        signal: controller.signal, credentials: "omit", referrerPolicy: "no-referrer",
      });
      if (!response.ok) return;
      const data = await response.json();
      if (typeof data.country !== "string" || !/^[A-Z]{2}$/.test(data.country)) return;
      if (getStoredLocale()) return;
      this.show(this.russianCountries.has(data.country) ? "ru" : "en");
    } catch {
      // Geolocation must never prevent the site from loading.
    } finally {
      clearTimeout(timeout);
    }
  }

  show(locale) {
    const banner = document.createElement("section");
    banner.className = "language-suggestion";
    banner.lang = locale;
    banner.setAttribute("aria-label", locale === "ru" ? "Выбор языка" : "Language preference");
    const message = document.createElement("p");
    message.textContent = locale === "ru"
      ? "Для вашего региона доступна русская версия сайта. Переключиться?"
      : "An English version of this site is available. Switch to English?";
    banner.append(message);
    const choices = locale === "ru"
      ? [["ru", "Да, русский"], ["en", "Keep English"]]
      : [["en", "Use English"], ["ru", "Русский"]];
    for (const [choice, label] of choices) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "button";
      button.textContent = label;
      button.addEventListener("click", () => {
        storeLocale(choice);
        banner.remove();
        const url = new URL(window.location.href);
        url.searchParams.set("lang", choice);
        window.location.assign(url.href);
      });
      banner.append(button);
    }
    this.container.prepend(banner);
  }
}

function getLocale() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang");
  if (isSupportedLocale(requested)) return requested;
  return getStoredLocale() || "en";
}

function withLang(path) {
  const locale = getLocale();
  if (locale === "en") return path;

  const url = new URL(path, window.location.origin);
  url.searchParams.set("lang", locale);
  return `${url.pathname}${url.search}${url.hash}`;
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
  if (isSupportedLocale(new URLSearchParams(window.location.search).get("lang"))) storeLocale(locale);
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
    const brand = "Benzeji Games";
    const index = description.indexOf(brand);
    el.innerHTML = index >= 0
      ? `${escapeHtml(description.slice(0, index))}<strong>${brand}</strong>${escapeHtml(description.slice(index + brand.length))}`
      : escapeHtml(description);
  });

  setText("[data-year-copy]", t.footer.copyright.replace("{year}", new Date().getFullYear()));
  setAttr(".lang-switch img", "src", locale === "ru" ? "/flags/gb.svg" : "/flags/ru.svg");
  setText(".lang-switch span", locale === "ru" ? "en" : "ru");
  const targetLocale = locale === "ru" ? "en" : "ru";
  const langUrl = new URL(window.location.href);
  langUrl.searchParams.set("lang", targetLocale);
  setAttr(".lang-switch", "href", langUrl.pathname + langUrl.search + langUrl.hash);
  setAttr(".lang-switch", "title", targetLocale === "ru" ? "Русская версия" : "English version");
  setAttr("[data-fundraiser-progress]", "aria-label", t.donate.progress);

  document.querySelectorAll("[data-local-link]").forEach((el) => {
    const localPath = el.getAttribute("data-local-link");
    const normalizedPath = localPath === "/#home" ? "/" : localPath;
    el.setAttribute("href", withLang(normalizedPath));
  });
}

function getValue(obj, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  if (!toggle) return;
  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  };
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
    const isOpen = document.body.classList.contains("menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "×" : "☰";
  });
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
  document.addEventListener("click", (event) => {
    if (!document.body.classList.contains("menu-open")) return;
    if (event.target.closest(".nav-actions")) return;
    closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
}

class DonationAddressCopier {
  constructor(root, address) {
    this.root = root;
    this.address = address;
  }

  initialize() {
    if (!this.root || !this.address) {
      console.error("DonationAddressCopier: required dependencies are not assigned.");
      return;
    }

    this.root.addEventListener("click", (event) => {
      const button = event.target.closest("[data-copy-address]");
      if (!button) return;
      this.copyAddress(button);
    });
  }

  async copyAddress(button) {
    const locale = getLocale();
    const option = button.closest(".crypto-option, .post-crypto-option");
    const copyStatus = option?.querySelector("[data-copy-status]");
    if (!copyStatus) {
      console.error("DonationAddressCopier: copy status element is not assigned.");
      return;
    }
    try {
      await navigator.clipboard.writeText(this.address);
      copyStatus.textContent = translations[locale].donate.copied;
    } catch (error) {
      console.error("DonationAddressCopier: could not copy the cryptocurrency address.", error);
      copyStatus.textContent = translations[locale].donate.copyError;
    }
  }
}

function ensureDonateLinks() {
  document.querySelectorAll(".nav-actions").forEach((navActions) => {
    if (navActions.querySelector(".donate-trigger")) return;
    const languageSwitch = navActions.querySelector(".lang-switch");
    if (!languageSwitch) {
      console.error("Donate navigation: language switch anchor is not assigned.");
      return;
    }
    languageSwitch.insertAdjacentHTML("beforebegin", `<a class="donate-trigger" href="${withLang("/#donate")}" data-i18n="donate.button">Donate</a>`);
  });
}

function initDonationAddressCopier() {
  const address = "TGhRkqdcNzfdBGbTY2pQxmpPiBiisQBVVj";
  const donationAddressCopier = new DonationAddressCopier(document, address);
  donationAddressCopier.initialize();
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
  document.querySelectorAll(".socials").forEach((socials) => {
    const twitterLink = socials.querySelector(".social.twitter");
    if (!twitterLink) {
      console.error("Social links: X link is not assigned.");
      return;
    }
    let telegramLink = socials.querySelector(".social.telegram");
    if (!telegramLink) {
      twitterLink.insertAdjacentHTML("afterend", '<a class="social telegram" href="https://t.me/BenzejiGames" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><img src="/assets/social/telegram.svg" alt=""><span class="tooltip">Telegram</span></a>');
      telegramLink = socials.querySelector(".social.telegram");
    } else {
      twitterLink.insertAdjacentElement("afterend", telegramLink);
    }
    let vkLink = socials.querySelector(".social.vk");
    if (!vkLink) {
      telegramLink.insertAdjacentHTML("afterend", '<a class="social vk" href="https://vk.ru/projectzarya_game" target="_blank" rel="noopener noreferrer" aria-label="VK"><img src="/assets/social/vk.svg" alt=""><span class="tooltip">VK</span></a>');
    } else {
      telegramLink.insertAdjacentElement("afterend", vkLink);
    }
  });
  const icons = {
    youtube: { src: "/assets/social/youtube.svg", label: footer.youtube },
    twitter: { src: "/assets/social/x.svg", label: footer.twitter },
    telegram: { src: "/assets/social/telegram.svg", label: footer.telegram },
    vk: { src: "/assets/social/vk.svg", label: footer.vk },
    tiktok: { src: "/assets/social/tiktok.svg", label: footer.tiktok },
    discord: { src: "/assets/social/discord.svg", label: footer.discord },
    steam: { src: "/assets/social/steam.svg", label: footer.steam },
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
  new CountryLanguageSuggestion(document.querySelector("main"), window.fetch.bind(window)).initialize();
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
      const response = await fetch(form.action || "https://formspree.io/f/mrpzwpwb", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      modal?.classList.add("visible");
    } catch (error) {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
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
  const localArticles = window.BENZEJI_NEWS?.[locale];
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
  const supportClass = article.pinned ? " support-news-card" : "";
  return `
    <a href="${withLang(`/news/post.html?slug=${encodeURIComponent(article.slug)}`)}" class="news-card${supportClass}">
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
    .sort((a, b) => {
      if (Number.isFinite(a.displayOrder) || Number.isFinite(b.displayOrder)) {
        return (a.displayOrder ?? Number.MAX_SAFE_INTEGER) - (b.displayOrder ?? Number.MAX_SAFE_INTEGER);
      }
      if (Boolean(a.pinned) !== Boolean(b.pinned)) return a.pinned ? -1 : 1;
      return String(b.publishedAt || "").localeCompare(String(a.publishedAt || ""));
    })
    .slice(0, limit || undefined);
  grid.innerHTML = articles.length
    ? articles.map((article) => articleCard(article, locale)).join("")
    : `<div class="empty-news">${translations[locale].news.empty}</div>`;
}

function blockToHtml(block) {
  if (block.fundraiser) {
    const fundraiser = block.fundraiser;
    const rawProgress = fundraiser.goal > 0 ? (fundraiser.raised / fundraiser.goal) * 100 : 0;
    const progress = Math.min(100, Math.max(0, rawProgress));
    return `
      <section class="fundraiser-progress" aria-label="${escapeHtml(fundraiser.progressLabel)}">
        <div class="fundraiser-progress-heading">
          <strong>${escapeHtml(fundraiser.raisedLabel)}</strong>
          <span>${escapeHtml(fundraiser.goalLabel)}</span>
        </div>
        <div class="fundraiser-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress.toFixed(2)}">
          <span class="fundraiser-progress-fill" style="width: ${progress.toFixed(4)}%"></span>
        </div>
        <div class="fundraiser-progress-meta">
          <span>${escapeHtml(fundraiser.sourceLabel)}</span>
          <strong>${escapeHtml(fundraiser.progressLabel)}</strong>
        </div>
      </section>`;
  }
  if (block.donationOptions) {
    const options = block.donationOptions;
    return `
      <section class="post-donation-options">
        <h2>${escapeHtml(options.title)}</h2>
        <div class="post-donation-grid">
          <a href="https://pay.cloudtips.ru/p/be187661" target="_blank" rel="noopener noreferrer"><strong>CloudTips</strong><span>${escapeHtml(options.cloudtips)}</span><b aria-hidden="true">↗</b></a>
          <a href="https://www.donationalerts.com/r/benzejigames" target="_blank" rel="noopener noreferrer"><strong>DonationAlerts</strong><span>${escapeHtml(options.boosty)}</span><b aria-hidden="true">↗</b></a>
          <div class="post-crypto-option">
            <div class="crypto-payment-layout">
              <img class="crypto-qr" src="/assets/project-zarya-usdt-trc20-qr.png" alt="QR code for the USDT TRC20 address">
              <div class="crypto-address-details">
                <div class="crypto-address-heading">
                  <span class="crypto-address-label">${escapeHtml(translations[getLocale()].donate.addressLabel)}</span>
                  <span class="crypto-network"><strong>TRC20</strong></span>
                </div>
                <div class="crypto-address-row">
                  <code>TGhRkqdcNzfdBGbTY2pQxmpPiBiisQBVVj</code>
                  <button class="copy-address" type="button" data-copy-address>
                    <span>${escapeHtml(translations[getLocale()].donate.copy)}</span>
                  </button>
                </div>
                <span class="copy-status" data-copy-status aria-live="polite"></span>
              </div>
            </div>
          </div>
        </div>
      </section>`;
  }
  if (Array.isArray(block.items) && block.items.length) {
    const listTitle = block.title ? `<h2>${escapeHtml(block.title)}</h2>` : "";
    const items = block.items
      .map((item) => `<li>${inlineMarkdown(escapeHtml(item))}</li>`)
      .join("");
    return `<section class="post-list">${listTitle}<ul>${items}</ul></section>`;
  }
  if (typeof block.youtubeId === "string" && /^[a-zA-Z0-9_-]{11}$/.test(block.youtubeId)) {
    const videoTitle = escapeHtml(block.title || "YouTube video");
    return `
      <div class="video-embed">
        <iframe
          src="https://www.youtube-nocookie.com/embed/${block.youtubeId}"
          title="${videoTitle}"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></iframe>
      </div>`;
  }
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
  new BrandingManager("/assets/benzeji-mark.svg").apply();
  ensureDonateLinks();
  initLocale();
  initSocialIcons();
  initMenu();
  initDonationAddressCopier();
  initCookies();
  initContactForm();
  renderNewsList(document.body.dataset.newsLimit ? Number(document.body.dataset.newsLimit) : undefined);
  renderNewsPost();
  renderPrivacy();
});
