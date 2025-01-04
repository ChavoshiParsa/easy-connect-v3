import { getLocale } from 'next-intl/server';
import { Toaster } from '../ui/sonner';
import { NextIntlProvider } from './NextIntlProvider';
import { StoreProvider } from './StoreProvider';
import { ThemeProvider } from './ThemeProvider';

export default async function GlobalProvider({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const isRtl = locale === 'pr';

  return (
    <NextIntlProvider>
      <StoreProvider>
        <ThemeProvider>
          {children}
          <Toaster position={isRtl ? 'bottom-left' : 'bottom-right'} richColors />
        </ThemeProvider>
      </StoreProvider>
    </NextIntlProvider>
  );
}
