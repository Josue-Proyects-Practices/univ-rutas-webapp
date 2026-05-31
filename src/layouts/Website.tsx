import type { ReactNode } from 'react';
import { cn } from '../libs/utils';

interface WebsiteProps {
  children: ReactNode;
  className?: string;
}

export default function Website({ children, className }: WebsiteProps) {
  return (
    <div className={cn('min-h-screen bg-background flex flex-col', className)}>
      {children}
    </div>
  );
}