'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Lock, Mail } from 'lucide-react';
import { useLocale } from 'next-intl';
import { InputHTMLAttributes } from 'react';

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'email' | 'password';
  placeholder: string;
}

export default function IconInput({ type, placeholder, ...props }: EmailInputProps) {
  const Icon = type === 'email' ? Mail : Lock;
  const locale = useLocale();

  return (
    <div className="relative">
      <Input className="w-full px-12 py-6" type={type} placeholder={placeholder} {...props} />
      <Icon
        className={cn(
          'absolute top-1/2 size-5 -translate-y-1/2 transform text-gray-400',
          locale === 'pr' ? 'right-4' : 'left-4'
        )}
      />
    </div>
  );
}
