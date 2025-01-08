import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn, formatChatTime } from '@/lib/utils';
import { AvatarColor } from '@/types/avatar-colors';
import { ChatItemType } from '@/types/chat';
import { Check, CheckCheck, Clock } from 'lucide-react';

const gradientAvatarClasses: Record<AvatarColor, string> = {
  blue: 'from-blue-400 to-blue-600',
  green: 'from-green-400 to-green-600',
  orange: 'from-orange-400 to-orange-600',
  purple: 'from-purple-400 to-purple-600',
  red: 'from-red-400 to-red-600',
  yellow: 'from-yellow-400 to-yellow-600',
};

export default function ChatItem({
  connectId,
  avatarColor,
  avatarImageSrc,
  firstName,
  lastName,
  lastMessage,
  newMessageCount,
  isOnline,
  time,
  status,
}: ChatItemType) {
  const avatarFallback = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

  let icon;
  if (status === 'sent') icon = <Check className="text-sky-500" size={12} />;
  else if (status === 'seen') icon = <CheckCheck className="text-sky-500" size={12} />;
  else if (status === 'sending') icon = <Clock size={12} />;
  else if (status === 'error') icon = <CheckCheck className="text-destructive" size={12} />;
  return (
    <div className="flex w-full cursor-pointer flex-row gap-2 p-2 hover:bg-zinc-300 dark:hover:bg-zinc-800">
      <Avatar className="rounded-lg">
        <AvatarImage className="rounded-lg" src={avatarImageSrc} alt={`${firstName} $lastName}'s avatar`} />
        <AvatarFallback className={cn('rounded-lg bg-gradient-to-br text-zinc-50', gradientAvatarClasses[avatarColor])}>
          {avatarFallback}
        </AvatarFallback>
      </Avatar>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full items-center justify-between">
          <span className="text-sm font-semibold">
            {firstName} {lastName}
          </span>
          <div className="flex items-center justify-center gap-1">
            {icon}
            <span className="text-xs">{formatChatTime(time)}</span>
          </div>
        </div>
        <p className="w-full text-start text-xs text-zinc-500">{lastMessage}</p>
      </div>
    </div>
  );
}
