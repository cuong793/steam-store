import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const chipVariants = cva(
  'inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap rounded-full text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white shadow hover:bg-primary/90',
        success:
          'bg-green-500/10 text-green-500 shadow-sm hover:bg-green-500/20',
        error: 'bg-red-500/10 text-red-500 shadow-sm hover:bg-red-500/20',
        warning:
          'bg-yellow-500/10 text-yellow-500 shadow-sm hover:bg-yellow-500/20',
        info: 'hover:text-white'
      },
      size: {
        default: 'h-8 p-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  className?: string;
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(chipVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Chip.displayName = 'Chip';

export default Chip;
