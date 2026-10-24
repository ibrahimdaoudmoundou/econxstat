import type { ComponentProps } from 'react';
import { cn } from '../../lib';

export const Badge = ({ className, ...props }: ComponentProps<'span'>) => (
  <span
    className={cn(
      'inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted',
      className,
    )}
    {...props}
  />
);
