import { useTranslations } from 'next-intl';

export function useApp() {
  const t = useTranslations('App');
  return { appName: t('app_name') };
}
