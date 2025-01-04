import IconInput from '@/components/common/IconInput';
import MobileDrawer from '@/components/layout/drawer/MobileDrawer';
import { useWindowWidth } from '@/hooks/useWindowSize';
import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ChatList() {
  const t = useTranslations('ChatList');
  const { isXs } = useWindowWidth();

  return (
    <div className="flex h-full w-full flex-col items-center justify-start bg-zinc-100 p-2 dark:bg-zinc-950">
      <div className="flex w-full items-center justify-center gap-2">
        {!isXs && <MobileDrawer />}
        <IconInput icon={Search} type="search" placeholder={t('search')} /> {/* icon input need to refactor */}
      </div>
    </div>
  );
}
