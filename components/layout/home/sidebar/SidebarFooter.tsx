import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AvatarColor } from '@/types/avatar-colors';
import clsx from 'clsx';
import { ChevronsUpDown, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';

const gradientClasses: Record<AvatarColor, string> = {
  blue: 'from-blue-400 to-blue-600',
  green: 'from-green-400 to-green-600',
  orange: 'from-orange-400 to-orange-600',
  purple: 'from-purple-400 to-purple-600',
  red: 'from-red-400 to-red-600',
  yellow: 'from-yellow-400 to-yellow-600',
};

export default function SidebarFooter() {
  const t = useTranslations('Sidebar');

  const user = {
    firstName: 'Parsa',
    lastName: 'Chavoshi',
    email: 'parypary82@gmail.com',
    avatarImage: '#',
    avatarColor: 'purple' as AvatarColor,
  };

  const avatarFallback = `${user.firstName.charAt(0).toUpperCase()}${user.lastName.charAt(0).toUpperCase()}`;

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="mt-auto flex w-full cursor-pointer items-center gap-2.5 rounded-lg p-2.5 hover:bg-zinc-200 dark:hover:bg-zinc-900">
          <Avatar className="size-12 rounded-lg">
            <AvatarImage src={user.avatarImage} alt={`${user.firstName} ${user.lastName}'s avatar`} />
            <AvatarFallback
              className={clsx('rounded-lg bg-gradient-to-br text-zinc-100', gradientClasses[user.avatarColor])}
            >
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className="flex w-full flex-col gap-0.5">
            <span className="font-medium">{`${user.firstName} ${user.lastName}`}</span>
            <span className="text-sm text-muted-foreground">{user.email}</span>
          </div>
          <ChevronsUpDown size={32} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" align="start">
        <DropdownMenuItem className="cursor-pointer text-red-500" onSelect={handleLogout}>
          <LogOut />
          <span>{t('logout')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
