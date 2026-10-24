'use client';

import { CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useActionState, useId, type ReactNode } from 'react';
import { siteConfig } from '@/shared/config';
import { Link } from '@/shared/i18n';
import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { sendContactMessage } from '../api/send-message';
import { contactSubjects, type ContactFieldError, type ContactFormState } from '../model/schema';

const initialState: ContactFormState = { status: 'idle' };

const fieldClass =
  'block w-full rounded-xl border border-border bg-background px-4 py-3 text-[0.95rem] text-foreground placeholder:text-muted/70 transition-colors focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15 aria-[invalid=true]:border-red-500';

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
};

const Field = ({ id, label, error, hint, required, children }: FieldProps) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-sm font-semibold">
      {label}
      {required && (
        <span aria-hidden className="text-brand-600 dark:text-brand-300">
          {' '}
          *
        </span>
      )}
      {hint && <span className="font-normal text-muted"> ({hint})</span>}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="text-sm text-red-600 dark:text-red-400">
        {error}
      </p>
    )}
  </div>
);

export const ContactForm = () => {
  const t = useTranslations('Contact.form');
  const formId = useId();
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-3xl border border-brand-200 bg-brand-50 px-6 py-16 text-center dark:border-brand-800 dark:bg-brand-950"
      >
        <CheckCircle2 aria-hidden className="size-12 text-brand-600 dark:text-brand-300" />
        <p className="max-w-md text-lg font-medium">{t('success')}</p>
      </div>
    );
  }

  const errors = state.status === 'error' ? (state.fieldErrors ?? {}) : {};
  const values = state.status === 'error' ? (state.values ?? {}) : {};
  const errorFor = (field: ContactFieldError) =>
    errors[field] ? t(`errors.${errors[field]}`) : undefined;
  const id = (name: string) => `${formId}-${name}`;
  const a11y = (field: ContactFieldError) => ({
    'aria-invalid': Boolean(errors[field]),
    'aria-describedby': errors[field] ? `${id(field)}-error` : undefined,
  });

  return (
    <form action={formAction} noValidate className="space-y-6">
      {state.status === 'error' && state.formError && (
        <div
          role="alert"
          className="flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300"
        >
          <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0" />
          <p>{t(`errors.${state.formError}`, { email: siteConfig.email })}</p>
        </div>
      )}

      {/* Pot de miel anti-robots : invisible pour les humains */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={id('website')}>Website</label>
        <input id={id('website')} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={id('name')} label={t('name')} error={errorFor('name')} required>
          <input
            id={id('name')}
            name="name"
            type="text"
            autoComplete="name"
            required
            defaultValue={values.name}
            className={fieldClass}
            {...a11y('name')}
          />
        </Field>
        <Field id={id('email')} label={t('email')} error={errorFor('email')} required>
          <input
            id={id('email')}
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={values.email}
            className={fieldClass}
            {...a11y('email')}
          />
        </Field>
        <Field id={id('organization')} label={t('organization')} hint={t('optional')}>
          <input
            id={id('organization')}
            name="organization"
            type="text"
            autoComplete="organization"
            defaultValue={values.organization}
            className={fieldClass}
          />
        </Field>
        <Field id={id('subject')} label={t('subject')} error={errorFor('subject')} required>
          <select
            id={id('subject')}
            name="subject"
            required
            defaultValue={values.subject ?? 'consulting'}
            className={cn(
              fieldClass,
              'appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10',
            )}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2333474e' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
            {...a11y('subject')}
          >
            {contactSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {t(`subjects.${subject}`)}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id={id('message')} label={t('message')} error={errorFor('message')} required>
        <textarea
          id={id('message')}
          name="message"
          rows={6}
          required
          minLength={20}
          placeholder={t('messagePlaceholder')}
          defaultValue={values.message}
          className={cn(fieldClass, 'resize-y')}
          {...a11y('message')}
        />
      </Field>

      <div className="space-y-2">
        <div className="flex gap-3">
          <input
            id={id('consent')}
            name="consent"
            type="checkbox"
            required
            className="mt-1 size-4 shrink-0 rounded border-border accent-brand-700"
            {...a11y('consent')}
          />
          <label htmlFor={id('consent')} className="text-sm leading-relaxed text-muted">
            {t('consent')}{' '}
            <Link href="/privacy" className="font-medium text-accent underline underline-offset-4">
              ({t('privacyLink')})
            </Link>
          </label>
        </div>
        {errorFor('consent') && (
          <p id={`${id('consent')}-error`} className="text-sm text-red-600 dark:text-red-400">
            {errorFor('consent')}
          </p>
        )}
      </div>

      <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          <span aria-hidden>* </span>
          {t('required')}
        </p>
        <Button type="submit" size="lg" disabled={isPending} aria-busy={isPending}>
          <Send aria-hidden />
          {isPending ? t('sending') : t('submit')}
        </Button>
      </div>
    </form>
  );
};
