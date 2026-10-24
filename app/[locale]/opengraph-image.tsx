import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/shared/i18n';

export const alt = 'ÉconXStat';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const bars = [38, 56, 44, 72, 60, 88, 100];

/** Image de partage (réseaux sociaux) générée à la volée, aux couleurs du cabinet. */
export default async function OpengraphImage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home.hero' });

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        background: 'linear-gradient(135deg, #1d1e1e 0%, #1f2527 55%, #054e68 100%)',
        color: 'white',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 56 }}>
          {[50, 80, 100].map((h) => (
            <div
              key={h}
              style={{ width: 16, height: `${h}%`, background: '#1f9fcf', borderRadius: 3 }}
            />
          ))}
        </div>
        <div style={{ fontSize: 44, fontWeight: 700, display: 'flex' }}>
          Écon<span style={{ color: '#38acdb' }}>X</span>Stat
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 48,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 720 }}>
          <div
            style={{ fontSize: 22, color: '#6fc5e7', letterSpacing: 3, textTransform: 'uppercase' }}
          >
            {t('eyebrow')}
          </div>
          <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1, marginTop: 20 }}>
            {(t.raw('title') as string).replace(/<\/?hl>/g, '')}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 220 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                width: 30,
                height: `${h}%`,
                borderRadius: 4,
                background: 'linear-gradient(to top, #006080, #38acdb)',
              }}
            />
          ))}
        </div>
      </div>
    </div>,
    size,
  );
}
