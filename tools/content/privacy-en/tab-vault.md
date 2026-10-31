# Privacy Policy — Tab Vault

_Updated: 22 October 2026_

**In short: everything stays on your device. The extension sends nothing anywhere.**

## What data is stored

- The addresses (URLs) and titles of the tabs you saved, group names, creation date, the "pinned" mark.
- The operation log (which changes were made to the vault) and automatic vault snapshots — for recovery after failures.
- Extension settings and service marks (time of the last copy, backup file names).

## Where it is stored

- In IndexedDB and `chrome.storage.local` of your browser profile.
- In backup files in the `Downloads/TabVault/` folder on your disk (unless turned off in the settings).
- On export — in the file that you save yourself.

## What is transmitted outside

Nothing. The extension has no server, analytics, advertising, accounts, synchronisation or remote code. Site icons are taken from the browser's local cache (`_favicon`), without network requests. The network is used only when **you yourself** open a saved tab.

After installation the extension opens a tab with a short guide on the author's site once, and after removal the browser opens a "why did you uninstall?" page. These are ordinary static pages: the extension adds no data or identifiers to their addresses and transmits nothing to them.

## Access to pages

The extension does not read the content of web pages and does not inject scripts into them. The `tabs` permission is used only to read a tab's address and title when saving, and to close, unload and open tabs.

## Deleting data

- Delete groups on the vault page or replace the vault with an empty import.
- Removing the extension erases the extension's IndexedDB and `chrome.storage`. Backup files in `Downloads/TabVault/` remain — delete the folder manually if you do not need them.

## Contact

Questions — through the Issues of the project's repository.
