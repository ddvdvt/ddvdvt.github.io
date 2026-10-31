// Tiny Markdown -> HTML converter, enough for the PRIVACY.md files (headings, paragraphs,
// nested lists, tables, bold/italic/code, http(s) links, horizontal rules).
export function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function inline(src) {
  const codes = [];
  let s = src.replace(/`([^`]+)`/g, (_, c) => {
    codes.push(`<code>${esc(c)}</code>`);
    return `\u0000${codes.length - 1}\u0000`;
  });
  s = esc(s);
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) =>
    /^https?:\/\//.test(u) ? `<a href="${u}" rel="noopener">${t}</a>` : t);
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[\s(])\*([^*\s][^*]*)\*(?=[\s.,;:)]|$)/g, '$1<em>$2</em>');
  s = s.replace(/(^|[\s(])_([^_]+)_(?=[\s.,;:)]|$)/g, '$1<em>$2</em>');
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => codes[+i]);
}

const LIST = /^(\s*)([-*]|\d+\.)\s+(.*)$/;

function parseList(lines, start) {
  const m0 = lines[start].match(LIST);
  const indent = m0[1].length;
  const ordered = /\d/.test(m0[2]);
  const items = [];
  let i = start;
  while (i < lines.length) {
    const line = lines[i];
    const m = line.match(LIST);
    if (m && m[1].length === indent) { items.push({ text: m[3], kids: '' }); i++; continue; }
    if (m && m[1].length > indent && items.length) {
      const r = parseList(lines, i);
      items[items.length - 1].kids += r.html;
      i = r.next;
      continue;
    }
    if (m && m[1].length < indent) break;
    if (line.trim() === '') {
      let j = i + 1;
      while (j < lines.length && lines[j].trim() === '') j++;
      const mj = j < lines.length ? lines[j].match(LIST) : null;
      if (mj && mj[1].length >= indent) { i = j; continue; }
      break;
    }
    if (/^\s+\S/.test(line) && items.length) { items[items.length - 1].text += ' ' + line.trim(); i++; continue; }
    break;
  }
  const tag = ordered ? 'ol' : 'ul';
  const html = `<${tag}>${items.map((it) => `<li>${inline(it.text)}${it.kids}</li>`).join('')}</${tag}>`;
  return { html, next: i };
}

export function mdToHtml(md) {
  const lines = md.replace(/\r/g, '').split('\n');
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === '') { i++; continue; }
    let m;
    if ((m = line.match(/^(#{1,3})\s+(.*)$/))) {
      const level = m[1].length;
      out.push(`<h${level}>${inline(m[2])}</h${level}>`);
      i++; continue;
    }
    if (/^---+\s*$/.test(line)) { out.push('<hr>'); i++; continue; }
    if (line.trim().startsWith('|') && i + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
      const cells = (l) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      const head = cells(line);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) { rows.push(cells(lines[i])); i++; }
      out.push(
        `<div class="table-wrap"><table><thead><tr>${head.map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>` +
        rows.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('') +
        '</tbody></table></div>');
      continue;
    }
    if (LIST.test(line)) {
      const r = parseList(lines, i);
      out.push(r.html);
      i = r.next; continue;
    }
    const para = [];
    while (i < lines.length && lines[i].trim() !== '' && !/^(#{1,3}\s|---+\s*$)/.test(lines[i]) && !LIST.test(lines[i]) && !lines[i].trim().startsWith('|')) {
      para.push(lines[i].trim()); i++;
    }
    const text = para.join(' ');
    const meta = /^(_[^_]+_|\*[^*]+\*)$/.test(text);
    out.push(`<p${meta ? ' class="meta"' : ''}>${inline(text)}</p>`);
  }
  return out.join('\n');
}
