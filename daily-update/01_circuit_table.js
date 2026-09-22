// Progress-by-circuit table: carry MV junction boxes set with no circuit stated (dashboard
// mvPorLinea.unstated.jb) in the unallocated row and the project total, then re-derive.
// Paths resolved from the repo root (Jose, Sep 22).
const fs = require('fs'), path = require('path'), cp = require('child_process');
const root = path.resolve(__dirname, '..');
function patch(rel, pairs) {
  const p = path.join(root, rel); let s = fs.readFileSync(p, 'utf8');
  for (const [a, b] of pairs) {
    const n = s.split(a).length - 1;
    if (n !== 1) { if (s.includes(b)) continue; throw new Error(rel + ': anchor count ' + n + ' for ' + a.slice(0, 70)); }
    s = s.replace(a, b);
  }
  fs.writeFileSync(p, s);
}
patch('tools/sync.js', [
  ["boxes: Number(u.boxes) || 0, mvTerm: Number(um.inv) || 0 },", "boxes: Number(u.boxes) || 0, mvJb: Number(um.jb) || 0, mvTerm: Number(um.inv) || 0 },"],
  ["      mvJb: cell(sum('mvJb'), sumS('mvJb')),", "      mvJb: cell(sum('mvJb') + (Number(um.jb) || 0), sumS('mvJb')),"]
]);
patch('index.html', [
  ["if (u.harness || u.homerun || u.trunk || u.boxes || u.mvTerm) {", "if (u.harness || u.homerun || u.trunk || u.boxes || u.mvJb || u.mvTerm) {"],
  ["uc(u.harness) + uc(u.homerun) + uc(u.trunk) + uc(u.boxes) + '<td class=\"n\">&mdash;</td>' + uc(u.mvTerm)", "uc(u.harness) + uc(u.homerun) + uc(u.trunk) + uc(u.boxes) + uc(u.mvJb) + uc(u.mvTerm)"]
]);
cp.execFileSync('node', [path.join(root, 'tools/sync.js'), '/tmp/dash_stripped.js', '--write'], { cwd: root, stdio: 'inherit' });
console.log('circuit table re-derived');
