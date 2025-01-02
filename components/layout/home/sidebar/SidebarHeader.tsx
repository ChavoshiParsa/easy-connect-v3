import { Button } from '@/components/ui/button';
import { isSidebarOpenAtom } from '@/lib/store';
import { useAtom } from 'jotai';
import { PanelRight } from 'lucide-react';
import Image from 'next/image';

export default function SidebarHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      {isSidebarOpen ? (
        <div className="flex w-full items-center justify-between p-2">
          <div className="flex items-center gap-2.5">
            <Image src={'/images/app-logo.png'} alt={'App Logo'} width={24} height={24} />
            <h1 className="text-nowrap text-lg font-semibold">Easy Connect</h1>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <PanelRight />
          </Button>
        </div>
      ) : (
        <button
          className="cursor-pointer gap-2.5 rounded-lg p-2.5 hover:bg-zinc-200 dark:hover:bg-zinc-900"
          onClick={toggleSidebar}
        >
          <Image src={'/images/app-logo.png'} alt={'App Logo'} width={30} height={30} />
        </button>
      )}
    </>
  );
}
