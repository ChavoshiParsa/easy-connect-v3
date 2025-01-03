import { type ClassValue, clsx } from 'clsx';
import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleLogout = async () => {
  try {
    await signOut({ callbackUrl: '/' });
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

export const getAppName = () => {
  const t = useTranslations('App');
  return t('app_name');
};
