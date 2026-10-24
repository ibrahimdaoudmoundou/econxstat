/**
 * Limiteur de débit en mémoire (fenêtre glissante).
 * Suffisant pour un serveur dédié unique ; sur une plateforme serverless,
 * il agit par instance et sert de première barrière contre les abus.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

export const isRateLimited = (key: string, now = Date.now()) => {
  const recent = (hits.get(key) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);

  // Nettoyage opportuniste pour borner la mémoire.
  if (hits.size > 5000) {
    for (const [entry, timestamps] of hits) {
      if (timestamps.every((timestamp) => now - timestamp >= WINDOW_MS)) hits.delete(entry);
    }
  }
  return false;
};
