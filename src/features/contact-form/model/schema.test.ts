import { describe, expect, it } from 'vitest';
import { parseContactForm } from './schema';

const buildForm = (overrides: Record<string, string | undefined> = {}) => {
  const values: Record<string, string | undefined> = {
    name: 'Awa Diallo',
    email: 'awa@example.org',
    organization: 'Ministère du Plan',
    subject: 'consulting',
    message: "Nous souhaitons évaluer l'impact d'un programme de transferts monétaires.",
    consent: 'on',
    ...overrides,
  };
  const form = new FormData();
  for (const [key, value] of Object.entries(values)) {
    if (value !== undefined) form.set(key, value);
  }
  return form;
};

describe('parseContactForm', () => {
  it('accepte un formulaire complet et valide', () => {
    const result = parseContactForm(buildForm());
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.subject).toBe('consulting');
  });

  it("rend l'organisation facultative", () => {
    const result = parseContactForm(buildForm({ organization: undefined }));
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.organization).toBe('');
  });

  it('signale chaque champ invalide avec son code', () => {
    const result = parseContactForm(
      buildForm({
        name: 'A',
        email: 'pas-un-courriel',
        subject: 'spam',
        message: 'trop court',
        consent: undefined,
      }),
    );
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.fieldErrors).toEqual({
        name: 'name',
        email: 'email',
        subject: 'subject',
        message: 'message',
        consent: 'consent',
      });
      // Les valeurs saisies sont renvoyées pour ne pas vider le formulaire.
      expect(result.values.name).toBe('A');
    }
  });
});
