# Privacy Policy: Bilingual Translate

In short: the extension collects no data; it has no server, analytics, advertising or accounts.

## What is stored and where

| Data | Where | Why |
|---|---|---|
| Settings: translation language, mode, engine, appearance, the "always translate" site list | `chrome.storage.sync`. If synchronisation is turned on in the browser, Chrome synchronises them between your devices through your Google account. | To remember your choice. |
| DeepL and Google Cloud keys, if you entered them | `chrome.storage.local`, on this device only, without synchronisation. | To contact the service you chose. |
| Translations of the current page | Tab memory. Deleted when you close or reload the page. | So that nothing is translated again when the mode changes. |

Browsing history, page content and selected text are not recorded or saved anywhere.

## What is transmitted and where

- **Chrome's built-in translator (default).** Translation is performed **on your device**, and the page text is not sent anywhere. The first time a language pair is used, Chrome itself downloads the translation model from its servers. This is done by the browser, not by the extension.
- **DeepL API, only if you saved your key.** The text of visible paragraphs or the selected fragment, the translation language and your key are sent **directly from your browser** to `api-free.deepl.com` or `api.deepl.com`. The processing is covered by [DeepL's policy](https://www.deepl.com/privacy).
- **Google Cloud Translation, only if you saved your key.** The same data is sent directly to `translation.googleapis.com`. The key is passed in a request header, not in the address. [Google Cloud's terms](https://cloud.google.com/terms/cloud-privacy-notice) apply.

Nothing is transmitted to the extension's author. There are no intermediate servers.

## Pages on the author's site

After the first installation the extension opens a welcome page on the author's site once, and after removal Chrome opens a "Why did you uninstall?" page. These are static pages without cookies, analytics or forms. The extension adds no data to their address other than the extension's own name.

## Permissions

Access to sites and to translation APIs is requested only at the moment it is needed:

- `activeTab`: when you click the icon, a menu item or a hotkey;
- access to a specific site: when you turn on "Always translate" for it;
- access to DeepL or Google: when you save a key.

If you delete a key or a site, the extension revokes the corresponding permission.

## Deleting data

Remove the extension and Chrome will erase all of its data. A key can also be deleted separately, with the "Delete" button in the extension's settings.

## Contact

Privacy questions: erlan.asimkhanov02@gmail.com.
