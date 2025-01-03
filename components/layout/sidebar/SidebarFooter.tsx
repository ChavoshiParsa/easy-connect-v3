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

const user = {
  firstName: 'Parsa',
  lastName: 'Chavoshi',
  email: 'parypary82@gmail.com',
  avatarImage: '',
  avatarColor: 'yellow' as AvatarColor,
};

export default function SidebarFooter() {
  const isSidebarOpen = useAtomValue(isSidebarOpenAtom);
  const t = useTranslations('Sidebar');

  const avatarFallback = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={cn(
            'mt-auto flex w-full cursor-pointer items-center justify-start gap-2 rounded-lg',
            isSidebarOpen && 'p-2 hover:bg-zinc-200 dark:hover:bg-zinc-900'
          )}
        >
          <Avatar className="rounded-lg">
            <AvatarImage src={user.avatarImage} alt={`${user.firstName} ${user.lastName}'s avatar`} />
            <AvatarFallback
              className={cn('rounded-lg bg-gradient-to-br text-zinc-100', gradientAvatarClasses[user.avatarColor])}
            >
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          {isSidebarOpen && (
            <>
              <div className="flex w-full flex-col gap-px">
                <span className="text-nowrap text-sm font-medium">{`${user.firstName} ${user.lastName}`}</span>
                <span className="text-nowrap text-xs text-muted-foreground">{user.email}</span>
              </div>
              <ChevronsUpDown size={32} />
            </>
          )}
        </div>
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
