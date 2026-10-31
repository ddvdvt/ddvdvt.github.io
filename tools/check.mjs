#!/usr/bin/env node
// Link checker: crawls the running site (default http://localhost:8080) and verifies
// required pages exist, internal links/images/scripts resolve, #fragments exist, and no external resources are embedded.
import { EXTENSIONS } from './data/extensions.mjs';
const BASE = process.argv[2] || 'http://localhost:8080';
const required = ['/', '/index.html', '/privacy/index.html', '/404.html', '/robots.txt', '/sitemap.xml', '/favicon.svg', '/assets/site.css', '/assets/site.js', '/assets/stores.js', '/assets/boot.js'];
for (const e of EXTENSIONS) for (const k of ['welcome', 'bye', 'privacy']) required.push(`/${k}/${e.slug}.html`);
const seen = new Map(), problems = [], ids = new Map();
async function get(path) {
  const r = await fetch(BASE + path);
  return { ok: r.status === 200, status: r.status, text: r.headers.get('content-type')?.match(/html|xml|text|javascript|css|svg/) ? await r.text() : (await r.arrayBuffer(), '') };
}
for (const p of required) { const r = await get(p); if (!r.ok) problems.push(`MISSING required ${p} (${r.status})`); }
const queue = ['/index.html', '/404.html', '/privacy/index.html', ...required.filter((p) => p.endsWith('.html'))];
let pages = 0, links = 0;
while (queue.length) {
  const p = queue.pop();
  if (seen.has(p)) continue;
  const r = await get(p); seen.set(p, r.status);
  if (!r.ok) { problems.push(`BROKEN ${p} (${r.status})`); continue; }
  if (!p.endsWith('.html') && p !== '/') continue;
  pages++;
  ids.set(p, new Set([...r.text.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  if (/\sstyle="/.test(r.text)) problems.push(`inline style attribute in ${p} (violates CSP)`);
  if (/<script(?![^>]*\ssrc=)[^>]*>/.test(r.text)) problems.push(`inline script in ${p}`);
  for (const m of r.text.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const u = m[1]; links++;
    if (/^(mailto:|tel:|data:)/.test(u)) continue;
    if (/^https?:\/\//.test(u)) {
      if (/\ssrc="/.test(m[0]) || /rel="stylesheet"/.test(r.text.slice(Math.max(0, m.index - 40), m.index))) problems.push(`external resource ${u} in ${p}`);
      continue;
    }
    const [path0, frag] = u.split('#');
    const target = path0 === '' ? p : new URL(path0, 'http://x' + p).pathname;
    const norm = target.endsWith('/') ? target + 'index.html' : target;
    if (!seen.has(norm) && !queue.includes(norm)) queue.push(norm);
    if (frag) { (globalThis.fragChecks ||= []).push([p, norm, frag]); }
  }
}
for (const [from, to, frag] of globalThis.fragChecks || []) {
  if (!ids.has(to)) continue;
  if (!ids.get(to).has(frag)) problems.push(`missing #${frag} on ${to} (linked from ${from})`);
}
console.log(`pages crawled: ${pages}, links checked: ${links}, required: ${required.length}`);
if (problems.length) { console.log([...new Set(problems)].join('\n')); process.exit(1); }
console.log('OK: all required pages exist, no broken internal links/fragments, no external resources, no inline style/script');
