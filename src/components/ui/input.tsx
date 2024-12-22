/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex items-center h-9 bg-primaryCustoms rounded-md w-full p-2 ',
          className
        )}
      >
        <input
          type={type}
          ref={ref}
          {...props}
          className='w-full bg-transparent outline-none'
        />
        <span>{(props as any)?.icon}</span>
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
