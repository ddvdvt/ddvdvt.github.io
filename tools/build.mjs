#!/usr/bin/env node
// Static site generator. No dependencies. Run from anywhere:  node tools/build.mjs
// Reads tools/data/extensions.mjs + tools/content/privacy-{ru,en}/<slug>.md, writes plain HTML to the repo root.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { EXTENSIONS, OTHER_PROJECTS, SITE, fullName } from './data/extensions.mjs';
import { mdToHtml, esc } from './lib/md.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TODAY = '2026-10-31';
const OG = `${SITE.base}/img/og.png`;

function write(rel, html) {
  const p = join(ROOT, rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, html);
}

// ---------- bilingual helpers ----------
const t = (en, ru, tag = 'span') => `<${tag} class="en">${en}</${tag}><${tag} class="ru">${ru}</${tag}>`;
const L = (o) => t(esc(o.en), esc(o.ru));

// ---------- shared chunks ----------
const CSP = "default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; base-uri 'self'; form-action 'none'; object-src 'none'";

const LOGO = `<svg class="logo-mark" viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><rect x="1.5" y="1.5" width="29" height="29" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 17.5l4.6 4.6L23.5 10" fill="none" stroke="var(--accent)" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function head({ title, titleRu, desc, descRu, path, noindex = false, ogType = 'website' }) {
  const url = `${SITE.base}${path}`;
  return `<!doctype html>
<html lang="en" data-title-ru="${esc(titleRu)}" data-desc-ru="${esc(descRu)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="${CSP}">
<meta name="referrer" content="no-referrer">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex">\n' : ''}<link rel="canonical" href="${url}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta name="color-scheme" content="light dark">
<meta property="og:site_name" content="ddvdvt extensions">
<meta property="og:type" content="${ogType}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${OG}">
<meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="/assets/site.css">
<script src="/assets/boot.js"></script>
</head>
<body>
<a class="skip" href="#main">${t('Skip to content', 'К содержимому')}</a>`;
}

function header(active = '') {
  const cur = (k) => (active === k ? ' aria-current="page"' : '');
  return `<header class="top">
<div class="wrap top-in">
<a class="brand" href="/" aria-label="ddvdvt extensions">${LOGO}<span class="brand-name">ddvdvt<span class="brand-sub">/ ${t('extensions', 'расширения')}</span></span></a>
<nav class="nav" aria-label="Main">
<a href="/#extensions"${cur('ext')}>${t('Extensions', 'Расширения')}</a>
<a href="/privacy/index.html"${cur('privacy')}>${t('Privacy', 'Приватность')}</a>
<a href="/#projects">${t('Projects', 'Проекты')}</a>
</nav>
<div class="lang" role="group" aria-label="Language / Язык">
<button type="button" class="lang-btn" data-set-lang="en" aria-pressed="true">EN</button>
<button type="button" class="lang-btn" data-set-lang="ru" aria-pressed="false">RU</button>
</div>
</div>
</header>`;
}

function otherProjects(variant = 'block') {
  const cards = OTHER_PROJECTS.map((p) => `<a class="proj" href="${p.url}" rel="noopener">
<span class="proj-host">${p.host}</span>
<span class="proj-name">${p.name}<span class="arrow" aria-hidden="true">↗</span></span>
<span class="proj-desc">${L(p)}</span>
</a>`).join('\n');
  if (variant === 'footer') {
    return `<div class="foot-projects"><h2 class="foot-h">${t('Other projects by the author', 'Другие проекты автора')}</h2>
<ul class="foot-list">${OTHER_PROJECTS.map((p) => `<li><a href="${p.url}" rel="noopener">${p.name}</a> <span class="muted">— ${L(p)}</span></li>`).join('')}</ul></div>`;
  }
  return `<section class="projects" id="projects" aria-labelledby="projects-h">
<div class="wrap">
<p class="eyebrow">${t('Also from the author', 'Ещё от автора')}</p>
<h2 id="projects-h" class="h2">${t('Other projects by the author', 'Другие проекты автора')}</h2>
<div class="proj-grid">
${cards}
</div>
</div>
</section>`;
}

function footer() {
  return `<footer class="foot">
<div class="wrap foot-in">
<div class="foot-brand">
<a class="brand" href="/">${LOGO}<span class="brand-name">ddvdvt<span class="brand-sub">/ ${t('extensions', 'расширения')}</span></span></a>
<p class="muted">${t('No cookies, no analytics, no external requests from this site.', 'На этом сайте нет cookies, аналитики и внешних запросов.')}</p>
</div>
<div class="foot-links">
<h2 class="foot-h">${t('Site', 'Сайт')}</h2>
<ul class="foot-list">
<li><a href="/#extensions">${t('All extensions', 'Все расширения')}</a></li>
<li><a href="/privacy/index.html">${t('Privacy policies', 'Политики конфиденциальности')}</a></li>
<li><a href="${SITE.github}" rel="noopener">GitHub</a></li>
</ul>
</div>
${otherProjects('footer')}
</div>
</footer>
<script src="/assets/stores.js"></script>
<script src="/assets/site.js"></script>
</body>
</html>
`;
}

function storeBadges(slug) {
  const b = (id, label) => `<span class="store is-soon" data-store="${id}" data-slug="${slug}"><b>${label}</b><i class="en">Coming soon</i><i class="ru">Скоро</i></span>`;
  return `<div class="stores">${b('chrome', 'Chrome Web Store')}${b('firefox', 'Firefox Add-ons')}</div>`;
}

function icon(e, cls = '') {
  return `<img class="${cls}" src="/img/icons/${e.slug}.png" width="128" height="128" alt="" decoding="async">`;
}

function otherExtStrip(current) {
  const items = EXTENSIONS.filter((e) => e.slug !== current).map((e) =>
    `<li><a href="/#${e.slug}" class="chip x-${e.slug}">${icon(e)}<span>${L(e.name)}</span></a></li>`).join('');
  return `<section class="strip" aria-labelledby="strip-h"><div class="wrap">
<h2 id="strip-h" class="h3">${t('More extensions', 'Другие расширения')}</h2>
<ul class="chips">${items}</ul>
</div></section>`;
}

// ---------- pages ----------
function indexPage() {
  const cards = EXTENSIONS.map((e, i) => {
    const n = String(i + 1).padStart(2, '0');
    return `<article class="card x-${e.slug}" id="${e.slug}">
<div class="card-top"><span class="num">N°${n}</span><span class="tag"><span class="dot"></span>${L(e.tag)}</span></div>
<div class="card-head">${icon(e, 'ico')}<h3 class="card-name">${L(e.name)}</h3></div>
<p class="pitch">${L(e.pitch)}</p>
${e.disclaimer ? `<p class="fine">${L(e.disclaimer)}</p>` : ''}
<div class="card-foot">
${storeBadges(e.slug)}
<a class="plink" href="/privacy/${e.slug}.html">${t('Privacy policy', 'Политика конфиденциальности')}<span class="arrow" aria-hidden="true">→</span></a>
</div>
</article>`;
  }).join('\n');

  const title = 'ddvdvt extensions — 12 private browser extensions, nothing leaves your device';
  const titleRu = 'ddvdvt — 12 приватных расширений для браузера, ничего не покидает ваше устройство';
  const desc = 'Twelve small browser extensions for YouTube, search, tabs, reading, translation and AI chats. No analytics, no ads, no accounts — your data stays on your device.';
  const descRu = 'Двенадцать небольших расширений для браузера: YouTube, поиск, вкладки, чтение, перевод и ИИ-чаты. Без аналитики, рекламы и аккаунтов — данные остаются на вашем устройстве.';
  return head({ title, titleRu, desc, descRu, path: '/' }) + header('ext') + `
<main id="main">
<section class="hero">
<div class="wrap hero-in">
<div class="hero-copy">
<p class="eyebrow">${t('Browser extensions · est. 2026', 'Расширения для браузера · с 2026')}</p>
<h1 class="display">${t('Twelve small tools.<br><em>Nothing</em> leaves your device.', 'Двенадцать небольших инструментов.<br><em>Ничего</em> не покидает ваше устройство.')}</h1>
<p class="lede">${t('Extensions that do one job and keep their mouths shut: no analytics, no ads, no accounts. Every policy is written out in plain words, in two languages.', 'Расширения, которые делают одно дело и не болтают лишнего: без аналитики, рекламы и аккаунтов. Каждая политика конфиденциальности написана простыми словами, на двух языках.')}</p>
<p class="hero-cta"><a class="btn" href="#extensions">${t('Browse the catalogue', 'Открыть каталог')}<span class="arrow" aria-hidden="true">↓</span></a>
<a class="btn btn-ghost" href="/privacy/index.html">${t('Read the policies', 'Читать политики')}</a></p>
</div>
<aside class="ledger" aria-label="${'What the extensions collect'}">
<p class="ledger-h">${t('What we collect from you', 'Что мы собираем о вас')}</p>
<dl>
<div><dt>${t('Analytics', 'Аналитика')}</dt><dd>0</dd></div>
<div><dt>${t('Advertising', 'Реклама')}</dt><dd>0</dd></div>
<div><dt>${t('Accounts', 'Аккаунты')}</dt><dd>0</dd></div>
<div><dt>${t('Remote code', 'Удалённый код')}</dt><dd>0</dd></div>
</dl>
<p class="ledger-f">${t('per the privacy policies below', 'по политикам конфиденциальности ниже')}</p>
</aside>
</div>
</section>

<section class="catalogue" id="extensions" aria-labelledby="cat-h">
<div class="wrap">
<div class="sec-head">
<p class="eyebrow">${t('The catalogue', 'Каталог')}</p>
<h2 id="cat-h" class="h2">${t('12 extensions', '12 расширений')}</h2>
<p class="muted sec-note">${t('Store links are on the way. Each card links to a full privacy policy.', 'Ссылки на магазины скоро появятся. Каждая карточка ведёт на полную политику конфиденциальности.')}</p>
</div>
<div class="grid">
${cards}
</div>
</div>
</section>

<section class="promise" aria-labelledby="promise-h">
<div class="wrap">
<p class="eyebrow">${t('The house rules', 'Правила дома')}</p>
<h2 id="promise-h" class="h2">${t('Quiet by design', 'Тихие по замыслу')}</h2>
<div class="promise-grid">
<div><h3>${t('Local first', 'Сначала локально')}</h3><p>${t('Your settings, lists and history live in your own browser. The policies spell out exactly what is stored and where.', 'Настройки, списки и история живут в вашем браузере. В политиках прямо написано, что и где хранится.')}</p></div>
<div><h3>${t('Only the access it needs', 'Только нужный доступ')}</h3><p>${t('Each extension reads only the sites its job requires, and several ask for access at the moment you use them.', 'Каждое расширение читает только те сайты, которые нужны для дела, а некоторые просят доступ в момент использования.')}</p></div>
<div><h3>${t('Plain-language policies', 'Понятные политики')}</h3><p>${t('Russian originals with English translations. If something changes, the policy changes first.', 'Оригиналы на русском и переводы на английский. Если что-то меняется, сначала меняется политика.')}</p></div>
</div>
</div>
</section>

${otherProjects()}
</main>
` + footer();
}

function welcomePage(e) {
  const full = fullName(e, 'en'), fullRu = fullName(e, 'ru');
  const title = `Welcome — ${e.name.en} | ddvdvt extensions`;
  const titleRu = `Добро пожаловать — ${e.name.ru} | ddvdvt`;
  const steps = e.steps.en.map((s, i) => `<li><span class="en">${esc(s)}</span><span class="ru">${esc(e.steps.ru[i])}</span></li>`).join('\n');
  return head({ title, titleRu, desc: `Thanks for installing ${full}. A quick start in a few steps.`, descRu: `Спасибо, что установили «${fullRu}». Быстрый старт за несколько шагов.`, path: `/welcome/${e.slug}.html`, noindex: true }) + header() + `
<main id="main" class="x-${e.slug}">
<section class="page-hero">
<div class="wrap page-hero-in">
${icon(e, 'ico-lg')}
<div>
<p class="eyebrow">${t('Installed — thank you', 'Установлено — спасибо')}</p>
<h1 class="display display-sm">${L(e.name)}</h1>
<p class="lede">${L(e.pitch)}</p>
</div>
</div>
</section>
<section class="wrap two">
<div class="steps-col">
<h2 class="h3">${t('Get started', 'Быстрый старт')}</h2>
<ol class="steps">
${steps}
</ol>
${e.disclaimer ? `<p class="fine">${L(e.disclaimer)}</p>` : ''}
</div>
<figure class="shot"><img src="/img/shots/${e.slug}.webp" width="960" height="600" alt="${esc(full)}" loading="lazy" decoding="async"><figcaption class="muted">${t('The extension in action', 'Расширение в работе')}</figcaption></figure>
</section>
<section class="wrap">
<div class="note">
<p><strong>${t('Your privacy.', 'Ваша приватность.')}</strong> ${t('Everything is described in the full policy — what is stored, where, and what is never sent.', 'Всё описано в полной политике: что хранится, где и что никогда не отправляется.')} <a href="/privacy/${e.slug}.html">${t('Read the privacy policy', 'Читать политику конфиденциальности')}<span class="arrow" aria-hidden="true">→</span></a></p>
</div>
</section>
${otherExtStrip(e.slug)}
${otherProjects()}
</main>
` + footer();
}

function byePage(e) {
  const title = `Goodbye — ${e.name.en} | ddvdvt extensions`;
  const titleRu = `До свидания — ${e.name.ru} | ddvdvt`;
  const issues = e.public ? `https://github.com/ddvdvt/${e.slug}/issues` : null;
  return head({ title, titleRu, desc: `${e.name.en} was removed. Thanks for trying it.`, descRu: `«${e.name.ru}» удалено. Спасибо, что попробовали.`, path: `/bye/${e.slug}.html`, noindex: true }) + header() + `
<main id="main" class="x-${e.slug}">
<section class="page-hero">
<div class="wrap page-hero-in">
${icon(e, 'ico-lg ico-faded')}
<div>
<p class="eyebrow">${t('Removed', 'Удалено')}</p>
<h1 class="display display-sm">${t('So long — and thanks.', 'Пока — и спасибо.')}</h1>
<p class="lede">${t(`${esc(e.name.en)} is gone from your browser. The browser deletes the extension’s own data along with it.`, `«${esc(e.name.ru)}» удалено из браузера. Собственные данные расширения браузер удаляет вместе с ним.`)}</p>
${e.byeNote ? `<p class="fine">${L(e.byeNote)}</p>` : ''}
</div>
</div>
</section>
<section class="wrap two two-bye">
<div class="panel">
<h2 class="h3">${t('Changed your mind?', 'Передумали?')}</h2>
<p class="muted">${t('You can reinstall it any time — your settings start fresh.', 'Можно поставить заново в любой момент — настройки начнутся с нуля.')}</p>
${storeBadges(e.slug)}
</div>
<div class="panel">
<h2 class="h3">${t('Something missing or broken?', 'Чего-то не хватило или что-то сломалось?')}</h2>
${issues
    ? `<p class="muted">${t('Tell us what went wrong — a public issue helps the next person too.', 'Расскажите, что пошло не так: публичное обращение поможет и следующему человеку.')}</p>
<p><a class="btn" href="${issues}" rel="noopener">${t('Open GitHub issues', 'Открыть GitHub issues')}<span class="arrow" aria-hidden="true">↗</span></a></p>`
    : `<p class="muted">${t('No hard feelings — thanks for giving it a try.', 'Без обид — спасибо, что попробовали.')}</p>`}
</div>
</section>
${otherExtStrip(e.slug)}
${otherProjects()}
</main>
` + footer();
}

function privacyDate(md) {
  const m = md.match(/^[_*]([^_*\n]+)[_*]\s*$/m);
  return m ? m[1].trim() : '';
}

function privacyPage(e) {
  const ru = readFileSync(join(ROOT, 'tools/content/privacy-ru', `${e.slug}.md`), 'utf8');
  const en = readFileSync(join(ROOT, 'tools/content/privacy-en', `${e.slug}.md`), 'utf8');
  const title = `Privacy policy — ${e.name.en} | ddvdvt extensions`;
  const titleRu = `Политика конфиденциальности — ${e.name.ru} | ddvdvt`;
  return head({ title, titleRu, desc: `Privacy policy of ${fullName(e, 'en')}: what is stored, where, and what is never sent.`, descRu: `Политика конфиденциальности «${fullName(e, 'ru')}»: что хранится, где и что никогда не отправляется.`, path: `/privacy/${e.slug}.html`, ogType: 'article' }) + header('privacy') + `
<main id="main" class="x-${e.slug}">
<div class="wrap doc-wrap">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/privacy/index.html">${t('Privacy policies', 'Политики конфиденциальности')}</a><span aria-hidden="true"> / </span><a href="/#${e.slug}">${L(e.name)}</a></nav>
<div class="doc-title">${icon(e, 'ico')}<p class="eyebrow">${t('Privacy policy', 'Политика конфиденциальности')}</p></div>
<div class="en doc">
<p class="lang-note">English translation. The Russian text is the original and is authoritative.</p>
${mdToHtml(en)}
</div>
<div class="ru doc">
<p class="lang-note">Оригинал политики. Английский перевод доступен по кнопке EN.</p>
${mdToHtml(ru)}
</div>
${e.disclaimer ? `<p class="fine">${L(e.disclaimer)}</p>` : ''}
<p class="doc-links"><a href="/#${e.slug}">${t('Back to the extension', 'К расширению')}</a> · <a href="/privacy/index.html">${t('All policies', 'Все политики')}</a></p>
</div>
</main>
` + footer();
}

function privacyIndex() {
  const rows = EXTENSIONS.map((e) => {
    const d = privacyDate(readFileSync(join(ROOT, 'tools/content/privacy-ru', `${e.slug}.md`), 'utf8')).replace(/^(Дата|Обновлено|Последнее обновление):\s*/i, '');
    return `<li class="x-${e.slug}"><a class="plist" href="/privacy/${e.slug}.html">${icon(e, 'ico')}<span class="plist-name">${L(e.name)}</span><span class="plist-date muted">${d ? esc(d) : ''}</span><span class="arrow" aria-hidden="true">→</span></a></li>`;
  }).join('\n');
  const title = 'Privacy policies | ddvdvt extensions';
  return head({ title, titleRu: 'Политики конфиденциальности | ddvdvt', desc: 'Privacy policies of all 12 ddvdvt browser extensions, in Russian and English.', descRu: 'Политики конфиденциальности всех 12 расширений ddvdvt — на русском и английском.', path: '/privacy/index.html' }) + header('privacy') + `
<main id="main">
<section class="page-hero"><div class="wrap">
<p class="eyebrow">${t('Privacy', 'Приватность')}</p>
<h1 class="display display-sm">${t('Privacy policies', 'Политики конфиденциальности')}</h1>
<p class="lede">${t('One policy per extension. The Russian text is the original; every policy has an English translation.', 'Одна политика на каждое расширение. Русский текст — оригинал; у каждой политики есть английский перевод.')}</p>
<p class="muted">${t('This website itself sets no cookies, runs no analytics and loads nothing from third parties. The only thing it remembers is your language choice, in your own browser.', 'Сам сайт не ставит cookies, не использует аналитику и ничего не загружает у третьих лиц. Единственное, что он запоминает, — ваш выбор языка, в вашем же браузере.')}</p>
</div></section>
<section class="wrap"><ul class="plist-ul">
${rows}
</ul></section>
</main>
` + footer();
}

function notFound() {
  return head({ title: 'Page not found | ddvdvt extensions', titleRu: 'Страница не найдена | ddvdvt', desc: 'This page does not exist.', descRu: 'Такой страницы нет.', path: '/404.html', noindex: true }) + header() + `
<main id="main">
<section class="page-hero nf"><div class="wrap">
<p class="eyebrow">404</p>
<h1 class="display">${t('This page <em>wandered off</em>.', 'Эта страница <em>ушла гулять</em>.')}</h1>
<p class="lede">${t('Nothing is stored here — not even this page, it seems. Try the catalogue.', 'Здесь ничего не хранится — похоже, даже эта страница. Загляните в каталог.')}</p>
<p class="hero-cta"><a class="btn" href="/">${t('Back to the catalogue', 'В каталог')}<span class="arrow" aria-hidden="true">→</span></a></p>
</div></section>
</main>
` + footer();
}

// ---------- run ----------
write('index.html', indexPage());
write('404.html', notFound());
write('privacy/index.html', privacyIndex());
for (const e of EXTENSIONS) {
  write(`welcome/${e.slug}.html`, welcomePage(e));
  write(`bye/${e.slug}.html`, byePage(e));
  write(`privacy/${e.slug}.html`, privacyPage(e));
}

const urls = ['/', '/privacy/index.html', ...EXTENSIONS.map((e) => `/privacy/${e.slug}.html`)];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE.base}${u}</loc><lastmod>${TODAY}</lastmod></url>`).join('\n')}
</urlset>
`);
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE.base}/sitemap.xml\n`);
write('.nojekyll', '');
console.log(`built: index, 404, privacy/index + ${EXTENSIONS.length}x3 pages`);
