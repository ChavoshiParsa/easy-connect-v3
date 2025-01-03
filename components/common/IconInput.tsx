'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';
import { useLocale } from 'next-intl';
import { InputHTMLAttributes } from 'react';

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export default function IconInput({ icon: Icon, type, placeholder, ...props }: EmailInputProps) {
  const locale = useLocale();
  const isRtl = locale === 'pr';

  return (
    <div className="relative w-full">
      <Input className="w-full px-12 py-6" type={type} placeholder={placeholder} {...props} />
      <Icon
        className={cn('absolute top-1/2 size-5 -translate-y-1/2 transform text-gray-400', isRtl ? 'right-4' : 'left-4')}
      />
    </div>
  );
}
