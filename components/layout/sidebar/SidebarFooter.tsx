import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { isSidebarOpenAtom } from '@/lib/store';
import { cn, handleLogout } from '@/lib/utils';
import { AvatarColor } from '@/types/avatar-colors';
import { user } from '@/types/constants';
import { useAtomValue } from 'jotai';
import { ChevronsUpDown, LogOut } from 'lucide-react';
import { useTranslations } from 'next-intl';

const gradientAvatarClasses: Record<AvatarColor, string> = {
  blue: 'from-blue-400 to-blue-600',
  green: 'from-green-400 to-green-600',
  orange: 'from-orange-400 to-orange-600',
  purple: 'from-purple-400 to-purple-600',
  red: 'from-red-400 to-red-600',
  yellow: 'from-yellow-400 to-yellow-600',
};

export default function SidebarFooter() {
  const isSidebarOpen = useAtomValue(isSidebarOpenAtom);
  const t = useTranslations('Sidebar');

  const avatarFallback = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            'mt-auto flex w-full cursor-pointer items-center gap-2 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-800',
            isSidebarOpen && 'p-2'
          )}
        >
          <Avatar className="flex max-h-10 min-h-10 min-w-10 max-w-10 items-center justify-center rounded-lg">
            <AvatarImage
              className="max-h-10 min-h-10 min-w-10 max-w-10 rounded-lg"
              src={user.avatarImage}
              alt={`${user.firstName} ${user.lastName}'s avatar`}
            />
            <AvatarFallback
              className={cn(
                'max-h-9 min-h-9 min-w-9 max-w-9 rounded-lg bg-gradient-to-br text-zinc-50',
                gradientAvatarClasses[user.avatarColor]
              )}
            >
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          {isSidebarOpen && (
            <>
              <div className="flex w-full flex-col items-start">
                <span className="text-nowrap text-sm font-semibold leading-4">{`${user.firstName} ${user.lastName}`}</span>
                <span className="text-nowrap text-xs font-light text-muted-foreground">{user.email}</span>
              </div>
              <ChevronsUpDown className="max-h-6 min-h-6 min-w-6 max-w-6 text-zinc-800 dark:text-zinc-200" />
            </>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top" align="end">
        <DropdownMenuItem className="cursor-pointer text-red-500" onSelect={handleLogout}>
          <LogOut className="max-h-6 min-h-6 min-w-6 max-w-6" />
          <span>{t('logout')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
