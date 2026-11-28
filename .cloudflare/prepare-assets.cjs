const { copyFileSync, mkdirSync } = require('node:fs');
const { join } = require('node:path');

const source = join(__dirname, '..');
const output = join(__dirname, 'site');
const assets = [
  'index.html',
  'notasyon-saat.js',
  'notasyon-ust-menu.css',
  'ogrenci_26b_imzali_kisayol_logo.png',
  'ogrenci_26b_ust_logo.png',
  'yeni_notasyon_logo.png',
];

mkdirSync(output, { recursive: true });
for (const asset of assets) {
  copyFileSync(join(source, asset), join(output, asset));
}
