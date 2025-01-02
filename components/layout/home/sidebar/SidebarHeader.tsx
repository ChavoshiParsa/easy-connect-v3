import ModeToggle from '@/components/common/action-buttons/ModeToggle';
import { Button } from '@/components/ui/button';
import { PanelRight } from 'lucide-react';
import Image from 'next/image';

export default function SidebarHeader() {
  return (
    <div className="flex w-full items-center justify-between p-1">
      <div className="flex items-center gap-2">
        <Image src={'/images/app-logo.png'} alt={'App Logo'} width={26} height={26} />
        <h1 className="font-semibold">Easy Connect</h1>
      </div>
      <div className="flex items-center justify-center gap-2">
        <ModeToggle />
        <Button variant="outline" size="icon" onClick={() => {}}>
          <PanelRight />
        </Button>
      </div>
    </div>
  );
}
