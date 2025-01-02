import { cn } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';
import SettingActionButtons from '../layout/navbar-action/SettingActionButtons';

type Props = {
  page: 'sign_in' | 'sign_up';
};

export default function LoginNavbar({ page }: Props) {
  const t = useTranslations('LoginPage');
  const locale = useLocale();

  return (
    <header className="flex w-full flex-col items-center justify-center space-y-14">
      <nav className="flex w-full items-center justify-between">
        <h1 className="animate-pulse text-2xl text-sky-400 dark:text-sky-600 md:text-3xl">{t('app_name')}</h1>
        <SettingActionButtons />
      </nav>
      <div className="flex w-full flex-col items-center justify-center space-y-3 md:items-start">
        <h2 className="text-3xl font-medium md:text-4xl">
          {t(page === 'sign_in' ? 'welcome_back' : 'create_account')}
        </h2>
        <p
          className={cn(
            `text-center text-base text-zinc-500 md:text-lg`,
            locale === 'pr' ? 'md:text-right' : 'md:text-left'
          )}
        >
          {t(page === 'sign_in' ? 'welcome_back_text' : 'create_account_text')}
        </p>
      </div>
    </header>
  );
}
