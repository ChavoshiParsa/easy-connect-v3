import { AvatarColor } from './avatar-colors';

export const gradientAvatarClasses: Record<AvatarColor, string> = {
  blue: 'from-blue-400 to-blue-600',
  green: 'from-green-400 to-green-600',
  orange: 'from-orange-400 to-orange-600',
  purple: 'from-purple-400 to-purple-600',
  red: 'from-red-400 to-red-600',
  yellow: 'from-yellow-400 to-yellow-600',
};

export const dummyUser = {
  firstName: 'Parsa',
  lastName: 'Chavoshi',
  email: 'parypary82@gmail.com',
  avatarImage: '',
  avatarColor: 'purple' as AvatarColor,
};
