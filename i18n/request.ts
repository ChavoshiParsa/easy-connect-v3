import { getUserLocale } from '@/actions/locale';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`@/public/locales/${locale}.json`)).default,
  };
});
