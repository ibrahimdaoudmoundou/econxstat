import type { ComponentProps, ReactNode } from 'react';
import { cn } from '../../lib';

type SectionProps = ComponentProps<'section'> & {
  tone?: 'default' | 'muted' | 'dark';
};

const tones = {
  default: 'bg-background',
  muted: 'bg-surface',
  dark: 'dark bg-ink text-foreground',
} as const;

export const Section = ({ tone = 'default', className, children, ...props }: SectionProps) => (
  <section className={cn('py-20 sm:py-24 lg:py-28', tones[tone], className)} {...props}>
    <div className="container-page">{children}</div>
  </section>
);

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
  className?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Heading = 'h2',
  className,
}: SectionHeadingProps) => (
  <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
    {eyebrow && (
      <p
        className={cn(
          'mb-4 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-accent uppercase',
          align === 'center' && 'justify-center',
        )}
      >
        <span aria-hidden className="h-px w-8 bg-brand-500" />
        {eyebrow}
      </p>
    )}
    <Heading className="text-3xl leading-tight font-bold sm:text-4xl lg:text-[2.75rem]">
      {title}
    </Heading>
    {description && <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>}
  </div>
);
