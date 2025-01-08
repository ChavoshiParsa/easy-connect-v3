import { type ClassValue, clsx } from 'clsx';
import { signOut } from 'next-auth/react';
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

export function formatChatTime(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();

  // Helper function to format time as HH:mm
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  // Check if it's today
  if (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  ) {
    return formatTime(date);
  }

  // Check if it's yesterday
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);

  if (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  ) {
    return 'Yesterday';
  }

  // Check if it's within the last 7 days
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);

  if (date > sevenDaysAgo) {
    return date.toLocaleDateString('en-US', { weekday: 'short' }); // e.g., "Wed"
  }

  // Otherwise, return formatted date as "Jan 5, 2025"
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
