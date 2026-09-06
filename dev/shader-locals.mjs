/**
 * Локальные переменные верхнего уровня внутри void main() — то есть имена, с
 * которыми столкнётся вставка мода (она попадает в этот же scope). Нужно тестам:
 * «Коллизия имён» ищет локалы, которые не занесены в GLSL_RESERVED, — не
 * занёс = мод с таким именем не скомпилируется, а мир исчезнет целиком.
 *
 * Считаем по балансу скобок; комментарии вырезаем — в них тоже бывают скобки,
 * и без этого глубина уезжает в минус.
 */
export function mainLocals(src) {
  const out = [];
  let depth = 0;
  let inMain = false;
  for (const raw of String(src).split('\n')) {
    const line = raw.replace(/\/\/.*$/, '').replace(/\/\*[\s\S]*?\*\//g, '');
    const opens = (line.match(/[{(]/g) || []).length;
    const closes = (line.match(/[})]/g) || []).length;
    if (!inMain) {
      if (/void\s+main\s*\(\s*\)/.test(line)) { inMain = true; depth = opens - closes; }
      continue;
    }
    if (depth === 1) {
      const re = /(?:const\s+)?(float|int|bool|vec[234]|mat[234])\s+([A-Za-z_][A-Za-z0-9_]*(?:\s*,\s*[A-Za-z_][A-Za-z0-9_]*)*)/g;
      for (const m of line.matchAll(re)) {
        for (const n of m[2].split(',')) out.push(n.trim());
      }
    }
    depth += opens - closes;
    if (depth <= 0) break;
  }
  return [...new Set(out)];
}

/** Глобальные имена шейдера (функции, varying, attribute) — уровень файла. */
export function globalNames(src) {
  const out = [];
  for (const m of String(src).matchAll(/^\s*(?:varying|attribute)\s+\w+\s+([A-Za-z_]\w*)/gm)) out.push(m[1]);
  for (const m of String(src).matchAll(/^\s*(?:float|int|bool|vec[234]|mat[234])\s+([A-Za-z_]\w*)\s*\(/gm)) out.push(m[1]);
  return [...new Set(out)];
}
