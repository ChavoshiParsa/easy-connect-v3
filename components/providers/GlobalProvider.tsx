import { getUserLocale } from '@/actions/locale';
import { Toaster } from '../ui/sonner';
import { NextIntlProvider } from './NextIntlProvider';
import { StoreProvider } from './StoreProvider';
import { ThemeProvider } from './ThemeProvider';

export default async function GlobalProvider({ children }: { children: React.ReactNode }) {
  const locale = await getUserLocale();

  return (
    <NextIntlProvider>
      <StoreProvider>
        <ThemeProvider>
          {children}
          <Toaster position={locale === 'pr' ? 'bottom-left' : 'bottom-right'} richColors />
        </ThemeProvider>
      </StoreProvider>
    </NextIntlProvider>
  );
}
