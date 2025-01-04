'use client';

import MobileDrawer from '@/components/layout/drawer/MobileDrawer';
import { useApp } from '@/hooks/useApp';
import { useWindowWidth } from '@/hooks/useWindowSize';
import { cn } from '@/lib/utils';

export default function ContactsPage() {
  const { isRtl } = useApp();
  const { isXs } = useWindowWidth();

  return (
    <div
      className={cn(
        'flex h-full w-full items-center gap-2 bg-zinc-100 p-2 dark:bg-zinc-950 xs:w-[calc(100%-3.5rem)] md:m-0 md:w-full',
        isRtl ? 'xs:mr-14' : 'xs:ml-14'
      )}
    >
      {!isXs && <MobileDrawer />}
      <h1>Contacts page</h1>
    </div>
  );
}
