# Privacy Policy — AI Chat Organizer

_Date: 26.10.2026_

## What data is processed

- **Your chat organization:** folders, tags, pins, your own chat names and, for each chat, the service, the identifier from the address, the title and the page address.
- **The text of open chats** (if "Remember open chats for search" is turned on for that site). When you open a chat on an enabled site, the extension reads the visible message text and the chat title from the page and saves them for search and export. The extension does **not** call the services' APIs, does **not** download history in the background and does not open chats by itself: only what you opened yourself and what is rendered on the screen is saved.
- **Prompts** from your library and **settings** (which sites are enabled, what to remember).
- **A service marker about a site's markup** ("markup OK / site changed" and the time of the check) — without any chat content.

## Where the data is stored

Only locally in your browser: `chrome.storage.local` (folders, tags, prompts, settings), the extension's IndexedDB (texts of open chats) and `chrome.storage.session` (temporary transfer of a chat to the print page, cleared when the browser is closed). The data is not synchronised and is not transmitted to us or to third parties.

## What the extension does not do

- It sends no network requests at all: no servers, analytics, advertising, telemetry or accounts.
- It gets no access to sites without your permission. At installation there is no access to any site; access to chatgpt.com, claude.ai and gemini.google.com is requested separately when you enable a site, and can be revoked at any time.
- It does not expose your data to site scripts: the on-page panel is in a closed Shadow DOM, and on one service's page only that service's chats are visible.
- It does not load or execute remote code.

## The author's site pages

After installation the extension opens a tab with a short guide on the author's site once, and after removal the browser opens a "why did you uninstall?" page. These are ordinary static pages: the extension adds no data or identifiers to their addresses and transmits nothing to them.

## Export and deletion

- Markdown, HTML, JSON, TXT, .zip files and the .json backup are created right in the browser and saved wherever you choose. The PDF is produced by the browser itself through the print dialog.
- You can turn off saving of texts for any site and delete already saved texts in the organizer → "Settings". The same place has "Forget the history of open chats" and "Delete all data".
- When the extension is removed, the browser deletes all of its data.

## Contact

Questions can be asked through the issues of the project's repository on GitHub.
