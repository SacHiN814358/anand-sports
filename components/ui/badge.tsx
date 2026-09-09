import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-muted text-muted-foreground border border-border',
        success: 'bg-success/15 text-success border border-success/20',
        error: 'bg-error/15 text-error border border-error/20',
        accent: 'bg-brand-accent/15 text-brand-accent border border-brand-accent/20',
        info: 'bg-brand-primary/15 text-blue-400 border border-brand-primary/20',
        outline: 'text-foreground border border-border',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

