# Privacy Policy — Save Picture As…

_Date: 26.10.2026_

## What data is processed

- **The image you selected in the context menu.** The extension receives it only after you click the menu item: it reads it from the page (through temporary `activeTab` access to that tab) or downloads it from the image's address if you have allowed access to that server. The image is converted to PNG, JPG or WebP right in the browser and saved to the downloads folder (or copied to the clipboard). The extension keeps no copy.
- **The image address, its description (`alt`) and the page title** — only to compose the file name. They are not saved anywhere.
- **Settings** (default format, quality, background colour, name pattern, etc.) are stored in `chrome.storage.local`.
- While a site-access request is open, information about the unfinished save (image address, tab) is kept in `chrome.storage.session` — this is browser memory, cleared when the browser is closed.

## Where the data goes

Nowhere. The extension has no server. The only network requests are the download of the image itself from its own address, as the browser does when it displays the page. Nothing is transmitted to us or to third parties.

## Site access

At installation the extension gets no access to any sites. If an image lives on another server and cannot be read from the page, the extension asks for permission for that particular server (or, if you decide so, for all sites). The permission is used only to download images that you selected in the menu. The list of granted permissions and "Remove" buttons are in the extension's settings.

## What the extension does not do

- It collects no statistics, shows no advertising and requires no account.
- It does not read pages in the background and does not embed anything into sites in advance: code runs on a tab only after your click.
- It does not load or execute remote code.

## The author's site pages

After installation the extension opens a tab with a short guide on the author's site once, and after removal the browser opens a "why did you uninstall?" page. These are ordinary static pages: the extension adds no data or identifiers to their addresses and transmits nothing to them.

## Deleting data

Press "Reset settings" on the settings page or simply remove the extension — the settings and permissions are removed along with it.

## Contact

Questions can be asked through the issues of the project's repository on GitHub.
