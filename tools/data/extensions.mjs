// Single source of truth for the 12 extensions. Edit here, then run: node tools/build.mjs
// Names come from extension/_locales/{en,ru}/messages.json (extName: "Name — tagline").
// Pitches come from store/listing.{en,ru}.md (short description).

export const SITE = {
  base: 'https://ddvdvt.github.io',
  github: 'https://github.com/ddvdvt',
};

export const OTHER_PROJECTS = [
  {
    id: 'formulacamp',
    url: 'https://formulacamp.com',
    host: 'formulacamp.com',
    name: 'FormulaCamp',
    en: 'Learn Excel online with graded formulas — an Excel trainer.',
    ru: 'Учите Excel онлайн на задачах с формулами по нарастающей сложности — тренажёр Excel.',
  },
  {
    id: 'cs2replay',
    url: 'https://replaylab.pro',
    host: 'replaylab.pro',
    name: 'CS2 Replay',
    en: 'Counter-Strike 2 demo analysis.',
    ru: 'Разбор демо-записей Counter-Strike 2.',
  },
];

// public: has a public GitHub repo (issues link on the goodbye page).
export const EXTENSIONS = [
  {
    slug: 'youtube-clean', public: true, tag: { en: 'YouTube · focus', ru: 'YouTube · фокус' },
    name: { en: 'Video Declutter', ru: 'Видео без мусора' },
    tagline: { en: 'no Shorts, no recommendations', ru: 'без Shorts и рекомендаций' },
    pitch: {
      en: 'Hides Shorts, recommendations, autoplay and clutter on YouTube. Scheduled focus mode. No account, no tracking.',
      ru: 'Скрывает Shorts, рекомендации, автовоспроизведение и лишние блоки на YouTube. Фокус по расписанию. Без аккаунта и слежки.',
    },
    disclaimer: {
      en: 'This extension is not affiliated with or endorsed by YouTube or Google.',
      ru: 'Расширение не связано с YouTube или Google и не одобрено ими.',
    },
    steps: {
      en: [
        'Open YouTube and click the extension icon in the toolbar.',
        'Pick a mode: Minimal, Focus, or Subscriptions only.',
        'Fine-tune it: every item (Shorts, home recommendations, “Up next”, comments…) has its own switch.',
        'Optional: set a focus schedule and a gentle reminder after a daily number of minutes.',
        'If YouTube changes its layout, the popup tells you when a rule stops matching.',
      ],
      ru: [
        'Откройте YouTube и нажмите значок расширения на панели браузера.',
        'Выберите режим: «Минимальный», «Фокус» или «Только подписки».',
        'Настройте тоньше: у каждого пункта (Shorts, рекомендации на главной, «Далее», комментарии…) свой переключатель.',
        'По желанию задайте расписание фокуса и мягкое напоминание после заданного числа минут в день.',
        'Если YouTube поменяет вёрстку, окно расширения подскажет, что правило перестало срабатывать.',
      ],
    },
    byeNote: null,
  },
  {
    slug: 'youtube-watch-later', public: true, tag: { en: 'YouTube · queue', ru: 'YouTube · очередь' },
    name: { en: 'Watch Later Cleaner & Play Next Queue', ru: 'Смотреть позже — чистка и очередь' },
    tagline: null,
    pitch: {
      en: 'Clean up a huge YouTube Watch Later list with filters and a backup first. Adds "Play next" and a queue of your own.',
      ru: 'Чистит огромный список «Смотреть позже» на YouTube фильтрами с резервной копией. Кнопка «Воспроизвести далее» и своя очередь.',
    },
    disclaimer: {
      en: 'This extension is not affiliated with or endorsed by YouTube or Google.',
      ru: 'Расширение не связано с YouTube или Google и не одобрено ими.',
    },
    steps: {
      en: [
        'Open your Watch Later playlist on YouTube and press “Load the whole list”.',
        'Combine filters (watched %, deleted/private, Shorts, channels, duration, title words) and check the live preview of what will be removed.',
        'Run a dry run first, then remove: a JSON backup of the whole list is downloaded automatically before anything is deleted.',
        'Use the “Next” and “Queue” buttons on thumbnails to build your own queue; Alt+Shift+Q plays the next video now.',
      ],
      ru: [
        'Откройте плейлист «Смотреть позже» на YouTube и нажмите «Загрузить весь список».',
        'Скомбинируйте фильтры (процент просмотра, удалённые/приватные, Shorts, каналы, длительность, слова в названии) и проверьте предпросмотр того, что будет удалено.',
        'Сначала запустите пробный прогон, затем удаление: резервная копия всего списка (JSON) скачивается автоматически до удаления.',
        'Кнопками «Далее» и «В очередь» на превью собирайте свою очередь; Alt+Shift+Q запускает следующее видео сразу.',
      ],
    },
    byeNote: {
      en: 'Backup files the extension downloaded stay in your Downloads folder — that is how you can restore videos later.',
      ru: 'Скачанные расширением файлы резервных копий остаются в папке загрузок — по ним можно вернуть видео позже.',
    },
  },
  {
    slug: 'dark-mode', public: true, tag: { en: 'Any site · eyes', ru: 'Любые сайты · глаза' },
    name: { en: 'Dark Mode', ru: 'Тёмный режим' },
    tagline: { en: 'fast dark theme for any website', ru: 'быстрая тёмная тема для любых сайтов' },
    pitch: {
      en: 'Dark theme for any website with no white flash and no lag. Two engines, brightness, schedule, per-site list. Free.',
      ru: 'Тёмная тема на любом сайте без белой вспышки и тормозов. Два режима, яркость, расписание, список сайтов. Бесплатно.',
    },
    disclaimer: null,
    steps: {
      en: [
        'Open any website: it is recolored automatically, before the first paint.',
        'Click the icon to turn the theme off or on for the current site, or press Alt+Shift+L.',
        'Choose the engine per site: “Smart” recolors the site’s own styles, “Fast” uses a single CSS filter for heavy pages.',
        'Set brightness, contrast, sepia and a schedule (always, follow the system, or by time such as 20:00–07:00).',
        'Per-site rules can be exported to and imported from a JSON file in settings.',
      ],
      ru: [
        'Откройте любой сайт: он перекрашивается автоматически, ещё до первой отрисовки.',
        'Нажмите на значок, чтобы выключить или включить тему для текущего сайта, или нажмите Alt+Shift+L.',
        'Выберите режим для сайта: «Умный» перекрашивает стили сайта, «Быстрый» — один CSS-фильтр для тяжёлых страниц.',
        'Настройте яркость, контраст, сепию и расписание (всегда, как в системе или по времени, например 20:00–07:00).',
        'Правила для сайтов можно сохранить в файл JSON и загрузить обратно в настройках.',
      ],
    },
    byeNote: null,
  },
  {
    slug: 'save-image-as', public: true, tag: { en: 'Images', ru: 'Картинки' },
    name: { en: 'Save Picture As…', ru: 'Сохранить картинку как…' },
    tagline: { en: 'PNG, JPG, WebP', ru: 'PNG, JPG, WebP' },
    pitch: {
      en: 'Right-click any image: save it as PNG, JPG or WebP, or copy it as PNG. Converted locally in your browser, no servers.',
      ru: 'Правый клик по картинке: сохранить как PNG, JPG или WebP, скопировать как PNG. Конвертация прямо в браузере, без серверов.',
    },
    disclaimer: null,
    steps: {
      en: [
        'Right-click any image on a web page.',
        'Choose “Save as PNG / JPG / WebP” — your default format is listed first — or “Copy as PNG”.',
        'The image is converted in your browser and saved to your Downloads folder.',
        'In settings: JPG quality, background colour for transparent areas, file-name pattern, and “ask where to save”.',
        'If an image lives on another server, the extension asks once for access to that one server only.',
      ],
      ru: [
        'Щёлкните правой кнопкой мыши по любой картинке на странице.',
        'Выберите «Сохранить как PNG / JPG / WebP» (ваш формат по умолчанию — первым) или «Скопировать как PNG».',
        'Картинка конвертируется прямо в браузере и сохраняется в папку загрузок.',
        'В настройках: качество JPG, цвет фона для прозрачных областей, шаблон имени файла и «спрашивать, куда сохранять».',
        'Если картинка лежит на другом сервере, расширение один раз спросит доступ именно к этому серверу.',
      ],
    },
    byeNote: null,
  },
  {
    slug: 'read-later', public: true, tag: { en: 'Reading', ru: 'Чтение' },
    name: { en: 'Read Later', ru: 'Прочитать позже' },
    tagline: { en: 'offline articles, no account', ru: 'статьи офлайн, без аккаунта' },
    pitch: {
      en: 'Save articles and read them offline. Everything stays on your device: no account, easy import from other services and export.',
      ru: 'Сохраняйте статьи и читайте без интернета. Всё хранится у вас: без аккаунта, с импортом из других сервисов и экспортом.',
    },
    disclaimer: null,
    steps: {
      en: [
        'Open an article and click the extension icon (or press Alt+Shift+S) to save it.',
        'Read it from the library or the popup — online or offline. Your reading position is remembered.',
        'Add highlights in four colours with notes; copy them as Markdown.',
        'Moving from another service? Settings → Import → choose your Pocket, Omnivore or Instapaper export, bookmarks or a plain list of links.',
        'Make a backup now and then: JSON, an HTML bookmarks file, or Markdown for Obsidian.',
      ],
      ru: [
        'Откройте статью и нажмите значок расширения (или Alt+Shift+S), чтобы сохранить её.',
        'Читайте из библиотеки или окна расширения — онлайн или офлайн. Позиция чтения запоминается.',
        'Делайте выделения четырёх цветов с заметками; копируйте их в Markdown.',
        'Переезжаете с другого сервиса? Настройки → Импорт → выберите экспорт Pocket, Omnivore или Instapaper, закладки или простой список ссылок.',
        'Время от времени делайте резервную копию: JSON, файл закладок HTML или Markdown для Obsidian.',
      ],
    },
    byeNote: null,
  },
  {
    slug: 'ai-chat-organizer', public: true, tag: { en: 'AI chats', ru: 'ИИ-чаты' },
    name: { en: 'AI Chat Organizer', ru: 'Органайзер ИИ-чатов' },
    tagline: { en: 'folders, search, export', ru: 'папки, поиск, экспорт' },
    pitch: {
      en: 'Folders, tags, pins and local full-text search for your AI chats. Export to Markdown, HTML, PDF. For ChatGPT, Claude and Gemini.',
      ru: 'Папки, теги, закрепление и локальный поиск по вашим ИИ-чатам. Экспорт в Markdown, HTML, PDF. Для ChatGPT, Claude и Gemini.',
    },
    disclaimer: {
      en: 'Free and open source (MIT). Not affiliated with the makers of these services.',
      ru: 'Бесплатно и с открытым исходным кодом (MIT). Расширение не связано с разработчиками этих сервисов.',
    },
    steps: {
      en: [
        'Click the toolbar icon and enable the sites where you chat with AI. The browser asks for permission for each site separately.',
        'Open a conversation — the organizer button appears on the right edge of the page.',
        'Create a folder and drag conversations into it from the list, or use the small button that appears on hover.',
        'Search the text of conversations you have opened: words, “exact phrases”, -exclusions.',
        'Export to Markdown, HTML, JSON, TXT or PDF — or many chats at once as a .zip.',
      ],
      ru: [
        'Нажмите значок на панели и включите сайты, где вы общаетесь с ИИ. Браузер спросит разрешение для каждого сайта отдельно.',
        'Откройте диалог — кнопка органайзера появится у правого края страницы.',
        'Создайте папку и перетащите в неё диалоги из списка или воспользуйтесь маленькой кнопкой, которая появляется при наведении.',
        'Ищите по тексту открытых вами диалогов: слова, «точные фразы», -исключения.',
        'Экспортируйте в Markdown, HTML, JSON, TXT или PDF — или много диалогов сразу одним .zip.',
      ],
    },
    byeNote: null,
  },
  {
    slug: 'tab-vault', public: false, tag: { en: 'Tabs', ru: 'Вкладки' },
    name: { en: 'Tab Vault', ru: 'Сейф вкладок' },
    tagline: null,
    pitch: {
      en: 'Saves your tabs in one click and never loses them: an operation log, automatic snapshots and a backup file on your disk.',
      ru: 'Сохраняет вкладки одним нажатием и никогда их не теряет: журнал операций, автоматические снимки и файл бэкапа на диске.',
    },
    disclaimer: null,
    steps: {
      en: [
        'Click the icon or press Alt+Shift+V to save all tabs in the window (pinned tabs can stay).',
        'Open the vault page: tabs are grouped by date, double-click a group to rename it.',
        'Press “/” to search titles and addresses across all groups; drag tabs between groups.',
        'Lock a group to protect it from deletion; delete with undo.',
        'Import from OneTab, HTML bookmarks or a plain list of URLs; backups go to Downloads/TabVault on a schedule.',
      ],
      ru: [
        'Нажмите значок или Alt+Shift+V, чтобы сохранить все вкладки окна (закреплённые можно оставить).',
        'Откройте страницу сейфа: вкладки сгруппированы по дате, двойной щелчок по группе переименовывает её.',
        'Клавиша «/» ищет по заголовкам и адресам во всех группах; вкладки можно перетаскивать между группами.',
        'Закрепите группу замком, чтобы её нельзя было удалить; удаление можно отменить.',
        'Импортируйте из OneTab, HTML-закладок или списка адресов; бэкапы по расписанию попадают в Загрузки/TabVault.',
      ],
    },
    byeNote: {
      en: 'Backup files in Downloads/TabVault stay on your disk — delete that folder yourself if you no longer need them.',
      ru: 'Файлы бэкапа в Загрузки/TabVault остаются на диске — удалите папку вручную, если они больше не нужны.',
    },
  },
  {
    slug: 'marketplace-buyer', public: false, tag: { en: 'Shopping', ru: 'Покупки' },
    name: { en: 'Honest Price', ru: 'Честная цена' },
    tagline: { en: 'price history for WB, Ozon, Kaspi', ru: 'история цен WB, Ozon и Kaspi' },
    pitch: {
      en: 'For Wildberries, Ozon and Kaspi shoppers: price history, fake-discount and review checks, price alerts. All on your device.',
      ru: 'Для покупателей Wildberries, Ozon и Kaspi: история цен, проверка «скидок» и отзывов, слежение за ценой. Всё на вашем устройстве.',
    },
    disclaimer: {
      en: 'Works on Wildberries, Ozon (ozon.ru and ozon.kz) and Kaspi.kz. The extension is independent and not affiliated with these marketplaces.',
      ru: 'Работает на Wildberries, Ozon (ozon.ru и ozon.kz) и Kaspi.kz. Расширение независимое и не связано с этими площадками.',
    },
    steps: {
      en: [
        'Open a product page on Wildberries, Ozon or Kaspi: a collapsible panel appears under the price.',
        'Read the verdict — below usual, usual, above usual or “suspicious discount” — and the chart of the prices you have seen.',
        'Click “Watch price” and set a target price or a drop of X %.',
        'The extension checks only the items on your list (about every 6 hours) and shows a browser notification when the condition is met.',
        'Choose how long history is kept; export to CSV/JSON or delete everything in settings.',
      ],
      ru: [
        'Откройте страницу товара на Wildberries, Ozon или Kaspi: под ценой появится сворачиваемая панель.',
        'Посмотрите вердикт — «ниже обычной», «обычная», «выше обычной» или «подозрительная скидка» — и график цен, которые вы видели.',
        'Нажмите «Следить за ценой» и задайте целевую цену или снижение на X %.',
        'Расширение проверяет только товары из вашего списка (примерно раз в 6 часов) и показывает уведомление, когда условие выполнено.',
        'В настройках выберите срок хранения истории; экспортируйте в CSV/JSON или удалите всё.',
      ],
    },
    byeNote: null,
  },
  {
    slug: 'gost-cite', public: false, tag: { en: 'Study', ru: 'Учёба' },
    name: { en: 'GOST Cite', ru: 'ГОСТ-ссылки' },
    tagline: { en: 'Russian GOST bibliography references', ru: 'список литературы по ГОСТу' },
    pitch: {
      en: 'One-click bibliographic references in Russian GOST formats (7.0.100-2018, 7.0.5-2008, 7.1-2003). Export to .docx.',
      ru: 'Оформление ссылок и списка литературы по ГОСТ Р 7.0.100-2018, 7.0.5-2008 и 7.1-2003 в один клик. Экспорт в .docx.',
    },
    disclaimer: null,
    steps: {
      en: [
        'Open an article, an e-library book page or any web page.',
        'Click the extension icon or press Alt+Shift+G — the metadata fills the form automatically.',
        'Check the fields (the reference updates live), pick a standard and the source type.',
        'Press “Copy” or “Add to list” to build your bibliography (several lists are supported).',
        'Export the list to .docx (Times New Roman 14, 1.5 spacing) or .txt.',
      ],
      ru: [
        'Откройте статью, страницу книги в электронной библиотеке или любую веб-страницу.',
        'Нажмите значок расширения или Alt+Shift+G — метаданные заполнят форму автоматически.',
        'Проверьте поля (ссылка обновляется на лету), выберите стандарт и тип источника.',
        'Нажмите «Копировать» или «Добавить в список», чтобы собрать список литературы (списков может быть несколько).',
        'Экспортируйте список в .docx (Times New Roman 14, интервал 1,5) или .txt.',
      ],
    },
    byeNote: null,
  },
  {
    slug: 'clean-search', public: false, tag: { en: 'Search', ru: 'Поиск' },
    name: { en: 'Clean Search', ru: 'Чистый поиск' },
    tagline: { en: 'Google without AI Overviews and ads', ru: 'Google без ИИ-обзоров и рекламы' },
    pitch: {
      en: 'Hides AI Overviews, AI Mode, ads and clutter on Google. Web-only mode and a site blocklist for Google, Bing and DuckDuckGo.',
      ru: 'Скрывает ИИ-обзоры, AI Mode, рекламу и лишние блоки Google. Режим «только веб» и чёрный список сайтов для Google, Bing и DuckDuckGo.',
    },
    disclaimer: null,
    steps: {
      en: [
        'Run a search on Google, Bing or DuckDuckGo — AI Overviews, the AI Mode tab and ads are hidden by default.',
        'Open the options to hide more blocks one by one: “People also ask”, videos, shopping, top stories, forums, related searches.',
        'Turn on web-only mode to open searches straight on the “Web” tab (links only).',
        'Hover a result and press ⊘ to hide that site; you have 6 seconds to undo. Manage the blocklist in settings.',
        'The toolbar badge shows how many items are hidden; “Show hidden” outlines them and says why.',
      ],
      ru: [
        'Сделайте поиск в Google, Bing или DuckDuckGo — ИИ-обзоры, вкладка AI Mode и реклама скрыты по умолчанию.',
        'В настройках можно скрыть и другие блоки по одному: «Похожие запросы», видео, покупки, главные новости, форумы, связанные запросы.',
        'Включите режим «только веб», чтобы поиск сразу открывался на вкладке «Веб» (только ссылки).',
        'Наведите на результат и нажмите ⊘, чтобы скрыть сайт; отменить можно в течение 6 секунд. Чёрным списком управляйте в настройках.',
        'Значок на панели показывает, сколько элементов скрыто; «Показать скрытое» обводит их и объясняет причину.',
      ],
    },
    byeNote: null,
  },
  {
    slug: 'bilingual-translate', public: false, tag: { en: 'Translation', ru: 'Перевод' },
    name: { en: 'Bilingual Translate', ru: 'Двуязычный перевод' },
    tagline: { en: 'free page translation', ru: 'бесплатный перевод страниц' },
    pitch: {
      en: 'Translation shown next to the original. Free, no sign-in: Chrome’s built-in translator runs right on your device.',
      ru: 'Перевод страниц рядом с оригиналом. Бесплатно, без входа: встроенный в Chrome переводчик работает прямо на устройстве.',
    },
    disclaimer: null,
    steps: {
      en: [
        'Open a page in another language and press “Translate page” in the popup, Alt+Shift+Y, or the context-menu item.',
        'Pick a mode: under each paragraph, result only, or on hover. Press again to restore the original.',
        'Select a phrase and press the small “Aあ” button to get a translation bubble with a Copy button.',
        'Choose your target language and the sites to translate automatically in settings.',
        'On an older or mobile browser, add your own DeepL or Google Cloud Translation key (optional).',
      ],
      ru: [
        'Откройте страницу на другом языке и нажмите «Перевести страницу» в окне расширения, Alt+Shift+Y или пункт контекстного меню.',
        'Выберите режим: под каждым абзацем, только перевод или по наведению. Повторное нажатие возвращает оригинал.',
        'Выделите фразу и нажмите маленькую кнопку «Aあ» — появится окошко с переводом и кнопкой «Копировать».',
        'В настройках выберите язык перевода и сайты, которые переводить автоматически.',
        'В старом или мобильном браузере можно добавить собственный ключ DeepL или Google Cloud Translation (по желанию).',
      ],
    },
    byeNote: null,
  },
  {
    slug: 'ai-context', public: false, tag: { en: 'AI · Markdown', ru: 'ИИ · Markdown' },
    name: { en: 'AI Context', ru: 'Контекст для ИИ' },
    tagline: { en: 'page to Markdown for ChatGPT, Claude, Gemini', ru: 'страница в Markdown для ChatGPT, Claude, Gemini' },
    pitch: {
      en: 'Page, selection or several tabs → clean Markdown for your AI chat. No server, no account.',
      ru: 'Страница, выделение или несколько вкладок → чистый Markdown для вашего ИИ-чата. Без сервера и аккаунта.',
    },
    disclaimer: {
      en: 'Works with any chat that accepts pasted text: you use your own subscription and account with the service you choose. The extension is not affiliated with the companies behind these services.',
      ru: 'Работает с любым чатом, куда можно вставить текст: вы пользуетесь своей подпиской и своим аккаунтом в выбранном сервисе. Расширение не связано с разработчиками этих сервисов.',
    },
    steps: {
      en: [
        'Open a page and press Alt+Shift+M — the main content is copied as clean Markdown, without menus, ads or banners.',
        'Or click the icon to choose: whole page, a selected fragment, or several tabs combined into one document.',
        'Add a header and a ready-made prompt template (summarize, find contradictions, explain simply, translate).',
        'Watch the character and token counter; trim to your limit at paragraph boundaries if needed.',
        'Paste into your AI chat with Ctrl+V — the extension never types into other websites.',
      ],
      ru: [
        'Откройте страницу и нажмите Alt+Shift+M — основное содержимое копируется как чистый Markdown, без меню, рекламы и баннеров.',
        'Или нажмите значок и выберите: вся страница, выделенный фрагмент или несколько вкладок в одном документе.',
        'Добавьте шапку и готовый шаблон промпта (пересказ, поиск противоречий, объяснение простыми словами, перевод).',
        'Следите за счётчиком символов и токенов; при необходимости обрежьте по границам абзацев до нужного лимита.',
        'Вставьте в чат с ИИ через Ctrl+V — расширение никогда ничего не вводит на чужих сайтах.',
      ],
    },
    byeNote: null,
  },
];

export function fullName(e, l) {
  return e.tagline && e.tagline[l] ? `${e.name[l]} — ${e.tagline[l]}` : e.name[l];
}
