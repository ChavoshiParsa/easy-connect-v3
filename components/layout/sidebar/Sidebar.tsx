'use client';

import { useClickOutside } from '@/hooks/useClickOutside';
import { useWindowWidth } from '@/hooks/useWindowSize';
import { isSidebarOpenAtom } from '@/lib/store';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';
import SidebarFooter from './SidebarFooter';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';

const variants = {
  open: {
    minWidth: '16rem',
    maxWidth: '16rem',
    transition: { type: 'spring', stiffness: 500, damping: 50 },
  },
  closed: {
    minWidth: '3.5rem',
    maxWidth: '3.5rem',
    transition: { type: 'spring', stiffness: 500, damping: 50 },
  },
};

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);
  const { isLg, isMd } = useWindowWidth();

  const sidebarRef = useRef<HTMLDivElement>(null);
  useClickOutside(sidebarRef, () => !isMd && setIsSidebarOpen(false));

  useEffect(() => {
    setIsSidebarOpen(isLg);
  }, [isLg, setIsSidebarOpen]);

  return (
    <motion.div
      className="absolute z-10 hidden h-full flex-col items-center justify-center gap-2 bg-zinc-200 p-2 dark:bg-zinc-900 xs:flex md:relative"
      initial={false}
      variants={variants}
      animate={isSidebarOpen ? 'open' : 'closed'}
      layout
      ref={sidebarRef}
    >
      <SidebarHeader />
      <SidebarMenu />
      <SidebarFooter />
    </motion.div>
  );
}
