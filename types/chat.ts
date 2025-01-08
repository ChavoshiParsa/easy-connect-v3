import { AvatarColor } from './avatar-colors';

export type ChatItemType = {
  connectId: string;
  avatarColor: AvatarColor;
  avatarImageSrc: string;
  firstName: string;
  lastName: string;
  lastMessage: string;
  newMessageCount: number;
  isOnline: boolean;
  time: string;
  status: 'sending' | 'sent' | 'seen' | 'error' | 'none';
};
