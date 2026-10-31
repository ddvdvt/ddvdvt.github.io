# Privacy Policy — Read Later

_Date: 26.10.2026_

## What data is processed

- **The articles you save.** After your action (the extension icon, a context-menu item, `Alt+Shift+S`) the extension reads the open tab: the article text, title, author, site name, date, page address and, if enabled in the settings, the article's images.
- **Your actions in the library:** tags, favorites, archive, reading position, highlights and notes.
- **Settings:** font, theme, backup reminders, etc.
- **Import files** (an export from another service, bookmarks, a list of links) are read right in the browser, only when you select them.

## Where the data is stored

Only locally, in your browser: the extension's IndexedDB and `chrome.storage.local`. The data is not synchronised and is not transmitted to the author or to third parties. There is no account.

## What network requests the extension makes

Only those you explicitly asked for:

- **Article images** are downloaded from the article's site when saving, so that you can read it without internet (can be turned off in the settings).
- **"Download text"** for articles saved as links (for example, after an import): the extension downloads those pages from their sites. For this, Chrome asks for permission to access those sites; the permission is removed right after the download. Requests are sent without cookies.
- **"Save selected tabs"**: Chrome asks for access to the sites in order to read the text of those tabs; the access is removed right after saving.
- In the reader, images that were not saved are loaded from the source site by default (this can be turned off: "Show images from the site"). Links are opened without passing the reader's address (`noreferrer`).

There are no author servers, analytics, advertising, telemetry or remote code.

## Browser bookmarks

Access to bookmarks is requested only when importing from bookmarks, is used to read the selected folder, and is removed right after.

## The author's site pages

After installation the extension opens a tab with a short guide on the author's site once, and after removal the browser opens a "why did you uninstall?" page. These are ordinary static pages: the extension adds no data or identifiers to their addresses and transmits nothing to them.

## Export and deletion

- The backup (JSON), bookmarks (HTML) and Markdown (ZIP) are created in the browser and saved wherever you choose. There are no automatic uploads.
- Deleted articles stay in the trash for 30 days and are then deleted permanently. The trash can be emptied earlier.
- To delete everything: settings → "Delete all articles and settings", or remove the extension.

## Contact

Questions can be asked through the issues of the project's repository on GitHub.
