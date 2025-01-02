import { isSidebarOpenAtom } from '@/lib/store';
import { cn } from '@/lib/utils';
import { useAtomValue } from 'jotai';
import { LucideProps } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarMenuItemProps = {
  title: string;
  href: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
};

export default function SidebarMenuItem({ title, href, icon: Icon }: SidebarMenuItemProps) {
  const isSidebarOpen = useAtomValue(isSidebarOpenAtom);

  const t = useTranslations('Sidebar');
  const locale = useLocale();
  const pathname = usePathname();

  const isRtl = locale === 'pr';
  const isActive = pathname.startsWith(href);

  return (
    <>
      {isSidebarOpen ? (
        <Link
          href={href}
          className={cn(
            'flex w-full cursor-pointer items-center justify-start gap-2.5 rounded-lg p-2.5 hover:bg-zinc-200 dark:hover:bg-zinc-900',
            isActive &&
              `${isRtl ? 'border-r-2' : 'border-l-2'} border-sky-400 bg-zinc-200 text-sky-400 dark:border-sky-600 dark:bg-zinc-900 dark:text-sky-600`
          )}
        >
          <Icon size={20} />
          <span className="text-nowrap">{t(title)}</span>
        </Link>
      ) : (
        <Link
          href={href}
          className={cn(
            'flex w-full cursor-pointer items-center justify-center rounded-lg p-2.5 hover:bg-zinc-200 dark:hover:bg-zinc-900',
            isActive && 'bg-zinc-200 text-sky-400 dark:bg-zinc-900 dark:text-sky-600'
          )}
        >
          <Icon size={28} />
        </Link>
      )}
    </>
  );
}
