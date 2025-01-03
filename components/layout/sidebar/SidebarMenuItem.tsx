import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { isSidebarOpenAtom } from '@/lib/store';
import { cn } from '@/lib/utils';
import { useAtomValue } from 'jotai';
import { LucideProps } from 'lucide-react';
import { useTranslations } from 'next-intl';
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
  const pathname = usePathname();

  const isActive = pathname.startsWith(href);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={cn(
            'flex w-full cursor-pointer items-center justify-start gap-2 rounded-lg p-2 ring-sky-400 hover:bg-zinc-200 dark:ring-sky-600 dark:hover:bg-zinc-900',
            isActive && 'bg-zinc-200 text-sky-400 ring-2 dark:bg-zinc-900 dark:text-sky-600'
          )}
        >
          <div className="size-6">
            <Icon size={24} />
          </div>
          {isSidebarOpen && <span className="text-nowrap">{t(title)}</span>}
        </Link>
      </TooltipTrigger>
      {!isSidebarOpen && (
        <TooltipContent side="right">
          <p>{t(title)}</p>
        </TooltipContent>
      )}
    </Tooltip>
  );
}
