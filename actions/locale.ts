'use server';

import { cookies } from 'next/headers';
import { defaultLocale } from '@/i18n/config';
import { LocaleType } from '@/types/i18n';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: LocaleType) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, locale);
}
