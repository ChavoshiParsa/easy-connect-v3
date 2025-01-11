import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useApp } from '@/hooks/useApp';
import { useLocaleUtils } from '@/hooks/useLocaleUtils';
import { cn } from '@/lib/utils';
import { AvatarColor } from '@/types/avatar-colors';
import { user } from '@/types/constants';
import { ChevronLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const gradientAvatarClasses: Record<AvatarColor, string> = {
  blue: 'from-blue-400 to-blue-600',
  green: 'from-green-400 to-green-600',
  orange: 'from-orange-400 to-orange-600',
  purple: 'from-purple-400 to-purple-600',
  red: 'from-red-400 to-red-600',
  yellow: 'from-yellow-400 to-yellow-600',
};

export default function ChatHeader() {
  const { isPersianText, convertToPrDigitsIfPr, formatChatTime } = useLocaleUtils();

  const { isRtl } = useApp();
  const router = useRouter();
  const t = useTranslations('ChatScreen');

  const avatarFallback = `${user.firstName.charAt(0)}‌${user.lastName.charAt(0)}`.toUpperCase(); // there is shift + space at the between.
  const isPrName = isPersianText(avatarFallback);

  return (
    <div className="flex w-full items-center justify-center gap-2 border-b border-zinc-200 bg-zinc-100 p-2 dark:border-zinc-800 dark:bg-zinc-950">
      <Button
        className="min-h-10 min-w-10 border-none bg-zinc-100 hover:bg-zinc-200 dark:border-zinc-950 dark:bg-zinc-950 dark:hover:bg-zinc-900"
        variant="ghost"
        size="icon"
        onClick={() => router.push('/home')}
      >
        <ChevronLeft className={cn(isRtl ? 'rotate-180' : 'rotate-0')} />
      </Button>
      <div className="flex h-full w-full items-center justify-center gap-3 rounded-lg">
        <Avatar className="relative size-11 overflow-visible rounded-lg">
          <AvatarImage
            className="rounded-lg"
            src={user.avatarImage}
            alt={`${user.firstName} ${user.lastName}'s avatar`}
          />
          <AvatarFallback
            className={cn(
              'rounded-lg bg-gradient-to-br text-zinc-50',
              gradientAvatarClasses[user.avatarColor],
              isPrName ? 'font-iran' : 'font-sans'
            )}
          >
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
        <div className="flex h-full w-full flex-col justify-between">
          <span className={(cn('font-medium'), isPrName ? 'font-iran' : 'font-sans')}>
            {user.firstName} {user.lastName}
          </span>
          <span
            className={cn(
              'text-sm font-light',
              user.isOnline ? 'text-sky-500 dark:text-sky-400' : 'text-zinc-500 dark:text-zinc-400'
            )}
          >
            {user.isOnline ? t('online') : `${t('last_seen')} ${convertToPrDigitsIfPr(formatChatTime(user.lastSeen))}`}
          </span>
        </div>
      </div>
      {/* search button */}
    </div>
  );
}
