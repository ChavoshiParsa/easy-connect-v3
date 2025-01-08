'use client';

import MobileDrawer from '@/components/layout/drawer/MobileDrawer';
import { useWindowWidth } from '@/hooks/useWindowSize';

export default function ProfilePage() {
  const { isXs } = useWindowWidth();

  return (
    <div className="flex h-full w-full items-center gap-2 bg-zinc-100 p-2 dark:bg-zinc-950 xs:ms-14 xs:w-[calc(100%-3.5rem)] md:m-0 md:w-full">
      {!isXs && <MobileDrawer />}
      <h1>Profile page</h1>
    </div>
  );
}
