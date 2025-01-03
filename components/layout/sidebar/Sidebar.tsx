'use client';

import { isSidebarOpenAtom } from '@/lib/store';
import { motion } from 'framer-motion';
import { useAtomValue } from 'jotai';
import SidebarFooter from './SidebarFooter';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';

const variants = {
  open: {
    width: '16rem',
    transition: { type: 'spring', stiffness: 500, damping: 50 },
  },
  closed: {
    width: '3.5rem',
    transition: { type: 'spring', stiffness: 500, damping: 50 },
  },
};

export default function Sidebar() {
  const isSidebarOpen = useAtomValue(isSidebarOpenAtom);

  return (
    <motion.div
      className="xs:flex absolute hidden h-full flex-col items-center justify-start gap-2 bg-zinc-50 p-2 dark:bg-zinc-950 md:relative"
      initial={false}
      variants={variants}
      animate={isSidebarOpen ? 'open' : 'closed'}
      layout
    >
      <SidebarHeader />
      <SidebarMenu />
      <SidebarFooter />
    </motion.div>
  );
}
