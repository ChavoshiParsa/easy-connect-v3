'use client';

import SidebarFooter from './SidebarFooter';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';

export default function Sidebar() {
  return (
    <div className="flex h-full min-w-80 flex-col items-center justify-start gap-4 bg-zinc-50 p-2.5 dark:bg-zinc-950">
      <SidebarHeader />
      <SidebarMenu />
      <SidebarFooter />
    </div>
  );
}
