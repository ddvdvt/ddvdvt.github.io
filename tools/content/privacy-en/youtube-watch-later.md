# Privacy Policy — Watch Later Cleaner & Play Next Queue

_Date: 26.10.2026_

## What data is processed

- **The "Watch later" list.** When you press "Load the whole list", the extension fetches your list (video id, title, channel, duration, percent watched, position) with the same requests that the `www.youtube.com/playlist?list=WL` page itself makes. The list is processed in your tab and is not saved, except for the backups (below).
- **Backups.** Before every removal, a JSON file with the whole loaded list is downloaded — it stays on your computer, in the downloads folder. The three most recent copies are also kept inside the extension so that you can restore videos even if the file gets lost. They can be downloaded or deleted in the settings.
- **Unfinished removal:** which videos are selected (id, title) and how many have already been processed — so that it can continue after the page is reloaded. It can be deleted with the "Forget the unfinished removal" button.
- **The "Play next" queue:** video id, title, channel, duration.
- **Settings:** thumbnail buttons, auto-advance, the queue panel, the "watched" threshold, the removal speed.

## Where the data is stored

Only locally: in your browser's `chrome.storage.local` and in the files you download. Nothing is synchronised and nothing is transmitted to the author or to third parties.

## Network requests

The extension contacts **only `www.youtube.com`**, and only in the way the "Watch later" page itself does in your tab:

- loading the list: `POST /youtubei/v1/browse` (the "Watch later" playlist only);
- removing and restoring videos: `POST /youtubei/v1/browse/edit_playlist` (the "Watch later" playlist only, only removing and adding videos).

So that YouTube accepts these requests as requests from your page, the extension computes, in the page context, the same authorization header that YouTube itself computes (a hash of the `SAPISID` cookie value, the time and the site address). The cookie value is read only for this purpose, in this tab, is not stored, and does not go anywhere other than this request to `www.youtube.com`. The extension does not use the browser's cookies API.

Requests are sent only on your command (load the list, remove, restore). On other YouTube pages the extension makes no requests: the queue buttons and auto-advance work locally.

After installation the extension opens a tab with a short guide on the author's site once, and after removal the browser opens a "why did you uninstall?" page. These are ordinary static pages: the extension adds no data or identifiers to their addresses and transmits nothing to them.

## What the extension does not do

- No analytics, telemetry, advertising or accounts.
- No access to any sites other than `www.youtube.com`; your watch history, subscriptions and other playlists are not read.
- No remote code is executed.

## Deleting data

In the settings: "Delete copies", "Forget the unfinished removal", "Clear" the queue, "Reset settings". When the extension is removed, the browser deletes all of its data; the backup files you have downloaded stay with you.

## Contact

Questions can be asked through the issues of the project's repository on GitHub.
