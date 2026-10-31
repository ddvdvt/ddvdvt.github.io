/* Runs in <head>, before first paint: picks the language (saved choice, else navigator.language) to avoid a flash. */
(function () {
  var d = document.documentElement, lang = 'en';
  try {
    var s = localStorage.getItem('lang');
    if (s === 'ru' || s === 'en') lang = s;
    else lang = /^ru/i.test(navigator.language || '') ? 'ru' : 'en';
  } catch (e) {
    lang = /^ru/i.test(navigator.language || '') ? 'ru' : 'en';
  }
  d.classList.add('js');
  if (lang === 'ru') d.classList.add('is-ru');
  d.lang = lang;
})();
