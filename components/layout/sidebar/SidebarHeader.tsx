import { useApp } from '@/hooks/useApp';
import { isSidebarOpenAtom } from '@/lib/store';
import { useAtom } from 'jotai';
import { PanelRight } from 'lucide-react';
import Image from 'next/image';

export default function SidebarHeader() {
  const { appName } = useApp();
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);

  return (
    <button
      className="flex w-full cursor-pointer items-center justify-start gap-2 rounded-lg p-2 transition hover:bg-zinc-300 dark:hover:bg-zinc-800"
      onClick={() => setIsSidebarOpen((prev) => !prev)}
    >
      {isSidebarOpen && (
        <>
          <Image className="" src={'/images/app-logo.png'} alt={'App Logo'} width={24} height={24} priority />
          <div className="flex w-full items-center justify-between">
            <h1 className="text-nowrap font-bold">{appName}</h1>
          </div>
        </>
      )}
      <PanelRight className="max-h-6 min-h-6 min-w-6 max-w-6 text-zinc-800 dark:text-zinc-200" />
    </button>
  );
}
