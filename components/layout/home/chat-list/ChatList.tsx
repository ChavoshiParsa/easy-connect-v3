import IconInput from '@/components/common/IconInput';
import MobileDrawer from '@/components/layout/drawer/MobileDrawer';
import { useWindowWidth } from '@/hooks/useWindowSize';
import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ChatItem from './ChatItem';
import { chatItems } from '@/types/constants';

export default function ChatList() {
  const t = useTranslations('ChatList');
  const { isXs } = useWindowWidth();

  return (
    <div className="flex h-full w-full flex-col items-center justify-start gap-2 bg-zinc-100 p-3 dark:bg-zinc-950">
      <div className="flex w-full items-center justify-center gap-2">
        {!isXs && <MobileDrawer />}
        <IconInput icon={Search} type="search" placeholder={t('search')} /> {/* icon input need to refactor */}
      </div>
      <div className="no-scrollbar flex h-full w-full flex-col divide-y overflow-y-auto">
        {chatItems
          .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
          .map((item) => (
            <ChatItem key={item.connectId} {...item} />
          ))}
      </div>
    </div>
  );
}
