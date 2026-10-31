# Privacy Policy — Video Declutter

_Date: 26.10.2026_

## What data is processed

- **YouTube pages** (`www.youtube.com`). The extension reads their structure right in the browser in order to hide the parts you selected, redirect Shorts and turn off autoplay. What you watch and search for is not saved or transmitted anywhere.
- **Settings:** which items to hide, the mode, the focus schedule, the reminder, whether rule updates are enabled.
- **Rule state:** for each rule, when it last fired and how many times in a row it found no target. These are timestamps only, without page addresses.
- **Today's time counter** (a single number of seconds and a date). It is reset at midnight.
- **Downloaded rules**, if you have enabled rule updates.

## Where the data is stored

Only locally, in your browser's `chrome.storage.local`. Nothing is synchronised and nothing is transmitted to the author or to third parties.

## Network requests

By default the extension makes no network requests at all.

If you turn on "Update rules from the author's site", the extension once a day (and on the "Check now" button) downloads a single file, `rules/youtube-clean/selectors.signed.json`, from the author's site:

- the request is sent without cookies and contains none of your data, settings or history;
- only a file with data (CSS selectors) is accepted, signed with the author's key and validated against a schema;
- no code is loaded or executed from the network.

The extension does not block or modify YouTube's network requests.

After installation the extension opens a tab with a short guide on the author's site once, and after removal the browser opens a "why did you uninstall?" page. These are ordinary static pages: the extension adds no data or identifiers to their addresses and transmits nothing to them.

## What the extension does not do

- No analytics, telemetry, advertising or accounts.
- No access to any sites other than `www.youtube.com`.
- No remote code is executed.

## Deleting data

"Reset settings" on the settings page deletes the settings, the rule state and the downloaded rules. When the extension is removed, the browser deletes all of its data.

## Contact

Questions can be asked through the issues of the project's repository on GitHub.
