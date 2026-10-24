'use server';

import { headers } from 'next/headers';
import nodemailer from 'nodemailer';
import { siteConfig } from '@/shared/config';
import { isRateLimited } from '../lib/rate-limit';
import { parseContactForm, type ContactFormState, type ContactInput } from '../model/schema';

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

const deliver = async (data: ContactInput) => {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASSWORD } = process.env;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? `ÉconXStat <${siteConfig.email}>`;

  if (!SMTP_HOST) {
    if (process.env.NODE_ENV !== 'production') {
      console.info('[contact] SMTP non configuré — message simulé :', data);
      return;
    }
    throw new Error(
      'SMTP_HOST manquant : le formulaire de contact ne peut pas envoyer de courriel.',
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: SMTP_SECURE === 'true',
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASSWORD } : undefined,
  });

  const lines = [
    ['Nom', data.name],
    ['Courriel', data.email],
    ['Organisation', data.organization || '—'],
    ['Objet', data.subject],
  ] as const;

  await transporter.sendMail({
    from,
    to,
    replyTo: `${data.name} <${data.email}>`,
    subject: `[Site web] ${data.subject} — ${data.name}`,
    text: `${lines.map(([label, value]) => `${label} : ${value}`).join('\n')}\n\n${data.message}`,
    html: `<table>${lines
      .map(
        ([label, value]) => `<tr><th align="left">${label}</th><td>${escapeHtml(value)}</td></tr>`,
      )
      .join('')}</table><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
  });
};

export async function sendContactMessage(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Pot de miel : un champ invisible que seuls les robots remplissent.
  if (formData.get('website')) return { status: 'success' };

  const parsed = parseContactForm(formData);
  if (!parsed.success) {
    return { status: 'error', fieldErrors: parsed.fieldErrors, values: parsed.values };
  }

  const requestHeaders = await headers();
  const ip =
    requestHeaders.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    requestHeaders.get('x-real-ip') ??
    'unknown';
  if (isRateLimited(ip)) return { status: 'error', formError: 'rateLimited' };

  try {
    await deliver(parsed.data);
    return { status: 'success' };
  } catch (error) {
    console.error('[contact] Échec de l’envoi :', error);
    const { name, email, organization, subject, message } = parsed.data;
    return {
      status: 'error',
      formError: 'server',
      values: { name, email, organization, subject, message },
    };
  }
}
