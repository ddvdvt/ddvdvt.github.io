# Privacy Policy — AI Context

*Last updated: 22 October 2026*

## In short

The extension sends nothing anywhere. The text of pages is processed on your device and ends up only in your clipboard.

## What data is processed

- **Page content.** When you click the extension icon, a context-menu item or a hotkey, the extension reads the text of the current tab (or of the selected tabs in the "Several tabs" mode), turns it into Markdown and shows it in the extension's window or copies it straight to the clipboard. This text is **not saved** and is not transmitted to us or to third parties.
- **Tab titles and addresses** — only in the "Several tabs" mode and only to show the list from which you choose. They are not saved.
- **Settings** (prompt templates, token limit, enabling the header and links, etc.) are stored in `chrome.storage.local` on your device.
- **Window state** (the selected mode and the ticked tabs) is stored in `chrome.storage.session` so that the extension's window opens in the same mode; it is deleted when the browser is closed.

## What the extension does not do

- It does not send data to servers — the extension has no server.
- It uses no analytics, advertising, trackers or accounts.
- It does not load remote code.
- It does not insert text into the ChatGPT, Claude or Gemini sites: the "Open…" button only opens the site in a new tab, and you paste the text yourself (Ctrl+V). What happens to the text next is determined by the policy of the AI service you choose.

## Pages on the author's site

After the first installation the extension opens a welcome page on the author's site once, and after removal Chrome opens a "Why did you uninstall?" page. These are static pages without cookies, analytics or forms. The extension adds no data to their address other than the extension's own name.

## Permissions

- `activeTab`, `scripting` — read the current tab on your action.
- `contextMenus`, `clipboardWrite`, `offscreen` — the menu item and writing to the clipboard.
- `storage` — local settings.
- `tabs` and access to sites — **optional**, requested only in the "Several tabs" mode at the moment of use, and access to sites only for the selected tabs. You can revoke them in the extension's settings.

## Contact

Questions about privacy — through the Issues section of the project's repository.
