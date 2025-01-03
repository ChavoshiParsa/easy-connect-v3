import IconInput from '@/components/common/IconInput';
import { useWindowWidth } from '@/hooks/useWindowSize';
import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import MobileSideBar from '../../sidebar/MobileSideBar';

export default function ChatList() {
  const { isXs } = useWindowWidth();
  const t = useTranslations('ChatList');

  return (
    <div className="flex h-full w-full flex-col items-center justify-start bg-zinc-900 p-2">
      <div className="flex w-full items-center justify-center gap-2">
        {!isXs && <MobileSideBar />}
        <IconInput className="px-12 py-5" icon={Search} type="search" placeholder={t('search')} />
      </div>
    </div>
  );
}
