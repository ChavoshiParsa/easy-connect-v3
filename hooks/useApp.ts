import { useLocale, useTranslations } from 'next-intl';

export function useApp() {
  const t = useTranslations('App');
  const locale = useLocale();
  const isRtl = locale === 'pr';

  return { appName: t('app_name'), isRtl };
}
