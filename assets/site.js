/* Language toggle + store badges. No network, no tracking. */
(function () {
  var d = document.documentElement;

  function applyLang(lang, save) {
    d.classList.toggle('is-ru', lang === 'ru');
    d.lang = lang;
    var t = d.getAttribute(lang === 'ru' ? 'data-title-ru' : 'data-title-en');
    if (t) document.title = t;
    var md = document.querySelector('meta[name="description"]');
    if (md) {
      var ds = d.getAttribute(lang === 'ru' ? 'data-desc-ru' : 'data-desc-en');
      if (ds) md.setAttribute('content', ds);
    }
    var btns = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-set-lang') === lang ? 'true' : 'false');
    }
    if (save) { try { localStorage.setItem('lang', lang); } catch (e) {} }
  }

  // remember the English originals once, so the toggle can restore them
  d.setAttribute('data-title-en', document.title);
  var m = document.querySelector('meta[name="description"]');
  if (m) d.setAttribute('data-desc-en', m.getAttribute('content'));

  applyLang(d.classList.contains('is-ru') ? 'ru' : 'en', false);

  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('[data-set-lang]');
    if (b) applyLang(b.getAttribute('data-set-lang'), true);
  });

  // store badges: turn "Coming soon" into a link when a URL is set in stores.js
  var stores = window.STORES || {};
  var badges = document.querySelectorAll('.store[data-store]');
  for (var j = 0; j < badges.length; j++) {
    var el = badges[j];
    var entry = stores[el.getAttribute('data-slug')];
    var url = entry && entry[el.getAttribute('data-store')];
    if (!url || !/^https:\/\//.test(url)) continue;
    var a = document.createElement('a');
    a.className = 'store';
    a.href = url;
    a.rel = 'noopener';
    a.innerHTML = '<b>' + el.querySelector('b').textContent + '</b><i class="en">Install</i><i class="ru">Установить</i>';
    el.parentNode.replaceChild(a, el);
  }
})();
