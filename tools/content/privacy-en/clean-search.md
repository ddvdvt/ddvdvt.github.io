# Privacy Policy — Clean Search

_Date: 22.10.2026_

## What data is processed

- **Search results pages** of Google, Bing and DuckDuckGo. The extension reads their structure right in the browser to find the blocks and links that need to be hidden. Search queries and results are not saved or transmitted anywhere.
- **Settings:** which blocks to hide, the "web only" mode, the chosen search engines and the rules update address, if you specified one.
- **The site blocklist** that you compiled.
- **Downloaded rules**, if you turned on their update over the network.

## Where the data is stored

All data is stored only locally, in your browser's `chrome.storage.local`. It is not synchronised and is not transmitted to the author or to third parties.

## Network requests

By default the extension makes no network requests at all.

If you yourself turn on "Update rules from JSON at an address", the extension once a day, and also on the "Check now" button, downloads a file from the HTTPS address you specified:

- the request is sent without cookies and contains none of your data, queries or list of sites;
- only data (JSON) is accepted in response, and it is validated against a schema;
- no code is loaded or executed from the network.

The "web only" mode makes no requests of its own. It only adds `udm=14` to the Google search address that you open yourself.

After installation the extension opens a tab with a short guide on the author's site once, and after removal the browser opens a "why did you uninstall?" page. These are ordinary static pages: the extension adds no data or identifiers to their addresses and transmits nothing to them.

## What the extension does not do

- No analytics, telemetry, advertising or accounts.
- No access to sites other than the results pages of Google, Bing and DuckDuckGo.
- No remote code is executed.

## Deleting data

Clear the blocklist on the settings page or simply remove the extension — all data will be deleted along with it.

## Contact

Privacy questions: erlan.asimkhanov02@gmail.com.
