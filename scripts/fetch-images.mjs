#!/usr/bin/env node
/**
 * Télécharge les images du site d'origine (econxstat.ca) dans /public/images.
 *
 *   npm run images:fetch            → télécharge uniquement les images manquantes
 *   npm run images:fetch -- --force → retélécharge tout
 *
 * Le script ne fait jamais échouer un build : en cas d'erreur réseau, il avertit et continue.
 */
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = join(root, 'src/shared/config/images.json');
const force = process.argv.includes('--force');

const exists = async (path) => {
  try {
    const info = await stat(path);
    return info.size > 0;
  } catch {
    return false;
  }
};

const { images } = JSON.parse(await readFile(manifestPath, 'utf8'));
let downloaded = 0;
let skipped = 0;
let failed = 0;

for (const [key, { src, origin }] of Object.entries(images)) {
  const target = join(root, 'public', src);
  if (!force && (await exists(target))) {
    skipped += 1;
    continue;
  }
  try {
    const response = await fetch(origin, { signal: AbortSignal.timeout(30_000) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, buffer);
    downloaded += 1;
    console.log(`✓ ${key} → public${src} (${Math.round(buffer.length / 1024)} Ko)`);
  } catch (error) {
    failed += 1;
    console.warn(`⚠ ${key} : téléchargement impossible (${error.message})`);
  }
}

console.log(
  `\nImages : ${downloaded} téléchargée(s), ${skipped} déjà présente(s), ${failed} en échec.`,
);
