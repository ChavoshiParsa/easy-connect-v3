'use client';

import { Globe } from 'lucide-react';
import { setUserLocale } from '@/actions/locale';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LocaleType } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

const locales: { label: string; value: LocaleType; dir: 'rtl' | 'ltr' }[] = [
  { label: 'فارسی', value: 'pr', dir: 'rtl' },
  { label: 'English', value: 'en', dir: 'ltr' },
  { label: 'Deutsch', value: 'de', dir: 'ltr' },
  { label: 'Français', value: 'fr', dir: 'ltr' },
];

export default function LocaleSelector() {
  const locale = useLocale();

  async function handleValueChange(newValue: LocaleType) {
    await setUserLocale(newValue);
  }

  return (
    <Select value={locale} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[140px]">
        <Globe className="mr-2 h-4 w-4" />
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {locales.map((locale) => (
          <SelectItem
            className={cn(locale.dir === 'rtl' ? 'font-iran' : 'font-sans')}
            key={locale.value}
            value={locale.value}
          >
            {locale.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
