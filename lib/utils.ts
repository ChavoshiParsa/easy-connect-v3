import { type ClassValue, clsx } from 'clsx';
import { signOut } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function handleLogout() {
  try {
    await signOut({ callbackUrl: '/' });
  } catch (error) {
    console.error('Logout failed:', error);
  }
}

export function formatChatTime(timestamp: string): string {
  const t = useTranslations('Date');
  const locale = useLocale();

  const date = new Date(timestamp);
  const now = new Date();

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  if (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  ) {
    return formatTime(date);
  }

  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);

  if (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  ) {
    return t('Yesterday');
  }

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);

  if (date > sevenDaysAgo) {
    return t(date.toLocaleDateString('en-US', { weekday: 'long' }));
  }

  if (locale !== 'pr') return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  else return new Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
}

export function formatTime(timestamp: string): string {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}

export function isPersianText(text: string): boolean {
  const persianRegex = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return persianRegex.test(text.charAt(0));
}

export function convertToPrDigitsIfPr(text: string): string {
  const locale = useLocale();
  if (locale !== 'pr') return String(text);

  const englishNumbers = '0123456789';
  const persianNumbers = '۰۱۲۳۴۵۶۷۸۹';

  return text.replace(/\d/g, (digit) => persianNumbers[englishNumbers.indexOf(digit)]);
}
