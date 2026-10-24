import Image from 'next/image';
import type { ReactNode } from 'react';
import { getImage, type ImageKey } from '../../config';

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  image: ImageKey;
  children?: ReactNode;
};

/** Bandeau d'en-tête des pages intérieures : photo du site d'origine + voile charbon. */
export const PageHero = ({ eyebrow, title, description, image, children }: PageHeroProps) => {
  const { src } = getImage(image);

  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src={src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-45"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid text-white/60 opacity-40" />
      <div className="container-page pt-36 pb-20 sm:pt-44 sm:pb-24">
        <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-brand-300 uppercase">
          <span aria-hidden className="h-px w-8 bg-brand-400" />
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl leading-[1.1] font-bold sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
};
