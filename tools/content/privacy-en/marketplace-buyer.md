# Privacy Policy — Honest Price

*In effect since version 1.0.0.*

**In short:** all data is stored only in your browser on this device. The extension sends no data to the author or to third parties. There is no analytics, advertising or accounts.

## What is stored on the device

| Data | Where | Why |
|---|---|---|
| Prices of the products you opened on Wildberries, Ozon and Kaspi: marketplace, item number, time, price, card or wallet price, crossed-out price | The extension's IndexedDB | Price history, the chart and the "discount" verdict |
| Watch list: item number, name, product link, targets and latest prices | `chrome.storage.local` | Background price checks and notifications |
| Settings | `chrome.storage.local` | — |

Browsing history, addresses of other sites, reviews, marketplace account data and cookies are **not stored**. Reviews on the page are analysed in memory and are not written anywhere.

The history retention period is configurable: 30 days, 90 days, 180 days, 1 year (default), 2 years or unlimited. Old records are deleted automatically. Everything can be exported (JSON or CSV), imported and deleted in the settings. When the extension is removed, the browser deletes all of its data.

## What network requests the extension makes

Only to the marketplaces themselves, **without cookies** (`credentials: "omit"`):

1. **On a Wildberries product page** — a request to the public product card (`card.wb.ru`) and to reviews (`feedback-view-01.wb.ru` / `feedback-view-02.wb.ru`, fallbacks `feedbacks1.wb.ru` / `feedbacks2.wb.ru`). This is the same data the page itself loads.
2. **Background check of watched products** — only for products you added to the watch list. The check runs roughly every 6 hours (the interval is configurable, but not more often than every 3 hours), at most 20 products at a time, one request at a time with pauses of 4–10 seconds:
   - Wildberries: `card.wb.ru` (after an HTTP 403 refusal — no more than once a day, and less often);
   - Ozon: the JSON data of the product page on `www.ozon.ru` or `ozon.kz` (wherever you added the product);
   - Kaspi: the product page on `kaspi.kz`.
3. **Only if you yourself turned it on** — the update of recognition rules, with an address you specified: once a day a JSON file with selectors is downloaded from that address. The file contains data only, no code is executed. Request addresses in it can point only to marketplace hosts.

The extension contacts nothing else.

## Pages on the author's site

After the first installation the extension opens a welcome page on the author's site once, and after removal Chrome opens a "Why did you uninstall?" page. These are static pages without cookies, analytics or forms. The extension adds no data to their address other than the extension's own name.

## Permissions

- `storage` — settings and the watch list.
- `alarms` — the infrequent background check of prices from the watch list.
- `notifications` — a notification about a price drop.
- Access to `www.wildberries.ru`, `www.ozon.ru`, `ozon.kz`, `www.ozon.kz`, `kaspi.kz` — to show the panel on product pages and, if you turn that option on, to hide ad cards.
- Access to `card.wb.ru`, `feedback-view-01.wb.ru`, `feedback-view-02.wb.ru`, `feedbacks1.wb.ru`, `feedbacks2.wb.ru` — Wildberries prices and reviews (the site loads them separately from the page).
- Optional access to a single HTTPS address — requested only when you turn on the rules update.

## The future

In the future there may be a **voluntary** anonymous exchange of prices (only marketplace, item number, price and time rounded to the hour). It will be off by default and will start working only after your explicit consent on a separate screen. Before that, this policy will be updated. The project is described in docs/DATASET.md. In version 1.x this feature does not exist.

## Contact

Questions can be asked through the issues of the project's repository on GitHub.
