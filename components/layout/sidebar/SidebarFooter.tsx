import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { isSidebarOpenAtom } from '@/lib/store';
import { cn, handleLogout } from '@/lib/utils';
import { gradientAvatarClasses, dummyUser as user } from '@/types/constants';
import { useAtomValue } from 'jotai';
import { ChevronsUpDown, LogOut } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function SidebarFooter() {
  const isSidebarOpen = useAtomValue(isSidebarOpenAtom);
  const t = useTranslations('Sidebar');

  const avatarFallback = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {isSidebarOpen ? (
          <div className="mt-auto flex w-full cursor-pointer items-center gap-2 rounded-lg p-2 hover:bg-zinc-200 dark:hover:bg-zinc-900">
            <Avatar className="rounded-lg">
              <AvatarImage src={user.avatarImage} alt={`${user.firstName} ${user.lastName}'s avatar`} />
              <AvatarFallback
                className={cn('rounded-lg bg-gradient-to-br text-zinc-100', gradientAvatarClasses[user.avatarColor])}
              >
                {avatarFallback}
              </AvatarFallback>
            </Avatar>
            <div className="flex w-full flex-col gap-px">
              <span className="text-nowrap text-sm font-medium">{`${user.firstName} ${user.lastName}`}</span>
              <span className="text-nowrap text-xs text-muted-foreground">{user.email}</span>
            </div>
            <ChevronsUpDown size={32} />
          </div>
        ) : (
          <Avatar className="mt-auto size-12 cursor-pointer rounded-lg">
            <AvatarImage src={user.avatarImage} alt={`${user.firstName} ${user.lastName}'s avatar`} />
            <AvatarFallback
              className={cn('rounded-lg bg-gradient-to-br text-zinc-100', gradientAvatarClasses[user.avatarColor])}
            >
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top" align="end">
        <DropdownMenuItem className="cursor-pointer text-red-500" onSelect={handleLogout}>
          <LogOut />
          <span>{t('logout')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
