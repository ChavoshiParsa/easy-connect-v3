import { useWindowWidth } from '@/hooks/useWindowSize';
import { isSidebarOpenAtom } from '@/lib/store';
import { getAppName } from '@/lib/utils';
import { useAtom } from 'jotai';
import { PanelRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

export default function SidebarHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);
  const { isLg } = useWindowWidth();
  const appName = getAppName();

  useEffect(() => {
    if (isLg) setIsSidebarOpen(true);
    else setIsSidebarOpen(false);
  }, [isLg]);

  return (
    <button
      className="flex w-full cursor-pointer items-center justify-start gap-2 rounded-lg p-2 hover:bg-zinc-200 dark:hover:bg-zinc-900"
      onClick={() => setIsSidebarOpen((prev) => !prev)}
    >
      <Image src={'/images/app-logo.png'} alt={'App Logo'} width={24} height={24} priority />
      {isSidebarOpen && (
        <div className="flex w-full items-center justify-between">
          <h1 className="text-nowrap text-lg font-semibold">{appName}</h1>
          <PanelRight />
        </div>
      )}
    </button>
  );
}
