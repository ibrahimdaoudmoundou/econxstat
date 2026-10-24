import { z } from 'zod';

export const contactSubjects = ['consulting', 'training', 'partnership', 'other'] as const;
export type ContactSubject = (typeof contactSubjects)[number];

/** Codes d'erreur traduits côté interface (messages Contact.form.errors.*). */
export type ContactFieldError = 'name' | 'email' | 'subject' | 'message' | 'consent';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'name').max(120, 'name'),
  email: z.email('email').trim().max(200, 'email'),
  organization: z.string().trim().max(160).optional().default(''),
  subject: z.enum(contactSubjects, { error: 'subject' }),
  message: z.string().trim().min(20, 'message').max(5000, 'message'),
  consent: z.literal('on', { error: 'consent' }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactFormState =
  | { status: 'idle' }
  | { status: 'success' }
  | {
      status: 'error';
      fieldErrors?: Partial<Record<ContactFieldError, ContactFieldError>>;
      formError?: 'rateLimited' | 'server';
      values?: Partial<Record<keyof ContactInput, string>>;
    };

/** Valide les données brutes d'un FormData. */
export const parseContactForm = (formData: FormData) => {
  const raw = Object.fromEntries(
    ['name', 'email', 'organization', 'subject', 'message', 'consent'].map((key) => [
      key,
      formData.get(key) ?? undefined,
    ]),
  );
  const result = contactSchema.safeParse(raw);

  if (result.success) return { success: true as const, data: result.data };

  const fieldErrors: Partial<Record<ContactFieldError, ContactFieldError>> = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as ContactFieldError | undefined;
    if (field && !fieldErrors[field]) fieldErrors[field] = field;
  }

  const values = Object.fromEntries(
    Object.entries(raw).filter(([key, value]) => key !== 'consent' && typeof value === 'string'),
  ) as Partial<Record<keyof ContactInput, string>>;

  return { success: false as const, fieldErrors, values };
};
